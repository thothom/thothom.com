"use strict";(self.webpackChunksymbiosis_techmmunity_com=self.webpackChunksymbiosis_techmmunity_com||[]).push([[548],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return y}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,d=p["".concat(s,".").concat(y)]||p[y]||l[y]||i;return t?r.createElement(d,o(o({ref:n},m),{},{components:t})):r.createElement(d,o({ref:n},m))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5197:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],u={sidebar_position:9},s="Migrations",c={unversionedId:"overview/migrations",id:"overview/migrations",isDocsHomePage:!1,title:"Migrations",description:"Migrations are used to prepare your database to handle your code operations.",source:"@site/docs/overview/migrations.md",sourceDirName:"overview",slug:"/overview/migrations",permalink:"/docs/overview/migrations",editUrl:"https://github.com/techmmunity/symbiosis.techmmunity.com/edit/master/docs/overview/migrations.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Save Operators",permalink:"/docs/overview/save-operators"},next:{title:"CLI",permalink:"/docs/overview/cli"}},m=[{value:"Generation or creating your migrations",id:"generation-or-creating-your-migrations",children:[{value:"Create",id:"create",children:[],level:3},{value:"Generate",id:"generate",children:[],level:3}],level:2},{value:"Example Migration",id:"example-migration",children:[],level:2}],l={toc:m};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrations"},"Migrations"),(0,i.kt)("p",null,"Migrations are used to prepare your database to handle your code operations."),(0,i.kt)("p",null,"You cannot perform a ",(0,i.kt)("inlineCode",{parentName:"p"},"fooRepository.save()")," operation if the ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," table don't exists, so you need to create your table BEFORE the operation."),(0,i.kt)("p",null,"With migrations, you can prepare your database, create the tables, the columns, the indexes, the enums, and everything that it needs before start your application."),(0,i.kt)("h2",{id:"generation-or-creating-your-migrations"},"Generation or creating your migrations"),(0,i.kt)("h3",{id:"create"},"Create"),(0,i.kt)("p",null,"To create the migration manually, you can use the ",(0,i.kt)("a",{parentName:"p",href:"./cli#createmigration"},(0,i.kt)("inlineCode",{parentName:"a"},"create:migration"))," command of the ",(0,i.kt)("a",{parentName:"p",href:"./cli"},"CLI"),"."),(0,i.kt)("h3",{id:"generate"},"Generate"),(0,i.kt)("p",null,"To automatically generate your migration, you can use the ",(0,i.kt)("a",{parentName:"p",href:"./cli#genmigration"},(0,i.kt)("inlineCode",{parentName:"a"},"gen:migration"))," command of the ",(0,i.kt)("a",{parentName:"p",href:"./cli"},"CLI"),"."),(0,i.kt)("h2",{id:"example-migration"},"Example Migration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * Migration 1635290056331-UserEntity\n *\n * UserEntity Migration\n *\n * @plugin @techmmunity/symbiosis-dynamodb\n * @symbVersion 0.0.21\n */\nimport { BaseMigration, BaseQueryRunner } from "@techmmunity/symbiosis-cli";\n\nexport class Migration implements BaseMigration {\n  public code = "1635290056331-UserEntity";\n\n  public description = "UserEntity Migration";\n\n  public async up(queryRunner: BaseQueryRunner) {\n    queryRunner.createEntity({\n      databaseName: "user",\n    });\n    queryRunner.createColumn({\n      entityDatabaseName: "user",\n      columnDatabaseName: "id",\n      primary: true,\n      type: "string",\n    });\n    queryRunner.createColumn({\n      entityDatabaseName: "user",\n      columnDatabaseName: "username",\n      type: "string",\n    });\n    queryRunner.createColumn({\n      entityDatabaseName: "user",\n      columnDatabaseName: "createdAt",\n      comment: "ISO Date",\n      type: "string",\n    });\n    queryRunner.createColumn({\n      entityDatabaseName: "user",\n      columnDatabaseName: "updatedAt",\n      comment: "ISO Date",\n      type: "string",\n    });\n    queryRunner.createIndex({\n      entityDatabaseName: "user",\n      indexDatabaseName: "username_index",\n      columnsDatabaseNames: ["username"],\n    });\n\n    await queryRunner.run();\n  }\n\n  public async down(queryRunner: BaseQueryRunner) {}\n}\n')))}p.isMDXComponent=!0}}]);