"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[9927],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(k,a(a({ref:n},c),{},{components:t})):r.createElement(k,a({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2915:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={title:"\u9ed8\u8ba4 Pod \u5b89\u5168\u6807\u51c6"},a=void 0,s={unversionedId:"security/pod_security_standards",id:"security/pod_security_standards",title:"\u9ed8\u8ba4 Pod \u5b89\u5168\u6807\u51c6",description:"\u672c\u6587\u6863\u63cf\u8ff0\u4e86 RKE2 \u5982\u4f55\u914d\u7f6e PodSecurityStandards \u548c NetworkPolicies \u6765\u786e\u4fdd\u9ed8\u8ba4\u5b89\u5168\uff0c\u540c\u65f6\u8fd8\u4e3a\u64cd\u4f5c\u4eba\u5458\u63d0\u4f9b\u4e86\u6700\u5927\u7684\u914d\u7f6e\u7075\u6d3b\u6027\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/security/pod_security_standards.md",sourceDirName:"security",slug:"/security/pod_security_standards",permalink:"/zh/security/pod_security_standards",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/pod_security_standards.md",tags:[],version:"current",lastUpdatedAt:1695676293,formattedLastUpdatedAt:"2023\u5e749\u670825\u65e5",frontMatter:{title:"\u9ed8\u8ba4 Pod \u5b89\u5168\u6807\u51c6"},sidebar:"mySidebar",previous:{title:"\u9ed8\u8ba4 Pod \u5b89\u5168\u7b56\u7565",permalink:"/zh/security/pod_security_policies"},next:{title:"SELinux",permalink:"/zh/security/selinux"}},p={},l=[{value:"Pod \u5b89\u5168\u6807\u51c6",id:"pod-\u5b89\u5168\u6807\u51c6",level:4},{value:"\u7f51\u7edc\u7b56\u7565",id:"\u7f51\u7edc\u7b56\u7565",level:4}],c={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u6863\u63cf\u8ff0\u4e86 RKE2 \u5982\u4f55\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"PodSecurityStandards")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkPolicies")," \u6765\u786e\u4fdd\u9ed8\u8ba4\u5b89\u5168\uff0c\u540c\u65f6\u8fd8\u4e3a\u64cd\u4f5c\u4eba\u5458\u63d0\u4f9b\u4e86\u6700\u5927\u7684\u914d\u7f6e\u7075\u6d3b\u6027\u3002"),(0,i.kt)("admonition",{title:"\u7248\u672c",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u672c\u6587\u6863\u9002\u7528\u4e8e RKE2 v1.25 \u53ca\u66f4\u65b0\u7248\u672c\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh/security/pod_security_policies"},"Pod \u5b89\u5168\u7b56\u7565\u6587\u6863"),"\u4e86\u89e3 RKE2 v1.24 \u53ca\u66f4\u4f4e\u7248\u672c\u7684\u9ed8\u8ba4\u7b56\u7565\u3002")),(0,i.kt)("h4",{id:"pod-\u5b89\u5168\u6807\u51c6"},"Pod \u5b89\u5168\u6807\u51c6"),(0,i.kt)("p",null,"\u4ece Kubernetes v1.25.0 \u7248\u672c\u5f00\u59cb\uff0cPod Security Policies (PSP) \u4ece Kubernetes \u4e2d\u5b8c\u5168\u79fb\u9664\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/"},"Pod Security Admission (PSA)"),"\u3002\u9ed8\u8ba4\u7684 Pod Security Admission \u914d\u7f6e\u6587\u4ef6\u5c06\u5728\u542f\u52a8\u65f6\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"--profile=cis-1.23")," \u9009\u9879\u8fd0\u884c\uff0cRKE2 \u5c06\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u5e94\u7528\u53d7\u9650\u7684 Pod \u5b89\u5168\u6807\u51c6\uff0c\u8be5\u914d\u7f6e\u6587\u4ef6\u5c06\u5728\u6574\u4e2a\u96c6\u7fa4\u4e2d\u5f3a\u5236\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"restricted")," \u6a21\u5f0f\uff0c\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-system"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"cis-operator-system")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"tigera-operator")," \u547d\u540d\u7a7a\u95f4\u9664\u5916\uff0c\u5b83\u4eec\u7528\u4e8e\u786e\u4fdd\u7cfb\u7edf Pod \u80fd\u6210\u529f\u8fd0\u884c\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u5728\u6ca1\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"--profile=cis-1.23")," \u9009\u9879\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\uff0cRKE2 \u5c06\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u5e94\u7528\u4e0d\u53d7\u9650\u5236\u7684 pod \u5b89\u5168\u6807\u51c6\uff0c\u8be5\u914d\u7f6e\u6587\u4ef6\u5c06\u5728\u6574\u4e2a\u96c6\u7fa4\u4e2d\u5f3a\u5236\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"privileged")," \u6a21\u5f0f\uff0c\u8be5\u6a21\u5f0f\u5141\u8bb8\u96c6\u7fa4\u4e2d\u6240\u6709 pod \u4f7f\u7528\u5b8c\u5168\u4e0d\u53d7\u9650\u7684\u6a21\u5f0f\u3002"))),(0,i.kt)("p",null,"RKE2 \u4f1a\u5c06\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u653e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/rke2-pss.yaml"),"\uff0c\u914d\u7f6e\u6587\u4ef6\u7684\u5185\u5bb9\u53d6\u51b3\u4e8e\u4f60\u542f\u52a8 RKE2 \u7684 CIS \u6a21\u5f0f\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CIS \u6a21\u5f0f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- name: PodSecurity\n  configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1beta1\n    kind: PodSecurityConfiguration\n    defaults:\n      enforce: "restricted"\n      enforce-version: "latest"\n      audit: "restricted"\n      audit-version: "latest"\n      warn: "restricted"\n      warn-version: "latest"\n    exemptions:\n      usernames: []\n      runtimeClasses: []\n      namespaces: [kube-system, cis-operator-system, tigera-operator]\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u975e CIS \u6a21\u5f0f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- name: PodSecurity\n  configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1beta1\n    kind: PodSecurityConfiguration\n    defaults:\n      enforce: "privileged"\n      enforce-version: "latest"\n    exemptions:\n      usernames: []\n      runtimeClasses: []\n      namespaces: []\n')),(0,i.kt)("p",null,"\u653e\u597d\u8be5\u914d\u7f6e\u6587\u4ef6\u540e\uff0cRKE2 \u5c06\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"--admission-control-config-file")," \u6807\u5fd7\u542f\u52a8 kube-apiserver\uff0c\u8be5\u6807\u5fd7\u5c06\u8bbe\u7f6e\u4e3a PSA \u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u8981\u8986\u76d6\u9ed8\u8ba4\u7684 pod \u5b89\u5168\u6807\u51c6\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"pod-security-admission-config-file: <path-to-custom-psa-config-file>")," \u4f20\u9012\u7ed9 RKE2 \u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.kt)("h4",{id:"\u7f51\u7edc\u7b56\u7565"},"\u7f51\u7edc\u7b56\u7565"),(0,i.kt)("p",null,"\u5f53 RKE2 \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"profile: cis-1.23")," \u53c2\u6570\u8fd0\u884c\u65f6\uff0c\u5b83\u4f1a\u5c06\u4e24\u4e2a\u7f51\u7edc\u7b56\u7565\u5e94\u7528\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-system"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"kube-public")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," \u547d\u540d\u7a7a\u95f4\u5e76\u5e94\u7528\u5173\u8054\u7684\u6ce8\u91ca\u3002\u4e0e PSP \u76f8\u540c\u7684\u903b\u8f91\u5c06\u5e94\u7528\u4e8e\u8fd9\u4e9b\u7b56\u7565\u548c\u6ce8\u91ca\u3002\u5f00\u59cb\u65f6\u4f1a\u68c0\u67e5\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u7684\u6ce8\u89e3\u662f\u5426\u5b58\u5728\uff0c\u5982\u679c\u5b58\u5728\uff0cRKE2 \u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002\u5982\u679c\u6ce8\u91ca\u4e0d\u5b58\u5728\uff0cRKE2 \u5c06\u68c0\u67e5\u7b56\u7565\u662f\u5426\u5b58\u5728\uff0c\u5982\u679c\u5b58\u5728\uff0c\u5219\u91cd\u65b0\u521b\u5efa\u5b83\u3002"),(0,i.kt)("p",null,"\u5e94\u7528\u7684\u7b2c\u4e00\u4e2a\u7b56\u7565\u662f\u5c06\u7f51\u7edc\u6d41\u91cf\u9650\u5236\u4e3a\u4ec5\u547d\u540d\u7a7a\u95f4\u672c\u8eab\u3002\u89c1\u4e0b\u6587\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  managedFields:\n  - apiVersion: networking.k8s.io/v1\n    fieldsType: FieldsV1\n    fieldsV1:\n      f:spec:\n        f:ingress: {}\n        f:policyTypes: {}\n  name: default-network-policy\n  namespace: default\nspec:\n  ingress:\n  - from:\n    - podSelector: {}\n  podSelector: {}\n  policyTypes:\n  - Ingress\n")),(0,i.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u7b56\u7565\u5e94\u7528\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u5e76\u5141\u8bb8 DNS \u6d41\u91cf\u3002\u89c1\u4e0b\u6587\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  managedFields:\n  - apiVersion: networking.k8s.io/v1\n    fieldsV1:\n      f:spec:\n        f:ingress: {}\n        f:podSelector:\n          f:matchLabels:\n        f:policyTypes: {}\n  name: default-network-dns-policy\n  namespace: kube-system\nspec:\n  ingress:\n  - ports:\n    - port: 53\n      protocol: TCP\n    - port: 53\n      protocol: UDP\n  podSelector:\n    matchLabels:\n  policyTypes:\n  - Ingress\n")),(0,i.kt)("p",null,"RKE2 \u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"default-network-policy")," \u7b56\u7565\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"np.rke2.io")," \u6ce8\u91ca\u5e94\u7528\u4e8e\u6240\u6709\u5185\u7f6e\u547d\u540d\u7a7a\u95f4\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u8fd8\u83b7\u5f97\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"default-network-dns-policy")," \u7b56\u7565\u548c\u5e94\u7528\u4e8e\u5b83\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"np.rke2.io/dns")," \u6ce8\u89e3\u3002"),(0,i.kt)("p",null,"\u8981\u67e5\u770b\u7cfb\u7edf\u4e0a\u5f53\u524d\u90e8\u7f72\u7684\u7f51\u7edc\u7b56\u7565\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get networkpolicies -A\n")))}u.isMDXComponent=!0}}]);