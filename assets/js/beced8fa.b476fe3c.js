"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[3660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const o={title:"Network Options"},r=void 0,l={unversionedId:"install/network_options",id:"install/network_options",title:"Network Options",description:"RKE2 requires a CNI plugin to connect pods and services. The Canal CNI plugin is the default and has been supported since the beginning. Starting with RKE2 v1.21, there are two extra supported CNI plugins: Calico and Cilium. All CNI",source:"@site/docs/install/network_options.md",sourceDirName:"install",slug:"/install/network_options",permalink:"/install/network_options",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/network_options.md",tags:[],version:"current",lastUpdatedAt:1695676293,formattedLastUpdatedAt:"Sep 25, 2023",frontMatter:{title:"Network Options"},sidebar:"mySidebar",previous:{title:"Configuration Options",permalink:"/install/configuration"},next:{title:"High Availability",permalink:"/install/ha"}},s={},u=[{value:"Install a CNI plugin",id:"install-a-cni-plugin",level:2},{value:"Dual-stack configuration",id:"dual-stack-configuration",level:2},{value:"IPv6 setup",id:"ipv6-setup",level:2},{value:"Using Multus",id:"using-multus",level:2},{value:"Using Multus with Cilium",id:"using-multus-with-cilium",level:2},{value:"Using Multus with the containernetworking plugins",id:"using-multus-with-the-containernetworking-plugins",level:2},{value:"Using Multus with the Whereabouts CNI",id:"using-multus-with-the-whereabouts-cni",level:2},{value:"Using Multus with SR-IOV",id:"using-multus-with-sr-iov",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},p=c("Tabs"),d=c("TabItem"),m={toc:u},h="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"RKE2 requires a CNI plugin to connect pods and services. The Canal CNI plugin is the default and has been supported since the beginning. Starting with RKE2 v1.21, there are two extra supported CNI plugins: Calico and Cilium. All CNI\nplugins get installed via a helm chart after the main components are up and running and can be customized by modifying the helm chart options."),(0,i.kt)("p",null,"This page focuses on the network options available when setting up RKE2:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#install-a-cni-plugin"},"Install a CNI plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dual-stack-configuration"},"Dual-stack configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-multus"},"Using Multus"))),(0,i.kt)("h2",{id:"install-a-cni-plugin"},"Install a CNI plugin"),(0,i.kt)("p",null,"The next tabs inform how to deploy each CNI plugin and override the default options:"),(0,i.kt)(p,{groupId:"CNIplugin",mdxType:"Tabs"},(0,i.kt)(d,{value:"Canal CNI plugin",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Canal means using Flannel for inter-node traffic and Calico for intra-node traffic and network policies. By default, it will use vxlan encapsulation to create an overlay network among nodes. Canal is deployed by default in RKE2 and thus nothing must be configured to activate it. To override the default Canal options you should create a HelmChartConfig resource. The HelmChartConfig resource must match the name and namespace of its corresponding HelmChart. For example to override the flannel interface, you can apply the following config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# /var/lib/rancher/rke2/server/manifests/rke2-canal-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-canal\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    flannel:\n      iface: "eth1"\n')),(0,i.kt)("p",null,"Starting with RKE2 v1.23 it is possible to use flannel's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flannel-io/flannel/blob/master/Documentation/backends.md#wireguard"},"wireguard backend")," for in-kernel WireGuard encapsulation and encryption (",(0,i.kt)("a",{parentName:"p",href:"https://www.wireguard.com/install/"},"Users of kernels < 5.6 need to install a module"),"). This can be achieved using the following config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# /var/lib/rancher/rke2/server/manifests/rke2-canal-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-canal\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    flannel:\n      backend: "wireguard"\n')),(0,i.kt)("p",null,"After that, please restart the canal daemonset to use the newer config by executing: ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl rollout restart ds rke2-canal -n kube-system")),(0,i.kt)("p",null,"For more information about the full options of the Canal config please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-charts/blob/main-source/packages/rke2-canal/charts/values.yaml"},"rke2-charts"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Canal requires the iptables or xtables-nft package to be installed on the node.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Canal is currently not supported on clusters with Windows nodes.")),(0,i.kt)("p",null,"Please check ",(0,i.kt)("a",{parentName:"p",href:"/known_issues"},"Known issues and Limitations")," if you experience IP allocation problems")),(0,i.kt)(d,{value:"Cilium CNI plugin",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Starting with RKE2 v1.21, Cilium can be deployed as the CNI plugin. To do so, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"cilium")," as the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"--cni")," flag. Ensure that the nodes have the right required kernel version (>= 4.9.17) and they meet the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cilium.io/en/stable/operations/system_requirements/"},"requirements"),". To override the default options, please use a HelmChartConfig resource. The HelmChartConfig resource must match the name and namespace of its corresponding HelmChart. For example, to enable eni:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-cilium-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-cilium\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    eni:\n      enabled: true\n")),(0,i.kt)("p",null,"For more information about values available in the Cilium chart, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-charts/blob/main/charts/rke2-cilium/rke2-cilium/1.12.301/values.yaml"},"rke2-charts repository")),(0,i.kt)("p",null,"Cilium includes advanced features to fully replace kube-proxy and implement the routing of services using eBPF instead of iptables. It is not recommended to replace kube-proxy by Cilium if your kernel is not v5.8 or newer, as important bug fixes and features will be missing. To activate this mode, deploy rke2 with the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable-kube-proxy")," and the following cilium configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# /var/lib/rancher/rke2/server/manifests/rke2-cilium-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-cilium\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    kubeProxyReplacement: strict\n    k8sServiceHost: <KUBE_API_SERVER_IP>\n    k8sServicePort: <KUBE_API_SERVER_PORT>\n    cni:\n      chainingMode: "none"\n')),(0,i.kt)("p",null,"For more information, please check the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cilium.io/en/v1.12/gettingstarted/kubeproxy-free/"},"upstream docs")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Cilium is currently not supported in the Windows installation of RKE2"))),(0,i.kt)(d,{value:"Calico CNI plugin",default:!0,mdxType:"TabItem"},"Starting with RKE2 v1.21, Calico can be deployed as the CNI plugin. To do so, pass `calico` as the value of the `--cni` flag. To override the default options, please use a HelmChartConfig resource. The HelmChartConfig resource must match the name and namespace of its corresponding HelmChart. For example, to change the mtu:",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-calico-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-calico\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    installation:\n      calicoNetwork:\n        mtu: 9000\n")),(0,i.kt)("p",null,"For more information about values available for the Calico chart, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-charts/blob/main/charts/rke2-calico/rke2-calico/v3.25.001/values.yaml"},"rke2-charts repository")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Calico requires the iptables or xtables-nft package  to be installed on the node.")))),(0,i.kt)("h2",{id:"dual-stack-configuration"},"Dual-stack configuration"),(0,i.kt)("p",null,"IPv4/IPv6 dual-stack networking enables the allocation of both IPv4 and IPv6 addresses to Pods and Services. It is supported in RKE2 since v1.21, stable since v1.23 but not activated by default. To activate it correctly, both RKE2 and the chosen CNI plugin must be configured accordingly. To configure RKE2 in dual-stack mode, in the control-plane nodes, you must set a valid IPv4/IPv6 dual-stack cidr for pods and services. To do so, use the flags ",(0,i.kt)("inlineCode",{parentName:"p"},"--cluster-cidr")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--service-cidr")," for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'#/etc/rancher/rke2/config.yaml\ncluster-cidr: "10.42.0.0/16,2001:cafe:42:0::/56"\nservice-cidr: "10.43.0.0/16,2001:cafe:42:1::/112"\n')),(0,i.kt)("p",null,"Each CNI plugin requires a different configuration for dual-stack:"),(0,i.kt)(p,{groupId:"CNIplugin",mdxType:"Tabs"},(0,i.kt)(d,{value:"Canal CNI plugin",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Canal automatically detects the RKE2 configuration for dual-stack and does not need any extra configuration. Dual-stack is currently not supported in the windows installations of RKE2.")),(0,i.kt)(d,{value:"Cilium CNI plugin",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Cilium automatically detects the RKE2 configuration for dual-stack and does not need any extra configuration.")),(0,i.kt)(d,{value:"Calico CNI plugin",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Calico automatically detects the RKE2 configuration for dual-stack and does not need any extra configuration. When deployed in dual-stack mode, it creates two different ippool resources. Note that when using dual-stack, calico leverages BGP instead of VXLAN encapsulation. Dual-stack and BGP are currently not supported in the windows installations of RKE2."))),(0,i.kt)("h2",{id:"ipv6-setup"},"IPv6 setup"),(0,i.kt)("p",null,"In case of IPv6 only configuration RKE2 needs to use ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," to access the liveness URL of the ETCD pod; check that your operating system configures ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file correctly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"::1       localhost\n")),(0,i.kt)("h2",{id:"using-multus"},"Using Multus"),(0,i.kt)("p",null,"Starting with RKE2 v1.21 it is possible to deploy the Multus CNI meta-plugin. Note that this is for advanced users."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"Multus CNI")," is a CNI plugin that enables attaching multiple network interfaces to pods. Multus does not replace CNI plugins, instead it acts as a CNI plugin multiplexer. Multus is useful in certain use cases, especially when pods are network intensive and require extra network interfaces that support dataplane acceleration techniques such as SR-IOV."),(0,i.kt)("p",null,"Multus can not be deployed standalone. It always requires at least one conventional CNI plugin that fulfills the Kubernetes cluster network requirements. That CNI plugin becomes the default for Multus, and will be used to provide the primary interface for all pods."),(0,i.kt)("p",null,"To enable Multus, add multus as the first list entry in the cni config key, followed by the name of the plugin you want to use alongside Multus (or ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," if you will provide your own default plugin). Note that multus must always be in the first position of the list. For example, to use Multus with canal as the default plugin you could specify:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# /etc/rancher/rke2/config.yaml\ncni:\n- multus\n- canal\n")),(0,i.kt)("p",null,"This can also be specified with command-line arguments, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"--cni=multus,canal")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--cni=multus --cni=canal"),"."),(0,i.kt)("p",null,"For more information about Multus, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni/tree/master/docs"},"multus-cni")," documentation."),(0,i.kt)("h2",{id:"using-multus-with-cilium"},"Using Multus with Cilium"),(0,i.kt)("p",null,"To use Cilium with Multus the ",(0,i.kt)("inlineCode",{parentName:"p"},"exclusive")," config needs to be disabled.\nYou can do this by using the following HelmChartConfig:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-cilium-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-cilium\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    cni:\n      exclusive: false\n")),(0,i.kt)("h2",{id:"using-multus-with-the-containernetworking-plugins"},"Using Multus with the containernetworking plugins"),(0,i.kt)("p",null,"Any CNI plugin can be used as secondary CNI plugin for Multus to provide additional network interfaces attached to a pod. However, it is most common to use the CNI plugins maintained by the containernetworking team (bridge, host-device,\nmacvlan, etc) as secondary CNI plugins for Multus. These containernetworking plugins are automatically deployed when installing Multus. For more information about these plugins, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current"},"containernetworking plugins")," documentation."),(0,i.kt)("p",null,"To use any of these plugins, a proper NetworkAttachmentDefinition object will need to be created to define the configuration of the secondary network. The definition is then referenced by pod annotations, which Multus will use to provide extra interfaces to that pod. An example using the macvlan cni plugin with Mu is available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni/blob/master/docs/quickstart.md#storing-a-configuration-as-a-custom-resource"},"in the multus-cni repo"),"."),(0,i.kt)("h2",{id:"using-multus-with-the-whereabouts-cni"},"Using Multus with the Whereabouts CNI"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/whereabouts"},"Whereabouts")," is an IP Address Management (IPAM) CNI plugin that assigns IP addresses cluster-wide.\nStarting with RKE2 1.22, RKE2 includes the option to use Whereabouts with Multus to manage the IP addresses of the additional interfaces created through Multus.\nIn order to do this, you need to use ",(0,i.kt)("a",{parentName:"p",href:"/helm#customizing-packaged-components-with-helmchartconfig"},"HelmChartConfig")," to configure the Multus CNI to use Whereabouts."),(0,i.kt)("p",null,"You can do this by using the following HelmChartConfig:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-multus-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-multus\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    rke2-whereabouts:\n      enabled: true\n")),(0,i.kt)("p",null,"This will configure the chart for Multus to use ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2-whereabouts")," as a dependency."),(0,i.kt)("p",null,"If you want to customize the Whereabouts image, this is possible like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-multus-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-multus\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    rke2-whereabouts:\n      enabled: true\n      image:\n        repository: ghcr.io/k8snetworkplumbingwg/whereabouts\n        tag: latest-amd64\n")),(0,i.kt)("p",null,"NOTE: You should write this file before starting rke2."),(0,i.kt)("h2",{id:"using-multus-with-sr-iov"},"Using Multus with SR-IOV"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SR-IOV experimental support was added in v1.21.2+rke2r1, and is fully supported starting with the April 2023 releases: v1.26.4+rke2r1, v1.25.9+rke2r1, and v1.24.13+rke2r1")),(0,i.kt)("p",null,"Using the SR-IOV CNI with Multus can help with data-plane acceleration use cases, providing an extra interface in the pod that can achieve very high throughput. SR-IOV will not work in all environments, and there are several requirements\nthat must be fulfilled to consider the node as SR-IOV capable:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Physical NIC must support SR-IOV (e.g. by checking /sys/class/net/$NIC/device/sriov_totalvfs)"),(0,i.kt)("li",{parentName:"ul"},"The host operating system must activate IOMMU virtualization"),(0,i.kt)("li",{parentName:"ul"},"The host operating system includes drivers capable of doing sriov (e.g. i40e, vfio-pci, etc)")),(0,i.kt)("p",null,"The SR-IOV CNI plugin cannot be used as the default CNI plugin for Multus; it must be deployed alongside both Multus and a traditional CNI plugin. The SR-IOV CNI helm chart can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-charts")," Helm repo. For more information see ",(0,i.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/helm-charts-in-rancher"},"Rancher Helm Charts documentation"),"."),(0,i.kt)("p",null,"After installing the SR-IOV CNI chart, the SR-IOV operator will be deployed. Then, the user must specify what nodes in the cluster are SR-IOV capable by labeling them with ",(0,i.kt)("inlineCode",{parentName:"p"},"feature.node.kubernetes.io/network-sriov.capable=true"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label node $NODE-NAME feature.node.kubernetes.io/network-sriov.capable=true\n")),(0,i.kt)("p",null,"Once labeled, the sriov-network-config Daemonset will deploy a pod to the node to collect information about the network interfaces. That information is available through the ",(0,i.kt)("inlineCode",{parentName:"p"},"sriovnetworknodestates")," Custom Resource Definition. A couple of\nminutes after the deployment, there will be one ",(0,i.kt)("inlineCode",{parentName:"p"},"sriovnetworknodestates")," resource per node, with the name of the node as the resource name."),(0,i.kt)("p",null,"NOTE: the SR-IOV CNI chart from ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-charts")," now includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"node-feature-discovery")," chart as an automatic dependency. This chart deploys a small daemonset that automatically labels each node based on the capabilities detected on that node. This works for both hardware and software features. In particular, ",(0,i.kt)("inlineCode",{parentName:"p"},"node-feature-discovery")," can automatically add the label ",(0,i.kt)("inlineCode",{parentName:"p"},"feature.node.kubernetes.io/network-sriov.capable=true")," when it detects a compatible node.\nFor more information, see the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes-sigs.github.io/node-feature-discovery/v0.11/get-started/introduction.html"},"NFD documentation"),"."),(0,i.kt)("p",null,"However, the latest versions of the sriov-network-operator also include a whitelist of supported hardware so sriov will actually be available only with the NICs on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/sriov-network-operator/blob/master/doc/supported-hardware.md"},"that list"),". If you want to use the SR-IOV CNI with a NIC that is not on the list, you will need to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"supported-nic-ids")," configMap yourself."),(0,i.kt)("p",null,"For more information about how to use the SR-IOV operator, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/sriov-network-operator/blob/master/doc/quickstart.md#configuration"},"sriov-network-operator")))}k.isMDXComponent=!0}}]);