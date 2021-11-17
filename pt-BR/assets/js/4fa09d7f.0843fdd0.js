"use strict";(self.webpackChunksymbiosis_techmmunity_com=self.webpackChunksymbiosis_techmmunity_com||[]).push([[237],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5788:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],c={sidebar_position:10},s="CLI",l={unversionedId:"overview/cli",id:"overview/cli",isDocsHomePage:!1,title:"CLI",description:"O Symb tem um pacote separado para a cli, assim seu pacote principal fica mais leve e encapsulado.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/overview/cli.md",sourceDirName:"overview",slug:"/overview/cli",permalink:"/pt-BR/docs/overview/cli",editUrl:"https://github.com/techmmunity/symbiosis.techmmunity.com/edit/master/docs/overview/cli.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Migrations",permalink:"/pt-BR/docs/overview/migrations"},next:{title:"Types",permalink:"/pt-BR/docs/overview/types"}},p=[{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",children:[],level:2},{value:"Prepara\xe7\xe3o",id:"prepara\xe7\xe3o",children:[],level:2},{value:"Comandos",id:"comandos",children:[{value:"<code>gen:config</code>",id:"genconfig",children:[],level:3},{value:"<code>gen:migration</code>",id:"genmigration",children:[],level:3},{value:"<code>create:migration</code>",id:"createmigration",children:[],level:3}],level:2}],m={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli"},"CLI"),(0,o.kt)("p",null,"O ",(0,o.kt)("em",{parentName:"p"},"Symb")," tem um pacote separado para a cli, assim seu pacote principal fica mais leve e encapsulado."),(0,o.kt)("p",null,"A CLI \xe9 muito \xfatil para gerar migra\xe7\xf5es e entidades automaticamente."),(0,o.kt)("h2",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),(0,o.kt)("p",null,"Migra\xe7\xf5es s\xe3o criadas ou geradas sando o pacote ",(0,o.kt)("inlineCode",{parentName:"p"},"@techmmunity/symbiosis-cli"),", ent\xe3o antes de mais nada, n\xf3s precisamos instalar o pacote."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -D @techmmunity/symbiosis-cli\n")),(0,o.kt)("h2",{id:"prepara\xe7\xe3o"},"Prepara\xe7\xe3o"),(0,o.kt)("p",null,"Adicione um alias para o comando ",(0,o.kt)("inlineCode",{parentName:"p"},"symb"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n\n{\n  //...\n  "scripts": {\n    //...\n    "symb": "symb"\n  }\n}\n')),(0,o.kt)("p",null,"Cria um arquivo ",(0,o.kt)("inlineCode",{parentName:"p"},"symbiosis.config.js")," na pasta root do seu projeto, ou gere uma com o comando ",(0,o.kt)("a",{parentName:"p",href:"#genconfig"},(0,o.kt)("inlineCode",{parentName:"a"},"gen:config")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  migrationsDir: "migrations/dir",\n  entitiesDir: ["entities/**/dir/*.ts"],\n  databaseConfig: {\n    // ...\n  },\n};\n')),(0,o.kt)("h2",{id:"comandos"},"Comandos"),(0,o.kt)("h3",{id:"genconfig"},(0,o.kt)("inlineCode",{parentName:"h3"},"gen:config")),(0,o.kt)("p",null,"Autom\xe1ticamente gera um arquivo de configura\xe7\xe3o na pasta root do seu aplicativo."),(0,o.kt)("p",null,"As op\xe7\xf5es do ",(0,o.kt)("inlineCode",{parentName:"p"},"symbiosis.config.js")," s\xe3o as mesma que da classe ",(0,o.kt)("a",{parentName:"p",href:"./connections#options"},(0,o.kt)("inlineCode",{parentName:"a"},"Connection")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn symb gen:config\n")),(0,o.kt)("h3",{id:"genmigration"},(0,o.kt)("inlineCode",{parentName:"h3"},"gen:migration")),(0,o.kt)("p",null,"Esse comando vai gerar todas as migra\xe7\xf5es para atualizar o seu banco de dados de acordo com o seu c\xf3digo."),(0,o.kt)("p",null,"Para usar esse comando, voc\xea precisa criar um arquivo ",(0,o.kt)("inlineCode",{parentName:"p"},"symbiosis.config.js"),". Se voc\xea n\xe3o tiver um, voc\xea pode gerar um em branco usando o comando ",(0,o.kt)("a",{parentName:"p",href:"#genconfig"},(0,o.kt)("inlineCode",{parentName:"a"},"gen:config")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn symb gen:migration\n")),(0,o.kt)("h3",{id:"createmigration"},(0,o.kt)("inlineCode",{parentName:"h3"},"create:migration")),(0,o.kt)("p",null,"Cria uma migra\xe7\xe3o vazia, ent\xe3o voc\xea pode escrev\xea-la manualmente."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn symb create:migration\n")))}u.isMDXComponent=!0}}]);