"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[3949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},l="3. RPM SLE support for RKE2",o={unversionedId:"adrs/rke2-rpm-sle-support",id:"adrs/rke2-rpm-sle-support",title:"3. RPM SLE support for RKE2",description:"Date: 2022-01-27",source:"@site/docs/adrs/003-rke2-rpm-sle-support.md",sourceDirName:"adrs",slug:"/adrs/rke2-rpm-sle-support",permalink:"/zh/adrs/rke2-rpm-sle-support",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/adrs/003-rke2-rpm-sle-support.md",tags:[],version:"current",lastUpdatedAt:1682542402,formattedLastUpdatedAt:"2023\u5e744\u670826\u65e5",sidebarPosition:3,frontMatter:{}},s={},p=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"3-rpm-sle-support-for-rke2"},"3. RPM SLE support for RKE2"),(0,i.kt)("p",null,"Date: 2022-01-27"),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Accepted"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"RKE2 publishes RPMs for SUSE OS distributions, the rpms will be installed via transactional updates if exists, this will enable two things, the installation of rke2-selinux and the extraction of the binaries in the right ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr")," paths instead of the alternative tarball installation which will extract the binaries in ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt"),"."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"We will add support for RPM publishing for SUSE OS distributions in rke2-packaging repo, the ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2-server")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2-agent")," packages will require installing ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2-common")," which will in turn install the ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2-selinux")," RPM package which is already supported for microos."),(0,i.kt)("p",null,"The decision will involve defaulting to the tarball installation for SUSE OS distribution in the installation script to prevent breaking current compatibility with users who currently installed via tarball installation, the RPM installation will be allowed via passing the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"RKE2_INSTALL_METHOD=rpm")," to the install script."),(0,i.kt)("p",null,"The installation script will also have measures to prevent installation switching from RPM to tarball installation and vice versa, and finally the installation via the tarball method will not allow SELINUX to be enabled unless manually."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("p",null,"The decision will result in some drawbacks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The decision will not enable RPM installation by default."),(0,i.kt)("li",{parentName:"ul"},"The tarball installation will not enable SELINUX by default.")))}u.isMDXComponent=!0}}]);