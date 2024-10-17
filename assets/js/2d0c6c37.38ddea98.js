"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1637],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){return function(t){var n=c(t.components);return a.createElement(e,o({},t,{components:n}))}},c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(83117),r=n(67294),o=n(86010),l=n(12466),i=n(76775),u=n(91980),s=n(67392),d=n(50012);function c(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function h(e){var t,n,a,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,c=m(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:c})})),v=h[0],b=h[1],g=f({queryString:u,groupId:s}),x=g[0],w=g[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,d.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=y[0],k=y[1],T=function(){var e=null!=x?x:N;return p({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){T&&b(T)}),[T]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);b(e),w(e),k(e)}),[w,k,c]),tabValues:c}}var v=n(72389);const b="tabList__CuJ",g="tabItem_LNqP";function x(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,d=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=d.indexOf(t),a=s[n].value;a!==i&&(c(t),u(a))},p=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=d.indexOf(e.currentTarget)+1;n=null!=(a=d[r])?a:d[0];break;case"ArrowLeft":var o,l=d.indexOf(e.currentTarget)-1;n=null!=(o=d[l])?o:d[d.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return d.push(e)},onKeyDown:p,onClick:m},l,{className:(0,o.default)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function w(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=h(e);return r.createElement("div",{className:(0,o.default)("tabs-container",b)},r.createElement(x,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){var t=(0,v.default)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},59670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=n(74866),i=n(85162),u=["components"],s={id:"documentation-formatting",title:"Markdown Formatting",description:"Tips and guidelines for Mardown used within Static Docs documentation",keywords:["flipper website formatting","flipper docs formatting"]},d=void 0,c={unversionedId:"internals/documentation-formatting",id:"internals/documentation-formatting",title:"Markdown Formatting",description:"Tips and guidelines for Mardown used within Static Docs documentation",source:"@site/../docs/internals/documentation-formatting.mdx",sourceDirName:"internals",slug:"/internals/documentation-formatting",permalink:"/docs/internals/documentation-formatting",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/internals/documentation-formatting.mdx",tags:[],version:"current",frontMatter:{id:"documentation-formatting",title:"Markdown Formatting",description:"Tips and guidelines for Mardown used within Static Docs documentation",keywords:["flipper website formatting","flipper docs formatting"]}},m={},p=[{value:"Structural format",id:"structural-format",level:2},{value:"Headers",id:"headers",level:3},{value:"Markdown tools",id:"markdown-tools",level:2},{value:"Backticks",id:"backticks",level:3},{value:"Code Snippets",id:"code-snippets",level:2},{value:"Links",id:"links",level:3},{value:"Tabs",id:"tabs",level:3},{value:"Resources",id:"resources",level:2}],f={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.mdx)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"This page provides recommendations on the use of a variety of Markdown features that help you create properly formatted documentation."),(0,o.mdx)("p",null,"For tips and guidelines on when to use the same tools, and several others, see the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/internals/documentation-writing-guide"},"Writing Guide"),"."),(0,o.mdx)("h2",{id:"structural-format"},"Structural format"),(0,o.mdx)("h3",{id:"headers"},"Headers"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Start each main section with a level 2 header."),(0,o.mdx)("li",{parentName:"ul"},"Sub-sections should follow a hierarchical structure and should use header levels 3 to 5.")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Markdown Example"),":"),(0,o.mdx)("p",null,"The following example Markdown shows how to use headers."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"## Level 2 header\n\n### Level 3 header\n\n#### Level 4 header\n\n##### Level 5 header\n")),(0,o.mdx)("h2",{id:"markdown-tools"},"Markdown tools"),(0,o.mdx)("h3",{id:"backticks"},"Backticks"),(0,o.mdx)("p",null,"Use Markdown backticks ( ","`"," ",")",", to provide emphasis for items such as file names, classes, methods, parameters, and expressions."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-markdown"},"Let's use the `TestComponent`, which has one direct child, `InnerComponent`, and one non-direct child, `Text`.\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Result"),":\nLet's use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"TestComponent"),", which has one direct child, ",(0,o.mdx)("inlineCode",{parentName:"p"},"InnerComponent"),", and one non-direct child, ",(0,o.mdx)("inlineCode",{parentName:"p"},"Text"),"."),(0,o.mdx)("h2",{id:"code-snippets"},"Code Snippets"),(0,o.mdx)("p",null,"For code snippets, remember to add the language tag (",(0,o.mdx)("inlineCode",{parentName:"p"},"javascript")," is used in the following example)."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-markdown"},"```javascript\nimport {addPlugin} from \"react-native-flipper\"\n\naddPlugin({\n  getId() {\n    return 'ReactNativeExamplePlugin';\n  },\n  onConnect(connection) {\n    mammmals.forEach(({ title, pictureUrl }, index) => {\n      connection.send('newRow', {\n          id: index,\n          title,\n          url: pictureUrl\n      })\n    })\n  },\n  onDisconnect() {\n  }\n})\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Result:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {addPlugin} from \"react-native-flipper\"\n\naddPlugin({\n  getId() {\n    return 'ReactNativeExamplePlugin';\n  },\n  onConnect(connection) {\n    mammmals.forEach(({ title, pictureUrl }, index) => {\n      connection.send('newRow', {\n          id: index,\n          title,\n          url: pictureUrl\n      })\n    })\n  },\n  onDisconnect() {\n  }\n})\n")),(0,o.mdx)("p",null,"For more code blocks features, such as line highlighting, see the Docusaurus ",(0,o.mdx)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks"},"Code blocks")," document."),(0,o.mdx)("h3",{id:"links"},"Links"),(0,o.mdx)("p",null,"Avoid using bare URLs in your documentation. Instead, use referenced hyperlinks, as shown in the following table."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Code"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Displays as"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("strong",{parentName:"td"},"Bare URL")),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Upload the video to Pixelcloud at https://www.internalfb.com/intern/px/search")),(0,o.mdx)("td",{parentName:"tr",align:"left"},"Upload the video to Pixelcloud at ",(0,o.mdx)("a",{parentName:"td",href:"https://www.internalfb.com/intern/px/search"},"https://www.internalfb.com/intern/px/search"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("strong",{parentName:"td"},"Referenced")),(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Upload the video to [Pixelcloud](https://www.internalfb.com/intern/px/search)")),(0,o.mdx)("td",{parentName:"tr",align:"left"},"Upload the video to ",(0,o.mdx)("a",{parentName:"td",href:"https://www.internalfb.com/intern/px/search"},"Pixelcloud"))))),(0,o.mdx)("admonition",{type:"tip"},(0,o.mdx)("p",{parentName:"admonition"},"Notice the use of square brackets around 'PixelCloud' in the referenced hyperlink.")),(0,o.mdx)("h3",{id:"tabs"},"Tabs"),(0,o.mdx)("p",null,"To organize content in tabs, Docusaurus provides the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Tabs")," React component:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\n  groupId=\"platform\"\n  defaultValue=\"kotlin\"\n  values={[\n    {label: 'Kotlin', value: 'kotlin'},\n    {label: 'Java', value: 'java'},\n  ]}>\n  <TabItem value=\"kotlin\">\n    Information about using Kotlin with Flipper.\n  </TabItem>\n  <TabItem value=\"java\">\n    Information about using Java  with Flipper.\n  </TabItem>\n</Tabs>\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Result:")),(0,o.mdx)(l.default,{groupId:"platform",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,o.mdx)(i.default,{value:"kotlin",mdxType:"TabItem"},"Information about using Kotlin with Flipper."),(0,o.mdx)(i.default,{value:"java",mdxType:"TabItem"},"Information about using Java with Flipper.")),(0,o.mdx)("admonition",{type:"tip"},(0,o.mdx)("p",{parentName:"admonition"},"To sync several ",(0,o.mdx)("inlineCode",{parentName:"p"},"Tabs")," components on the website set the same ",(0,o.mdx)("inlineCode",{parentName:"p"},"groupId")," for them. More info in\nDocusaurus ",(0,o.mdx)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/tabs#syncing-tab-choices"},"Tabs Syncing")," docs.")),(0,o.mdx)("h2",{id:"resources"},"Resources"),(0,o.mdx)("p",null,"For additional information, see the following resources:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/intern/staticdocs/staticdocs/docs/documenting/markdown-features"},"StaticDocs Markdown features")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown features"))))}h.isMDXComponent=!0}}]);