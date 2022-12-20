"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[5349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=l,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={title:"Windows \u5378\u8f7d"},o="Windows \u5378\u8f7d",i={unversionedId:"install/windows_uninstall",id:"install/windows_uninstall",title:"Windows \u5378\u8f7d",description:"\u6ce8\u610f\uff1a\u5378\u8f7d RKE2 Windows Agent \u4f1a\u5220\u9664\u6240\u6709\u8282\u70b9\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/windows_uninstall.md",sourceDirName:"install",slug:"/install/windows_uninstall",permalink:"/zh/install/windows_uninstall",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/windows_uninstall.md",tags:[],version:"current",lastUpdatedAt:1671564441,formattedLastUpdatedAt:"2022\u5e7412\u670820\u65e5",frontMatter:{title:"Windows \u5378\u8f7d"},sidebar:"mySidebar",previous:{title:"Linux \u5378\u8f7d",permalink:"/zh/install/linux_uninstall"},next:{title:"\u6982\u8ff0",permalink:"/zh/upgrade/"}},s={},c=[{value:"Tarball \u65b9\u6cd5",id:"tarball-\u65b9\u6cd5",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"windows-\u5378\u8f7d"},"Windows \u5378\u8f7d"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5378\u8f7d RKE2 Windows Agent \u4f1a\u5220\u9664\u6240\u6709\u8282\u70b9\u6570\u636e\u3002")),(0,l.kt)("p",null,"\u4e0d\u540c\u7684 RKE2 \u5b89\u88c5\u65b9\u6cd5\u5bf9\u5e94\u7684\u5378\u8f7d\u6d41\u7a0b\u4e0d\u540c\u3002"),(0,l.kt)("h2",{id:"tarball-\u65b9\u6cd5"},"Tarball \u65b9\u6cd5"),(0,l.kt)("p",null,"\u8981\u4ece\u7cfb\u7edf\u4e2d\u5378\u8f7d\u4f7f\u7528 tarball \u5b89\u88c5\u7684 RKE2 Windows Agent\uff0c\u4f60\u53ea\u9700\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u8fd9\u5c06\u5173\u95ed\u6240\u6709 RKE2 Windows \u8fdb\u7a0b\uff0c\u5220\u9664 RKE2 Windows \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5e76\u6e05\u7406 RKE2 \u4f7f\u7528\u7684\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"c:/usr/local/bin/rke2-uninstall.ps1\n")))}p.isMDXComponent=!0}}]);