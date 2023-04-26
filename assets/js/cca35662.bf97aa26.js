"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[4348],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={title:"Base Setup"},o=void 0,l={unversionedId:"processes/base-setup",id:"processes/base-setup",title:"Base Setup",description:"Essentials",source:"@site/docs/processes/base-setup.md",sourceDirName:"processes",slug:"/processes/base-setup",permalink:"/docs/processes/base-setup",draft:!1,editUrl:"https://github.com/axioned/handbook/tree/main/docs/processes/base-setup.md",tags:[],version:"current",frontMatter:{title:"Base Setup"},sidebar:"tutorialSidebar",previous:{title:"WP Engine",permalink:"/docs/processes/backup/wpenginebackup"},next:{title:"aws-cloudformation",permalink:"/docs/processes/provisioning/aws-cloudformation"}},s={},c=[{value:"Essentials",id:"essentials",level:2},{value:"Slack",id:"slack",level:3},{value:"Email alias",id:"email-alias",level:2},{value:"Folder structure",id:"folder-structure",level:2},{value:"Document access management",id:"document-access-management",level:3},{value:"Credentials management",id:"credentials-management",level:2},{value:"Naming conventions",id:"naming-conventions",level:2},{value:"Code",id:"code",level:3},{value:"Components (Modularity and Reusability)",id:"components-modularity-and-reusability",level:3},{value:"Design",id:"design",level:3},{value:"Documents",id:"documents",level:3},{value:"Scaffolds",id:"scaffolds",level:2},{value:"Generic",id:"generic",level:3},{value:"WordPress",id:"wordpress",level:3},{value:"React",id:"react",level:3},{value:"Node.js",id:"nodejs",level:3}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"essentials"},"Essentials"),(0,r.kt)("h3",{id:"slack"},"Slack"),(0,r.kt)("p",null,"You'd typically the following channels for your project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"#live-clientabv-projectabv"),": Public channel containing all Axioned team members assigned on the project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"#live-clientabv-projectabv-notifications"),": Public channel with the same Axioned members with Jira, Trello, Sentry, etc integration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"#live-clientname-projectabv-client"),": Shared channel with the client (if they are on Slack/use it as their prefered IM tool).")),(0,r.kt)("h2",{id:"email-alias"},"Email alias"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You would have an email alias that distributes all emails that's received on it to all the members."),(0,r.kt)("li",{parentName:"ul"},"If you need to get someone added - please reach out to ",(0,r.kt)("a",{parentName:"li",href:"mailto:itadmin@axioned.com"},"itadmin@axioned.com")," (or message on #it-support)")),(0,r.kt)("h2",{id:"folder-structure"},"Folder structure"),(0,r.kt)("h3",{id:"document-access-management"},"Document access management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Place them in the project folder"),(0,r.kt)("li",{parentName:"ul"},"Permissions to folder is best assigned to the email alias for the project",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This way, all new members added to the alias automatically inherit the access to the docuements vs. having to manually add them in both the places")))),(0,r.kt)("h2",{id:"credentials-management"},"Credentials management"),(0,r.kt)("h2",{id:"naming-conventions"},"Naming conventions"),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("h3",{id:"components-modularity-and-reusability"},"Components (Modularity and Reusability)"),(0,r.kt)("h3",{id:"design"},"Design"),(0,r.kt)("h3",{id:"documents"},"Documents"),(0,r.kt)("h2",{id:"scaffolds"},"Scaffolds"),(0,r.kt)("h3",{id:"generic"},"Generic"),(0,r.kt)("p",null,"Avaible here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axioned/axioned-starter"},"https://github.com/axioned/axioned-starter")),(0,r.kt)("h3",{id:"wordpress"},"WordPress"),(0,r.kt)("p",null,"Available here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axioned/axioned-wordpress-starter"},"https://github.com/axioned/axioned-wordpress-starter")),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("p",null,"Available here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axioned/axioned-react-starter"},"https://github.com/axioned/axioned-react-starter")),(0,r.kt)("h3",{id:"nodejs"},"Node.js"),(0,r.kt)("p",null,"Available here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axioned/axioned-node-starter"},"https://github.com/axioned/axioned-node-starter")))}u.isMDXComponent=!0}}]);