using Furion.DependencyInjection;

namespace Furion
{
    /// <summary>
    /// 官方包定义
    /// </summary>
    [SkipScan]
    internal static class AppExtra
    {
        /// <summary>
        /// Jwt 验证包
        /// </summary>
        internal const string AUTHENTICATION_JWTBEARER = "Furion.Extras.Authentication.JwtBearer";

        /// <summary>
        /// Mapster 映射包
        /// </summary>
        internal const string OBJECTMAPPER_MAPSTER = "Furion.Extras.ObjectMapper.Mapster";
    }
}