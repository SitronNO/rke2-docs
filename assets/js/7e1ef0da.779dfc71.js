"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[7421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=p(r),u=a,m=k["".concat(i,".").concat(u)]||k[u]||c[u]||s;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const s={title:"Etcd Backup and Restore"},o="Etcd Backup and Restore",l={unversionedId:"backup_restore",id:"backup_restore",title:"Etcd Backup and Restore",description:"In this section, you'll learn how to create backups of the rke2 cluster data and to restore the cluster from backup.",source:"@site/docs/backup_restore.md",sourceDirName:".",slug:"/backup_restore",permalink:"/backup_restore",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/backup_restore.md",tags:[],version:"current",lastUpdatedAt:1682542402,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{title:"Etcd Backup and Restore"},sidebar:"mySidebar",previous:{title:"Cluster Access",permalink:"/cluster_access"},next:{title:"Networking",permalink:"/networking"}},i={},p=[{value:"Creating Snapshots",id:"creating-snapshots",level:3},{value:"Cluster Reset",id:"cluster-reset",level:2},{value:"Restoring a Snapshot to Existing Nodes",id:"restoring-a-snapshot-to-existing-nodes",level:3},{value:"Restoring a Snapshot to New Nodes",id:"restoring-a-snapshot-to-new-nodes",level:3},{value:"Other Notes on Restoring a Snapshot",id:"other-notes-on-restoring-a-snapshot",level:3},{value:"Version-specific requirement for rke2 v1.20.11+rke2r1",id:"version-specific-requirement-for-rke2-v12011rke2r1",level:4},{value:"Options",id:"options",level:3},{value:"S3 Compatible API Support",id:"s3-compatible-api-support",level:3}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"etcd-backup-and-restore"},"Etcd Backup and Restore"),(0,a.kt)("p",null,"In this section, you'll learn how to create backups of the rke2 cluster data and to restore the cluster from backup."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," /var/lib/rancher/rke2 is the default data directory for rke2, it is configurable however via ",(0,a.kt)("inlineCode",{parentName:"p"},"data-dir")," parameter."),(0,a.kt)("h3",{id:"creating-snapshots"},"Creating Snapshots"),(0,a.kt)("p",null,"Snapshots are enabled by default."),(0,a.kt)("p",null,"The snapshot directory defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/db/snapshots"),"."),(0,a.kt)("p",null,"To configure the snapshot interval or the number of retained snapshots, refer to the ",(0,a.kt)("a",{parentName:"p",href:"#options"},"options.")),(0,a.kt)("p",null,"In RKE2, snapshots are stored on each etcd node. If you have multiple etcd or etcd + control-plane nodes, you will have multiple copies of local etcd snapshots."),(0,a.kt)("p",null,"You can take a snapshot manually while RKE2 is running with the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," subcommand. For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 etcd-snapshot save --name pre-upgrade-snapshot"),". See the full list of etcd-snapshot subcommands at the ",(0,a.kt)("a",{parentName:"p",href:"/reference/subcommands#etcd-snapshot"},"subcommands page")),(0,a.kt)("h2",{id:"cluster-reset"},"Cluster Reset"),(0,a.kt)("p",null,"RKE2 enables a feature to reset the cluster to one member cluster by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"--cluster-reset")," flag, when passing this flag to rke2 server it will reset the cluster with the same data dir in place, the data directory for etcd exists in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/db/etcd"),", this flag can be passed in the events of quorum loss in the cluster."),(0,a.kt)("p",null,"To pass the reset flag, first you need to stop RKE2 service if its enabled via systemd:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop rke2-server\nrke2 server --cluster-reset\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:"),"  A message in the logs say that RKE2 can be restarted without the flags. Start rke2 again and it should start rke2 as a 1 member cluster."),(0,a.kt)("h3",{id:"restoring-a-snapshot-to-existing-nodes"},"Restoring a Snapshot to Existing Nodes"),(0,a.kt)("p",null,"When RKE2 is restored from backup, the old data directory will be moved to ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/db/etcd-old-%date%/"),". RKE2 will then attempt to restore the snapshot by creating a new data directory and start etcd with a new RKE2 cluster with one etcd member."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You must stop RKE2 service on all server nodes if it is enabled via systemd. Use the following command to do so:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop rke2-server\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Next, you will initiate the restore from snapshot on the first server node with the following commands:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rke2 server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Once the restore process is complete, start the rke2-server service on the first server node as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl start rke2-server\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Remove the rke2 db directory on the other server nodes as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rm -rf /var/lib/rancher/rke2/server/db\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Start the rke2-server service on other server nodes with the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl start rke2-server\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:"),"  After a successful restore, a message in the logs says that etcd is running, and RKE2 can be restarted without the flags. Start RKE2 again, and it should run successfully and be restored from the specified snapshot."),(0,a.kt)("p",null,"When rke2 resets the cluster, it creates an empty file at ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/db/reset-flag"),". This file is harmless to leave in place, but must be removed in order to perform subsequent resets or restores. This file is deleted when rke2 starts normally."),(0,a.kt)("h3",{id:"restoring-a-snapshot-to-new-nodes"},"Restoring a Snapshot to New Nodes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Warning:")," For all versions of rke2 v.1.20.9 and prior, you will need to back up and restore certificates first due to a known issue in which bootstrap data might not save on restore (Steps 1 - 3 below assume this scenario). See ",(0,a.kt)("a",{parentName:"p",href:"#other-notes-on-restoring-a-snapshot"},"note")," below for an additional version-specific restore caveat on restore."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Back up the following: ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/cred"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/tls"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/token"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restore the certs in Step 1 above to the first new server node.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install rke2 v1.20.8+rke2r1 on the first new server node as in the following example:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -sfL https://get.rke2.io | INSTALL_RKE2_VERSION="v1.20.8+rke2r1" sh -\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Stop RKE2 service on all server nodes if it is enabled and initiate the restore from snapshot on the first server node with the following commands:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl stop rke2-server\nrke2 server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Once the restore process is complete, start the rke2-server service on the first server node as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl start rke2-server\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"You can continue to add new server and worker nodes to cluster per standard ",(0,a.kt)("a",{parentName:"li",href:"/install/ha#3-launch-additional-server-nodes"},"RKE2 HA installation documentation"),".")),(0,a.kt)("h3",{id:"other-notes-on-restoring-a-snapshot"},"Other Notes on Restoring a Snapshot"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When performing a restore from backup, users do not need to restore a snapshot using the same version of RKE2 with which the snapshot was created. Users may restore using a more recent version. Be aware when changing versions at restore which etcd version is in use.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"By default, snapshots are enabled and are scheduled to be taken every 12 hours. The snapshots are written to ",(0,a.kt)("inlineCode",{parentName:"p"},"${data-dir}/server/db/snapshots")," with the default ",(0,a.kt)("inlineCode",{parentName:"p"},"${data-dir}")," being ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2"),"."))),(0,a.kt)("h4",{id:"version-specific-requirement-for-rke2-v12011rke2r1"},"Version-specific requirement for rke2 v1.20.11+rke2r1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When restoring RKE2 from backup to a new node in rke2 v1.20.11+rke2r1, you should ensure that all pods are stopped following the initial restore by running ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-killall.sh")," as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.rke2.io | sudo INSTALL_RKE2_VERSION=v1.20.11+rke2r1\nrke2 server \\\n--cluster-reset \\\n--cluster-reset-restore-path=<PATH-TO-SNAPSHOT> \\\n--token=<token used in the original cluster>\nrke2-killall.sh\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once the restore process is complete, enable and start the rke2-server service on the first server node as follows:    "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"systemctl enable rke2-server\nsystemctl start rke2-server\n")))),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("p",null,"These options can be set in the configuration file:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Options"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"etcd-disable-snapshots")),(0,a.kt)("td",{parentName:"tr",align:null},"Disable automatic etcd snapshots")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"etcd-snapshot-schedule-cron")," value"),(0,a.kt)("td",{parentName:"tr",align:null},"Snapshot interval time in cron spec. eg. every 4 hours ",(0,a.kt)("inlineCode",{parentName:"td"},"0 */4 * * *"),"(default: ",(0,a.kt)("inlineCode",{parentName:"td"},"0 */12 * * *"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"etcd-snapshot-retention")," value"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of snapshots to retain (default: 5)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"etcd-snapshot-dir")," value"),(0,a.kt)("td",{parentName:"tr",align:null},"Directory to save db snapshots. (Default location: ",(0,a.kt)("inlineCode",{parentName:"td"},"${data-dir}/db/snapshots"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cluster-reset")),(0,a.kt)("td",{parentName:"tr",align:null},"Forget all peers and become sole member of a new cluster. This can also be set with the environment variable ",(0,a.kt)("inlineCode",{parentName:"td"},"[$RKE2_CLUSTER_RESET]"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cluster-reset-restore-path")," value"),(0,a.kt)("td",{parentName:"tr",align:null},"Path to snapshot file to be restored")))),(0,a.kt)("h3",{id:"s3-compatible-api-support"},"S3 Compatible API Support"),(0,a.kt)("p",null,"rke2 supports writing etcd snapshots to and restoring etcd snapshots from systems with S3-compatible APIs. S3 support is available for both on-demand and scheduled snapshots."),(0,a.kt)("p",null,"The arguments below have been added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," subcommand. These flags exist for the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," subcommand as well however the ",(0,a.kt)("inlineCode",{parentName:"p"},"--etcd-s3")," portion is removed to avoid redundancy."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Options"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3")),(0,a.kt)("td",{parentName:"tr",align:null},"Enable backup to S3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-endpoint")),(0,a.kt)("td",{parentName:"tr",align:null},"S3 endpoint url")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-endpoint-ca")),(0,a.kt)("td",{parentName:"tr",align:null},"S3 custom CA cert to connect to S3 endpoint")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-skip-ssl-verify")),(0,a.kt)("td",{parentName:"tr",align:null},"Disables S3 SSL certificate validation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-access-key")),(0,a.kt)("td",{parentName:"tr",align:null},"S3 access key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-secret-key")),(0,a.kt)("td",{parentName:"tr",align:null},"S3 secret key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-bucket")),(0,a.kt)("td",{parentName:"tr",align:null},"S3 bucket name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-region")),(0,a.kt)("td",{parentName:"tr",align:null},"S3 region / bucket location (optional). defaults to us-east-1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-folder")),(0,a.kt)("td",{parentName:"tr",align:null},"S3 folder")))),(0,a.kt)("p",null,"To perform an on-demand etcd snapshot and save it to S3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rke2 etcd-snapshot \\\n  --s3 \\\n  --s3-bucket=<S3-BUCKET-NAME> \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY>\n")),(0,a.kt)("p",null,"To perform an on-demand etcd snapshot restore from S3, first make sure that rke2 isn't running. Then run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rke2 server \\\n  --cluster-reset \\\n  --etcd-s3 \\\n  --cluster-reset-restore-path=<SNAPSHOT-NAME> \\\n  --etcd-s3-bucket=<S3-BUCKET-NAME> \\\n  --etcd-s3-access-key=<S3-ACCESS-KEY> \\\n  --etcd-s3-secret-key=<S3-SECRET-KEY>\n")))}c.isMDXComponent=!0}}]);