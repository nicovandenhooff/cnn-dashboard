(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){e.exports=a(151)},114:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(22),o=a.n(c),i=(a(114),a(46)),u=a.n(i),m=a(70),s=a(9),d=a(207),f=a(210),b=a(208),p=a(211),g=a(209),E=a(195),h=a(94),v=a.n(h),x=a(204),y=a(200),j=a(198),O=a(61),w=["Dashboard","About","Contact"],k=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),a=t[0],n=t[1],c=function(){n(null)};return l.a.createElement(d.a,{position:"static"},l.a.createElement(x.a,{maxWidth:"xl"},l.a.createElement(b.a,{disableGutters:!0},l.a.createElement(g.a,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}}},"Indoor Image Detection"),l.a.createElement(f.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},l.a.createElement(p.a,{size:"large","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},color:"inherit"},l.a.createElement(v.a,null)),l.a.createElement(E.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(a),onClose:c,sx:{display:{xs:"block",md:"none"}}},w.map(function(e){return l.a.createElement(j.a,{key:e,onClick:c},l.a.createElement(O.b,{to:"/"},l.a.createElement(g.a,{textAlign:"center"},e)))}))),l.a.createElement(g.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},"Indoor Image Detection"),l.a.createElement(f.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex",justifyContent:"flex-end"}}},w.map(function(e){return l.a.createElement(y.a,{key:e,onClick:c,sx:{my:2,color:"white",display:"block"}},e)})))))},S=function(e){var t=e.children;return l.a.createElement(x.a,{maxWidth:"xl",sx:{flexGrow:1,display:"flex",flexDirection:{xs:"column",md:"row"},paddingTop:"40px"}},t)},C=a(55),N=a(203),F=a(74),L=a(98),I=Object(L.a)({typography:{fontFamily:['"Montserrat"',"Open Sans"].join(",")}}),D=Object(L.a)(Object(F.a)({},I,{palette:{type:"dark",primary:{main:"#26a27b"},secondary:{main:"#fafafa"}}})),A=Object(L.a)(Object(F.a)({},I,{palette:{type:"light",primary:{main:"#8499B1"},secondary:{main:"#053C5E"}}})),M={body:"#FFF",text:"black",backgroundColor:"#26a27b"},R={body:"#363537",text:"#FAFAFA",background:"#999"},T=Object(r.createContext)("light"),G=function(e){var t=e.children,a=function(){var e=Object(r.useState)("light"),t=Object(s.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(!1),c=Object(s.a)(l,2),o=c[0],i=c[1],u=function(e){window.localStorage.setItem("theme",e),n(e)};return Object(r.useEffect)(function(){var e=window.localStorage.getItem("theme");e?n(e):u("light"),i(!0)},[]),[a,function(){u("light"===a?"dark":"light")},o]}(),n=Object(s.a)(a,3),c=n[0],o=n[1],i=n[2];return l.a.createElement(T.Provider,{value:{theme:c,toggleTheme:o,componentMounted:i}},l.a.createElement(C.a,{theme:"light"===c?M:R},l.a.createElement(N.a,{theme:"light"===c?A:D},t)))},W=(a(123),function(e){var t=e.children,a=e.className,n=Object(r.useContext)(T).theme;return l.a.createElement("div",{className:"light"===n?"panel ".concat(a):"panel panel-dark ".concat(a)},t)}),z=(a(124),function(e){var t=e.isShowing,a=e.toggle,n=Object(r.useRef)();return function(e,t){Object(r.useEffect)(function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}},[e,t])}(n,function(){return a(!1)}),l.a.createElement(l.a.Fragment,null,t?o.a.createPortal(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modal-overlay"}),l.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},l.a.createElement("div",{ref:n,className:"modal"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("button",{type:"button",className:"modal-close-button","data-dismiss":"modal","aria-label":"Close",onClick:function(){a(!1)}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("p",null,"Whoops! Looks like you've forgotten to upload a photo.")))),document.body):null)}),U=(a(125),a(197)),B=a(202),P=a(205),J=a(201),V=(a(132),function(e){var t=e.handleSubmit,a=e.setImage,n=e.setNetwork,r=e.setTransferLearning;return l.a.createElement(J.a,{className:"form"},l.a.createElement("input",{type:"file",label:"Image",name:"myFile",accept:".jpeg, .png, .jpg",onChange:a}),"Select a network:",l.a.createElement(B.a,{"aria-labelledby":"network-label",defaultValue:"alexnet",name:"network",onChange:function(e){return n(e.target.value)},className:"radio-group"},l.a.createElement(P.a,{value:"alexnet",control:l.a.createElement(U.a,null),label:"AlexNet"}),l.a.createElement(P.a,{value:"densenet121",control:l.a.createElement(U.a,null),label:"DenseNet"}),l.a.createElement(P.a,{value:"resnet18",control:l.a.createElement(U.a,null),label:"ResNet"}),l.a.createElement(P.a,{value:"simple_cnn",control:l.a.createElement(U.a,null),label:"Simple Network"})),l.a.createElement(B.a,{"aria-labelledby":"network-label",defaultValue:"tuned",name:"transferLearning",onChange:function(e){return r(e.target.value)},className:"radio-group"},l.a.createElement(P.a,{value:"tuned",control:l.a.createElement(U.a,null),label:"Fully tuned"}),l.a.createElement(P.a,{value:"featex",control:l.a.createElement(U.a,null),label:"Last layer tuned"})),l.a.createElement(y.a,{variant:"contained",type:"submit",onClick:t},"Submit"))}),_=(a(133),function(e){var t=e.src;return l.a.createElement("div",null,l.a.createElement("img",{src:t,className:"image",alt:"upload"}))}),q=a(206),H=function(){var e=Object(r.useContext)(T),t=e.theme,a=e.toggleTheme;return l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:20}},l.a.createElement(q.a,{onChange:a,checked:"light"!==t}))},K=a(97),Q=a.n(K),X=a(30),Y=Object(C.b)(n||(n=Object(X.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: ",";\n    color: ",";\n    margin: 0;\n    padding: 0;\n    transition: all 0.3s ease-in;\n    font-family: 'Montserrat', cursive;\n  }"])),function(e){return e.theme.body},function(e){return e.theme.text}),Z=function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),o=Object(s.a)(c,2),i=o[0],d=o[1],f=Object(r.useState)("alexnet"),b=Object(s.a)(f,2),p=b[0],g=b[1],E=Object(r.useState)("tuned"),h=Object(s.a)(E,2),v=h[0],y=h[1],j=Object(r.useState)({myFile:""}),w=Object(s.a)(j,2),C=w[0],N=w[1],F=Object(r.useState)({}),L=Object(s.a)(F,2),I=L[0],D=L[1],A=Object(r.useContext)(T).theme,M=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1];return{showModal:a,toggle:function(){return n(!a)}}}(),R=M.showModal,G=M.toggle;Object(r.useEffect)(function(){if(a){var e=URL.createObjectURL(a);d(e)}},[a]);var U=function(){var e=Object(m.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a=t,Q.a.post("/predict",{newImage:a,network:p,transferLearning:v}).then(function(e){D(e.data)});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.message);case 8:case"end":return e.stop()}var a},e,null,[[0,5]])}));return function(t){return e.apply(this,arguments)}}(),B=function(e){return new Promise(function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){t(n.result)},n.onerror=function(e){a(e)}})},P=function(){var e=Object(m.a)(u.a.mark(function e(t){var a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.target.files),a=t.target.files[0],e.next=4,B(a);case 4:r=e.sent,N(r),n(a);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(Y,null),l.a.createElement("div",{className:"light"===A?"light theme":"dark theme"},l.a.createElement(O.a,null,l.a.createElement(k,null)),l.a.createElement(z,{isShowing:R,toggle:G}),l.a.createElement(x.a,{maxWidth:"xl",sx:{flexGrow:1,display:"flex",flexDirection:{md:"column"}}},l.a.createElement(H,null),l.a.createElement(S,null,l.a.createElement(W,{className:"panel-form"},l.a.createElement(V,{handleSubmit:function(e){e.preventDefault(),U(C)},setImageURL:d,setNetwork:g,setImage:function(e){return P(e)},setTransferLearning:y})),l.a.createElement(W,null,i&&l.a.createElement(_,{src:i})),l.a.createElement(W,null,Object.keys(I).map(function(e,t){return l.a.createElement("p",{key:t},l.a.createElement("span",null,e),l.a.createElement("span",null,": ",I[e]))}))))))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null,l.a.createElement(Z,null))),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.ece05ac4.chunk.js.map