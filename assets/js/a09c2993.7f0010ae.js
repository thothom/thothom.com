"use strict";(self.webpackChunkthothom_com=self.webpackChunkthothom_com||[]).push([[128],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:0},l="Introduction",c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"ThothOM (or Thoth, for the close friends) is an Object Mapper (ORM + ODM), built in TypeScript and inspired on TypeORM syntax and ESLint plugable approach.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/thothom/thothom.com/edit/master/docs/introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"First Steps",permalink:"/docs/overview/first-steps"}},p=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Goal",id:"goal",children:[],level:2},{value:"We need your help!",id:"we-need-your-help",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"ThothOM ",(0,a.kt)("em",{parentName:"p"},"(or Thoth, for the close friends)")," is an ",(0,a.kt)("strong",{parentName:"p"},"Object Mapper")," (",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/spidernitt/orm-and-odm-a-brief-introduction-369046ec57eb"},"ORM + ODM"),"), built in TypeScript and inspired on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typeorm/typeorm"},"TypeORM syntax")," and ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint plugable approach"),"."),(0,a.kt)("p",null,"Our intention here is standardize the connection and implementation of ",(0,a.kt)("strong",{parentName:"p"},"every database")," with the best performance possible, and for this, we use an plugable approach, so more people can contribute and create their own integration. This package alone can't do much, the plugins do the work of connect and handle the database."),(0,a.kt)("p",null,"Currently it only works on Node with TypeScript (and transpiled JavaScript), and we plan to keep this way."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"In recent years, a lot of new databases are being created and a lot more of data is being generated, stored and manipulated. To provide the more perfect product possible to their clients, the companies are changing or using multiples databases at the same time with a increasingly frequency."),(0,a.kt)("p",null,"To handle all this databases, the developers must learn from the scratch how to use the provided SDK, how to make queries, how to setup the database, and a bunch of information non-related to the product or to the systems that they are building, forcing then to wast precious time and money."),(0,a.kt)("p",null,"With these problems in mind, we come with the solution: A OM that can communicate with ",(0,a.kt)("strong",{parentName:"p"},"ALL")," databases, using the same syntax, the same methods, and the same configuration."),(0,a.kt)("p",null,"But how to do this? It's impossible to only one team do this alone. And what about the complexity and the package size? It would be insanely inefficient. So we choose to make an ",(0,a.kt)("strong",{parentName:"p"},"plugable")," OM, we handle the basics and provide all the support that the plugin creators need, so they can focus on what is really important: the database stuff."),(0,a.kt)("p",null,"Our goal here is to be the bridge from user to plugin-developer, making easy to then to communicate and understand each other. With this, everyone wins, and the development of everything can be spliced and accelerated."),(0,a.kt)("h2",{id:"goal"},"Goal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Easy to use"),(0,a.kt)("li",{parentName:"ul"},"Easy to code plugins"),(0,a.kt)("li",{parentName:"ul"},"Well documented"),(0,a.kt)("li",{parentName:"ul"},"Focus on microservices and serverless applications"),(0,a.kt)("li",{parentName:"ul"},"Extremely specific features are not supported, but a large enough number of features that will do the job for 90% of the projects.")),(0,a.kt)("h2",{id:"we-need-your-help"},"We need your help!"),(0,a.kt)("p",null,"We are needing translators for all languages! If you want to be a volunteer, please contact us on the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/NMtAJ6whG7"},"Discord")," or create a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/thothom/thothom.com"},"pull request"),"!"))}d.isMDXComponent=!0}}]);