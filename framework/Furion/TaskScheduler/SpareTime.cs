﻿using Furion.DependencyInjection;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace Furion.TaskScheduler
{
    /// <summary>
    /// 后台任务静态类
    /// </summary>
    [SkipScan]
    public static class SpareTime
    {
        /// <summary>
        /// 开始执行简单任务（持续的）
        /// </summary>
        /// <param name="interval">时间间隔（毫秒）</param>
        /// <param name="doWhat"></param>
        /// <param name="workerName"></param>
        /// <param name="description"></param>
        public static void Do(double interval, Action<SpareTimer, long> doWhat = default, string workerName = default, string description = default)
        {
            Do(interval, true, doWhat, workerName, description);
        }

        /// <summary>
        /// 开始执行简单任务（只执行一次）
        /// </summary>
        /// <param name="interval">时间间隔（毫秒）</param>
        /// <param name="doWhat"></param>
        /// <param name="workerName"></param>
        /// <param name="description"></param>
        public static void DoOnce(double interval, Action<SpareTimer, long> doWhat = default, string workerName = default, string description = default)
        {
            Do(interval, false, doWhat, workerName, description);
        }

        /// <summary>
        /// 模拟后台执行任务
        /// <para>10毫秒后执行</para>
        /// </summary>
        /// <param name="doWhat"></param>
        /// <param name="interval"></param>
        public static void DoOnce(Action doWhat = default, double interval = 10)
        {
            if (doWhat == null) return;

            Do(interval, false, (_, _) => doWhat(), Guid.NewGuid().ToString("N"));
        }

        /// <summary>
        /// 开始执行 Cron 表达式任务
        /// </summary>
        /// <param name="expression">Cron 表达式</param>
        /// <param name="doWhat"></param>
        /// <param name="workerName"></param>
        /// <param name="description"></param>
        public static void Do(string expression, Action<SpareTimer, long> doWhat = default, string workerName = default, string description = default)
        {
            Do(() =>
            {
                // 解析 Cron 表达式
                var cronExpression = CronExpression.Parse(expression, CronFormat.IncludeSeconds);

                // 获取下一个执行时间
                var nextTime = cronExpression.GetNextOccurrence(DateTimeOffset.Now, TimeZoneInfo.Local);
                return nextTime?.DateTime;
            }, doWhat, workerName, description);
        }

        /// <summary>
        /// 开始执行简单任务
        /// </summary>
        /// <param name="interval">时间间隔（毫秒）</param>
        /// <param name="continued">是否持续执行</param>
        /// <param name="doWhat"></param>
        /// <param name="workerName"></param>
        /// <param name="description"></param>
        public static void Do(double interval, bool continued = true, Action<SpareTimer, long> doWhat = default, string workerName = default, string description = default)
        {
            if (string.IsNullOrWhiteSpace(workerName) || doWhat == null) return;

            // 创建定时器
            var timer = new SpareTimer(interval, workerName)
            {
                Type = SpareTimeTypes.Interval,
                Description = description,
                Status = SpareTimeStatus.Running
            };

            // 订阅执行事件
            timer.Elapsed += (sender, e) =>
            {
                // 获取当前任务的记录
                _ = WorkerRecords.TryGetValue(workerName, out var currentRecord);

                // 停止任务
                if (!continued) Cancel(timer.WorkerName);

                // 记录执行次数
                currentRecord.Tally += 1;

                // 处理多线程并发问题（重入问题）
                var interlocked = currentRecord.Interlocked;
                if (Interlocked.Exchange(ref interlocked, 1) == 0)
                {
                    // 更新任务记录
                    UpdateWorkerRecord(workerName, currentRecord);

                    // 执行任务
                    doWhat(timer, currentRecord.Tally);

                    // 处理重入问题
                    Interlocked.Exchange(ref interlocked, 0);
                }
            };

            timer.AutoReset = continued;
            timer.Start();
        }

        /// <summary>
        /// 开始执行下一发生时间任务
        /// </summary>
        /// <param name="nextTimeHandler">返回下一次执行时间</param>
        /// <param name="doWhat"></param>
        /// <param name="workerName"></param>
        /// <param name="description"></param>
        public static void Do(Func<DateTime?> nextTimeHandler, Action<SpareTimer, long> doWhat = default, string workerName = default, string description = default)
        {
            if (doWhat == null) return;

            workerName ??= Guid.NewGuid().ToString("N");

            // 每秒检查一次
            Do(1000, (timer, tally) =>
            {
                // 获取下一个执行的时间
                var nextLocalTime = nextTimeHandler();

                if (nextLocalTime == null) Cancel(workerName);

                // 获取当前任务的记录
                _ = WorkerRecords.TryGetValue(workerName, out var currentRecord);

                // 处理重复创建定时器问题
                if (currentRecord.CronNextOccurrenceTime != null) return;
                currentRecord.CronNextOccurrenceTime = nextLocalTime.Value;
                UpdateWorkerRecord(workerName, currentRecord);

                // 设置执行类型
                timer.Type = SpareTimeTypes.Cron;
                timer.Status = SpareTimeStatus.Running;

                // 执行任务
                var interval = (nextLocalTime.Value - DateTime.Now).TotalMilliseconds;
                DoOnce(interval, (subTimer, subTally) =>
                {
                    // 清空下一个记录时间，并写入实际执行计数
                    _ = WorkerRecords.TryGetValue(workerName, out var currentRecord);
                    currentRecord.CronActualTally += 1;
                    currentRecord.CronNextOccurrenceTime = null;
                    UpdateWorkerRecord(workerName, currentRecord);

                    // 执行方法
                    doWhat(timer, currentRecord.CronActualTally);
                }, GetSubWorkerName(workerName), description);
            }, workerName, description);
        }

        /// <summary>
        /// 开始某个任务
        /// </summary>
        /// <param name="workerName"></param>
        public static void Start(string workerName)
        {
            if (string.IsNullOrWhiteSpace(workerName)) throw new ArgumentNullException(workerName);

            // 判断任务是否存在
            if (!WorkerRecords.TryGetValue(workerName, out var workerRecord)) return;

            // 获取定时器
            var timer = workerRecord.Timer;

            // 启动任务
            if (!timer.Enabled)
            {
                timer.Status = SpareTimeStatus.Running;
                timer.Start();
            }

            // 开启子任务
            Start(GetSubWorkerName(workerName));
        }

        /// <summary>
        /// 停止某个任务
        /// </summary>
        /// <param name="workerName"></param>
        public static void Stop(string workerName)
        {
            if (string.IsNullOrWhiteSpace(workerName)) throw new ArgumentNullException(nameof(workerName));

            // 判断任务是否存在
            if (!WorkerRecords.TryGetValue(workerName, out var workerRecord)) return;

            // 获取定时器
            var timer = workerRecord.Timer;

            // 停止任务
            if (timer.Enabled)
            {
                timer.Status = SpareTimeStatus.Stopped;
                timer.Stop();
            }

            // 暂停子任务
            Stop(GetSubWorkerName(workerName));
        }

        /// <summary>
        /// 取消某个任务
        /// </summary>
        /// <param name="workerName"></param>
        public static void Cancel(string workerName)
        {
            if (string.IsNullOrWhiteSpace(workerName)) throw new ArgumentNullException(nameof(workerName));

            // 判断任务是否存在
            if (!WorkerRecords.TryRemove(workerName, out var workerRecord)) return;

            // 获取定时器
            var timer = workerRecord.Timer;

            // 停止并销毁任务
            timer.Status = SpareTimeStatus.CanceledOrNone;
            timer.Stop();
            timer.Dispose();

            // 取消子任务
            Cancel(GetSubWorkerName(workerName));
        }

        /// <summary>
        /// 销毁所有任务
        /// </summary>
        public static void Dispose()
        {
            if (!WorkerRecords.Any()) return;

            foreach (var workerRecord in WorkerRecords)
            {
                Cancel(workerRecord.Key);
            }
        }

        /// <summary>
        /// 获取所有任务列表
        /// </summary>
        /// <returns></returns>
        public static IEnumerable<SpareTimer> GetTasks()
        {
            return WorkerRecords.Where(u => !u.Key.StartsWith(">>> "))
                          .Select(u => u.Value.Timer);
        }

        /// <summary>
        ///  获取子任务名称
        /// </summary>
        /// <param name="workerName"></param>
        /// <returns></returns>
        private static string GetSubWorkerName(string workerName)
        {
            return $">>> {workerName}";
        }

        /// <summary>
        /// 更新工作记录
        /// </summary>
        /// <param name="workerName"></param>
        /// <param name="newRecord"></param>
        private static void UpdateWorkerRecord(string workerName, WorkerRecord newRecord)
        {
            _ = WorkerRecords.TryGetValue(workerName, out var currentRecord);
            _ = WorkerRecords.TryUpdate(workerName, newRecord, currentRecord);
        }

        /// <summary>
        /// 记录任务
        /// </summary>
        internal readonly static ConcurrentDictionary<string, WorkerRecord> WorkerRecords;

        /// <summary>
        /// 静态构造函数
        /// </summary>
        static SpareTime()
        {
            WorkerRecords = new ConcurrentDictionary<string, WorkerRecord>();
        }
    }
}