(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,a,t){e.exports=t(146)},118:function(e,a,t){},123:function(e,a,t){},124:function(e,a,t){},144:function(e,a,t){},145:function(e,a,t){},146:function(e,a,t){"use strict";t.r(a);var n,l=t(0),r=t.n(l),o=t(23),c=t.n(o),i=(t(118),t(11)),s=t(99),m=t.n(s),u=t(192),d=t(194),p=t(195),f=t(196),g=t(197),x=t(198),b=t(183),E=t(186),h=t(188),y=t(62),v=[],w=function(){var e=Object(l.useState)(null),a=Object(i.a)(e,2),t=a[0],n=a[1],o=function(){n(null)};return r.a.createElement(u.a,{position:"static"},r.a.createElement(d.a,{maxWidth:"xl"},r.a.createElement(p.a,{disableGutters:!0},r.a.createElement(f.a,{variant:"h5",component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}}},"Indoor Image Detection"),r.a.createElement(g.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},r.a.createElement(x.a,{size:"large","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},color:"inherit"},r.a.createElement(m.a,null)),r.a.createElement(b.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(t),onClose:o,sx:{display:{xs:"block",md:"none"}}},v.map(function(e){return r.a.createElement(E.a,{key:e,onClick:o},r.a.createElement(y.b,{to:"/"},r.a.createElement(f.a,{textAlign:"center"},e)))}))),r.a.createElement(f.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},"Indoor Image Detection"),r.a.createElement(g.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex",justifyContent:"flex-end"}}},v.map(function(e){return r.a.createElement(h.a,{key:e,onClick:o,sx:{my:2,color:"white",display:"block"}},e)})))))},j=function(e){var a=e.children;return r.a.createElement(d.a,{maxWidth:"xl",sx:{flexGrow:1,display:"flex",flexDirection:{xs:"column",md:"row"}}},a)},k=t(54),O=t(191),S=t(74),C=t(105),F=Object(C.a)({typography:{fontFamily:['"Montserrat"',"Open Sans"].join(",")}}),L=Object(C.a)(Object(S.a)({},F,{palette:{type:"dark",primary:{main:"#26a27b"},secondary:{main:"#fafafa"}}})),N=Object(C.a)(Object(S.a)({},F,{palette:{type:"light",primary:{main:"#8499B1"},secondary:{main:"#053C5E"}}})),R={body:"#FFF",text:"black",backgroundColor:"#26a27b"},D={body:"#363537",text:"#FAFAFA",background:"#999"},I=Object(l.createContext)("light"),A=function(e){var a=e.children,t=function(){var e=Object(l.useState)("light"),a=Object(i.a)(e,2),t=a[0],n=a[1],r=Object(l.useState)(!1),o=Object(i.a)(r,2),c=o[0],s=o[1],m=function(e){window.localStorage.setItem("theme",e),n(e)};return Object(l.useEffect)(function(){var e=window.localStorage.getItem("theme");e?n(e):m("light"),s(!0)},[]),[t,function(){m("light"===t?"dark":"light")},c]}(),n=Object(i.a)(t,3),o=n[0],c=n[1],s=n[2];return r.a.createElement(I.Provider,{value:{theme:o,toggleTheme:c,componentMounted:s}},r.a.createElement(k.a,{theme:"light"===o?R:D},r.a.createElement(O.a,{theme:"light"===o?N:L},a)))},U=(t(123),t(124),function(e){var a=e.isShowing,t=e.toggle,n=Object(l.useRef)();return function(e,a){Object(l.useEffect)(function(){var t=function(t){e.current&&!e.current.contains(t.target)&&a(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),function(){document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[e,a])}(n,function(){return t(!1)}),r.a.createElement(r.a.Fragment,null,a?c.a.createPortal(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-overlay"}),r.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},r.a.createElement("div",{ref:n,className:"modal"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("button",{type:"button",className:"modal-close-button","data-dismiss":"modal","aria-label":"Close",onClick:function(){t(!1)}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("p",null,"Whoops! Looks like you've forgotten to upload a photo.")))),document.body):null)}),W=t(75),z=t.n(W),B=t(102),G=t(189),M=t(190),P=t(201),_=t(185),T=t(103),J=t.n(T).a.create({baseURL:"https://cnn-dashboard-backend.herokuapp.com/"}),V=t(199),q=t(200),K=function(e){var a=e.handleFileUpload;return r.a.createElement(g.a,{sx:{mb:2}},r.a.createElement(V.a,{sx:{gridAutoFlow:"column",gridTemplateColumns:"repeat(auto-fill,minmax(100px,1fr)) !important",gridAutoColumns:"minmax(100px, 1fr)"}},H.map(function(e){return r.a.createElement(q.a,{key:e.id,sx:{cursor:"pointer"}},r.a.createElement("img",{src:"".concat(e.src),alt:e.title,loading:"lazy",onClick:a,id:e.id}))})))},H=[{src:"assets/images/airport.jpeg",title:"Airport",id:"airport"},{src:"assets/images/bakery.jpeg",title:"Bakery",id:"bakery"},{src:"assets/images/bar.jpeg",title:"Bar",id:"bar"},{src:"assets/images/bedroom.jpeg",title:"Bedroom",id:"bedroom"},{src:"assets/images/kitchen.jpeg",title:"Kitchen",id:"kitchen"},{src:"assets/images/livingroom.jpeg",title:"Living Room",id:"livingroom"},{src:"assets/images/pantry.jpeg",title:"Pantry",id:"pantry"},{src:"assets/images/restaurant.jpeg",title:"Restaurant",id:"restaurant"},{src:"assets/images/subway.jpeg",title:"Subway",id:"subway"},{src:"assets/images/warehouse.jpeg",title:"Warehouse",id:"warehouse"}],Q=(t(144),t(104)),X=t.n(Q),Y=function(e){var a=e.handleFileUpload,t=r.a.useRef(null);return r.a.createElement(g.a,{sx:{mb:4,alignSelf:"center"}},r.a.createElement(h.a,{onClick:function(e){t.current.click()},variant:"outlined",color:"secondary"},r.a.createElement(X.a,{sx:{mr:1}}),r.a.createElement(f.a,{variant:"body",noWrap:!0},"Upload an image")),r.a.createElement("input",{type:"file",ref:t,onChange:a,style:{display:"none"},accept:".jpeg, .png, .jpg"}))},Z=function(e){var a=e.image,t=e.toggle,n=e.setImage,o=e.setPredictions,c=(e.loading,e.setLoading),s=Object(l.useState)("alexnet"),m=Object(i.a)(s,2),u=m[0],d=m[1],p=Object(l.useState)("tuned"),g=Object(i.a)(p,2),x=g[0],b=g[1],E=Object(l.useState)(null),y=Object(i.a)(E,2),v=y[0],w=y[1],j=function(){var e=Object(B.a)(z.a.mark(function e(a){var t,l,r,o,c,i;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=a.target).id){e.next=12;break}return o=document.getElementById(t.id),e.next=5,fetch(o.src);case 5:return e.next=7,e.sent.blob();case 7:c=e.sent,r=t.src,l=new File([c],r,c),e.next=14;break;case 12:l=a.target.files[0],r=URL.createObjectURL(l);case 14:return e.next=16,k(l);case 16:i=e.sent,w(i),n(r);case 19:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),k=function(e){return new Promise(function(a,t){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){a(n.result)},n.onerror=function(e){t(e)}})},O=function(e){if(!a||!u)return t(!0);c(!0),e.preventDefault();var n="simple_cnn"!==u?u+"_"+x:"simple_cnn";return J.post("/api/predict",{image:v,modelName:n}).then(function(e){o(e.data),c(!1)}).catch(function(e){console.log("error = ".concat(e))})};return r.a.createElement(G.a,{className:"form"},r.a.createElement(f.a,null,"1. Select or upload an image:"),r.a.createElement(K,{handleFileUpload:j}),r.a.createElement(Y,{handleFileUpload:j}),r.a.createElement(f.a,null,"2. Select a network:"),r.a.createElement(M.a,{"aria-labelledby":"network-label",defaultValue:"alexnet",name:"network",onChange:function(e){return d(e.target.value)},className:"radio-group"},r.a.createElement(P.a,{value:"alexnet",control:r.a.createElement(_.a,null),label:r.a.createElement(f.a,{variant:"body2"},"AlexNet")}),r.a.createElement(P.a,{value:"densenet121",control:r.a.createElement(_.a,null),label:r.a.createElement(f.a,{variant:"body2"},"DenseNet")}),r.a.createElement(P.a,{value:"resnet18",control:r.a.createElement(_.a,null),label:r.a.createElement(f.a,{variant:"body2"},"ResNet")}),r.a.createElement(P.a,{value:"simple_cnn",control:r.a.createElement(_.a,null),label:r.a.createElement(f.a,{variant:"body2"},"Simple Network")})),"simple_cnn"===u?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,"3. Select transfer learning technique: "),r.a.createElement(M.a,{"aria-labelledby":"network-label",defaultValue:"tuned",name:"transferLearning",onChange:function(e){return b(e.target.value)},className:"radio-group"},r.a.createElement(P.a,{value:"tuned",control:r.a.createElement(_.a,null),label:r.a.createElement(f.a,{variant:"body2"},"All layers tuned")}),r.a.createElement(P.a,{value:"featex",control:r.a.createElement(_.a,null),label:r.a.createElement(f.a,{variant:"body2"},"Only last layer tuned")}))),r.a.createElement(h.a,{variant:"contained",type:"submit",onClick:O,sx:{alignSelf:"flex-end",width:"100%",maxWidth:"-webkit-fill-available"}},"Submit"))},$=(t(145),function(e){var a=e.src;return r.a.createElement("div",null,r.a.createElement("img",{src:a,className:"image",alt:"upload"}))}),ee=t(202),ae=t(203),te=t(204),ne=t(205),le=t(206),re=t(207),oe=t(22),ce=Object(k.b)(n||(n=Object(oe.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: ",";\n    color: ",";\n    margin: 0;\n    padding: 0;\n    transition: all 0.3s ease-in;\n    font-family: 'Montserrat', cursive;\n  }"])),function(e){return e.theme.body},function(e){return e.theme.text}),ie=function(){var e=Object(l.useState)(),a=Object(i.a)(e,2),t=a[0],n=a[1],o=Object(l.useState)(null),c=Object(i.a)(o,2),s=c[0],m=c[1],u=Object(l.useState)(!1),p=Object(i.a)(u,2),x=p[0],b=p[1],E=Object(l.useContext)(I).theme,h=function(){var e=Object(l.useState)(!1),a=Object(i.a)(e,2),t=a[0],n=a[1];return{showModal:t,toggle:function(){return n(!t)}}}(),v=h.showModal,k=h.toggle;return console.log(s),r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,null),r.a.createElement("div",{className:"light"===E?"light theme":"dark theme"},r.a.createElement(y.a,null,r.a.createElement(w,null)),r.a.createElement(U,{isShowing:v,toggle:k}),r.a.createElement(d.a,{maxWidth:"xl",sx:{flexGrow:1,display:"flex",flexDirection:"column"}},r.a.createElement(g.a,{sx:{display:"flex",flexGrow:1,justifyContent:"space-between",padding:"40px 40px 20px",fontSize:"large",flexDirection:{sm:"column",md:"row"}}},r.a.createElement(f.a,{variant:"h6",component:"div",sx:{mr:2,display:"flex"}},"Some stuff we can put here...")),r.a.createElement(j,null,r.a.createElement(g.a,{sx:{display:"flex",flex:"0 1 250px",maxWidth:"400px",padding:"36px 24px",marginLeft:"20px",marginRight:"20px",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",flexDirection:"column",transition:"all 0.4s ease-in",borderRadius:"4px"}},r.a.createElement(Z,{setImage:n,image:t,toggle:k,setPredictions:m,setLoading:b,loading:x})),r.a.createElement(g.a,{sx:{display:"flex",flex:1,padding:"36px 24px",marginLeft:"20px",marginRight:"20px",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",flexDirection:{sm:"column",lg:"row"},transition:"all 0.4s ease-in",borderRadius:"4px"}},r.a.createElement(g.a,{sx:{width:"450px",display:"flex",flexDirection:"column",alignItems:"center",flex:1}},r.a.createElement(f.a,{variant:"h6",component:"div",sx:{display:"flex",alignSelf:"center",mb:"20px"}},"Selected Image"),t&&r.a.createElement($,{src:t})),r.a.createElement(g.a,{sx:{display:"flex",flexDirection:"column",flex:1}},r.a.createElement(f.a,{variant:"h6",component:"div",sx:{display:"flex",alignSelf:"center",mb:"20px"}},"Top 3 class predictions:"),x?r.a.createElement(f.a,{variant:"body",component:"div",sx:{display:"flex",alignSelf:"center",mb:"20px",flexDirection:"column"}},r.a.createElement(ee.a,{color:"secondary",size:"20px",sx:{alignSelf:"center"}}),"Calculating..."):s&&r.a.createElement(ae.a,{"aria-label":"simple table"},r.a.createElement(te.a,null,r.a.createElement(ne.a,null,r.a.createElement(le.a,null),r.a.createElement(le.a,null,"Class"),r.a.createElement(le.a,null,"Probability"))),r.a.createElement(re.a,null,s.predictions.map(function(e,a){return r.a.createElement(ne.a,{key:e.class,sx:{"&:last-child td, &:last-child th":{border:0}}},r.a.createElement(le.a,{component:"th",scope:"row"},a+1),r.a.createElement(le.a,{component:"th",scope:"row"},e.class),r.a.createElement(le.a,{component:"th",scope:"row"},parseFloat(e.prob).toFixed(4)))})))))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null,r.a.createElement(ie,null))),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.1f95209a.chunk.js.map