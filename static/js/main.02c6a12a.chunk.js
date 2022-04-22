(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){e.exports=a(153)},125:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),l=a(27),c=a.n(l),i=(a(125),a(11)),s=a(104),m=a.n(s),d=a(202),u=a(201),p=a(204),b=a(70),f=a(205),x=a(206),h=a(191),g=a(196),E=a(198),y=a(44),v={Dashboard:"",About:"about",Contact:"contact"},w=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],l=function(){n(null)};return o.a.createElement(d.a,{position:"static"},o.a.createElement(u.a,{maxWidth:"xl"},o.a.createElement(p.a,{disableGutters:!0},o.a.createElement(b.a,{variant:"h5",component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}}},"Indoor Scene Detector"),o.a.createElement(f.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},o.a.createElement(x.a,{size:"large","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},color:"inherit"},o.a.createElement(m.a,null)),o.a.createElement(h.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(a),onClose:l,sx:{display:{xs:"block",md:"none"}}},Object.keys(v).map(function(e){return o.a.createElement(g.a,{key:e,onClick:l},o.a.createElement(y.b,{style:{textDecoration:"none",color:"white"},to:"/"+v[e]},o.a.createElement(b.a,{textAlign:"center"},e)))}))),o.a.createElement(b.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},"Indoor Scene Detector"),o.a.createElement(f.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex",justifyContent:"flex-end"}}},Object.keys(v).map(function(e){return o.a.createElement(E.a,{key:e,onClick:l,sx:{my:2,color:"white",display:"block"}},o.a.createElement(y.b,{style:{textDecoration:"none",color:"white"},to:"/"+v[e]},o.a.createElement(b.a,{textAlign:"center"},e)))})))))},k=function(e){var t=e.children;return o.a.createElement(u.a,{maxWidth:"xl",sx:{flexGrow:1,display:"flex",flexDirection:{xs:"column",md:"row"}}},t)},j=a(59),S=a(197),O=a(79),C=a(110),N=Object(C.a)({typography:{fontFamily:['"Montserrat"',"Open Sans"].join(",")}}),D=Object(C.a)(Object(O.a)({},N,{palette:{type:"dark",primary:{main:"#26a27b"},secondary:{main:"#fafafa"}}})),I=Object(C.a)(Object(O.a)({},N,{palette:{type:"light",primary:{main:"#8499B1"},secondary:{main:"#053C5E"}}})),F={body:"#FFF",text:"black",backgroundColor:"#26a27b"},R={body:"#363537",text:"#FAFAFA",background:"#999"},L=Object(r.createContext)("light"),A=function(e){var t=e.children,a=function(){var e=Object(r.useState)("light"),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(!1),l=Object(i.a)(o,2),c=l[0],s=l[1],m=function(e){window.localStorage.setItem("theme",e),n(e)};return Object(r.useEffect)(function(){var e=window.localStorage.getItem("theme");e?n(e):m("light"),s(!0)},[]),[a,function(){m("light"===a?"dark":"light")},c]}(),n=Object(i.a)(a,3),l=n[0],c=n[1],s=n[2];return o.a.createElement(L.Provider,{value:{theme:l,toggleTheme:c,componentMounted:s}},o.a.createElement(j.a,{theme:"light"===l?F:R},o.a.createElement(S.a,{theme:"light"===l?I:D},t)))},T=(a(130),a(131),function(e){var t=e.isShowing,a=e.toggle,n=Object(r.useRef)();return function(e,t){Object(r.useEffect)(function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}},[e,t])}(n,function(){return a(!1)}),o.a.createElement(o.a.Fragment,null,t?c.a.createPortal(o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"modal-overlay"}),o.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},o.a.createElement("div",{ref:n,className:"modal"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("button",{type:"button",className:"modal-close-button","data-dismiss":"modal","aria-label":"Close",onClick:function(){a(!1)}},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("p",null,"Whoops! Looks like you've forgotten to select or upload a photo.")))),document.body):null)}),P=a(14),M=a(207),W=a(194),G=a(190),U=function(){return o.a.createElement(u.a,{maxWidth:"xl",sx:{flexGrow:1,display:"flex",flexDirection:"column"}},o.a.createElement(f.a,{sx:{padding:"40px 40px 20px"}},o.a.createElement(b.a,{variant:"h4",component:"p",sx:{mb:1}},"Application Description"),o.a.createElement(b.a,{variant:"body",component:"p",sx:{mb:2}},"Indoor Scene Detector is a full stack computer vision application built with PyTorch, Captum, Flask, React, Docker, Heroku and GitHub Pages."),o.a.createElement(b.a,{variant:"body",component:"p",sx:{mb:2}},"Indoor Scene Detector is capable of classifying images of an indoor scene, such as a bedroom or a kitchen.  Currently, Indoor Scene Detector includes support for ten categories of scenes: airport, bakery, bar, bedroom, kitchen, living room, pantry, restaurant, subway, and warehouse.  Support for more classes is currently under development."),o.a.createElement(b.a,{variant:"body",component:"p",sx:{mb:2}},'In order to classify a scene, there are four convolutional neural networks available.  These include tuned versions of AlexNet, ResNet, or DenseNet, in addition to a simple "vanilla" CNN that has no transfer learning applied to it.  If AlexNet, ResNet or DenseNet are used, Indoor Scene Detector demonstrates the power of transfer learning in computer vision, as the tuned versions of these networks should obtain a much higher accuracy in predictions when compared to the simple CNN with no transfer learning.'),o.a.createElement(b.a,{variant:"h4",component:"p",sx:{mb:1}},"How to Use Indoor Scene Detector"),o.a.createElement(b.a,{variant:"body",component:"p",sx:{mb:2}},o.a.createElement(M.a,null,o.a.createElement(W.a,{disablePadding:!0},o.a.createElement(G.a,{primary:"1. Select one of the preloaded images or upload your own to classify."})),o.a.createElement(W.a,{disablePadding:!0},o.a.createElement(G.a,{primary:"2. Select the convolutional neural network you would like to use to classify the image."})),o.a.createElement(W.a,{disablePadding:!0},o.a.createElement(G.a,{primary:"3. Press submit and your image will be classified."})))),o.a.createElement(b.a,{variant:"h4",component:"p",sx:{mb:1}},"Model Outputs"),o.a.createElement(b.a,{variant:"body",component:"p",sx:{mb:2}},"Each CNN will output the top three predictions for an image ranked by probability in descending order.  In addition, a heatmap of the images Saliency attributes is plotted.  Saliency is an algorithm that attempts to explain the predictions a CNN makes by calculating the gradient of the output with respect to the input.  The absolute value of Saliency attributes can be taken to represent feature importance. To learn more, please see the ",o.a.createElement("a",{href:"https://arxiv.org/pdf/1312.6034.pdf"},"original paper"),", or the ",o.a.createElement("a",{href:"https://captum.ai/docs/algorithms#saliency"},"Captum")," documentation."),o.a.createElement(b.a,{variant:"h4",component:"p",sx:{mb:1}},"Source Code"),o.a.createElement(b.a,{variant:"body",component:"p",sx:{mb:2}},"The source code for Indoor Scene Detector is hosted in this ",o.a.createElement("a",{href:"https://github.com/nicovandenhooff/cnn-dashboard"},"GitHub repository"),"."),o.a.createElement(b.a,{variant:"h4",component:"p",sx:{mb:1}},"Attributions"),o.a.createElement(b.a,{variant:"body",component:"p",sx:{mb:2}},"The data set used in building Indoor Scene Detector was the ",o.a.createElement("a",{href:"https://web.mit.edu/torralba/www/indoor.html"},"Indoor Scene Recognition")," data set collected by MIT.")))},B=a(80),z=a.n(B),H=a(107),_=a(199),V=a(200),J=a(210),K=a(193),q=a(108),Q=a.n(q).a.create({baseURL:"https://cnn-dashboard-backend.herokuapp.com/"}),X=a(208),Y=a(209),Z=function(e){var t=e.handleFileUpload;return o.a.createElement(f.a,{sx:{mb:2}},o.a.createElement(X.a,{sx:{gridAutoFlow:"column",gridTemplateColumns:"repeat(auto-fill,minmax(100px,1fr)) !important",gridAutoColumns:"minmax(100px, 1fr)"}},$.map(function(e){return o.a.createElement(Y.a,{key:e.id,sx:{cursor:"pointer"}},o.a.createElement("img",{src:"".concat(e.src),alt:e.title,loading:"lazy",onClick:t,id:e.id}))})))},$=[{src:"assets/images/airport.jpeg",title:"Airport",id:"airport"},{src:"assets/images/bakery.jpeg",title:"Bakery",id:"bakery"},{src:"assets/images/bar.jpeg",title:"Bar",id:"bar"},{src:"assets/images/bedroom.jpeg",title:"Bedroom",id:"bedroom"},{src:"assets/images/kitchen.jpeg",title:"Kitchen",id:"kitchen"},{src:"assets/images/livingroom.jpeg",title:"Living Room",id:"livingroom"},{src:"assets/images/pantry.jpeg",title:"Pantry",id:"pantry"},{src:"assets/images/restaurant.jpeg",title:"Restaurant",id:"restaurant"},{src:"assets/images/subway.jpeg",title:"Subway",id:"subway"},{src:"assets/images/warehouse.jpeg",title:"Warehouse",id:"warehouse"}],ee=(a(151),a(109)),te=a.n(ee),ae=function(e){var t=e.handleFileUpload,a=o.a.useRef(null);return o.a.createElement(f.a,{sx:{mb:4,alignSelf:"center"}},o.a.createElement(E.a,{onClick:function(e){a.current.click()},variant:"outlined",color:"secondary"},o.a.createElement(te.a,{sx:{mr:1}}),o.a.createElement(b.a,{variant:"body",noWrap:!0},"Upload an image")),o.a.createElement("input",{type:"file",ref:a,onChange:t,style:{display:"none"},accept:".jpeg, .png, .jpg"}))},ne=function(e){var t=e.image,a=e.toggle,n=e.setImage,l=e.setPredictions,c=e.setLoading,s=Object(r.useState)("densenet121"),m=Object(i.a)(s,2),d=m[0],u=m[1],p=Object(r.useState)(null),f=Object(i.a)(p,2),x=f[0],h=f[1],g=function(){var e=Object(H.a)(z.a.mark(function e(t){var a,r,o,l,c,i;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=t.target).id){e.next=12;break}return l=document.getElementById(a.id),e.next=5,fetch(l.src);case 5:return e.next=7,e.sent.blob();case 7:c=e.sent,o=a.src,r=new File([c],o,c),e.next=14;break;case 12:r=t.target.files[0],o=URL.createObjectURL(r);case 14:return e.next=16,y(r);case 16:i=e.sent,h(i),n(o);case 19:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),y=function(e){return new Promise(function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){t(n.result)},n.onerror=function(e){a(e)}})},v=function(e){if(!t||!d)return a(!0);c(!0),e.preventDefault();var n="simple_cnn"!==d?d+"_tuned":"simple_cnn";return Q.post("/api/predict",{image:x,modelName:n}).then(function(e){l(e.data),c(!1)}).catch(function(e){console.log("error = ".concat(e))})};return o.a.createElement(_.a,{className:"form"},o.a.createElement(b.a,null,"1. Select or upload an image:"),o.a.createElement(Z,{handleFileUpload:g}),o.a.createElement(ae,{handleFileUpload:g}),o.a.createElement(b.a,null,"2. Select a network:"),o.a.createElement(V.a,{"aria-labelledby":"network-label",defaultValue:"densenet121",name:"network",onChange:function(e){return u(e.target.value)},className:"radio-group"},o.a.createElement(J.a,{value:"densenet121",control:o.a.createElement(K.a,null),label:o.a.createElement(b.a,{variant:"body2"},"DenseNet (Tuned)")}),o.a.createElement(J.a,{value:"resnet18",control:o.a.createElement(K.a,null),label:o.a.createElement(b.a,{variant:"body2"},"ResNet (Tuned)")}),o.a.createElement(J.a,{value:"alexnet",control:o.a.createElement(K.a,null),label:o.a.createElement(b.a,{variant:"body2"},"AlexNet (Tuned)")}),o.a.createElement(J.a,{value:"simple_cnn",control:o.a.createElement(K.a,null),label:o.a.createElement(b.a,{variant:"body2"},"Vanilla CNN (No Transfer Learning)")})),o.a.createElement(E.a,{variant:"contained",type:"submit",onClick:v,sx:{alignSelf:"flex-end",width:"100%",maxWidth:"-webkit-fill-available"}},"Submit"))},re=(a(152),function(e){var t=e.src;return o.a.createElement("div",null,o.a.createElement("img",{src:t,className:"image",alt:"upload"}))}),oe=a(211),le=a(212),ce=a(213),ie=a(214),se=a(215),me=a(216),de=function(){var e,t=Object(r.useState)(),a=Object(i.a)(t,2),n=a[0],l=a[1],c=Object(r.useState)(null),s=Object(i.a)(c,2),m=s[0],d=s[1],p=Object(r.useState)(!1),x=Object(i.a)(p,2),h=x[0],g=x[1],E=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return{showModal:a,toggle:function(){return n(!a)}}}(),y=E.showModal,v=E.toggle;m&&(e=m.saliency_b64.slice(0,-1).substring(2));return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,{isShowing:y,toggle:v}),o.a.createElement(u.a,{maxWidth:"xl",sx:{flexGrow:1,display:"flex",flexDirection:"column"}},o.a.createElement(f.a,{sx:{padding:"40px 40px 20px"}},o.a.createElement(b.a,{variant:"h6",component:"p",sx:{mb:1}},"Welcome to Indoor Scene Detector!"),o.a.createElement(b.a,{variant:"body",component:"p",sx:{mb:2}},"Select or upload an image of an indoor scene to classify it.")),o.a.createElement(k,null,o.a.createElement(f.a,{sx:{display:"flex",flex:"0 1 250px",maxWidth:"400px",padding:"36px 24px",marginLeft:"20px",marginRight:"20px",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",flexDirection:"column",transition:"all 0.4s ease-in",borderRadius:"4px"}},o.a.createElement(ne,{setImage:l,image:n,toggle:v,setPredictions:d,setLoading:g,loading:h})),o.a.createElement(f.a,{sx:{display:"flex",flex:1,padding:"36px 24px",marginLeft:"20px",marginRight:"20px",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",flexDirection:{sm:"column",lg:"row"},transition:"all 0.4s ease-in",borderRadius:"4px"}},o.a.createElement(f.a,{sx:{width:"450px",display:"flex",flexDirection:"column",alignItems:"center",flex:1}},o.a.createElement(b.a,{variant:"h6",component:"div",sx:{display:"flex",alignSelf:"center",mb:"20px"}},"Image to classify:"),n&&o.a.createElement(re,{src:n})),o.a.createElement(f.a,{sx:{display:"flex",flexDirection:"column",flex:1}},o.a.createElement(b.a,{variant:"h6",component:"div",sx:{display:"flex",alignSelf:"center",mb:"20px"}},"Top 3 class predictions:"),h?o.a.createElement(b.a,{variant:"body",component:"div",sx:{display:"flex",alignSelf:"center",mb:"20px",flexDirection:"column"}},o.a.createElement(oe.a,{color:"secondary",size:"20px",sx:{alignSelf:"center"}}),"Calculating..."):m&&o.a.createElement(le.a,{"aria-label":"simple table"},o.a.createElement(ce.a,null,o.a.createElement(ie.a,null,o.a.createElement(se.a,null),o.a.createElement(se.a,null,"Class"),o.a.createElement(se.a,null,"Probability"))),o.a.createElement(me.a,null,m.predictions.map(function(e,t){return o.a.createElement(ie.a,{key:e.class,sx:{"&:last-child td, &:last-child th":{border:0}}},o.a.createElement(se.a,{component:"th",scope:"row"},t+1),o.a.createElement(se.a,{component:"th",scope:"row"},e.class),o.a.createElement(se.a,{component:"th",scope:"row"},parseFloat(e.prob).toFixed(4)))}))),e&&!h&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{variant:"h6",component:"div",sx:{mt:"70px",display:"flex",alignSelf:"center"}},"Saliency Coefficient Heatmap (Key Pixels)"),o.a.createElement(re,{src:"data:image/jpeg;base64,".concat(e)})))))))},ue=function(){return o.a.createElement(u.a,{maxWidth:"xl",sx:{flexGrow:1,display:"flex",flexDirection:"column"}},o.a.createElement(f.a,{sx:{padding:"40px 40px 20px"}},o.a.createElement(b.a,{variant:"h4",component:"p",sx:{mb:1}},"Creators"),o.a.createElement(b.a,{variant:"body",component:"p",sx:{mb:2}},"Indoor Scene Detector was created and is maintained by ",o.a.createElement("a",{href:"https://www.linkedin.com/in/nicovandenhooff/"},"Nico Van den Hooff")," and ",o.a.createElement("a",{href:"https://www.linkedin.com/in/mel-liow/"},"Melissa Liow"),"."),o.a.createElement(b.a,{variant:"body",component:"p",sx:{mb:2}},"Nico maintains the backend, MLOps, and DevOps components of the application.  Melissa maintains the frontend component of the application.")))},pe=a(25),be=Object(j.b)(n||(n=Object(pe.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: ",";\n    color: ",";\n    margin: 0;\n    padding: 0;\n    transition: all 0.3s ease-in;\n    font-family: 'Montserrat', cursive;\n  }"])),function(e){return e.theme.body},function(e){return e.theme.text}),fe=function(){var e=Object(r.useContext)(L).theme;return o.a.createElement(o.a.Fragment,null,o.a.createElement(be,null),o.a.createElement("div",{className:"light"===e?"light theme":"dark theme"},o.a.createElement(w,null),o.a.createElement(P.c,null,o.a.createElement(P.a,{exact:!0,path:"/",element:o.a.createElement(de,null)}),o.a.createElement(P.a,{path:"/about",element:o.a.createElement(U,null)}),o.a.createElement(P.a,{path:"/contact",element:o.a.createElement(ue,null)}))))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(A,null,o.a.createElement(y.a,null,o.a.createElement(fe,null)))),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.02c6a12a.chunk.js.map