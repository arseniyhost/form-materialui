(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{140:function(e,t,a){e.exports=a(249)},145:function(e,t,a){},146:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),c=(a(145),a(146),a(77)),i=a(289),m=a(287),s=a(277),u=a(296),d=Object(s.a)((function(e){return Object(u.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})})),f=a(283),E=a(288),b=a(293),p=a(52),v=a.n(p),h=a(292),g=a(286),_=a(76),k=a.n(_),y=a(285),w=a(291),x=a(280),M=a(282),j=a(290),C=a(295),N=a(64),S=a.n(N),A=function(e){var t=e.label,a=e.input,n=e.meta,o=n.touched,l=n.error,c=o&&l;return r.a.createElement("div",{className:c?S.a.error:""},r.a.createElement(x.a,Object.assign({label:t,placeholder:t},a,{type:"number"})),o&&l&&r.a.createElement("span",{className:S.a.error},l))},O=function(e){var t=e.input,a=e.meta,n=a.touched,o=a.error,l=n&&o;return r.a.createElement("div",{className:l?S.a.error:""},r.a.createElement(M.a,null,r.a.createElement(j.a,Object.assign({p:2},t),r.a.createElement(C.a,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435"),["red","green","blue","yellow","grey","white","orange"].map((function(e){return r.a.createElement(C.a,{value:e,key:e},e)}))),n&&o&&r.a.createElement("span",{className:S.a.error},o)))},F=a(284),z=function(e){if(!e)return"required"},G=function(e){var t=e.disabled,a=e.type,n=e.color,o=e.onClick,l=e.className,c=e.text,i=e.variant;return r.a.createElement(E.a,{p:2},r.a.createElement(f.a,{variant:i,disabled:t,type:a,color:n,onClick:o,className:l},c))},I=function(e){return function(t){if(t&&t.length>e)return"maximum is ".concat(e)}}(4),P=function(e){var t=e.fields;return r.a.createElement("ul",null,t.map((function(e,a){return r.a.createElement("div",{key:e},r.a.createElement(F.a,{spacing:1,container:!0,direction:"row"},r.a.createElement(F.a,{item:!0,xs:3},r.a.createElement(w.a,{validate:[z],component:O,name:e+"colors"})),r.a.createElement(F.a,{item:!0,xs:2},r.a.createElement(w.a,{validate:[z,I],name:e+"number",type:"number",component:A})),r.a.createElement(F.a,{item:!0,xs:2},r.a.createElement(y.a,{color:"secondary",size:"small",onClick:function(){return t.remove(a)}},r.a.createElement(k.a,null)))))})),r.a.createElement("li",null,r.a.createElement(G,{color:"primary",disabled:t.length+1>5,className:v.a.btnPush,type:"button",onClick:function(){return t.push()},text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})))},W=function(e){var t=e.classes,a=e.modelActive,n=e.offModelActive,o=e.handleSubmit;return r.a.createElement(h.a,{className:t.modal,open:a},r.a.createElement(g.a,{in:a},r.a.createElement("form",{onSubmit:o,className:v.a.modal},r.a.createElement(E.a,{p:2,fontSize:24,fontWeight:"fontWeightMedium",className:v.a.head},"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043d\u043e\u043c\u0435\u0440\u0430",r.a.createElement(y.a,{id:"btnClose",color:"inherit",onClick:n},r.a.createElement(k.a,null))),r.a.createElement(b.a,{name:"list",component:P}),r.a.createElement(F.a,{container:!0,direction:"row"},r.a.createElement(G,{xs:3,variant:"contained",color:"primary",type:"submit",id:v.a.btnSave,text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),r.a.createElement(G,{xs:3,onClick:n,text:"\u041e\u0442\u043c\u0435\u043d\u0430"})))))},B=Object(i.a)({form:"test"})((function(e){var t=e.offModelActive,a=e.onModelActive,n=e.modelActive,o=e.handleSubmit,l=e.classes;return r.a.createElement("div",{className:"container"},r.a.createElement(E.a,null,r.a.createElement(f.a,{p:2,fontSize:22,variant:"contained",color:"primary",onClick:a},"Open"),r.a.createElement(W,{classes:l,modelActive:n,offModelActive:t,handleSubmit:o})))})),J=function(){var e=d(),t=Object(n.useState)(!1),a=Object(c.a)(t,2),o=a[0],l=a[1];return r.a.createElement(m.a,null,r.a.createElement(B,{classes:e,onSubmit:function(e){e&&e.list?e.list&&(0!==e.list.length&&e.list?(console.log(e),l(!1)):console.log("Error123")):alert("Error")},onModelActive:function(){l(!0)},offModelActive:function(){l(!1)},modelActive:o}))},q=function(){return r.a.createElement("div",null,r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(31),T=a(12),X=a(294),$=Object(T.b)({form:X.a}),H=Object(T.c)($);window.store=H;var K=H;l.a.render(r.a.createElement(D.a,{store:K},r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,t,a){e.exports={modal:"ModalForm_modal__3aB4F",btnIcon:"ModalForm_btnIcon__3knoi",head:"ModalForm_head__1TGjz",grid:"ModalForm_grid__1G4CX",btnPush:"ModalForm_btnPush__19GJb",btnSave:"ModalForm_btnSave__3NPjo",btnClose:"ModalForm_btnClose__8jGgi"}},64:function(e,t,a){e.exports={error:"utils_error__3a8Ds"}}},[[140,1,2]]]);
//# sourceMappingURL=main.2c70f142.chunk.js.map