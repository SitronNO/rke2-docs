"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[7069],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={title:"Containerd Registry Configuration"},o=void 0,s={unversionedId:"install/containerd_registry_configuration",id:"install/containerd_registry_configuration",title:"Containerd Registry Configuration",description:"Containerd can be configured to connect to private registries and use them to pull private images on each node.",source:"@site/docs/install/containerd_registry_configuration.md",sourceDirName:"install",slug:"/install/containerd_registry_configuration",permalink:"/install/containerd_registry_configuration",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/containerd_registry_configuration.md",tags:[],version:"current",lastUpdatedAt:1673383617,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{title:"Containerd Registry Configuration"},sidebar:"mySidebar",previous:{title:"Installation Methods",permalink:"/install/methods"},next:{title:"Air-Gap Install",permalink:"/install/airgap"}},l={},p=[{value:"Registries Configuration File",id:"registries-configuration-file",level:2},{value:"Mirrors",id:"mirrors",level:3},{value:"Rewrites",id:"rewrites",level:4},{value:"Configs",id:"configs",level:3},{value:"With TLS",id:"with-tls",level:3},{value:"Without TLS",id:"without-tls",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Containerd can be configured to connect to private registries and use them to pull private images on each node."),(0,i.kt)("p",null,"Upon startup, RKE2 will check to see if a ",(0,i.kt)("inlineCode",{parentName:"p"},"registries.yaml")," file exists at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/")," and instruct containerd to use any registries defined in the file. If you wish to use a private registry, then you will need to create this file as root on each node that will be using the registry."),(0,i.kt)("p",null,"Note that server nodes are schedulable by default. If you have not tainted the server nodes and will be running workloads on them, please ensure you also create the ",(0,i.kt)("inlineCode",{parentName:"p"},"registries.yaml")," file on each server as well."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Prior to RKE2 v1.20, containerd registry configuration is not honored for the initial RKE2 node bootstrapping, only for Kubernetes workloads that are launched after the node is joined to the cluster. Consult the ",(0,i.kt)("a",{parentName:"p",href:"/install/airgap"},"airgap installation documentation")," if you plan on using this containerd registry feature to bootstrap nodes."),(0,i.kt)("p",null,"Configuration in containerd can be used to connect to a private registry with a TLS connection and with registries that enable authentication as well. The following section will explain the ",(0,i.kt)("inlineCode",{parentName:"p"},"registries.yaml")," file and give different examples of using private registry configuration in RKE2."),(0,i.kt)("h2",{id:"registries-configuration-file"},"Registries Configuration File"),(0,i.kt)("p",null,"The file consists of two main sections:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mirrors"),(0,i.kt)("li",{parentName:"ul"},"configs")),(0,i.kt)("h3",{id:"mirrors"},"Mirrors"),(0,i.kt)("p",null,"Mirrors is a directive that defines the names and endpoints of the private registries. Private registries can be used as a local mirror for the default docker.io registry, or for images where the registry is explicitly specified in the name."),(0,i.kt)("p",null,"For example, the following configuration would pull from the private registry at ",(0,i.kt)("inlineCode",{parentName:"p"},"https://registry.example.com:5000")," for both ",(0,i.kt)("inlineCode",{parentName:"p"},"library/busybox:latest")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"registry.example.com/library/busybox:latest"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n  registry.example.com:\n    endpoint:\n      - "https://registry.example.com:5000"\n')),(0,i.kt)("p",null,"Each mirror must have a name and set of endpoints. When pulling an image from a registry, containerd will try these endpoint URLs one by one, and use the first working one."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," If no endpoint is configured, containerd assumes that the registry can be accessed anonymously via HTTPS on port 443, and is using a certificate trusted by the host operating system. For more information, you may ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/containerd/containerd/blob/master/docs/cri/registry.md#configure-registry-endpoint"},"consult the containerd documentation"),"."),(0,i.kt)("h4",{id:"rewrites"},"Rewrites"),(0,i.kt)("p",null,"Each mirror can have a set of rewrites. Rewrites can change the tag of an image based on a regular expression. This is useful if the organization/project structure in the mirror registry is different to the upstream one."),(0,i.kt)("p",null,"For example, the following configuration would transparently pull the image ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher/rke2-runtime:v1.23.5-rke2r1")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"registry.example.com:5000/mirrorproject/rancher-images/rke2-runtime:v1.23.5-rke2r1"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n    rewrite:\n      "^rancher/(.*)": "mirrorproject/rancher-images/$1"\n')),(0,i.kt)("h3",{id:"configs"},"Configs"),(0,i.kt)("p",null,"The configs section defines the TLS and credential configuration for each mirror. For each mirror you can define ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"tls"),". The TLS part consists of:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Directive"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cert_file")),(0,i.kt)("td",{parentName:"tr",align:null},"The client certificate path that will be used to authenticate with the registry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"key_file")),(0,i.kt)("td",{parentName:"tr",align:null},"The client key path that will be used to authenticate with the registry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ca_file")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the CA certificate path to be used to verify the registry's server cert file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"insecure_skip_verify")),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean that defines if TLS verification should be skipped for the registry")))),(0,i.kt)("p",null,"The credentials consist of either username/password or authentication token:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"username: user name of the private registry basic auth"),(0,i.kt)("li",{parentName:"ul"},"password: user password of the private registry basic auth"),(0,i.kt)("li",{parentName:"ul"},"auth: authentication token of the private registry basic auth")),(0,i.kt)("p",null,"Below are basic examples of using private registries in different modes:"),(0,i.kt)("h3",{id:"with-tls"},"With TLS"),(0,i.kt)("p",null,"Below are examples showing how you may configure ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/registries.yaml")," on each node when using TLS."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"With Authentication:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n    tls:\n      cert_file:            # path to the cert file used to authenticate to the registry\n      key_file:             # path to the key file for the certificate used to authenticate to the registry\n      ca_file:              # path to the ca file used to verify the registry\'s certificate\n      insecure_skip_verify: # may be set to true to skip verifying the registry\'s certificate\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Without Authentication:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    tls:\n      cert_file:            # path to the cert file used to authenticate to the registry\n      key_file:             # path to the key file for the certificate used to authenticate to the registry\n      ca_file:              # path to the ca file used to verify the registry\'s certificate\n      insecure_skip_verify: # may be set to true to skip verifying the registry\'s certificate\n')),(0,i.kt)("h3",{id:"without-tls"},"Without TLS"),(0,i.kt)("p",null,"Below are examples showing how you may configure ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/registries.yaml")," on each node when ",(0,i.kt)("em",{parentName:"p"},"not")," using TLS."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Plaintext HTTP With Authentication:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "http://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Plaintext HTTP Without Authentication:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'mirrors:\n  docker.io:\n    endpoint:\n      - "http://registry.example.com:5000"\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If using a registry using plaintext HTTP without TLS, you need to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"http://")," as the endpoint URI scheme, otherwise it will default to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://"),".")),(0,i.kt)("p",null,"In order for the registry changes to take effect, you need to either configure this file before starting RKE2 on the node, or restart RKE2 on each configured node."))}u.isMDXComponent=!0}}]);