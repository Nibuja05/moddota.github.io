(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),i=(n(0),n(193));n(185),n(186),n(194),n(195),n(196),n(197);const r={title:"Custom Minimap Icons",author:"Noya",steamId:"76561198046984233",date:"11.11.2015"},o={id:"assets/custom-minimap-icons",isDocsHomePage:!1,title:"Custom Minimap Icons",description:"Here is a quick and simple step by step guide on how to make and use your own minimap icons for creatures",source:"@site/_articles/assets/custom-minimap-icons.md",permalink:"/assets/custom-minimap-icons",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/custom-minimap-icons.md",sidebar:"tutorials",previous:{title:"Extracting and Compiling VTEX files",permalink:"/assets/extracting-and-compiling-vtex-files"},next:{title:"Useful Console Commands",permalink:"/tools/useful-console-commands"}},c=[{value:"Step 1: Get the files",id:"step-1-get-the-files",children:[]},{value:"Step 2: Edit the files",id:"step-2-edit-the-files",children:[{value:"PSD Image",id:"psd-image",children:[]},{value:"VMAT Material",id:"vmat-material",children:[]},{value:"Texture KV File",id:"texture-kv-file",children:[]},{value:"Step 3: Move the files",id:"step-3-move-the-files",children:[]},{value:"Step 4: Compile and check",id:"step-4-compile-and-check",children:[]},{value:"Step 5: Set your unit to use the new icon",id:"step-5-set-your-unit-to-use-the-new-icon",children:[]},{value:"6. Try it ingame",id:"6-try-it-ingame",children:[]}]}],l={rightToc:c};function s({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Here is a quick and simple step by step guide on how to make and use your own minimap icons for creatures"),Object(i.b)("h2",{id:"step-1-get-the-files"},"Step 1: Get the files"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://moddota.com/resources/minimap_icon.zip"}),"minimap_icon.zip")," - From the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://moddota.com/forums/resources"}),"Resources page")),Object(i.b)("p",null,"This contains the following files:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"addon_hud_textures.txt")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"vgui/hud/minimap_icon.txt")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"vgui/hud/minimap_icon.vmat")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"vgui/hud/minimap_icon.psd"))),Object(i.b)("p",null,"addon_hud_textures is an unique file to define the paths for every custom icon."),Object(i.b)("p",null,"The 3 minimap_icon files are used together, and should be renamed to the name your future icon, like ",Object(i.b)("em",{parentName:"p"},"minimap_questgiver")," or ",Object(i.b)("em",{parentName:"p"},"boss_kappa"),"."),Object(i.b)("h2",{id:"step-2-edit-the-files"},"Step 2: Edit the files"),Object(i.b)("h3",{id:"psd-image"},"PSD Image"),Object(i.b)("p",null,"Use a graphic editor such as Photoshop or GIMP to edit the PSD file. "),Object(i.b)("p",null,"In the example source file, I quickly made this transparent image from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://i.imgur.com/x3L74Hw.png"}),"this source"),":"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/78Z3kaV.png",alt:"img"}))),Object(i.b)("p",null,"The suggested image size is ",Object(i.b)("strong",{parentName:"p"},"64x64"),".",Object(i.b)("br",null),"\nIf you want to use a different image size it ",Object(i.b)("strong",{parentName:"p"},"must be a power of two"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Important"),": You need to have an Alpha layer filled with the transparent figure you want to display:"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://puu.sh/lhQL0/81b3632bad.png",alt:"img"}))),Object(i.b)("p",null,"For better results, add strong black borders to the image as an outline (and remember to update the Alpha layer accordingly)."),Object(i.b)("h3",{id:"vmat-material"},"VMAT Material"),Object(i.b)("p",null,"Open the vmat with any code editor and make sure to change minimap_icon.psd for the name of your choice. Keep the rest unchanged"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"Layer0"\n{\n    "Shader"            "ui.vfx"\n    "F_STENCIL_MASKING" "1"\n    "Texture"           "materials/vgui/hud/minimap_icon.psd" //EDIT THIS\n    "F_TRANSLUCENT"     "1"\n}\n')),Object(i.b)("h3",{id:"texture-kv-file"},"Texture KV File"),Object(i.b)("p",null,"Same process in the addon_hud_textures.txt file"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'""\n{\n    "TextureData"\n    {\n        "minimap_icon" //EDIT THIS\n        {\n            "file"     "materials/vgui/hud/minimap_icon.vmat" //EDIT THIS\n            "x"        "0"\n            "y"        "0"\n            "width"    "64"\n            "height"   "64"\n        }\n    }\n}\n')),Object(i.b)("p",null,"For more icons, just copy the minimap_icon block again with another name inside TextureData"),Object(i.b)("h3",{id:"step-3-move-the-files"},"Step 3: Move the files"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"minimap_icon")," files go in ",Object(i.b)("strong",{parentName:"p"},"content"),"/dota_addons/YOUR_ADDON/materials/",Object(i.b)("strong",{parentName:"p"},"vgui/hud/"),". ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"addon_hud_textures.txt")," file goes in ",Object(i.b)("strong",{parentName:"p"},"content"),"/dota_addons/YOUR_ADDON/scripts/"))),Object(i.b)("h3",{id:"step-4-compile-and-check"},"Step 4: Compile and check"),Object(i.b)("p",null,"Go into the asset browser, write the name of your icon, open the vmat by double clicking on it (this will compile it)."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://puu.sh/lhRLL/31d63b48d9.jpg",alt:"img"}))),Object(i.b)("h3",{id:"step-5-set-your-unit-to-use-the-new-icon"},"Step 5: Set your unit to use the new icon"),Object(i.b)("p",null,"In the unit definition, add these lines:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'"MinimapIcon"        "minimap_icon"\n"MinimapIconSize"    "1000"\n"MinimapDisableTint" "1"\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MinimapIconSize")," determines the relative size of the minimap icon, while ",Object(i.b)("inlineCode",{parentName:"p"},"MinimapDisableTint")," can be 0 or omitted if you want the creature to use different team colors."),Object(i.b)("h3",{id:"6-try-it-ingame"},"6. Try it ingame"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://puu.sh/lhQFp/37192e1e63.jpg",alt:"img"}))),Object(i.b)("hr",null))}s.isMDXComponent=!0},185:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(192),o=n(189),c=n(90),l=n.n(c);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:p,groupId:m}=e,{tabGroupChoices:b,setTabGroupChoices:d}=Object(r.a)(),[f,h]=Object(a.useState)(c);if(null!=m){const e=b[m];null!=e&&e!==f&&p.some(t=>t.value===e)&&h(e)}const g=e=>{h(e),null!=m&&d(m,e)},O=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},186:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},187:function(e,t,n){"use strict";var a=n(0),i=n(34);t.a=function(){return Object(a.useContext)(i.a)}},188:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))},189:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(187),i=n(188);function r(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:r="/",url:o}={}}=Object(a.a)();if(!e)return e;if(t)return r+e;if(!Object(i.a)(e))return e;const c=r+e.replace(/^\//,"");return n?o+c:c}},191:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=i},192:function(e,t,n){"use strict";var a=n(0),i=n(191);t.a=function(){return Object(a.useContext)(i.a)}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(o,".").concat(b)]||p[b]||m[b]||r;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n.n(a);function r({id:e,aspectRatio:t=4/3,hd:n="0"}){return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},i.a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n.n(a);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},i.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(3),i=n(186),r=n(185),o=n(0),c=n.n(o);const l={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t,titles:n}){Object(a.a)("string"==typeof t||void 0===t);const o=c.a.Children.toArray(e).map((e,t)=>{var a,i;const r=e.props.children.props.className.replace(/language-/,"");return{language:r,languageName:null!==(a=null!==(i=(void 0!==n&&n.length>0?n.split("|"):[])[t])&&void 0!==i?i:l[r])&&void 0!==a?a:r,element:e}});return c.a.createElement(r.a,{groupId:void 0!==t?"multi-code-block-"+t:void 0,defaultValue:o[0].language,values:o.map(({language:e,languageName:t})=>({value:e,label:t}))},o.map(({language:e,element:t})=>c.a.createElement(i.a,{key:e,value:e},t)))}},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(190),i=n(0),r=n.n(i);function o({path:e,controls:t=!1}){return r.a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},r.a.createElement("source",{src:Object(a.a)(e),type:"video/mp4"}))}}}]);