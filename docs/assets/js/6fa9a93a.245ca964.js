(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[647],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(g,l(l({ref:t},p),{},{components:n})):i.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4232:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var i=n(4034),r=n(9973),a=(n(7294),n(3905)),l={id:"jwtsettings",title:"9. JWT \u914d\u7f6e",sidebar_label:"9. JWT \u914d\u7f6e"},o={unversionedId:"settings/jwtsettings",id:"settings/jwtsettings",isDocsHomePage:!1,title:"9. JWT \u914d\u7f6e",description:"9.1 \u5173\u4e8e\u914d\u7f6e",source:"@site/docs/settings/jwtsettings.mdx",sourceDirName:"settings",slug:"/settings/jwtsettings",permalink:"/docs/settings/jwtsettings",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/settings/jwtsettings.mdx",version:"current",sidebar_label:"9. JWT \u914d\u7f6e",frontMatter:{id:"jwtsettings",title:"9. JWT \u914d\u7f6e",sidebar_label:"9. JWT \u914d\u7f6e"},sidebar:"settings",previous:{title:"8. \u591a\u8bed\u8a00\u914d\u7f6e",permalink:"/docs/settings/localizationsettings"}},s=[{value:"9.1 \u5173\u4e8e\u914d\u7f6e",id:"91-\u5173\u4e8e\u914d\u7f6e",children:[]},{value:"9.2 \u914d\u7f6e\u4fe1\u606f",id:"92-\u914d\u7f6e\u4fe1\u606f",children:[]},{value:"9.3 \u914d\u7f6e\u793a\u4f8b",id:"93-\u914d\u7f6e\u793a\u4f8b",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"91-\u5173\u4e8e\u914d\u7f6e"},"9.1 \u5173\u4e8e\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," \u914d\u7f6e\u6307\u7684\u662f\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," token \u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"92-\u914d\u7f6e\u4fe1\u606f"},"9.2 \u914d\u7f6e\u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JWTSettings"),"\uff1a\u6839\u8282\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidateIssuerSigningKey"),"\uff1a\u662f\u5426\u9a8c\u8bc1\u5bc6\u94a5\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IssuerSigningKey"),"\uff1a\u5bc6\u94a5\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b\uff0c\u5fc5\u987b\u662f\u590d\u6742\u5bc6\u94a5\uff0c\u957f\u5ea6\u5927\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"16")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidateIssuer"),"\uff1a\u662f\u5426\u9a8c\u8bc1\u7b7e\u53d1\u65b9\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidIssuer"),"\uff1a\u7b7e\u53d1\u65b9\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidateAudience"),"\uff1a\u662f\u5426\u9a8c\u8bc1\u7b7e\u6536\u65b9\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidAudience"),"\uff1a\u7b7e\u6536\u65b9\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidateLifetim"),"\uff1a\u662f\u5426\u9a8c\u8bc1\u8fc7\u671f\u65f6\u95f4\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c\u5efa\u8bae ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExpiredTime"),"\uff1a\u8fc7\u671f\u65f6\u95f4\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"long")," \u7c7b\u578b\uff0c\u5355\u4f4d\u5206\u949f\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"20")," \u5206\u949f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ClockSkew"),"\uff1a\u8fc7\u671f\u65f6\u95f4\u5bb9\u9519\u503c\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"long")," \u7c7b\u578b\uff0c\u5355\u4f4d\u79d2\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"5")," \u79d2"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Algorithm"),"\uff1a\u52a0\u5bc6\u7b97\u6cd5\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"SecurityAlgorithms.HmacSha256"))))),(0,a.kt)("h2",{id:"93-\u914d\u7f6e\u793a\u4f8b"},"9.3 \u914d\u7f6e\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"{4,6,8}","{4,6,8}":!0},'{\n  "JWTSettings": {\n    "ValidateIssuerSigningKey": true, // \u662f\u5426\u9a8c\u8bc1\u5bc6\u94a5\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\n    "IssuerSigningKey": "\u4f60\u7684\u5bc6\u94a5", // \u5bc6\u94a5\uff0cstring \u7c7b\u578b\uff0c\u5fc5\u987b\u662f\u590d\u6742\u5bc6\u94a5\uff0c\u957f\u5ea6\u5927\u4e8e16\n    "ValidateIssuer": true, // \u662f\u5426\u9a8c\u8bc1\u7b7e\u53d1\u65b9\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\n    "ValidIssuer": "\u7b7e\u53d1\u65b9", // \u7b7e\u53d1\u65b9\uff0cstring \u7c7b\u578b\n    "ValidateAudience": true, // \u662f\u5426\u9a8c\u8bc1\u7b7e\u6536\u65b9\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\n    "ValidAudience": "\u7b7e\u6536\u65b9", // \u7b7e\u6536\u65b9\uff0cstring \u7c7b\u578b\n    "ValidateLifetime": true, // \u662f\u5426\u9a8c\u8bc1\u8fc7\u671f\u65f6\u95f4\uff0cbool \u7c7b\u578b\uff0c\u9ed8\u8ba4true\uff0c\u5efa\u8baetrue\n    "ExpiredTime": 20, // \u8fc7\u671f\u65f6\u95f4\uff0clong \u7c7b\u578b\uff0c\u5355\u4f4d\u5206\u949f\uff0c\u9ed8\u8ba420\u5206\u949f\n    "ClockSkew": 5, // \u8fc7\u671f\u65f6\u95f4\u5bb9\u9519\u503c\uff0clong \u7c7b\u578b\uff0c\u5355\u4f4d\u79d2\uff0c\u9ed8\u8ba4 5\u79d2\n    "Algorithm": "HS256" // \u52a0\u5bc6\u7b97\u6cd5\uff0cstring \u7c7b\u578b\uff0c\u9ed8\u8ba4 SecurityAlgorithms.HmacSha256\n  }\n}\n')))}p.isMDXComponent=!0}}]);