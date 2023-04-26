"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[6691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_label:"Known Issues and Limits",title:"Known Issues and Limitations"},o=void 0,s={unversionedId:"known_issues",id:"known_issues",title:"Known Issues and Limitations",description:"This section contains current known issues and limitations with rke2. If you come across issues with rke2 not documented here, please open a new issue here.",source:"@site/docs/known_issues.md",sourceDirName:".",slug:"/known_issues",permalink:"/known_issues",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/known_issues.md",tags:[],version:"current",lastUpdatedAt:1682542402,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{sidebar_label:"Known Issues and Limits",title:"Known Issues and Limitations"},sidebar:"mySidebar",previous:{title:"Windows Agent Configuration Reference",permalink:"/reference/windows_agent_config"}},l={},c=[{value:"Firewalld conflicts with default networking",id:"firewalld-conflicts-with-default-networking",level:2},{value:"NetworkManager",id:"networkmanager",level:2},{value:"Istio in Selinux Enforcing System Fails by Default",id:"istio-in-selinux-enforcing-system-fails-by-default",level:2},{value:"Control Groups V2",id:"control-groups-v2",level:2},{value:"Calico with vxlan encapsulation",id:"calico-with-vxlan-encapsulation",level:2},{value:"Wicked",id:"wicked",level:2},{value:"Canal and IP exhaustion",id:"canal-and-ip-exhaustion",level:2},{value:"Ingress in CIS Mode",id:"ingress-in-cis-mode",level:2},{value:"Upgrading Hardened Clusters from v1.24.x to v1.25.x",id:"hardened-125",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section contains current known issues and limitations with rke2. If you come across issues with rke2 not documented here, please open a new issue ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/issues"},"here"),"."),(0,i.kt)("h2",{id:"firewalld-conflicts-with-default-networking"},"Firewalld conflicts with default networking"),(0,i.kt)("p",null,"Firewalld conflicts with RKE2's default Canal (Calico + Flannel) networking stack. To avoid unexpected behavior, firewalld should be disabled on systems running RKE2."),(0,i.kt)("h2",{id:"networkmanager"},"NetworkManager"),(0,i.kt)("p",null,"NetworkManager manipulates the routing table for interfaces in the default network namespace where many CNIs, including RKE2's default, create veth pairs for connections to containers. This can interfere with the CNI\u2019s ability to route correctly. As such, if installing RKE2 on a NetworkManager enabled system, it is highly recommended to configure NetworkManager to ignore calico/flannel related network interfaces. In order to do this, create a configuration file called ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2-canal.conf")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/NetworkManager/conf.d")," with the contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[keyfile]\nunmanaged-devices=interface-name:cali*;interface-name:flannel*\n")),(0,i.kt)("p",null,"If you have not yet installed RKE2, a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"systemctl reload NetworkManager")," will suffice to install the configuration. If performing this configuration change on a system that already has RKE2 installed, a reboot of the node is necessary to effectively apply the changes."),(0,i.kt)("p",null,"In some operating systems like RHEL 8.4, NetworkManager includes two extra services called ",(0,i.kt)("inlineCode",{parentName:"p"},"nm-cloud-setup.service")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nm-cloud-setup.timer"),".  These services add a routing table that interfere with the CNI plugin's configuration. Unfortunately, there is no config that can avoid that as explained in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/issues/1053"},"issue"),". Therefore, if those services exist, they should be disabled. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  Before NetworkManager-1.30.0-11.el8_4, the node must also be rebooted after disabling the extra services.")),(0,i.kt)("h2",{id:"istio-in-selinux-enforcing-system-fails-by-default"},"Istio in Selinux Enforcing System Fails by Default"),(0,i.kt)("p",null,"This is due to just-in-time kernel module loading of rke2, which is disallowed under Selinux unless the container is privileged.\nTo allow Istio to run under these conditions, it requires two steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/setup/additional-setup/cni/"},"Enable CNI")," as part of the Istio install. Please note that this ",(0,i.kt)("a",{parentName:"li",href:"https://istio.io/latest/about/feature-stages/"},"feature")," is still in Alpha state at the time of this writing.\nEnsure ",(0,i.kt)("inlineCode",{parentName:"li"},"values.cni.cniBinDir=/opt/cni/bin")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"values.cni.cniConfDir=/etc/cni/net.d")),(0,i.kt)("li",{parentName:"ol"},"After the install is complete, there should be ",(0,i.kt)("inlineCode",{parentName:"li"},"cni-node")," pods in a CrashLoopBackoff. Manually edit their daemonset to include ",(0,i.kt)("inlineCode",{parentName:"li"},"securityContext.privileged: true")," on the ",(0,i.kt)("inlineCode",{parentName:"li"},"install-cni")," container.")),(0,i.kt)("p",null,"This can be performed via a custom overlay as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nspec:\n  components:\n    cni:\n      enabled: true\n      k8s:\n        overlays:\n        - apiVersion: "apps/v1"\n          kind: "DaemonSet"\n          name: "istio-cni-node"\n          patches:\n          - path: spec.template.spec.containers.[name:install-cni].securityContext.privileged\n            value: true\n  values:\n    cni:\n      image: rancher/mirrored-istio-install-cni:1.9.3\n      excludeNamespaces:\n      - istio-system\n      - kube-system\n      logLevel: info\n      cniBinDir: /opt/cni/bin\n      cniConfDir: /etc/cni/net.d\n')),(0,i.kt)("p",null,"For more information regarding exact failures with detailed logs when not following these steps, please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/issues/504"},"Issue 504"),"."),(0,i.kt)("h2",{id:"control-groups-v2"},"Control Groups V2"),(0,i.kt)("p",null,"RKE2 v1.19.5+ ships with ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd")," v1.4.x or later, hence should run on cgroups v2 capable systems.",(0,i.kt)("br",{parentName:"p"}),"\n","Older versions (< 1.19.5) are shipped with containerd 1.3.x fork (with back-ported SELinux commits from 1.4.x)\nwhich does not support cgroups v2 and requires a little up-front configuration:"),(0,i.kt)("p",null,"Assuming a ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd"),"-based system, setting the ",(0,i.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/systemd.html#systemd.unified_cgroup_hierarchy"},"systemd.unified_cgroup_hierarchy=0"),"\nkernel parameter will indicate to systemd that it should run with hybrid (cgroups v1 + v2) support.\nCombined with the above, setting the ",(0,i.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/systemd.html#systemd.legacy_systemd_cgroup_controller"},"systemd.legacy_systemd_cgroup_controller"),"\nkernel parameter will indicate to systemd that it should run with legacy (cgroups v1) support.\nAs these are kernel command-line arguments they must be set in the system bootloader so that they will be\npassed to ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd")," as PID 1 at ",(0,i.kt)("inlineCode",{parentName:"p"},"/sbin/init"),"."),(0,i.kt)("p",null,"See:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/grub/manual/grub/grub.html#linux"},"grub2 manual")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.freedesktop.org/software/systemd/man/systemd.html#Kernel%20Command%20Line"},"systemd manual")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html"},"cgroups v2"))),(0,i.kt)("h2",{id:"calico-with-vxlan-encapsulation"},"Calico with vxlan encapsulation"),(0,i.kt)("p",null,"Calico hits a kernel bug when using vxlan encapsulation and the checksum offloading of the vxlan interface is on.\nThe issue is described in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/projectcalico/calico/issues/4865"},"calico project")," and in\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/issues/1541"},"rke2 project"),". The workaround we are applying is disabling the checksum\noffloading by default by applying the value ",(0,i.kt)("inlineCode",{parentName:"p"},"ChecksumOffloadBroken=true")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-charts/blob/main/charts/rke2-calico/rke2-calico/v3.25.001/values.yaml#L75-L76"},"calico helm chart"),"."),(0,i.kt)("p",null,"This issue has been observed in Ubuntu 18.04, Ubuntu 20.04 and openSUSE Leap 15.3"),(0,i.kt)("h2",{id:"wicked"},"Wicked"),(0,i.kt)("p",null,"Wicked configures the networking settings of the host based on the sysctl configuration files (e.g. under /etc/sysctl.d/ directory). Even though rke2 is setting parameters such as ",(0,i.kt)("inlineCode",{parentName:"p"},"/net/ipv4/conf/all/forwarding")," to 1, that configuration could be reverted by Wicked whenever it reapplies the network configuration (there are several events that result in reapplying the network configuration as well as rcwicked restart during updates). Consequently, it is very important to enable ipv4 (and ipv6 in case of dual-stack) forwarding in sysctl configuration files. For example, it is recommended to create a file with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.d/90-rke2.conf")," containing these parameters (ipv6 only needed in case of dual-stack):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"net.ipv4.conf.all.forwarding=1\nnet.ipv6.conf.all.forwarding=1\n")),(0,i.kt)("h2",{id:"canal-and-ip-exhaustion"},"Canal and IP exhaustion"),(0,i.kt)("p",null,"There are two possible reasons for this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"iptables")," binary is not installed in the host and there is a pod defining a hostPort. The pod will be given an IP but its creation will fail and Kubernetes will not cease trying to recreate it, consuming one IP every time it tries. Error messages similar to the following will appear in the containerd log. This is the log showing the error:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'plugin type="portmap" failed (add): failed to open iptables: exec: "iptables": executable file not found in $PATH \n')),(0,i.kt)("p",null,"Please install iptables or xtables-nft package to resolve this problem"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"By default Canal keeps track of pod IPs by creating a lock file for each IP in ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/lib/cni/networks/k8s-pod-network"),". Each IP belongs to a single pod and will be deleted as soon as the pod is removed. However, in the unlikely event that containerd loses track of the running pods, lock files may be leaked and Canal will not be able to reuse those IPs anymore. If this occurs, you may experience IP exhaustion errors, for example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"failed to allocate for range 0: no IP addresses available in range set\n")),(0,i.kt)("p",null,"There are two ways to resolve this. You can either manually remove unused IPs from that directory or drain the node, run rke2-killall.sh, start the rke2 systemd service and uncordon the node. If you need to undertake any of these actions, please report the problem via GitHub, making sure to specify how it was triggered."),(0,i.kt)("h2",{id:"ingress-in-cis-mode"},"Ingress in CIS Mode"),(0,i.kt)("p",null,"By default, when RKE2 is run with a CIS profile selected by the ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," parameter, it applies network policies that can be restrictive for ingress. This, coupled with the ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2-ingress-nginx")," chart having ",(0,i.kt)("inlineCode",{parentName:"p"},"hostNetwork: false")," by default, requires users to set network policies of their own to allow access to the ingress URLs. Below is an example networkpolicy that allows ingress to any workload in the namespace it is applied in. See ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"https://kubernetes.io/docs/concepts/services-networking/network-policies/")," for more configuration options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: ingress-to-backends\nspec:\n  podSelector: {}\n  ingress:\n  - from:\n    - namespaceSelector:\n        matchLabels:\n          kubernetes.io/metadata.name: kube-system\n      podSelector:\n        matchLabels:\n          app.kubernetes.io/name: rke2-ingress-nginx\n  policyTypes:\n  - Ingress\n")),(0,i.kt)("p",null,"For more information, refer to comments on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/issues/3195"},"https://github.com/rancher/rke2/issues/3195"),"."),(0,i.kt)("h2",{id:"hardened-125"},"Upgrading Hardened Clusters from v1.24.x to v1.25.x"),(0,i.kt)("p",null,"Kubernetes removed PodSecurityPolicy from v1.25 in favor of Pod Security Standards. You can read more about PSS in the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/"},"upstream documentation"),". For RKE2, there are some manual steps that must be taken if the ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," flag has been set on the nodes."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On all nodes, update the ",(0,i.kt)("inlineCode",{parentName:"li"},"profile")," value to ",(0,i.kt)("inlineCode",{parentName:"li"},"cis-1.23"),", but do not restart or upgrade RKE2 yet."),(0,i.kt)("li",{parentName:"ol"},"Perform the upgrade as normal. If using ",(0,i.kt)("a",{parentName:"li",href:"/upgrade/automated_upgrade"},"Automated Upgrades"),", ensure that the namespace where the ",(0,i.kt)("inlineCode",{parentName:"li"},"system-upgrade-controller")," pod is running in is setup to be privileged in accordance with the ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/#pod-security-levels"},"Pod Security levels"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: system-upgrade\n  labels:\n    # This value must be privileged for the controller to run successfully.\n    pod-security.kubernetes.io/enforce: privileged\n    pod-security.kubernetes.io/enforce-version: v1.25\n    # We are setting these to our _desired_ `enforce` level, but note that these below values can be any of the available options.\n    pod-security.kubernetes.io/audit: privileged\n    pod-security.kubernetes.io/audit-version: v1.25\n    pod-security.kubernetes.io/warn: privileged\n    pod-security.kubernetes.io/warn-version: v1.25\n")))}d.isMDXComponent=!0}}]);