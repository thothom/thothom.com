"use strict";(self.webpackChunksymbiosis_techmmunity_com=self.webpackChunksymbiosis_techmmunity_com||[]).push([[977],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?i.createElement(k,l(l({ref:t},u),{},{components:n})):i.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8135:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],o={sidebar_position:1},s="DynamoDB",p={unversionedId:"plugins/dynamodb",id:"plugins/dynamodb",isDocsHomePage:!1,title:"DynamoDB",description:"DynamoDB is the most popular NoSQL database of AWS. It is very scalable and has a very attractive cost benefice.",source:"@site/docs/plugins/dynamodb.md",sourceDirName:"plugins",slug:"/plugins/dynamodb",permalink:"/docs/plugins/dynamodb",editUrl:"https://github.com/techmmunity/symbiosis.techmmunity.com/edit/master/docs/plugins/dynamodb.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Limitations And Warnings",permalink:"/docs/overview/limitations"},next:{title:"MongoDB",permalink:"/docs/plugins/mongodb"}},u=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Advices and alerts",id:"advices-and-alerts",children:[{value:"Methods NOT implemented",id:"methods-not-implemented",children:[],level:3},{value:"SaveOperators",id:"saveoperators",children:[],level:3},{value:"FindOperators",id:"findoperators",children:[],level:3},{value:"Special behavior",id:"special-behavior",children:[{value:"<code>.save()</code>",id:"save",children:[],level:4},{value:"<code>.delete()</code>",id:"delete",children:[],level:4},{value:"<code>.upsert()</code>",id:"upsert",children:[],level:4},{value:"<code>.find()</code>",id:"find",children:[],level:4}],level:3}],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dynamodb"},"DynamoDB"),(0,r.kt)("p",null,"DynamoDB is the most popular NoSQL database of AWS. It is very scalable and has a very attractive cost benefice."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"With Yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add @techmmunity/symbiosis-dynamodb\n")),(0,r.kt)("p",null,"With NPM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm i @techmmunity/symbiosis-dynamodb\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"This lib is currently under work, so we can complete integrate ",(0,r.kt)("inlineCode",{parentName:"p"},"@techmmunity/symbiosis")," and take advantage of all it's features."),(0,r.kt)("p",null,"It's use is exactly like described in ",(0,r.kt)("a",{parentName:"p",href:"../overview/first-steps"},"the first steps"),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/techmmunity-examples/symbiosis-dynamodb"},"Basic example"))),(0,r.kt)("h2",{id:"advices-and-alerts"},"Advices and alerts"),(0,r.kt)("h3",{id:"methods-not-implemented"},"Methods NOT implemented"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".insert()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".update()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".softDelete()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".recover()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".count()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".performativeCount()"))),(0,r.kt)("h3",{id:"saveoperators"},"SaveOperators"),(0,r.kt)("p",null,"DynamoDB only supports the following SaveOperators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IfNotExists")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Plus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Minus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Append")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Remove")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Pop")," (by item index)")),(0,r.kt)("h3",{id:"findoperators"},"FindOperators"),(0,r.kt)("p",null,"DynamoDB only supports the following FindOperators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Between")," (with numbers)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LessThan")," (with numbers)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LessThanOrEqual")," (with numbers)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MoreThan")," (with numbers)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MoreThanOrEqual")," (with numbers)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StartsWith"))),(0,r.kt)("h3",{id:"special-behavior"},"Special behavior"),(0,r.kt)("h4",{id:"save"},(0,r.kt)("inlineCode",{parentName:"h4"},".save()")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unlike others plugins, ",(0,r.kt)("inlineCode",{parentName:"li"},".save()")," doesn't ",(0,r.kt)("strong",{parentName:"li"},"update")," a record that already exists, but ",(0,r.kt)("strong",{parentName:"li"},"replaces")," it."),(0,r.kt)("li",{parentName:"ul"},"Does ",(0,r.kt)("strong",{parentName:"li"},"not")," support SaveOperators (use ",(0,r.kt)("inlineCode",{parentName:"li"},".upsert()")," instead)")),(0,r.kt)("h4",{id:"delete"},(0,r.kt)("inlineCode",{parentName:"h4"},".delete()")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only supports delete one record at time"),(0,r.kt)("li",{parentName:"ul"},"Only supports dele record by primary keys")),(0,r.kt)("h4",{id:"upsert"},(0,r.kt)("inlineCode",{parentName:"h4"},".upsert()")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only supports upsert one record at time"),(0,r.kt)("li",{parentName:"ul"},"Only supports upsert record by primary keys")),(0,r.kt)("h4",{id:"find"},(0,r.kt)("inlineCode",{parentName:"h4"},".find()")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To make queries with ",(0,r.kt)("inlineCode",{parentName:"li"},"OR")," operator, the conditions must have at least ONE property in common.")))}m.isMDXComponent=!0}}]);