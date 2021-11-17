"use strict";(self.webpackChunksymbiosis_techmmunity_com=self.webpackChunksymbiosis_techmmunity_com||[]).push([[156],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,v=c["".concat(m,".").concat(h)]||c[h]||l[h]||o;return n?a.createElement(v,r(r({ref:t},p),{},{components:n})):a.createElement(v,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},346:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:6},m="Repositories",d={unversionedId:"overview/repositories",id:"overview/repositories",isDocsHomePage:!1,title:"Repositories",description:"Repositories are the translator between code and database, they are used to do all the queries.",source:"@site/docs/overview/repositories.md",sourceDirName:"overview",slug:"/overview/repositories",permalink:"/pt-BR/docs/overview/repositories",editUrl:"https://github.com/techmmunity/symbiosis.techmmunity.com/edit/master/docs/overview/repositories.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Decorators",permalink:"/pt-BR/docs/overview/decorators"},next:{title:"Find Operators",permalink:"/pt-BR/docs/overview/find-operators"}},p=[{value:"Creating a Repository",id:"creating-a-repository",children:[],level:2},{value:"Insert",id:"insert",children:[{value:"<code>save</code>",id:"save",children:[],level:3},{value:"<code>insert</code>",id:"insert-1",children:[],level:3},{value:"<code>update</code>",id:"update",children:[],level:3},{value:"<code>upsert</code>",id:"upsert",children:[],level:3}],level:2},{value:"Find",id:"find",children:[{value:"<code>find</code>",id:"find-1",children:[],level:3},{value:"<code>findOne</code>",id:"findone",children:[],level:3}],level:2},{value:"Delete",id:"delete",children:[{value:"<code>delete</code>",id:"delete-1",children:[],level:3},{value:"<code>softDelete</code>",id:"softdelete",children:[],level:3},{value:"<code>recover</code>",id:"recover",children:[],level:3}],level:2},{value:"Count",id:"count",children:[{value:"<code>count</code>",id:"count-1",children:[],level:3},{value:"<code>performativeCount</code>",id:"performativecount",children:[],level:3}],level:2},{value:"Find Options",id:"find-options",children:[{value:"<code>select</code>",id:"select",children:[],level:3},{value:"<code>where</code>",id:"where",children:[],level:3},{value:"<code>order</code>",id:"order",children:[],level:3},{value:"<code>index</code>",id:"index",children:[],level:3},{value:"<code>withDeleted</code>",id:"withdeleted",children:[],level:3},{value:"<code>skip</code>",id:"skip",children:[],level:3},{value:"<code>startFrom</code>",id:"startfrom",children:[],level:3},{value:"<code>take</code>",id:"take",children:[],level:3}],level:2},{value:"Options",id:"options",children:[{value:"<code>retries</code>",id:"retries",children:[],level:3},{value:"<code>timeout</code>",id:"timeout",children:[],level:3},{value:"<code>extras</code>",id:"extras",children:[],level:3}],level:2}],l={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"repositories"},"Repositories"),(0,o.kt)("p",null,"Repositories are the translator between code and database, they are used to do all the queries."),(0,o.kt)("p",null,"All the repositories are created from the ",(0,o.kt)("a",{parentName:"p",href:"./connections"},"connection")," and the ",(0,o.kt)("a",{parentName:"p",href:"./decorators"},"entities"),", so you need they both to get your repository."),(0,o.kt)("h2",{id:"creating-a-repository"},"Creating a Repository"),(0,o.kt)("p",null,"With your connection and schema, you simply need to do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { connection } from "./database.connection";\nimport { ExampleEntity } from "./example.entity";\n\nconst exampleRepository =\n  connection.getRepository<ExampleEntity>(ExampleEntity);\n')),(0,o.kt)("p",null,"Or, with ",(0,o.kt)("a",{parentName:"p",href:"./globals"},"globals"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { getGlobalRepository } from "@techmmunity/symbiosis";\nimport { ExampleEntity } from "./example.entity";\n\nconst exampleRepository = getGlobalRepository<ExampleEntity>(ExampleEntity);\n')),(0,o.kt)("h2",{id:"insert"},"Insert"),(0,o.kt)("h3",{id:"save"},(0,o.kt)("inlineCode",{parentName:"h3"},"save")),(0,o.kt)("p",null,"The save methods makes an ",(0,o.kt)("strong",{parentName:"p"},'"upsert"')," query, that is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If a record with the same primary keys ",(0,o.kt)("strong",{parentName:"li"},"doesn't exist"),", it will be created"),(0,o.kt)("li",{parentName:"ul"},"If a record with the same primary keys ",(0,o.kt)("strong",{parentName:"li"},"exist"),", it will be updated (or ",(0,o.kt)("strong",{parentName:"li"},"replaced"),", depending on the plugin)")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the most of the databases, this is the most performative query to create / update / replace, so if you don't want to ",(0,o.kt)("strong",{parentName:"p"},"specifically")," insert or update, we always recommend to use this method."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { ExampleEntity } from "./example.entity";\nimport { exampleRepository } from "./example.repository";\n\nconst createExample = async (data: ExampleEntity) => {\n  const example = await exampleRepository.save(data);\n\n  return example;\n};\n\ncreateExample({\n  foo: "bar",\n});\n')),(0,o.kt)("h3",{id:"insert-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"insert")),(0,o.kt)("p",null,"Inserts a new record to the table. If a record with the same primary keys already exist, throw an error."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This may will do to 2 queries internally instead of 1."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Obs:")," This is a limitation from the databases, not from ",(0,o.kt)("em",{parentName:"p"},"Symb"),", ok? \ud83d\ude09"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { ExampleEntity } from "./example.entity";\nimport { exampleRepository } from "./example.repository";\n\nconst createExample = async (data: ExampleEntity) => {\n  try {\n    const example = await exampleRepository.insert(data);\n\n    return example;\n  } catch (err) {\n    // If the record already exist\n  }\n};\n\ncreateExample({\n  foo: "bar",\n});\n')),(0,o.kt)("h3",{id:"update"},(0,o.kt)("inlineCode",{parentName:"h3"},"update")),(0,o.kt)("p",null,"Updates one or many records of the table based on a query condition."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Always try to make queries by primary keys, otherwise the queries will be ",(0,o.kt)("strong",{parentName:"p"},"very unperformative"),"."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Obs:")," This is a limitation from the databases, not from ",(0,o.kt)("em",{parentName:"p"},"Symb"),", ok? \ud83d\ude09"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { ExampleEntity } from "./example.entity";\nimport { exampleRepository } from "./example.repository";\n\nconst updateExamples = async (data: ExampleEntity) => {\n  const examples = await exampleRepository.update(conditions, data);\n\n  return examples;\n};\n\nupdateExamples(\n  {\n    bar: 1,\n  },\n  {\n    foo: "bar",\n  }\n);\n')),(0,o.kt)("h3",{id:"upsert"},(0,o.kt)("inlineCode",{parentName:"h3"},"upsert")),(0,o.kt)("p",null,"Insert or update a specific record of the table based on it's primary key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { ExampleEntity } from "./example.entity";\nimport { exampleRepository } from "./example.repository";\n\nconst crateOrUpdateExample = async (data: ExampleEntity) => {\n  const example = await exampleRepository.upsert(data);\n\n  return example;\n};\n\ncrateOrUpdateExample({\n  id: 123,\n  foo: "bar",\n});\n')),(0,o.kt)("h2",{id:"find"},"Find"),(0,o.kt)("h3",{id:"find-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"find")),(0,o.kt)("p",null,"Find multiple records by a query condition."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Always try to make queries by primary keys, otherwise the queries will be ",(0,o.kt)("strong",{parentName:"p"},"extremely unperformative"),"."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Obs:")," This is a limitation from the databases, not from ",(0,o.kt)("em",{parentName:"p"},"Symb"),", ok? \ud83d\ude09"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { FindOptions } from "@techmmunity/symbiosis";\nimport { ExampleEntity } from "./example.entity";\n\nconst findExamples = async (findOptions: FindOptions<ExampleEntity>) => {\n  const examples = await exampleRepository.find(findOptions);\n\n  return examples;\n};\n\nfindExamples({\n  where: {\n    age: 25,\n  },\n});\n')),(0,o.kt)("h3",{id:"findone"},(0,o.kt)("inlineCode",{parentName:"h3"},"findOne")),(0,o.kt)("p",null,"Find one record by a query condition."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Always try to make queries by primary keys, otherwise the queries will be ",(0,o.kt)("strong",{parentName:"p"},"extremely unperformative"),"."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Obs:")," This is a limitation from the databases, not from ",(0,o.kt)("em",{parentName:"p"},"Symb"),", ok? \ud83d\ude09"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { FindOneOptions } from "@techmmunity/symbiosis";\nimport { ExampleEntity } from "./example.entity";\nimport { exampleRepository } from "./example.repository";\n\nconst findExample = async (condition: FindOneOptions<ExampleEntity>) => {\n  const example = await exampleRepository.findOne(condition);\n\n  return example;\n};\n\nfindExample({\n  where: {\n    age: 25,\n  },\n});\n')),(0,o.kt)("h2",{id:"delete"},"Delete"),(0,o.kt)("h3",{id:"delete-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"delete")),(0,o.kt)("p",null,"Delete one or many records by a query condition."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Always try to make queries by primary keys, otherwise the queries will be ",(0,o.kt)("strong",{parentName:"p"},"extremely unperformative"),"."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Obs:")," This is a limitation from the databases, not from ",(0,o.kt)("em",{parentName:"p"},"Symb"),", ok? \ud83d\ude09"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { FindConditions } from "@techmmunity/symbiosis";\nimport { ExampleEntity } from "./example.entity";\nimport { exampleRepository } from "./example.repository";\n\nconst deleteExamples = async (condition: FindConditions<ExampleEntity>) => {\n  const examples = await exampleRepository.delete(condition);\n\n  return examples;\n};\n\ndeleteExamples({\n  id: 123,\n});\n')),(0,o.kt)("h3",{id:"softdelete"},(0,o.kt)("inlineCode",{parentName:"h3"},"softDelete")),(0,o.kt)("p",null,"Soft delete one or many records by a query condition."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To use this method, the entity must have a column decorated with ",(0,o.kt)("a",{parentName:"p",href:"./decorators#deletedatecolumn"},(0,o.kt)("inlineCode",{parentName:"a"},"@DeleteDateColumn"))))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Always try to make queries by primary keys, otherwise the queries will be ",(0,o.kt)("strong",{parentName:"p"},"extremely unperformative"),"."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Obs:")," This is a limitation from the databases, not from ",(0,o.kt)("em",{parentName:"p"},"Symb"),", ok? \ud83d\ude09"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { FindConditions } from "@techmmunity/symbiosis";\nimport { ExampleEntity } from "./example.entity";\nimport { exampleRepository } from "./example.repository";\n\nconst deleteExamples = async (condition: FindConditions<ExampleEntity>) => {\n  const examples = await exampleRepository.softDelete(condition);\n\n  return examples;\n};\n\ndeleteExamples({\n  id: 123,\n});\n')),(0,o.kt)("h3",{id:"recover"},(0,o.kt)("inlineCode",{parentName:"h3"},"recover")),(0,o.kt)("p",null,"Recover records that was soft deleted, filtering by a query condition."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To use this method, the entity must have a column decorated with ",(0,o.kt)("a",{parentName:"p",href:"./decorators#deletedatecolumn"},(0,o.kt)("inlineCode",{parentName:"a"},"@DeleteDateColumn"))))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Always try to make queries by primary keys, otherwise the queries will be ",(0,o.kt)("strong",{parentName:"p"},"very unperformative"),"."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Obs:")," This is a limitation from the databases, not from ",(0,o.kt)("em",{parentName:"p"},"Symb"),", ok? \ud83d\ude09"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { FindConditions } from "@techmmunity/symbiosis";\nimport { ExampleEntity } from "./example.entity";\nimport { exampleRepository } from "./example.repository";\n\nconst recoverExamples = async (condition: FindConditions<ExampleEntity>) => {\n  const examples = await exampleRepository.recover(condition);\n\n  return examples;\n};\n\nrecoverExamples({\n  id: 123,\n});\n')),(0,o.kt)("h2",{id:"count"},"Count"),(0,o.kt)("h3",{id:"count-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"count")),(0,o.kt)("p",null,"Count the records returned by a query condition."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Always try to make queries by primary keys, otherwise the queries will be ",(0,o.kt)("strong",{parentName:"p"},"extremely unperformative"),"."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Obs:")," This is a limitation from the databases, not from ",(0,o.kt)("em",{parentName:"p"},"Symb"),", ok? \ud83d\ude09"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { FindConditions } from "@techmmunity/symbiosis";\nimport { ExampleEntity } from "./example.entity";\nimport { exampleRepository } from "./example.repository";\n\nconst countExamples = async (condition: FindConditions<ExampleEntity>) => {\n  const examples = await exampleRepository.count(condition);\n\n  return examples;\n};\n\ncountExamples({\n  id: 123,\n});\n')),(0,o.kt)("h3",{id:"performativecount"},(0,o.kt)("inlineCode",{parentName:"h3"},"performativeCount")),(0,o.kt)("p",null,"Count the records returned by a query condition."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Depending on the plugin, the result of this query ",(0,o.kt)("strong",{parentName:"p"},"may not be precise"),"."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In some database, like PostgreSQL, this is a way to perform a count operation that values more ",(0,o.kt)("strong",{parentName:"p"},"PERFORMANCE")," than ",(0,o.kt)("strong",{parentName:"p"},"PRECISION"),", so if you doesn't need to know ",(0,o.kt)("strong",{parentName:"p"},"exactly")," how many records, you should use this methods, because it will be much more performative."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { FindConditions } from "@techmmunity/symbiosis";\nimport { ExampleEntity } from "./example.entity";\nimport { exampleRepository } from "./example.repository";\n\nconst countExamples = async (condition: FindConditions<ExampleEntity>) => {\n  const examples = await exampleRepository.performativeCount(condition);\n\n  return examples;\n};\n\ncountExamples({\n  id: 123,\n});\n')),(0,o.kt)("h2",{id:"find-options"},"Find Options"),(0,o.kt)("h3",{id:"select"},(0,o.kt)("inlineCode",{parentName:"h3"},"select")),(0,o.kt)("p",null,"Array of columns that you want to get from the database."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Columns of sub-entities must be specified separated by dots (",(0,o.kt)("inlineCode",{parentName:"p"},"."),")."),(0,o.kt)("p",{parentName:"div"},"Ex: ",(0,o.kt)("inlineCode",{parentName:"p"},'"entityColumn.subEntityColumn"')))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Array values doesn't need any special character, just pass they normally, like you do with nested values."),(0,o.kt)("p",{parentName:"div"},"Ex: ",(0,o.kt)("inlineCode",{parentName:"p"},'"entityArrayColumn.subEntityColumn"')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const conditions = {\n  select: ["id", "fullName"];\n}\n')),(0,o.kt)("h3",{id:"where"},(0,o.kt)("inlineCode",{parentName:"h3"},"where")),(0,o.kt)("p",null,"The conditions to filter the records."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const conditions = {\n  where: {\n    id: 1,\n    age: MoreThan(25),\n  },\n};\n\n// Or\n\nconst conditions = {\n  // This makes an OR conditions, and will bring\n  // records that have id = 1 and\n  // records that have an age greater than 25\n  where: [\n    {\n      id: 1,\n    },\n    {\n      age: MoreThan(25),\n    },\n  ],\n};\n")),(0,o.kt)("h3",{id:"order"},(0,o.kt)("inlineCode",{parentName:"h3"},"order")),(0,o.kt)("p",null,"The order that the results should be queried."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some databases may not support this, or if does, this may be very unperformative, if the order column ins't an index or a primary key."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const conditions = {\n  order: {\n    age: "ASC", // Also supports "DESC"\n  },\n};\n')),(0,o.kt)("h3",{id:"index"},(0,o.kt)("inlineCode",{parentName:"h3"},"index")),(0,o.kt)("p",null,"The index to use to query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const conditions = {\n  index: "email_index,\n};\n')),(0,o.kt)("h3",{id:"withdeleted"},(0,o.kt)("inlineCode",{parentName:"h3"},"withDeleted")),(0,o.kt)("p",null,"If the query should bring soft-deleted records."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const conditions = {\n  withDeleted: true,\n};\n")),(0,o.kt)("h3",{id:"skip"},(0,o.kt)("inlineCode",{parentName:"h3"},"skip")),(0,o.kt)("p",null,"Used to make paginated queries, tells how many records should be ignored from the query result."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This option is only available on ",(0,o.kt)("inlineCode",{parentName:"p"},".find()")," queries."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This option may isn't available for the most of the NoSql databases, use the ",(0,o.kt)("a",{parentName:"p",href:"#startfrom"},(0,o.kt)("inlineCode",{parentName:"a"},"startFrom"))," option instead."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This options is ",(0,o.kt)("strong",{parentName:"p"},"extremely")," unperformative, we recommend the use of ",(0,o.kt)("a",{parentName:"p",href:"#startfrom"},(0,o.kt)("inlineCode",{parentName:"a"},"startFrom"))," option instead."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const conditions = {\n  skip: 10,\n};\n")),(0,o.kt)("h3",{id:"startfrom"},(0,o.kt)("inlineCode",{parentName:"h3"},"startFrom")),(0,o.kt)("p",null,"Used to make paginated queries, tells from which record the query should be made."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the most of the databases, this is the most performative way to make a paginated query! \ud83e\udd29"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const conditions = {\n  fromRecord: {\n    id: 100,\n  },\n};\n")),(0,o.kt)("h3",{id:"take"},(0,o.kt)("inlineCode",{parentName:"h3"},"take")),(0,o.kt)("p",null,"Used to make paginated queries, tells how many records should be retrieved from que result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const conditions = {\n  take: 10,\n};\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"Every method receives a second (or third, it will be always the last one) parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),". These options can configure some behaviors of the query, and can make the developers life easier."),(0,o.kt)("h3",{id:"retries"},(0,o.kt)("inlineCode",{parentName:"h3"},"retries")),(0,o.kt)("p",null,"The quantity of retries that should be done if the query fail."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"exampleRepository.save(data, {\n  retries: 1,\n});\n")),(0,o.kt)("h3",{id:"timeout"},(0,o.kt)("inlineCode",{parentName:"h3"},"timeout")),(0,o.kt)("p",null,"The time ",(0,o.kt)("strong",{parentName:"p"},"in seconds")," that the plugin should await before the query fails."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"exampleRepository.save(data, {\n  timeout: 2,\n});\n")),(0,o.kt)("h3",{id:"extras"},(0,o.kt)("inlineCode",{parentName:"h3"},"extras")),(0,o.kt)("p",null,"Extra data that can be used by plugins"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'exampleRepository.save(data, {\n  extras: {\n    foo: "bar",\n  },\n});\n')))}c.isMDXComponent=!0}}]);