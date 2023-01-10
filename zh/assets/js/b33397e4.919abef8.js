"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[8194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"Containerd \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e"},l=void 0,o={unversionedId:"install/containerd_registry_configuration",id:"install/containerd_registry_configuration",title:"Containerd \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e",description:"Containerd \u53ef\u4ee5\u914d\u7f6e\u4e3a\u8fde\u63a5\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff0c\u5e76\u4f7f\u7528\u4ed3\u5e93\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u62c9\u53d6\u79c1\u6709\u955c\u50cf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/containerd_registry_configuration.md",sourceDirName:"install",slug:"/install/containerd_registry_configuration",permalink:"/zh/install/containerd_registry_configuration",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/containerd_registry_configuration.md",tags:[],version:"current",lastUpdatedAt:1673383617,formattedLastUpdatedAt:"2023\u5e741\u670810\u65e5",frontMatter:{title:"Containerd \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e"},sidebar:"mySidebar",previous:{title:"\u5b89\u88c5\u65b9\u6cd5",permalink:"/zh/install/methods"},next:{title:"\u79bb\u7ebf\u5b89\u88c5",permalink:"/zh/install/airgap"}},p={},s=[{value:"\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6",id:"\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6",level:2},{value:"Mirrors",id:"mirrors",level:3},{value:"\u91cd\u5199",id:"\u91cd\u5199",level:4},{value:"Configs",id:"configs",level:3},{value:"\u4f7f\u7528 TLS",id:"\u4f7f\u7528-tls",level:3},{value:"\u6ca1\u6709 TLS",id:"\u6ca1\u6709-tls",level:3}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Containerd \u53ef\u4ee5\u914d\u7f6e\u4e3a\u8fde\u63a5\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff0c\u5e76\u4f7f\u7528\u4ed3\u5e93\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u62c9\u53d6\u79c1\u6709\u955c\u50cf\u3002"),(0,a.kt)("p",null,"\u542f\u52a8\u65f6\uff0cRKE2 \u4f1a\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/")," \u4e2d\u662f\u5426\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"registries.yaml")," \u6587\u4ef6\uff0c\u5e76\u6307\u793a containerd \u4f7f\u7528\u8be5\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u955c\u50cf\u4ed3\u5e93\u3002\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u79c1\u6709\u7684\u955c\u50cf\u4ed3\u5e93\uff0c\u4f60\u9700\u8981\u5728\u6bcf\u4e2a\u4f7f\u7528\u955c\u50cf\u4ed3\u5e93\u7684\u8282\u70b9\u4e0a\u4ee5 root \u8eab\u4efd\u521b\u5efa\u8fd9\u4e2a\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cserver \u8282\u70b9\u9ed8\u8ba4\u662f\u53ef\u4ee5\u8c03\u5ea6\u7684\u3002\u5982\u679c\u4f60\u6ca1\u6709\u5728 server \u8282\u70b9\u4e0a\u8bbe\u7f6e\u6c61\u70b9\uff0c\u800c\u4e14\u5e0c\u671b\u5728 server \u8282\u70b9\u4e0a\u8fd0\u884c\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u8bf7\u786e\u4fdd\u5728\u6bcf\u4e2a server \u8282\u70b9\u4e0a\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"registries.yaml")," \u6587\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5728 RKE2 v1.20 \u4e4b\u524d\uff0c\u521d\u59cb RKE2 \u8282\u70b9\u5f15\u5bfc\u4e0d\u652f\u6301 containerd \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\uff0c\u4ec5\u53ef\u7528\u4e8e\u8282\u70b9\u52a0\u5165\u96c6\u7fa4\u540e\u542f\u52a8\u7684 Kubernetes \u5de5\u4f5c\u8d1f\u8f7d\u3002\u5982\u679c\u4f60\u8ba1\u5212\u4f7f\u7528\u6b64 containerd \u955c\u50cf\u4ed3\u5e93\u529f\u80fd\u6765\u5f15\u5bfc\u8282\u70b9\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/install/airgap"},"\u79bb\u7ebf\u5b89\u88c5\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,"Containerd \u4e2d\u7684\u914d\u7f6e\u53ef\u4ee5\u7528\u4e8e\u901a\u8fc7 TLS \u8fde\u63a5\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff0c\u4e5f\u53ef\u4ee5\u4e0e\u542f\u7528\u9a8c\u8bc1\u7684\u955c\u50cf\u4ed3\u5e93\u8fde\u63a5\u3002\u4e0b\u4e00\u8282\u5c06\u89e3\u91ca ",(0,a.kt)("inlineCode",{parentName:"p"},"registries.yaml")," \u6587\u4ef6\uff0c\u5e76\u7ed9\u51fa\u5728 RKE2 \u4e2d\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u7684\u4e0d\u540c\u4f8b\u5b50\u3002"),(0,a.kt)("h2",{id:"\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6"},"\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u8be5\u6587\u4ef6\u7531\u4e24\u4e2a\u4e3b\u8981\u90e8\u5206\u7ec4\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mirrors"),(0,a.kt)("li",{parentName:"ul"},"configs")),(0,a.kt)("h3",{id:"mirrors"},"Mirrors"),(0,a.kt)("p",null,"Mirrors \u662f\u7528\u4e8e\u5b9a\u4e49\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u540d\u79f0\u548c\u7aef\u70b9\u7684\u6307\u4ee4\u3002\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u53ef\u4ee5\u7528\u4f5c\u9ed8\u8ba4 docker.io \u955c\u50cf\u4ed3\u5e93\u7684\u672c\u5730 mirror\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u5728\u540d\u79f0\u4e2d\u6307\u5b9a\u4e86\u955c\u50cf\u4ed3\u5e93\u7684\u955c\u50cf\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u914d\u7f6e\u5c06\u4ece\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"https://registry.example.com:5000")," \u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"library/busybox:latest")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"registry.example.com/library/busybox:latest"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n  registry.example.com:\n    endpoint:\n      - "https://registry.example.com:5000"\n')),(0,a.kt)("p",null,"\u6bcf\u4e2a mirror \u90fd\u5fc5\u987b\u6709\u4e00\u4e2a\u540d\u79f0\u548c\u4e00\u7ec4\u7aef\u70b9\u3002\u4ece\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\u955c\u50cf\u65f6\uff0ccontainerd \u4f1a\u9010\u4e2a\u5c1d\u8bd5\u8fd9\u4e9b\u7aef\u70b9 URL\uff0c\u5e76\u4f7f\u7528\u7b2c\u4e00\u4e2a\u6709\u6548\u7684 URL\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5982\u679c\u6ca1\u6709\u914d\u7f6e\u7aef\u70b9\uff0ccontainerd \u5047\u5b9a\u955c\u50cf\u4ed3\u5e93\u53ef\u4ee5\u901a\u8fc7 HTTPS \u7aef\u53e3 443 \u8fdb\u884c\u533f\u540d\u8bbf\u95ee\uff0c\u5e76\u4e14\u4f7f\u7528\u4e3b\u673a\u64cd\u4f5c\u7cfb\u7edf\u4fe1\u4efb\u7684\u8bc1\u4e66\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containerd/containerd/blob/master/docs/cri/registry.md#configure-registry-endpoint"},"containerd \u6587\u6863"),"\u3002"),(0,a.kt)("h4",{id:"\u91cd\u5199"},"\u91cd\u5199"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u955c\u50cf\u90fd\u53ef\u4ee5\u6709\u4e00\u7ec4\u91cd\u5199\u3002\u91cd\u5199\u53ef\u4ee5\u6839\u636e\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u6539\u53d8\u955c\u50cf\u7684\u6807\u7b7e\u3002\u5982\u679c mirror \u4ed3\u5e93\u4e2d\u7684\u7ec4\u7ec7/\u9879\u76ee\u7ed3\u6784\u4e0e\u4e0a\u6e38\u4e0d\u540c\uff0c\u8fd9\u5c06\u5f88\u6709\u7528\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u914d\u7f6e\u5c06\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"registry.example.com:5000/mirrorproject/rancher-images/rke2-runtime:v1.23.5-rke2r1")," \u65e0\u611f\u77e5\u5730\u62c9\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher/rke2-runtime:v1.23.5-rke2r1")," \u955c\u50cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n    rewrite:\n      "^rancher/(.*)": "mirrorproject/rancher-images/$1"\n')),(0,a.kt)("h3",{id:"configs"},"Configs"),(0,a.kt)("p",null,"configs \u90e8\u5206\u5b9a\u4e49\u4e86\u6bcf\u4e2a mirror \u7684 TLS \u548c\u51ed\u8bc1\u914d\u7f6e\u3002\u5bf9\u4e8e\u6bcf\u4e2a mirror\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," \u548c/\u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"tls"),"\u3002TLS \u90e8\u5206\u5305\u62ec\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6307\u4ee4"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cert_file")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u8bc1\u4e66\u8def\u5f84\uff0c\u7528\u4e8e\u5411\u955c\u50cf\u4ed3\u5e93\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"key_file")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u5bc6\u94a5\u8def\u5f84\uff0c\u7528\u4e8e\u5411\u955c\u50cf\u4ed3\u5e93\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ca_file")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u7528\u4e8e\u9a8c\u8bc1\u955c\u50cf\u4ed3\u5e93\u670d\u52a1\u5668\u8bc1\u4e66\u6587\u4ef6\u7684 CA \u8bc1\u4e66\u8def\u5f84")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"insecure_skip_verify")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u662f\u5426\u5e94\u8df3\u8fc7\u955c\u50cf\u4ed3\u5e93\u7684 TLS \u9a8c\u8bc1\u7684\u5e03\u5c14\u503c")))),(0,a.kt)("p",null,"\u51ed\u8bc1\u7531\u7528\u6237\u540d/\u5bc6\u7801\u6216\u8eab\u4efd\u9a8c\u8bc1\u4ee4\u724c\u7ec4\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d\uff1a\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1\u7684\u7528\u6237\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u5bc6\u7801\uff1a\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1\u7684\u7528\u6237\u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},"auth\uff1a\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1\u7684\u8eab\u4efd\u9a8c\u8bc1\u4ee4\u724c")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u5728\u4e0d\u540c\u6a21\u5f0f\u4e0b\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u57fa\u672c\u4f8b\u5b50\uff1a"),(0,a.kt)("h3",{id:"\u4f7f\u7528-tls"},"\u4f7f\u7528 TLS"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u4f7f\u7528 TLS \u65f6\uff0c\u5982\u4f55\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/registries.yaml"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u5177\u6709\u8eab\u4efd\u9a8c\u8bc1\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n    tls:\n      cert_file:            # path to the cert file used to authenticate to the registry\n      key_file:             # path to the key file for the certificate used to authenticate to the registry\n      ca_file:              # path to the ca file used to verify the registry\'s certificate\n      insecure_skip_verify: # may be set to true to skip verifying the registry\'s certificate\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u6ca1\u6709\u8eab\u4efd\u9a8c\u8bc1\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    tls:\n      cert_file:            # path to the cert file used to authenticate to the registry\n      key_file:             # path to the key file for the certificate used to authenticate to the registry\n      ca_file:              # path to the ca file used to verify the registry\'s certificate\n      insecure_skip_verify: # may be set to true to skip verifying the registry\'s certificate\n')),(0,a.kt)("h3",{id:"\u6ca1\u6709-tls"},"\u6ca1\u6709 TLS"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86",(0,a.kt)("em",{parentName:"p"},"\u4e0d"),"\u4f7f\u7528 TLS \u65f6\uff0c\u5982\u4f55\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/registries.yaml"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u5177\u6709\u8eab\u4efd\u9a8c\u8bc1\u7684\u7eaf\u6587\u672c HTTP\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "http://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u6ca1\u6709\u8eab\u4efd\u9a8c\u8bc1\u7684\u7eaf\u6587\u672c HTTP\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "http://registry.example.com:5000"\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f7f\u7528\u4e0d\u5e26 TLS \u7684\u7eaf\u6587\u672c HTTP \u955c\u50cf\u4ed3\u5e93\uff0c\u5219\u9700\u8981\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"http://")," \u4f5c\u4e3a\u7aef\u70b9 URI \u65b9\u6848\uff0c\u5426\u5219\u4f1a\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"https://"),"\u3002")),(0,a.kt)("p",null,"\u8981\u4f7f\u955c\u50cf\u4ed3\u5e93\u66f4\u6539\u751f\u6548\uff0c\u4f60\u9700\u8981\u5728\u8282\u70b9\u4e0a\u542f\u52a8 RKE2 \u4e4b\u524d\u914d\u7f6e\u6b64\u6587\u4ef6\uff0c\u6216\u8005\u5728\u6bcf\u4e2a\u914d\u7f6e\u7684\u8282\u70b9\u4e0a\u91cd\u542f RKE2\u3002"))}m.isMDXComponent=!0}}]);