"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[924],{7068:(e,t,l)=>{l.r(t),l.d(t,{default:()=>k});var a=l(7294),n=l(6010),r=l(9960),o=l(2263);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function g(){const e=u();return{selectMessage:(t,l)=>function(e,t,l){const a=e.split("|");if(1===a.length)return a[0];a.length>l.pluralForms.length&&console.error(`For locale=${l.locale}, a maximum of ${l.pluralForms.length} plural forms are expected (${l.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=l.select(t),r=l.pluralForms.indexOf(n);return a[Math.min(r,a.length-1)]}(l,t,e)}}var m=l(1944),d=l(5281),h=l(5999),p=l(215),f=l(197);function E(e){let{doc:t}=e;return a.createElement("article",{className:"margin-vert--lg"},a.createElement(r.Z,{to:t.permalink},a.createElement("h2",null,t.title)),t.description&&a.createElement("p",null,t.description))}function k(e){let{tag:t}=e;const l=function(){const{selectMessage:e}=g();return t=>e(t,(0,h.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:t}))}(),o=(0,h.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:l(t.count),tagName:t.label});return a.createElement(m.FG,{className:(0,n.Z)(d.k.wrapper.docsPages,d.k.page.docsTagDocListPage)},a.createElement(m.d,{title:o}),a.createElement(f.Z,{tag:"doc_tag_doc_list"}),a.createElement(p.Z,null,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("main",{className:"col col--8 col--offset-2"},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,o),a.createElement(r.Z,{href:t.allTagsPath},a.createElement(h.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.createElement("section",{className:"margin-vert--lg"},t.items.map((e=>a.createElement(E,{key:e.id,doc:e})))))))))}}}]);