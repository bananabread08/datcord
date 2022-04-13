"use strict";(self.webpackChunkdatcord=self.webpackChunkdatcord||[]).push([[688],{3688:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t=r(2791),i=r(168),o=r(7691),a=r(7462),c=r(665),l=t.forwardRef((function(n,e){return t.createElement(c.r,(0,a.Z)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},n,{ref:e}),t.createElement("g",{"data-name":"Layer 2"},t.createElement("g",{"data-name":"settings"},t.createElement("circle",{cx:12,cy:12,r:1.5}),t.createElement("path",{d:"M21.89 10.32L21.1 7.8a2.26 2.26 0 00-2.88-1.51l-.34.11a1.74 1.74 0 01-1.59-.26l-.11-.08a1.76 1.76 0 01-.69-1.43v-.28a2.37 2.37 0 00-.68-1.68 2.26 2.26 0 00-1.6-.67h-2.55a2.32 2.32 0 00-2.29 2.33v.24a1.94 1.94 0 01-.73 1.51l-.13.1a1.93 1.93 0 01-1.78.29 2.14 2.14 0 00-1.68.12 2.18 2.18 0 00-1.12 1.33l-.82 2.6a2.34 2.34 0 001.48 2.94h.16a1.83 1.83 0 011.12 1.22l.06.16a2.06 2.06 0 01-.23 1.86 2.37 2.37 0 00.49 3.3l2.07 1.57a2.25 2.25 0 001.35.43A2 2 0 009 22a2.25 2.25 0 001.47-1l.23-.33a1.8 1.8 0 011.43-.77 1.75 1.75 0 011.5.78l.12.17a2.24 2.24 0 003.22.53L19 19.86a2.38 2.38 0 00.5-3.23l-.26-.38A2 2 0 0119 14.6a1.89 1.89 0 011.21-1.28l.2-.07a2.36 2.36 0 001.48-2.93zM12 15.5a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"}))))}));l.displayName="Settings";var s=t.forwardRef((function(n,e){return t.createElement(c.r,(0,a.Z)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 16 16"},n,{ref:e}),t.createElement("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}))}));s.displayName="Plus";var d,u,f,h,m,p,v=o.ZP.section(d||(d=(0,i.Z)(["\n  background-color: ",";\n  flex: 0 0 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n  @media screen and (max-width: 850px) {\n    display: ",";\n  }\n"])),(function(n){return n.theme.accent}),(function(n){return n.showLeft?"flex":"none"})),g=o.ZP.div(u||(u=(0,i.Z)(["\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid ",";\n"])),(function(n){return n.theme.secondary})),x=o.ZP.div(f||(f=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n  gap: 0.5rem;\n  flex-basis: 100%;\n  overflow-y: auto;\n\n  div:first-child {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  li {\n    padding: 0.25rem;\n    cursor: pointer;\n    margin-left: 0.2rem;\n    margin-right: 0.2rem;\n\n    span {\n      color: #6e7278;\n      font-size: 1.2rem;\n      vertical-align: middle;\n    }\n  }\n  & li:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.hoverbg}),(function(n){return n.theme.hovertxt})),b=o.ZP.div(h||(h=(0,i.Z)(["\n  padding: 0.5rem 1rem;\n  border-top: 1px solid ",";\n  display: flex;\n  align-items: center;\n"])),(function(n){return n.theme.secondary})),y=(0,o.ZP)(l)(m||(m=(0,i.Z)(["\n  color: ",";\n  cursor: pointer;\n  transition: 0.3s ease-in-out;\n  &:hover {\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.theme.text})),w=(0,o.ZP)(s)(p||(p=(0,i.Z)(["\n  color: ",";\n  cursor: pointer;\n  transform: ",";\n  transition: 0.3s ease-in-out;\n"])),(function(n){return n.theme.text}),(function(n){return n.close?"rotate(45deg)":""})),j=r(3504),O=r(5385),Z=r(184);var P=function(n){var e,r=n.servers,t=n.serverChannels,i=n.currentUser,o=n.handleProfileView,a=n.addChannel,c=n.handleInputView,l=n.showInput,s=n.handleChange,d=n.showLeft;return(0,Z.jsxs)(v,{showLeft:d,children:[(0,Z.jsx)(g,{children:(0,Z.jsx)("h3",{children:null===(e=r[0])||void 0===e?void 0:e.name})}),(0,Z.jsxs)(x,{children:[(0,Z.jsxs)("div",{children:[(0,Z.jsx)("span",{children:"v Text Channel"}),l?(0,Z.jsx)(w,{size:"30",onClick:c,close:!0}):(0,Z.jsx)(w,{size:"30",onClick:c})]}),l&&(0,Z.jsxs)("form",{onSubmit:a,children:[(0,Z.jsx)("input",{onChange:s,placeholder:"Name..."}),(0,Z.jsx)("button",{type:"submit",children:"Create"})]}),null===t||void 0===t?void 0:t.map((function(n){return(0,Z.jsx)("li",{children:(0,Z.jsxs)(j.OL,{to:"/home/".concat(n.id),style:{display:"block"},children:[(0,Z.jsx)("span",{children:"#"})," ",n.name]})},n.id)}))]}),(0,Z.jsxs)(b,{children:[(0,Z.jsx)(O.Z,{x:i,primary:!0}),(0,Z.jsx)(y,{size:"30",onClick:o})]})]})}},5385:function(n,e,r){r.d(e,{Z:function(){return h}});r(2791);var t,i,o,a=r.p+"static/media/pp-svg.5fe91ff931dc3e60a45a9fa50c85201f.svg",c=r(168),l=r(7691),s=l.ZP.div(t||(t=(0,c.Z)(["\n  display: flex;\n  align-items: ",";\n  gap: 0.5rem;\n  min-height: 50px;\n  width: 100%;\n  filter: opacity(",");\n  .online {\n    background-color: #399f59;\n  }\n\n  .offline {\n    background-color: #a43d3e;\n  }\n\n  &:hover {\n    background-color: ",";\n    filter: opacity(1);\n  }\n"])),(function(n){return n.chat?void 0:"center"}),(function(n){return n.offline?"0.7":"1"}),(function(n){return n.primary?void 0:n.theme.hoverbg})),d=l.ZP.div(i||(i=(0,c.Z)(["\n  position: relative;\n  background-color: dimgray;\n  border-radius: 50%;\n  max-width: 35px;\n  max-height: 35px;\n\n  img {\n    height: auto;\n    width: 35px;\n  }\n  .status-container {\n    position: absolute;\n    z-index: 1;\n    bottom: -1px;\n    right: -1px;\n    background-color: ",";\n    padding: 0.15rem;\n    border-radius: 50%;\n\n    div {\n      height: 10px;\n      width: 10px;\n      border-radius: inherit;\n    }\n  }\n"])),(function(n){return n.theme.accent})),u=l.ZP.div(o||(o=(0,c.Z)(["\n  p:first-child {\n    font-weight: ",";\n    font-size: ",";\n    color: #5765f2;\n  }\n"])),(function(n){return n.chat?"900":"normal"}),(function(n){return n.chat?"1.1rem":"inherit"})),f=r(184);var h=function(n){var e=n.x,r=n.primary,t=n.chat,i=n.offline,o=n.children;return(0,f.jsxs)(s,{primary:r,chat:t,offline:i,children:[(0,f.jsxs)(d,{children:[(0,f.jsx)("img",{src:a,alt:(null===e||void 0===e?void 0:e.name)+" image"}),!t&&(0,f.jsx)("div",{className:"status-container",children:(0,f.jsx)("div",{className:null!==e&&void 0!==e&&e.isOnline?"online ":"offline "})})]}),(0,f.jsxs)(u,{chat:t,children:[(0,f.jsx)("p",{children:null===e||void 0===e?void 0:e.name}),o]})]})}},665:function(n,e,r){r.d(e,{r:function(){return f}});var t=r(7462),i=r(4942);function o(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var a=r(2791),c=r(7691),l=r(2213);function s(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function d(n){return Object.keys(n).reduce((function(e,r){var t;return t=r,(0,l.Z)(t)&&(e[r]=n[r]),e}),{})}var u=a.forwardRef((function(n,e){var r=n.children,c=n.iconAttrs,l=(n.iconVerticalAlign,n.iconViewBox),u=n.size,f=n.title,h=o(n,["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"]),m=function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){(0,i.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}({viewBox:l,height:void 0!==n.height?n.height:u,width:void 0!==n.width?n.width:u,"aria-hidden":null==f?"true":void 0,focusable:"false",role:null!=f?"img":void 0},c),p=d(h);return a.createElement("svg",(0,t.Z)({},m,p,{ref:e}),f&&a.createElement("title",{key:"icon-title"},f),r)})),f=(0,c.ZP)(u).withConfig({displayName:"StyledIconBase",componentId:"ea9ulj-0"})(["display:inline-block;vertical-align:",";overflow:hidden;"],(function(n){return n.iconVerticalAlign}))}}]);
//# sourceMappingURL=688.9c470839.chunk.js.map