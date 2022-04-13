"use strict";(self.webpackChunkdatcord=self.webpackChunkdatcord||[]).push([[374],{9374:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,i,o=t(5861),a=t(9439),c=t(7757),u=t.n(c),d=t(2791),l=t(168),s=t(7691),f=s.ZP.section(r||(r=(0,l.Z)(["\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),h=s.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 100vw;\n  background-color: ",";\n  color: ",";\n  padding: 1.5rem;\n  gap: 1rem;\n  border-radius: 7px;\n"])),(function(n){return n.theme.text}),(function(n){return n.theme.body})),p=t(5385),m=t(6626),x=t(3755),b=t(9062),g=t(2892),v=t(184);var y=function(n){var e=n.handleProfileView,t=n.handleLogOut,r=n.currentUser,i=(0,x.I)().user,c=(0,d.useState)(!1),l=(0,a.Z)(c,2),s=l[0],y=l[1],j=(0,d.useState)(""),k=(0,a.Z)(j,2),Z=k[0],w=k[1],P=(0,d.useState)(""),C=(0,a.Z)(P,2),S=C[0],N=C[1];function z(){return(z=(0,o.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t=(0,b.JU)(g.db,"users",i.uid),n.prev=2,!(""===Z||" "===Z||Z.length<3)){n.next=6;break}return N("Cannot be blank and must be more than 8 characters"),n.abrupt("return");case 6:return n.next=8,(0,b.r7)(t,{name:Z});case 8:y(!1),w(""),N(""),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[2,13]])})))).apply(this,arguments)}return(0,v.jsx)(f,{children:(0,v.jsxs)(h,{children:[(0,v.jsx)("h1",{children:"Profile"}),(0,v.jsx)(p.Z,{x:r,primary:!0,children:(0,v.jsxs)("p",{children:["Email: ",null===r||void 0===r?void 0:r.email]})}),(0,v.jsx)("div",{children:s?(0,v.jsxs)("form",{onSubmit:function(n){return z.apply(this,arguments)},children:[(0,v.jsx)("input",{placeholder:"Name...",onChange:function(n){w(n.target.value)}}),(0,v.jsx)("button",{onClick:function(){return y(!1)},type:"button",children:"\u2715"})]}):(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(m.Sn,{submit:!0,type:"button",onClick:function(){return y(!0)},children:"Edit Display Name"})})}),(0,v.jsx)(m.Sn,{submit:!0,onClick:e,children:"Go back"}),(0,v.jsx)(m.Sn,{submit:!0,onClick:t,children:"Log Out"}),S&&(0,v.jsx)("div",{children:S})]})})}},5385:function(n,e,t){t.d(e,{Z:function(){return h}});t(2791);var r,i,o,a=t.p+"static/media/pp-svg.5fe91ff931dc3e60a45a9fa50c85201f.svg",c=t(168),u=t(7691),d=u.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  align-items: ",";\n  gap: 0.5rem;\n  min-height: 50px;\n  width: 100%;\n  filter: opacity(",");\n  .online {\n    background-color: #399f59;\n  }\n\n  .offline {\n    background-color: #a43d3e;\n  }\n\n  &:hover {\n    background-color: ",";\n    filter: opacity(1);\n  }\n"])),(function(n){return n.chat?void 0:"center"}),(function(n){return n.offline?"0.7":"1"}),(function(n){return n.primary?void 0:n.theme.hoverbg})),l=u.ZP.div(i||(i=(0,c.Z)(["\n  position: relative;\n  background-color: dimgray;\n  border-radius: 50%;\n  max-width: 35px;\n  max-height: 35px;\n\n  img {\n    height: auto;\n    width: 35px;\n  }\n  .status-container {\n    position: absolute;\n    z-index: 1;\n    bottom: -1px;\n    right: -1px;\n    background-color: ",";\n    padding: 0.15rem;\n    border-radius: 50%;\n\n    div {\n      height: 10px;\n      width: 10px;\n      border-radius: inherit;\n    }\n  }\n"])),(function(n){return n.theme.accent})),s=u.ZP.div(o||(o=(0,c.Z)(["\n  p:first-child {\n    font-weight: ",";\n    font-size: ",";\n    color: #5765f2;\n  }\n"])),(function(n){return n.chat?"900":"normal"}),(function(n){return n.chat?"1.1rem":"inherit"})),f=t(184);var h=function(n){var e=n.x,t=n.primary,r=n.chat,i=n.offline,o=n.children;return(0,f.jsxs)(d,{primary:t,chat:r,offline:i,children:[(0,f.jsxs)(l,{children:[(0,f.jsx)("img",{src:a,alt:(null===e||void 0===e?void 0:e.name)+" image"}),!r&&(0,f.jsx)("div",{className:"status-container",children:(0,f.jsx)("div",{className:null!==e&&void 0!==e&&e.isOnline?"online ":"offline "})})]}),(0,f.jsxs)(s,{chat:r,children:[(0,f.jsx)("p",{children:null===e||void 0===e?void 0:e.name}),o]})]})}},6626:function(n,e,t){t.d(e,{Gq:function(){return f},PP:function(){return l},Sn:function(){return h},lx:function(){return s}});var r,i,o,a,c=t(168),u=t(7691),d=t(15),l=u.ZP.section(r||(r=(0,c.Z)(["\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: url(",");\n"])),d),s=u.ZP.div(i||(i=(0,c.Z)(["\n  display: flex;\n  max-width: 800px;\n  background-color: ",";\n  padding: 1.5rem;\n  gap: 1rem;\n  border-radius: 7px;\n\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n  }\n"])),(function(n){return n.theme.body})),f=u.ZP.form(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  min-width: 300px;\n  margin: 0 auto;\n  padding: 0.5rem;\n  label {\n    display: block;\n  }\n\n  h2 {\n    text-align: center;\n  }\n\n  input {\n    background-color: ",";\n    color: ",";\n    border: 1px solid ",";\n    font-size: 1.1rem;\n    width: 100%;\n    padding: 0.5rem;\n    border-radius: 7px;\n    &:focus {\n      outline: none;\n      border: 1px solid #5765f2;\n    }\n  }\n\n  .pass-container {\n    position: relative;\n  }\n  .show-btn {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n  }\n\n  .redirect-btn {\n    all: unset;\n    color: #5765f2;\n  }\n"])),(function(n){return n.theme.form}),(function(n){return n.theme.text}),(function(n){return n.theme.secondary})),h=u.ZP.button(a||(a=(0,c.Z)(["\n  cursor: pointer;\n  border: none;\n  background-color: ",";\n  width: ",";\n  padding: 0.4rem;\n  color: ",";\n  border-radius: 5px;\n  font-weight: 700;\n\n  &:hover {\n    filter: brightness(0.7);\n  }\n"])),(function(n){return n.submit?"#5765f2":n.theme.text}),(function(n){return n.submit?"100%":"60px"}),(function(n){return n.submit?"#fff":n.theme.body}))},15:function(n,e,t){n.exports=t.p+"static/media/mainbg.9e9d2692fac436ea4325.jpeg"}}]);
//# sourceMappingURL=374.cba4f90d.chunk.js.map