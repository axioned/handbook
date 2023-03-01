"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[23],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2,id:"html-checklist",title:"HTML Code Review Checklist",sidebar_label:"Code Review Checklist",tags:["HTML","HTML checklist"]},i="Checklist Pointers",l={unversionedId:"learning/html/html-checklist",id:"learning/html/html-checklist",title:"HTML Code Review Checklist",description:"1. The Doctype is HTML5 and is at the top of all your HTML pages.",source:"@site/docs/learning/html/code-review-checklist.md",sourceDirName:"learning/html",slug:"/learning/html/html-checklist",permalink:"/docs/learning/html/html-checklist",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/learning/html/code-review-checklist.md",tags:[{label:"HTML",permalink:"/docs/tags/html"},{label:"HTML checklist",permalink:"/docs/tags/html-checklist"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"html-checklist",title:"HTML Code Review Checklist",sidebar_label:"Code Review Checklist",tags:["HTML","HTML checklist"]},sidebar:"tutorialSidebar",previous:{title:"Training Template",permalink:"/docs/learning/html/html-training"},next:{title:"WordPress",permalink:"/docs/category/wordpress"}},s={},p=[],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"checklist-pointers"},"Checklist Pointers"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The Doctype is HTML5 and is at the top of all your HTML pages."),(0,n.kt)("li",{parentName:"ol"},"The charset declared (UTF-8) is declared correctly."),(0,n.kt)("li",{parentName:"ol"},"A title is used on all pages"),(0,n.kt)("li",{parentName:"ol"},"A meta description is provided, it is unique and doesn't possess more than 150 characters."),(0,n.kt)("li",{parentName:"ol"},"Favicons are added and displayed correctly"),(0,n.kt)("li",{parentName:"ol"},'Use rel="canonical" to avoid duplicate content.'),(0,n.kt)("li",{parentName:"ol"},"If your project is a blog or has articles, an RSS link was provided."),(0,n.kt)("li",{parentName:"ol"},"All CSS files are loaded before any JavaScript files in the HEAD"),(0,n.kt)("li",{parentName:"ol"},"Semantic tags are used appropriately"),(0,n.kt)("li",{parentName:"ol"},"Error pages for 404 / server errors exists"),(0,n.kt)("li",{parentName:"ol"},'In case you are using external links with target="_blank", your link should have a rel="noopener" attribute to prevent tab nabbing. If you need to support older versions of Firefox, use rel="noopener noreferrer"'),(0,n.kt)("li",{parentName:"ol"},"Unnecessary code needs to be removed before sending the page to production."),(0,n.kt)("li",{parentName:"ol"},"All pages need to be tested with the W3C validator to identify possible issues in the HTML code."),(0,n.kt)("li",{parentName:"ol"},"Use HTML validator to validate your code"),(0,n.kt)("li",{parentName:"ol"},"Your website shows your content correctly with adblocker enabled"),(0,n.kt)("li",{parentName:"ol"},"Make sure no links are broken on your page "),(0,n.kt)("li",{parentName:"ol"},"All images are optimized to be rendered in the browser."),(0,n.kt)("li",{parentName:"ol"},"You provide layout images 2x or 3x, support retina display."),(0,n.kt)("li",{parentName:"ol"},"Use sprites wherever feasible"),(0,n.kt)("li",{parentName:"ol"},"All ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"<img>"))," have an alternative text which describe the image visually."),(0,n.kt)("li",{parentName:"ol"},"Images are lazyloaded"),(0,n.kt)("li",{parentName:"ol"},"All anchor should has title attribute for SEO purpose"),(0,n.kt)("li",{parentName:"ol"},"Follow two tabs indentation"),(0,n.kt)("li",{parentName:"ol"},"Avoid using the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"<hr>"))," and ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"<br>"))," tags."),(0,n.kt)("li",{parentName:"ol"},"Avoid empty elements in the structure"),(0,n.kt)("li",{parentName:"ol"},"Abound using the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"<i>"))," tag for the icons. Simply use the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"<span>"))," tag and write the icon name and icon can be added via css using the pseudo elements(before & after)"),(0,n.kt)("li",{parentName:"ol"},"Add proper commenting to the code/section"),(0,n.kt)("li",{parentName:"ol"},"Use the wrapper properly."),(0,n.kt)("li",{parentName:"ol"},"Give meaningful classes."),(0,n.kt)("li",{parentName:"ol"},"Avoid inline and internal styling."),(0,n.kt)("li",{parentName:"ol"},"Wrap every input element, select, and textarea in a block level element."),(0,n.kt)("li",{parentName:"ol"},"Wrap every image inside a block level element."),(0,n.kt)("li",{parentName:"ol"},"Do not add any text in uppercase. Manage it via css.")),(0,n.kt)("admonition",{title:"HTML Checklist",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"HTML Checklist reference link can be found ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1kbpSVE_ysY8Is5qvuWfCDTTTMp_Wtt5js7FBZzqGODk/edit#gid=20521288"},(0,n.kt)("strong",{parentName:"a"},"here")),".")))}d.isMDXComponent=!0}}]);