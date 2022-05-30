"use strict";(self.webpackChunkthothom_com=self.webpackChunkthothom_com||[]).push([[483],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),l=p(n),f=o,d=l["".concat(c,".").concat(f)]||l[f]||s[f]||i;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},4158:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={sidebar_position:1},c="Utilizando enums",p={unversionedId:"how-to/enums",id:"how-to/enums",isDocsHomePage:!1,title:"Utilizando enums",description:"Para usar um enum como tipo com o Thoth, voc\xea precisa especificar uma op\xe7\xe3o enum.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/how-to/enums.md",sourceDirName:"how-to",slug:"/how-to/enums",permalink:"/pt-BR/docs/how-to/enums",editUrl:"https://github.com/thothom/thothom.com/edit/master/docs/how-to/enums.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Utilizando arrays",permalink:"/pt-BR/docs/how-to/arrays"},next:{title:"Utilizando sub-entidades",permalink:"/pt-BR/docs/how-to/sub-entities"}},m=[],s={toc:m};function l(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"utilizando-enums"},"Utilizando enums"),(0,i.kt)("p",null,"Para usar um enum como tipo com o ",(0,i.kt)("em",{parentName:"p"},"Thoth"),", voc\xea precisa especificar uma op\xe7\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"enum"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Entity, Column } from "@thothom/core";\n\nimport { RoleEnum } from "./role.enum";\n\n@Entity()\nexport class ExampleEntity {\n  // ...\n\n  @Column({\n    enum: RoleEnum,\n  })\n  public role: RoleEnum;\n\n  // ...\n}\n')))}l.isMDXComponent=!0}}]);