"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[7939],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,d=m["".concat(i,".").concat(k)]||m[k]||u[k]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u9ad8\u7ea7\u9009\u9879\u548c\u914d\u7f6e"},o=void 0,p={unversionedId:"advanced",id:"advanced",title:"\u9ad8\u7ea7\u9009\u9879\u548c\u914d\u7f6e",description:"\u672c\u6587\u63cf\u8ff0\u4e86\u7528\u4e8e\u8fd0\u884c\u548c\u7ba1\u7406 RKE2 \u7684\u9ad8\u7ea7\u8bbe\u7f6e\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/advanced.md",sourceDirName:".",slug:"/advanced",permalink:"/zh/advanced",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/advanced.md",tags:[],version:"current",lastUpdatedAt:1673383617,formattedLastUpdatedAt:"2023\u5e741\u670810\u65e5",frontMatter:{title:"\u9ad8\u7ea7\u9009\u9879\u548c\u914d\u7f6e"},sidebar:"mySidebar",previous:{title:"Helm \u96c6\u6210",permalink:"/zh/helm"},next:{title:"Agent \u914d\u7f6e\u53c2\u8003",permalink:"/zh/reference/linux_agent_config"}},i={},c=[{value:"\u8bc1\u4e66\u8f6e\u6362",id:"\u8bc1\u4e66\u8f6e\u6362",level:2},{value:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355",id:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355",level:2},{value:"\u914d\u7f6e Containerd",id:"\u914d\u7f6e-containerd",level:2},{value:"\u914d\u7f6e HTTP \u4ee3\u7406",id:"\u914d\u7f6e-http-\u4ee3\u7406",level:2},{value:"\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9",id:"\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9",level:2},{value:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u542f\u52a8 Server",id:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u542f\u52a8-server",level:2},{value:"\u7981\u7528 Server Chart",id:"\u7981\u7528-server-chart",level:2},{value:"\u5728\u5206\u7c7b\u7684 AWS \u533a\u57df\u6216\u5177\u6709\u81ea\u5b9a\u4e49 AWS API \u7aef\u70b9\u7684\u7f51\u7edc\u4e0a\u5b89\u88c5",id:"\u5728\u5206\u7c7b\u7684-aws-\u533a\u57df\u6216\u5177\u6709\u81ea\u5b9a\u4e49-aws-api-\u7aef\u70b9\u7684\u7f51\u7edc\u4e0a\u5b89\u88c5",level:2},{value:"Control Plane \u7ec4\u4ef6\u8d44\u6e90\u8bf7\u6c42/\u9650\u5236",id:"control-plane-\u7ec4\u4ef6\u8d44\u6e90\u8bf7\u6c42\u9650\u5236",level:2},{value:"\u989d\u5916\u7684 control plane \u7ec4\u4ef6\u5377\u6302\u8f7d",id:"\u989d\u5916\u7684-control-plane-\u7ec4\u4ef6\u5377\u6302\u8f7d",level:2},{value:"RW \u4e3b\u673a\u8def\u5f84\u5377\u6302\u8f7d",id:"rw-\u4e3b\u673a\u8def\u5f84\u5377\u6302\u8f7d",level:3},{value:"RO \u4e3b\u673a\u8def\u5f84\u5377\u6302\u8f7d",id:"ro-\u4e3b\u673a\u8def\u5f84\u5377\u6302\u8f7d",level:3},{value:"\u989d\u5916\u7684 Control Plane \u7ec4\u4ef6\u73af\u5883\u53d8\u91cf",id:"\u989d\u5916\u7684-control-plane-\u7ec4\u4ef6\u73af\u5883\u53d8\u91cf",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u63cf\u8ff0\u4e86\u7528\u4e8e\u8fd0\u884c\u548c\u7ba1\u7406 RKE2 \u7684\u9ad8\u7ea7\u8bbe\u7f6e\uff1a"),(0,a.kt)("h2",{id:"\u8bc1\u4e66\u8f6e\u6362"},"\u8bc1\u4e66\u8f6e\u6362"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRKE2 \u4e2d\u7684\u8bc1\u4e66\u5728 12 \u4e2a\u6708\u540e\u8fc7\u671f\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8bc1\u4e66\u5df2\u7ecf\u8fc7\u671f\u6216\u5269\u4f59\u7684\u65f6\u95f4\u4e0d\u8db3 90 \u5929\uff0c\u5219\u5728 RKE2 \u91cd\u542f\u65f6\u8f6e\u6362\u8bc1\u4e66\u3002"),(0,a.kt)("p",null,"\u4ece v1.21.8+rke2r1 \u5f00\u59cb\uff0c\u4f60\u53ef\u4ee5\u624b\u52a8\u8f6e\u6362\u8bc1\u4e66\u3002\u4e3a\u6b64\uff0c\u5efa\u8bae\u5148\u505c\u6b62 rke2-server \u8fdb\u7a0b\uff0c\u7136\u540e\u8f6e\u6362\u8bc1\u4e66\uff0c\u6700\u540e\u518d\u6b21\u542f\u52a8\u8be5\u8fdb\u7a0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl stop rke2-server\nrke2 certificate rotate\nsystemctl start rke2-server\n")),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4f20\u9012 ",(0,a.kt)("inlineCode",{parentName:"p"},"--service")," \u6807\u5fd7\u6765\u8f6e\u6362\u5355\u4e2a\u670d\u52a1\uff0c\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 certificate rotate --service api-server"),"\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh/reference/subcommands#certificate"},"certificate \u5b50\u547d\u4ee4"),"\u3002"),(0,a.kt)("h2",{id:"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355"},"\u81ea\u52a8\u90e8\u7f72\u6e05\u5355"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/manifests")," \u4e2d\u627e\u5230\u7684\u4efb\u4f55\u6587\u4ef6\u90fd\u4f1a\u4ee5\u7c7b\u4f3c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply")," \u7684\u65b9\u5f0f\u81ea\u52a8\u90e8\u7f72\u5230 Kubernetes\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u4f7f\u7528\u6e05\u5355\u76ee\u5f55\u90e8\u7f72 Helm Chart \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh/helm"},"Helm")," \u7ae0\u8282\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e-containerd"},"\u914d\u7f6e Containerd"),(0,a.kt)("p",null,"RKE2 \u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/etc/containerd/config.toml")," \u4e2d\u4e3a containerd \u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u5bf9\u8fd9\u4e2a\u6587\u4ef6\u8fdb\u884c\u9ad8\u7ea7\u5b9a\u5236\uff0c\u4f60\u53ef\u4ee5\u5728\u540c\u4e00\u76ee\u5f55\u4e2d\u521b\u5efa\u53e6\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml.tmpl")," \u7684\u6587\u4ef6\uff0c\u6b64\u6587\u4ef6\u5c06\u4f1a\u4ee3\u66ff\u9ed8\u8ba4\u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"config.toml.tmpl")," \u662f\u4e00\u4e2a Go \u6a21\u677f\u6587\u4ef6\uff0c\u5e76\u4e14 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.Node")," \u7ed3\u6784\u4f1a\u88ab\u4f20\u9012\u7ed9\u6a21\u677f\u3002\u6709\u5173\u5982\u4f55\u4f7f\u7528\u8be5\u7ed3\u6784\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/blob/master/pkg/agent/templates/templates.go#L16-L32"},"\u6b64\u6a21\u677f"),"\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e-http-\u4ee3\u7406"},"\u914d\u7f6e HTTP \u4ee3\u7406"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u8fd0\u884c RKE2 \u7684\u73af\u5883\u4e2d\u53ea\u901a\u8fc7 HTTP \u4ee3\u7406\u8fdb\u884c\u5916\u90e8\u8fde\u63a5\uff0c\u4f60\u53ef\u4ee5\u5728 RKE2 \u7684 systemd \u670d\u52a1\u4e0a\u914d\u7f6e\u4ee3\u7406\u3002RKE2 \u5c06\u4f7f\u7528\u8fd9\u4e9b\u4ee3\u7406\u8bbe\u7f6e\uff0c\u5e76\u5411\u4e0b\u4f20\u9012\u5230\u5d4c\u5165\u5f0f containerd \u548c kubelet\u3002"),(0,a.kt)("p",null,"\u5c06\u5fc5\u8981\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," \u53d8\u91cf\u6dfb\u52a0\u5230 systemd \u670d\u52a1\u7684\u73af\u5883\u6587\u4ef6\u4e2d\uff0c\u901a\u5e38\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/default/rke2-server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/default/rke2-agent"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," \u53d8\u91cf\u5fc5\u987b\u5305\u542b\u4f60\u7684\u5185\u90e8\u7f51\u7edc\uff0c\u4ee5\u53ca\u96c6\u7fa4 pod \u548c service IP \u8303\u56f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HTTP_PROXY=http://your-proxy.example.com:8888\nHTTPS_PROXY=http://your-proxy.example.com:8888\nNO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5728\u4e0d\u5f71\u54cd RKE2 \u548c Kubelet \u7684\u60c5\u51b5\u4e0b\u4e3a containerd \u914d\u7f6e\u4ee3\u7406\uff0c\u4f60\u53ef\u4ee5\u5728\u53d8\u91cf\u524d\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTAINERD_"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CONTAINERD_HTTP_PROXY=http://your-proxy.example.com:8888\nCONTAINERD_HTTPS_PROXY=http://your-proxy.example.com:8888\nCONTAINERD_NO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local\n")),(0,a.kt)("h2",{id:"\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9"},"\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9"),(0,a.kt)("p",null,"RKE2 Agent \u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"node-label")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"node-taint")," \u9009\u9879\u6765\u914d\u7f6e\uff0c\u5b83\u4eec\u4f1a\u4e3a kubelet \u6dfb\u52a0\u6807\u7b7e\u548c\u6c61\u70b9\u3002\u8fd9\u4e24\u4e2a\u9009\u9879\u53ea\u80fd\u5728\u6ce8\u518c\u65f6\u6dfb\u52a0\u6807\u7b7e\u548c/\u6216\u6c61\u70b9\uff0c\u56e0\u6b64\u5b83\u4eec\u53ea\u80fd\u88ab\u6dfb\u52a0\u4e00\u6b21\uff0c\u4e4b\u540e\u4e0d\u80fd\u518d\u901a\u8fc7\u8fd0\u884c rke2 \u547d\u4ee4\u6765\u79fb\u9664\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5728\u8282\u70b9\u6ce8\u518c\u540e\u66f4\u6539\u8282\u70b9\u6807\u7b7e\u548c\u6c61\u70b9\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u3002\u5173\u4e8e\u5982\u4f55\u6dfb\u52a0",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"\u6c61\u70b9"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/#add-a-label-to-a-node"},"\u8282\u70b9\u6807\u7b7e"),"\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9 Kubernetes \u6587\u6863\u3002"),(0,a.kt)("h1",{id:"agent-\u8282\u70b9\u6ce8\u518c\u7684\u5de5\u4f5c\u539f\u7406"},"Agent \u8282\u70b9\u6ce8\u518c\u7684\u5de5\u4f5c\u539f\u7406"),(0,a.kt)("p",null,"Agent \u8282\u70b9\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 agent")," \u8fdb\u7a0b\u53d1\u8d77\u7684 WebSocket \u8fde\u63a5\u8fdb\u884c\u6ce8\u518c\uff0c\u8fde\u63a5\u7531\u4f5c\u4e3a agent \u8fdb\u7a0b\u4e00\u90e8\u5206\u8fd0\u884c\u7684\u5ba2\u6237\u7aef\u8d1f\u8f7d\u5747\u8861\u5668\u7ef4\u62a4\u3002"),(0,a.kt)("p",null,"Agent \u5c06\u4f7f\u7528 join token \u7684\u96c6\u7fa4 Secret \u4ee5\u53ca\u968f\u673a\u751f\u6210\u7684\u8282\u70b9\u5bc6\u7801\u6ce8\u518c\u5230 Server\uff0c\u5bc6\u7801\u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/node/password")," \u4e2d\u3002Server \u4f1a\u5c06\u5404\u4e2a\u8282\u70b9\u7684\u5bc6\u7801\u5b58\u50a8\u4e3a Kubernetes Secret\uff0c\u540e\u7eed\u7684\u4efb\u4f55\u5c1d\u8bd5\u90fd\u5fc5\u987b\u4f7f\u7528\u76f8\u540c\u7684\u5bc6\u7801\u3002\u8282\u70b9\u5bc6\u7801 Secret \u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u540d\u79f0\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"<host>.node-password.rke2")," \u6a21\u677f\u3002\u5f53\u76f8\u5e94\u7684 Kubernetes \u8282\u70b9\u88ab\u5220\u9664\u65f6\uff0c\u8fd9\u4e9b Secret \u4e5f\u4f1a\u88ab\u5220\u9664\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u5728 RKE2 v1.20.2 \u4e4b\u524d\uff0cServer \u5c06\u5bc6\u7801\u5b58\u50a8\u5728\u78c1\u76d8\u4e0a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/cred/node-passwd")," \u4e2d\u3002"),(0,a.kt)("p",null,"\u5982\u679c Agent \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/node")," \u76ee\u5f55\u88ab\u5220\u9664\uff0c\u4f60\u9700\u8981\u5728\u542f\u52a8\u524d\u4e3a Agent \u91cd\u65b0\u521b\u5efa\u5bc6\u7801\u6587\u4ef6\uff0c\u6216\u8005\u4ece Server \u6216 Kubernetes \u96c6\u7fa4\u4e2d\u5220\u9664\u8be5\u6761\u76ee\uff08\u53d6\u51b3\u4e8e RKE2\u7248\u672c\uff09\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u542f\u52a8-server"},"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u542f\u52a8 Server"),(0,a.kt)("p",null,"\u5b89\u88c5\u811a\u672c\u4e3a systemd \u63d0\u4f9b\u4e86\u5355\u5143\uff0c\u4f46\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u542f\u7528\u6216\u542f\u52a8\u8be5\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 systemd \u8fd0\u884c\u65f6\uff0c\u65e5\u5fd7\u5c06\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/syslog")," \u4e2d\u521b\u5efa\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"journalctl -u rke2-server")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"journalctl -u rke2-agent")," \u67e5\u770b\u65e5\u5fd7\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5b89\u88c5\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.rke2.io | sh -\nsystemctl enable rke2-server\nsystemctl start rke2-server\n")),(0,a.kt)("h2",{id:"\u7981\u7528-server-chart"},"\u7981\u7528 Server Chart"),(0,a.kt)("p",null,"\u5728\u96c6\u7fa4\u5f15\u5bfc\u671f\u95f4\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2")," \u7ed1\u5728\u4e00\u8d77\u7684 Server Chart \u53ef\u4ee5\u88ab\u7981\u7528\u5e76\u66ff\u6362\u3002\u5e38\u89c1\u7684\u7528\u4f8b\u662f\u66ff\u6362\u6346\u7ed1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-ingress-nginx")," Chart\u3002"),(0,a.kt)("p",null,"\u8981\u7981\u7528\u4efb\u4f55\u6346\u7ed1\u7684\u7cfb\u7edf Chart\uff0c\u8bf7\u5728\u5f15\u5bfc\u4e4b\u524d\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"disable")," \u53c2\u6570\u3002\u8981\u7981\u7528\u7684\u7cfb\u7edf Chart \u5b8c\u6574\u5217\u8868\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rke2-canal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rke2-coredns")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rke2-ingress-nginx")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rke2-metrics-server"))),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u7531\u4e8e server Chart \u5bf9\u96c6\u7fa4\u7684\u64cd\u4f5c\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u6b64\u96c6\u7fa4\u64cd\u4f5c\u4eba\u5458\u9700\u8981\u786e\u4fdd\u5df2\u7981\u7528\u6216\u66f4\u6362\u7ec4\u4ef6\u3002\u6709\u5173\u96c6\u7fa4\u4e2d\u5404\u4e2a\u7cfb\u7edf Chart \u89d2\u8272\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/architecture#server-charts"},"\u67b6\u6784\u6982\u8ff0"),"\u3002"),(0,a.kt)("h2",{id:"\u5728\u5206\u7c7b\u7684-aws-\u533a\u57df\u6216\u5177\u6709\u81ea\u5b9a\u4e49-aws-api-\u7aef\u70b9\u7684\u7f51\u7edc\u4e0a\u5b89\u88c5"},"\u5728\u5206\u7c7b\u7684 AWS \u533a\u57df\u6216\u5177\u6709\u81ea\u5b9a\u4e49 AWS API \u7aef\u70b9\u7684\u7f51\u7edc\u4e0a\u5b89\u88c5"),(0,a.kt)("p",null,"\u5728\u516c\u5171 AWS \u533a\u57df\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--cloud-provider-name=aws")," \u5b89\u88c5 RKE2 \u80fd\u786e\u4fdd RKE2 \u652f\u6301\u4e91\uff0c\u5e76\u4e14\u80fd\u591f\u81ea\u52a8\u914d\u7f6e\u67d0\u4e9b\u4e91\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"\u5728\u5206\u7c7b\u533a\u57df\uff08\u4f8b\u5982 SC2S \u6216 C2S\uff09\u4e0a\u5b89\u88c5 RKE2 \u65f6\uff0c\u4f60\u9700\u8981\u6ce8\u610f\u4e00\u4e9b\u989d\u5916\u7684\u6761\u4ef6\uff0c\u4ece\u800c\u786e\u4fdd RKE2 \u77e5\u9053\u5982\u4f55\u4ee5\u53ca\u5728\u54ea\u91cc\u4e0e\u9002\u5f53\u7684 AWS \u7aef\u70b9\u8fdb\u884c\u5b89\u5168\u901a\u4fe1\u3002"),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u786e\u4fdd\u6ee1\u8db3\u6240\u6709\u5e38\u89c1\u7684 AWS \u4e91\u63d0\u4f9b\u5546",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/aws/"},"\u5148\u51b3\u6761\u4ef6"),"\u3002\u5b83\u4eec\u4e0e\u533a\u57df\u65e0\u5173\uff0c\u5e76\u4e14\u59cb\u7ec8\u662f\u5fc5\u9700\u7684\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud.conf")," \u6587\u4ef6\u786e\u4fdd RKE2 \u77e5\u9053\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"ec2")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"elasticloadbalancing")," \u670d\u52a1\u7684 API \u8bf7\u6c42\u53d1\u9001\u5230\u54ea\u91cc\uff0c\u4ee5\u4e0b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"us-iso-east-1")," (C2S) \u533a\u57df\u7684\u793a\u4f8b\uff1a"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# /etc/rancher/rke2/cloud.conf\n[Global]\n[ServiceOverride "ec2"]\n  Service=ec2\n  Region=us-iso-east-1\n  URL=https://ec2.us-iso-east-1.c2s.ic.gov\n  SigningRegion=us-iso-east-1\n[ServiceOverride "elasticloadbalancing"]\n  Service=elasticloadbalancing\n  Region=us-iso-east-1\n  URL=https://elasticloadbalancing.us-iso-east-1.c2s.ic.gov\n  SigningRegion=us-iso-east-1\n')),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/privatelink/endpoint-services-overview.html"},"\u79c1\u6709 AWS \u7aef\u70b9"),"\uff0c\u8bf7\u786e\u4fdd\u4e3a\u6bcf\u4e2a\u79c1\u6709\u7aef\u70b9\u4f7f\u7528\u9002\u5f53\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"URL"),"\u3002"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u5c06\u9002\u5f53\u7684 AWS CA \u5305\u52a0\u8f7d\u5230\u7cfb\u7edf\u7684\u6839 CA \u4fe1\u4efb\u5e93\u4e2d\u3002\u8be5\u64cd\u4f5c\u53ef\u80fd\u5df2\u5b8c\u6210\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u4f60\u4f7f\u7528\u7684 AMI\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# on CentOS/RHEL 7/8\ncp <ca.pem> /etc/pki/ca-trust/source/anchors/\nupdate-ca-trust\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5728\u6b65\u9aa4 1 \u4e2d\u521b\u5efa\u7684\u81ea\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"li"},"cloud.conf")," \u914d\u7f6e RKE2\uff0c\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"aws")," \u4e91\u63d0\u4f9b\u5546\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# /etc/rancher/rke2/config.yaml\n...\ncloud-provider-name: aws\ncloud-provider-config: "/etc/rancher/rke2/cloud.conf"\n...\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh/install/methods"},"\u6b63\u5e38\u5b89\u88c5")," RKE2\uff08\u5f88\u53ef\u80fd\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/zh/install/airgap"},"\u79bb\u7ebf"),"\u5b89\u88c5\uff09\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get nodes --show-labels")," \u786e\u8ba4\u96c6\u7fa4\u8282\u70b9\u6807\u7b7e\u4e0a\u662f\u5426\u5b58\u5728 AWS \u5143\u6570\u636e\uff0c\u4ece\u800c\u9a8c\u8bc1\u5b89\u88c5\u662f\u5426\u6210\u529f\u3002"))),(0,a.kt)("h2",{id:"control-plane-\u7ec4\u4ef6\u8d44\u6e90\u8bf7\u6c42\u9650\u5236"},"Control Plane \u7ec4\u4ef6\u8d44\u6e90\u8bf7\u6c42/\u9650\u5236"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u9009\u9879\u5728 RKE2 \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u5b50\u547d\u4ee4\u4e0b\u53ef\u7528\u3002\u8fd9\u4e9b\u9009\u9879\u5141\u8bb8\u4e3a RKE2 \u4e2d\u7684 control plane \u7ec4\u4ef6\u6307\u5b9a CPU \u8bf7\u6c42\u548c\u9650\u5236\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   --control-plane-resource-requests value       (components) Control Plane resource requests [$RKE2_CONTROL_PLANE_RESOURCE_REQUESTS]\n   --control-plane-resource-limits value         (components) Control Plane resource limits [$RKE2_CONTROL_PLANE_RESOURCE_LIMITS]\n")),(0,a.kt)("p",null,"\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"[controlplane-component]-(cpu|memory)=[desired-value]")," \u683c\u5f0f\u7684\u9017\u53f7\u5206\u9694\u5217\u8868\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane-component")," \u7684\u503c\u53ef\u80fd\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kube-apiserver\nkube-scheduler\nkube-controller-manager\nkube-proxy\netcd\ncloud-controller-manager\n")),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"--control-plane-resource-requests")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"--control-plane-resource-limits")," \u7684\u503c\u53ef\u80fd\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kube-apiserver-cpu=500m,kube-apiserver-memory=512M,kube-scheduler-cpu=250m,kube-scheduler-memory=512M,etcd-cpu=1000m\n")),(0,a.kt)("p",null,"CPU/\u5185\u5b58\u7684\u5355\u4f4d\u503c\u4e0e Kubernetes \u8d44\u6e90\u5355\u4f4d\u76f8\u540c\uff08\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes"},"Kubernetes \u4e2d\u7684\u8d44\u6e90\u9650\u5236"),"\uff09\u3002"),(0,a.kt)("h2",{id:"\u989d\u5916\u7684-control-plane-\u7ec4\u4ef6\u5377\u6302\u8f7d"},"\u989d\u5916\u7684 control plane \u7ec4\u4ef6\u5377\u6302\u8f7d"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u9009\u9879\u5728 RKE2 \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u5b50\u547d\u4ee4\u4e0b\u53ef\u7528\u3002\u4e9b\u9009\u9879\u6307\u5b9a\u4e3b\u673a\u8def\u5f84\uff0c\u5c06\u8282\u70b9\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u76ee\u5f55\u6302\u8f7d\u5230\u4e0e\u524d\u7f00\u540d\u79f0\u76f8\u5bf9\u5e94\u7684\u9759\u6001 Pod \u7ec4\u4ef6\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   --kube-apiserver-extra-mount value            (components) kube-apiserver extra volume mounts [$RKE2_KUBE_APISERVER_EXTRA_MOUNT]\n   --kube-scheduler-extra-mount value            (components) kube-scheduler extra volume mounts [$RKE2_KUBE_SCHEDULER_EXTRA_MOUNT]\n   --kube-controller-manager-extra-mount value   (components) kube-controller-manager extra volume mounts [$RKE2_KUBE_CONTROLLER_MANAGER_EXTRA_MOUNT]\n   --kube-proxy-extra-mount value                (components) kube-proxy extra volume mounts [$RKE2_KUBE_PROXY_EXTRA_MOUNT]\n   --etcd-extra-mount value                      (components) etcd extra volume mounts [$RKE2_ETCD_EXTRA_MOUNT]\n   --cloud-controller-manager-extra-mount value  (components) cloud-controller-manager extra volume mounts [$RKE2_CLOUD_CONTROLLER_MANAGER_EXTRA_MOUNT]\n")),(0,a.kt)("h3",{id:"rw-\u4e3b\u673a\u8def\u5f84\u5377\u6302\u8f7d"},"RW \u4e3b\u673a\u8def\u5f84\u5377\u6302\u8f7d"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/source/volume/path/on/host:/destination/volume/path/in/staticpod")),(0,a.kt)("h3",{id:"ro-\u4e3b\u673a\u8def\u5f84\u5377\u6302\u8f7d"},"RO \u4e3b\u673a\u8def\u5f84\u5377\u6302\u8f7d"),(0,a.kt)("p",null,"\u8981\u5c06\u5377\u6302\u8f7d\u4e3a\u53ea\u8bfb\uff0c\u5728\u5377\u6302\u8f7d\u7684\u6700\u540e\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},":ro"),"\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"/source/volume/path/on/host:/destination/volume/path/in/staticpod:ro")),(0,a.kt)("p",null,"\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u4ee5\u6570\u7ec4\u5f62\u5f0f\u4f20\u9012\u6807\u5fd7\u503c\uff0c\u53ef\u4ee5\u4e3a\u540c\u4e00\u4e2a\u7ec4\u4ef6\u6307\u5b9a\u591a\u4e2a\u5377\u6302\u8f7d\u3002"),(0,a.kt)("h2",{id:"\u989d\u5916\u7684-control-plane-\u7ec4\u4ef6\u73af\u5883\u53d8\u91cf"},"\u989d\u5916\u7684 Control Plane \u7ec4\u4ef6\u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u9009\u9879\u5728 RKE2 \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u5b50\u547d\u4ee4\u4e0b\u53ef\u7528\u3002\u8fd9\u4e9b\u9009\u9879\u4ee5\u6807\u51c6\u683c\u5f0f\u6307\u5b9a\u989d\u5916\u7684\u73af\u5883\u53d8\u91cf\uff0c\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"KEY=VALUE"),"\uff0c\u7528\u4e8e\u4e0e\u524d\u7f00\u540d\u79f0\u76f8\u5bf9\u5e94\u7684\u9759\u6001 Pod \u7ec4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   --kube-apiserver-extra-env value              (components) kube-apiserver extra environment variables [$RKE2_KUBE_APISERVER_EXTRA_ENV]\n   --kube-scheduler-extra-env value              (components) kube-scheduler extra environment variables [$RKE2_KUBE_SCHEDULER_EXTRA_ENV]\n   --kube-controller-manager-extra-env value     (components) kube-controller-manager extra environment variables [$RKE2_KUBE_CONTROLLER_MANAGER_EXTRA_ENV]\n   --kube-proxy-extra-env value                  (components) kube-proxy extra environment variables [$RKE2_KUBE_PROXY_EXTRA_ENV]\n   --etcd-extra-env value                        (components) etcd extra environment variables [$RKE2_ETCD_EXTRA_ENV]\n   --cloud-controller-manager-extra-env value    (components) cloud-controller-manager extra environment variables [$RKE2_CLOUD_CONTROLLER_MANAGER_EXTRA_ENV]\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u4ee5\u6570\u7ec4\u5f62\u5f0f\u4f20\u9012\u6807\u5fd7\u503c\uff0c\u53ef\u4ee5\u4e3a\u540c\u4e00\u4e2a\u7ec4\u4ef6\u6307\u5b9a\u591a\u4e2a\u73af\u5883\u53d8\u91cf\u3002"))}u.isMDXComponent=!0}}]);