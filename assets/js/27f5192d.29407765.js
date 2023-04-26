"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[2424],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=m(a),c=r,g=k["".concat(p,".").concat(c)]||k[c]||s[c]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6910:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={id:"html-training",title:"HTML - HyperText Markup Language",sidebar_label:"Training Template",sidebar_position:1,tags:["html","html training","html reading topics","html topics"]},i=void 0,o={unversionedId:"learning/html/html-training",id:"learning/html/html-training",title:"HTML - HyperText Markup Language",description:"Overview",source:"@site/docs/learning/html/training-template.md",sourceDirName:"learning/html",slug:"/learning/html/html-training",permalink:"/docs/learning/html/html-training",draft:!1,editUrl:"https://github.com/axioned/handbook/tree/main/docs/learning/html/training-template.md",tags:[{label:"html",permalink:"/docs/tags/html"},{label:"html training",permalink:"/docs/tags/html-training"},{label:"html reading topics",permalink:"/docs/tags/html-reading-topics"},{label:"html topics",permalink:"/docs/tags/html-topics"}],version:"current",sidebarPosition:1,frontMatter:{id:"html-training",title:"HTML - HyperText Markup Language",sidebar_label:"Training Template",sidebar_position:1,tags:["html","html training","html reading topics","html topics"]},sidebar:"tutorialSidebar",previous:{title:"HTML",permalink:"/docs/category/html"},next:{title:"Code Review Checklist",permalink:"/docs/learning/html/html-checklist"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"<strong>HTML - Reading Topics</strong>",id:"html---reading-topics",level:2},{value:"1. Introduction to HTML",id:"1-introduction-to-html",level:3},{value:"2. Container and wrappers",id:"2-container-and-wrappers",level:3},{value:"3. Dom Description",id:"3-dom-description",level:3},{value:"4. Introduction to browsers Developer tool",id:"4-introduction-to-browsers-developer-tool",level:3},{value:"5. Character escape in HTML",id:"5-character-escape-in-html",level:3},{value:"6. Understanding Character encoding",id:"6-understanding-character-encoding",level:3}],d={toc:m};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)"),(0,r.kt)("p",null,'"Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.'),(0,r.kt)("p",null,'HTML uses "markup" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" such as ',(0,r.kt)("inlineCode",{parentName:"p"},"<head>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<title>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<body>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<header>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<footer>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<article>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<section>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<span>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<img>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<aside>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<audio>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<canvas>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<datalist>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<details>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<embed>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<nav>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<output>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<progress>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<video>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<ul>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<ol>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<li>")," and many others."),(0,r.kt)("h2",{id:"html---reading-topics"},(0,r.kt)("strong",{parentName:"h2"},"HTML - Reading Topics")),(0,r.kt)("h3",{id:"1-introduction-to-html"},"1. Introduction to HTML"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What is html? Whats new in HTML5?")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML"},"https://developer.mozilla.org/en-US/docs/Web/HTML")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://html.com/"},"https://html.com/")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://www.freecodecamp.org/news/what-is-the-doctype-declaration-in-html/"},"https://www.freecodecamp.org/news/what-is-the-doctype-declaration-in-html/")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://www.samanthaming.com/pictorials/css-inline-vs-inlineblock-vs-block/"},"https://www.samanthaming.com/pictorials/css-inline-vs-inlineblock-vs-block/")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://marksheet.io/html-forms.html"},"https://marksheet.io/html-forms.html"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What is doctype?")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What are head elements in HTML?")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What is inline element and block elements? List down all")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What are structural elements in HTML?")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What are list elements in HTML?")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Sementic Tags")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"8"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What are form elements?")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Read about forms")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"10"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"How it works")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"11"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Methods")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"12"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Actions")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"13"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Form elements")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"2-container-and-wrappers"},"2. Container and wrappers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What is Container"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What is Wrapper"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Difference between Container and Wrapper"))))),(0,r.kt)("h3",{id:"3-dom-description"},"3. Dom Description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Introduction to the DOM"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What is the DOM?"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Difference between Container and Wrapper"))))),(0,r.kt)("h3",{id:"4-introduction-to-browsers-developer-tool"},"4. Introduction to browsers Developer tool"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What are browser developer tools?"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"How to use them"))))),(0,r.kt)("h3",{id:"5-character-escape-in-html"},"5. Character escape in HTML"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What is Character escape"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Which characters need to be escaped in HTML?"))))),(0,r.kt)("h3",{id:"6-understanding-character-encoding"},"6. Understanding Character encoding"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"1) Why and How should I declare the encoding of my HTML file?"))))),(0,r.kt)("admonition",{title:"HTML Template Google Sheet",type:"tip"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"HTML Cheatsheet ",(0,r.kt)("a",{parentName:"li",href:"https://htmlcheatsheet.com/"},(0,r.kt)("em",{parentName:"a"},"Link 1"))," ",(0,r.kt)("a",{parentName:"li",href:"https://html.com/wp-content/uploads/html-cheat-sheet.pdf"},(0,r.kt)("em",{parentName:"a"},"Link 2"))),(0,r.kt)("li",{parentName:"ol"},"HTML Template Reference link can be found ",(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/18vnt-qOtInzMr0LIMzgzOiHP-LPeJ3KjRfZzckeWtUc/edit#gid=0"},(0,r.kt)("strong",{parentName:"a"},"here"))))))}s.isMDXComponent=!0}}]);