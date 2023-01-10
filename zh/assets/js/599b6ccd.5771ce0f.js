"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[4457],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},k=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,d=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return r?n.createElement(d,i(i({ref:t},k),{},{components:r})):n.createElement(d,i({ref:t},k))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={title:"\u4e0b\u4e00\u4ee3 Kubernetes \u53d1\u884c\u7248\u5256\u6790",sidebar_label:"\u67b6\u6784",weight:204},i=void 0,o={unversionedId:"architecture",id:"architecture",title:"\u4e0b\u4e00\u4ee3 Kubernetes \u53d1\u884c\u7248\u5256\u6790",description:"\u67b6\u6784\u6982\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/zh/architecture",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/architecture.md",tags:[],version:"current",lastUpdatedAt:1673383617,formattedLastUpdatedAt:"2023\u5e741\u670810\u65e5",frontMatter:{title:"\u4e0b\u4e00\u4ee3 Kubernetes \u53d1\u884c\u7248\u5256\u6790",sidebar_label:"\u67b6\u6784",weight:204},sidebar:"mySidebar",previous:{title:"Secret \u52a0\u5bc6",permalink:"/zh/security/secrets_encryption"},next:{title:"\u96c6\u7fa4\u8bbf\u95ee",permalink:"/zh/cluster_access"}},p={},u=[{value:"\u67b6\u6784\u6982\u8ff0",id:"\u67b6\u6784\u6982\u8ff0",level:3},{value:"\u8fdb\u7a0b\u751f\u547d\u5468\u671f",id:"\u8fdb\u7a0b\u751f\u547d\u5468\u671f",level:3},{value:"\u5185\u5bb9\u5f15\u5bfc",id:"\u5185\u5bb9\u5f15\u5bfc",level:4},{value:"\u521d\u59cb\u5316 Server",id:"\u521d\u59cb\u5316-server",level:4},{value:"\u51c6\u5907\u7ec4\u4ef6",id:"\u51c6\u5907\u7ec4\u4ef6",level:5},{value:"<code>kube-apiserver</code>",id:"kube-apiserver",level:6},{value:"<code>kube-controller-manager</code>",id:"kube-controller-manager",level:6},{value:"<code>kube-scheduler</code>",id:"kube-scheduler",level:6},{value:"\u542f\u52a8\u96c6\u7fa4",id:"\u542f\u52a8\u96c6\u7fa4",level:5},{value:"<code>etcd</code>",id:"etcd",level:6},{value:"<code>helm-controller</code>",id:"helm-controller",level:6},{value:"\u521d\u59cb\u5316 Agent",id:"\u521d\u59cb\u5316-agent",level:4},{value:"\u5bb9\u5668\u8fd0\u884c\u65f6",id:"\u5bb9\u5668\u8fd0\u884c\u65f6",level:5},{value:"<code>containerd</code>",id:"containerd",level:6},{value:"Node Agent",id:"node-agent",level:5},{value:"<code>kubelet</code>",id:"kubelet",level:6},{value:"Server Charts",id:"server-charts",level:5},{value:"\u5b88\u62a4\u8fdb\u7a0b",id:"\u5b88\u62a4\u8fdb\u7a0b",level:4}],k={toc:u};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u67b6\u6784\u6982\u8ff0"},"\u67b6\u6784\u6982\u8ff0"),(0,a.kt)("p",null,"\u5728 RKE2 \u4e2d\uff0c\u6211\u4eec\u5438\u53d6\u4e86\u5f00\u53d1\u548c\u7ef4\u62a4\u8f7b\u91cf\u7ea7 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io",title:"\u751f\u4ea7\u7ea7\u5bb9\u5668\u7f16\u6392"},"Kubernetes")," \u53d1\u884c\u7248 ",(0,a.kt)("a",{parentName:"p",href:"https://k3s.io",title:"K3s - \u8f7b\u91cf\u7ea7 Kubernetes"},"K3s")," \u7684\u7ecf\u9a8c\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u4e00\u4e2a\u540c\u6837\u5177\u5907 ",(0,a.kt)("a",{parentName:"p",href:"https://k3s.io",title:"K3s - \u8f7b\u91cf\u7ea7 Kubernetes"},"K3s")," \u6613\u7528\u6027\u7684\u4f01\u4e1a\u7ea7\u53d1\u884c\u7248\u3002\n\u6362\u8a00\u4e4b\uff0c\u5728\u6700\u7b80\u5355\u7684\u60c5\u51b5\u4e0b\uff0cRKE2 \u662f\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u9700\u8981\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io",title:"\u751f\u4ea7\u7ea7\u5bb9\u5668\u7f16\u6392"},"Kubernetes")," \u96c6\u7fa4\u7684\u6240\u6709\u8282\u70b9\u4e0a\u8fdb\u884c\u5b89\u88c5\u548c\u914d\u7f6e\u3002\u4e00\u65e6\u542f\u52a8\uff0cRKE2 \u5c31\u80fd\u591f\u5f15\u5bfc\u548c\u76d1\u7763\u6bcf\u4e2a\u8282\u70b9\u4e0a\u7684\u89d2\u8272\u5408\u9002\u7684 Agent\uff0c\u540c\u65f6\u4ece\u7f51\u7edc\u4e0a\u83b7\u53d6\u6240\u9700\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u67b6\u6784\u6982\u89c8",src:r(4980).Z,title:"RKE2 \u67b6\u6784\u6982\u89c8",width:"1016",height:"371"})),(0,a.kt)("p",null,"RKE2 \u6c47\u96c6\u4e86\u8bb8\u591a\u5f00\u6e90\u6280\u672f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://k3s.io",title:"K3s - \u8f7b\u91cf\u7ea7 Kubernetes"},"K3s"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/helm-controller",title:"Helm Chart CRD"},"Helm Controller")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io",title:"\u751f\u4ea7\u7ea7\u5bb9\u5668\u7f16\u6392"},"K8s"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-apiserver",title:"Kube API Server"},"API Server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-controller-manager",title:"Kube Controller Manager"},"Controller Manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kubelet",title:"Kubelet"},"Kubelet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-scheduler",title:"Kube Scheduler"},"Scheduler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-proxy",title:"Kube Proxy"},"Proxy")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://etcd.io",title:"\u7528\u4e8e\u5206\u5e03\u5f0f\u7cfb\u7edf\u6700\u5173\u952e\u6570\u636e\u7684\u5206\u5e03\u5f0f\u3001\u53ef\u9760\u7684\u952e\u503c\u5b58\u50a8"},"etcd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/opencontainers/runc",title:"\u6839\u636e OCI \u89c4\u683c\u751f\u6210\u548c\u8fd0\u884c\u5bb9\u5668\u7684 CLI \u5de5\u5177"},"runc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://containerd.io",title:"\u5f00\u653e\u53ef\u9760\u7684\u5bb9\u5668\u8fd0\u884c\u65f6"},"containerd"),"/",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/cri-api",title:"\u5bb9\u5668\u8fd0\u884c\u65f6\u63a5\u53e3"},"cri")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containernetworking/cni",title:"\u5bb9\u5668\u7f51\u7edc\u63a5\u53e3"},"CNI"),": Canal (",(0,a.kt)("a",{parentName:"li",href:"https://docs.projectcalico.org/about/about-calico",title:"\u9879\u76ee Calico"},"Calico")," ","&"," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/coreos/flannel",title:"\u4e13\u4e3a Kubernetes \u8bbe\u8ba1\u7684\u5bb9\u5668\u7f51\u7edc\u7ed3\u6784"},"Flannel"),"), ",(0,a.kt)("a",{parentName:"li",href:"https://cilium.io",title:"\u57fa\u4e8e eBPF \u7684\u7f51\u7edc\u3001\u89c2\u6d4b\u548c\u5b89\u5168"},"Cilium")," \u6216 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.projectcalico.org/about/about-calico",title:"\u9879\u76ee Calico"},"Calico")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://coredns.io",title:"DNS \u548c\u670d\u52a1\u53d1\u73b0"},"CoreDNS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx",title:"\u7528\u4e8e Kubernetes \u7684 NGINX Ingress Controller"},"NGINX Ingress Controller")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/metrics-server",title:"\u8d44\u6e90\u4f7f\u7528\u6570\u636e\u7684\u96c6\u7fa4\u8303\u56f4\u805a\u5408\u5668"},"Metrics Server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh",title:"Kubernetes \u5305\u7ba1\u7406\u5668"},"Helm"))),(0,a.kt)("p",null,"\u9664\u4e86 NGINX Ingress Controller \u4e4b\u5916\uff0c\u5b83\u4eec\u90fd\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/golang/go/tree/dev.boringcrypto/misc/boring",title:"Go+BoringCrypto"},"Go+BoringCrypto")," \u8fdb\u884c\u7f16\u8bd1\u548c\u9759\u6001\u94fe\u63a5\u3002"),(0,a.kt)("h3",{id:"\u8fdb\u7a0b\u751f\u547d\u5468\u671f"},"\u8fdb\u7a0b\u751f\u547d\u5468\u671f"),(0,a.kt)("h4",{id:"\u5185\u5bb9\u5f15\u5bfc"},"\u5185\u5bb9\u5f15\u5bfc"),(0,a.kt)("p",null,"RKE2 \u4ece RKE2 Runtime \u955c\u50cf\u4e2d\u63d0\u53d6\u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u6e05\u5355\u6765\u8fd0\u884c ",(0,a.kt)("em",{parentName:"p"},"server")," \u548c ",(0,a.kt)("em",{parentName:"p"},"agent")," \u8282\u70b9\u3002\n\u6362\u8a00\u4e4b\uff0cRKE2 \u9ed8\u8ba4\u901a\u8fc7\u626b\u63cf ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/images/*.tar")," \u83b7\u53d6 ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/rancher/rke2-runtime/tags"},(0,a.kt)("inlineCode",{parentName:"a"},"rancher/rke2-runtime"))," \u955c\u50cf\uff08\u5e26\u6709\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 --version")," \u8f93\u51fa\u76f8\u5173\u7684\u6807\u7b7e\uff09\uff0c\u5982\u679c\u627e\u4e0d\u5230\u5b83\uff0c\u5219\u4f1a\u5c1d\u8bd5\u4ece\u7f51\u7edc\u62c9\u53d6\uff08\u5373 Docker Hub\uff09\u3002\u7136\u540e\uff0cRKE2 \u4ece\u955c\u50cf\u4e2d\u63d0\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/"),"\uff0c\u5c06\u5176\u5c55\u5f00\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/data/${RKE2_DATA_KEY}/bin"),"\uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"${RKE2_DATA_KEY}")," \u8868\u793a\u955c\u50cf\u7684\u552f\u4e00\u5b57\u7b26\u4e32\u6807\u8bc6\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4f7f RKE2 \u6309\u9884\u671f\u5de5\u4f5c\uff0c\u8fd0\u884c\u65f6\u955c\u50cf\u5fc5\u987b\u81f3\u5c11\u63d0\u4f9b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"containerd"))," (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/cri-api",title:"\u5bb9\u5668\u8fd0\u884c\u65f6\u63a5\u53e3"},"CRI"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"containerd-shim")),"\uff08\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"li"},"containerd")," \u505c\u6b62\uff0cshims wrap ",(0,a.kt)("inlineCode",{parentName:"li"},"runc")," \u4efb\u52a1\u5e76\u4e14\u4e0d\u4f1a\u968f\u4e4b\u505c\u6b62\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"containerd-shim-runc-v1"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"containerd-shim-runc-v2"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"kubelet"))," (Kubernetes node agent)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"runc"))," (OCI runtime)")),(0,a.kt)("p",null,"\u8fd0\u884c\u65f6\u955c\u50cf\u8fd8\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u64cd\u4f5c\u5de5\u5177\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ctr")),"\uff08\u5e95\u5c42 ",(0,a.kt)("inlineCode",{parentName:"li"},"containerd")," \u7ef4\u62a4\u68c0\u67e5\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"crictl")),"\uff08\u5e95\u5c42 CRI \u7ef4\u62a4\u548c\u68c0\u67e5\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"kubectl")),"\uff08kubernetes \u96c6\u7fa4\u7ef4\u62a4\u68c0\u67e5\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"socat")),"\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"containerd")," \u4f7f\u7528\u5b83\u6765\u8fdb\u884c\u7aef\u53e3\u8f6c\u53d1\uff09")),(0,a.kt)("p",null,"\u63d0\u53d6\u4e8c\u8fdb\u5236\u6587\u4ef6\u540e\uff0cRKE2 \u5c06\u4ece\u955c\u50cf\u4e2d\u5c06 Chart \u63d0\u53d6\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/manifests")," \u76ee\u5f55\u3002"),(0,a.kt)("h4",{id:"\u521d\u59cb\u5316-server"},"\u521d\u59cb\u5316 Server"),(0,a.kt)("p",null,"\u5728\u5d4c\u5165\u5f0f K3s \u5f15\u64ce\u4e2d\uff0cserver \u662f\u4e13\u95e8\u7684 agent \u8fdb\u7a0b\uff0c\u6362\u8a00\u4e4b\uff0c\u5b83\u4f1a\u5728\u8282\u70b9\u5bb9\u5668\u8fd0\u884c\u65f6\u542f\u52a8\u540e\u518d\u542f\u52a8\u3002"),(0,a.kt)("h5",{id:"\u51c6\u5907\u7ec4\u4ef6"},"\u51c6\u5907\u7ec4\u4ef6"),(0,a.kt)("h6",{id:"kube-apiserver"},(0,a.kt)("inlineCode",{parentName:"h6"},"kube-apiserver")),(0,a.kt)("p",null,"\u62c9\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," \u955c\u50cf\uff0c\u5982\u679c\u6ca1\u6709\u663e\u793a\uff0c\u5219\u542f\u52a8\u4e00\u4e2a goroutine \u6765\u7b49\u5f85 ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),"\uff0c\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/pod-manifests/")," \u4e2d\u5199\u5165\u9759\u6001 pod \u5b9a\u4e49\u3002"),(0,a.kt)("h6",{id:"kube-controller-manager"},(0,a.kt)("inlineCode",{parentName:"h6"},"kube-controller-manager")),(0,a.kt)("p",null,"\u62c9\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," \u955c\u50cf\uff0c\u5982\u679c\u6ca1\u6709\u663e\u793a\uff0c\u5219\u542f\u52a8\u4e00\u4e2a goroutine \u6765\u7b49\u5f85 ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),"\uff0c\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/pod-manifests/")," \u4e2d\u5199\u5165\u9759\u6001 pod \u5b9a\u4e49\u3002"),(0,a.kt)("h6",{id:"kube-scheduler"},(0,a.kt)("inlineCode",{parentName:"h6"},"kube-scheduler")),(0,a.kt)("p",null,"\u62c9\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-scheduler")," \u955c\u50cf\uff0c\u5982\u679c\u6ca1\u6709\u663e\u793a\uff0c\u5219\u542f\u52a8\u4e00\u4e2a goroutine \u6765\u7b49\u5f85 ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),"\uff0c\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/pod-manifests/")," \u4e2d\u5199\u5165\u9759\u6001 pod \u5b9a\u4e49\u3002"),(0,a.kt)("h5",{id:"\u542f\u52a8\u96c6\u7fa4"},"\u542f\u52a8\u96c6\u7fa4"),(0,a.kt)("p",null,"\u5728 goroutine \u4e2d\u542f\u52a8 HTTP \u670d\u52a1\u5668\u6765\u4fa6\u542c\u5176\u4ed6\u96c6\u7fa4 server/agent\uff0c\u7136\u540e\u521d\u59cb\u5316/\u52a0\u5165\u96c6\u7fa4\u3002"),(0,a.kt)("h6",{id:"etcd"},(0,a.kt)("inlineCode",{parentName:"h6"},"etcd")),(0,a.kt)("p",null,"\u62c9\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," \u955c\u50cf\uff0c\u5982\u679c\u6ca1\u6709\u663e\u793a\uff0c\u5219\u542f\u52a8\u4e00\u4e2a goroutine \u6765\u7b49\u5f85 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet"),"\uff0c\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/pod-manifests/")," \u4e2d\u5199\u5165\u9759\u6001 pod \u5b9a\u4e49\u3002"),(0,a.kt)("h6",{id:"helm-controller"},(0,a.kt)("inlineCode",{parentName:"h6"},"helm-controller")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," \u51c6\u5907\u5c31\u7eea\u540e\uff0c\u542f\u52a8 goroutine \u6765\u542f\u52a8\u5d4c\u5165\u5f0f ",(0,a.kt)("inlineCode",{parentName:"p"},"helm-controller"),"\u3002"),(0,a.kt)("h4",{id:"\u521d\u59cb\u5316-agent"},"\u521d\u59cb\u5316 Agent"),(0,a.kt)("p",null,"Agent \u8fdb\u7a0b\u5165\u53e3\u70b9\u3002\u5bf9\u4e8e server \u8fdb\u7a0b\uff0c\u5d4c\u5165\u5f0f K3s \u5f15\u64ce\u4f1a\u76f4\u63a5\u8c03\u7528\u5b83\u3002"),(0,a.kt)("h5",{id:"\u5bb9\u5668\u8fd0\u884c\u65f6"},"\u5bb9\u5668\u8fd0\u884c\u65f6"),(0,a.kt)("h6",{id:"containerd"},(0,a.kt)("inlineCode",{parentName:"h6"},"containerd")),(0,a.kt)("p",null,"\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," \u8fdb\u7a0b\u5e76\u76d1\u542c\u7ec8\u6b62\u3002\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," \u9000\u51fa\uff0c\u90a3\u4e48 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2")," \u8fdb\u7a0b\u4e5f\u4f1a\u9000\u51fa\u3002"),(0,a.kt)("h5",{id:"node-agent"},"Node Agent"),(0,a.kt)("h6",{id:"kubelet"},(0,a.kt)("inlineCode",{parentName:"h6"},"kubelet")),(0,a.kt)("p",null,"\u751f\u6210\u5e76\u76d1\u7763 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," \u8fdb\u7a0b\u3002\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," \u9000\u51fa\uff0c\u90a3\u4e48 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2")," \u5c06\u5c1d\u8bd5\u91cd\u542f\u5b83\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," \u8fd0\u884c\u540e\uff0c\u5b83\u5c06\u542f\u52a8\u4efb\u4f55\u53ef\u7528\u7684\u9759\u6001 pod\u3002\u5bf9\u4e8e server\uff0c\u8fd9\u610f\u5473\u7740 ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," \u5c06\u4f9d\u6b21\u542f\u52a8\uff0c\u5141\u8bb8\u5176\u4f59\u7ec4\u4ef6\u901a\u8fc7\u9759\u6001 pod \u542f\u52a8\uff0c\u4ece\u800c\u8fde\u63a5\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," \u5e76\u5f00\u59cb\u5904\u7406\u3002"),(0,a.kt)("h5",{id:"server-charts"},"Server Charts"),(0,a.kt)("p",null,"\u5728 Server \u8282\u70b9\u4e0a\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"helm-controller")," \u53ef\u4ee5\u5c06\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/manifests")," \u4e2d\u627e\u5230\u7684\u4efb\u4f55 Chart \u5e94\u7528\u4e8e\u96c6\u7fa4\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rke2-canal.yaml or rke2-cilium.yaml (daemonset, bootstrap)"),(0,a.kt)("li",{parentName:"ul"},"rke2-coredns.yaml (deployment, bootstrap)"),(0,a.kt)("li",{parentName:"ul"},"rke2-ingress-nginx.yaml (deployment)"),(0,a.kt)("li",{parentName:"ul"},"rke2-kube-proxy.yaml (daemonset, bootstrap)"),(0,a.kt)("li",{parentName:"ul"},"rke2-metrics-server.yaml (deployment)")),(0,a.kt)("h4",{id:"\u5b88\u62a4\u8fdb\u7a0b"},"\u5b88\u62a4\u8fdb\u7a0b"),(0,a.kt)("p",null,"RKE2 \u8fdb\u7a0b\u73b0\u5728\u5c06\u65e0\u9650\u671f\u8fd0\u884c\uff0c\u76f4\u5230\u5b83\u6536\u5230 SIGTERM \u6216 SIGKILL\uff0c\u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," \u8fdb\u7a0b\u9000\u51fa\u3002"))}s.isMDXComponent=!0},4980:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overview-783b5a0a7e319dc96a2db8473dc83f3d.png"}}]);