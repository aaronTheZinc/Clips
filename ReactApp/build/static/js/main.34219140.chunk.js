(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{192:function(e,t,n){},198:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){},243:function(e,t,n){},244:function(e,t,n){},294:function(e,t,n){},396:function(e,t,n){},400:function(e,t,n){},415:function(e,t,n){},416:function(e,t,n){},417:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(24),o=n.n(c),i=(n(235),n(30)),s=(n.p,n(236),n(46)),l=n(47),u=n(50),d=n(49),b=n(458),p=(n(237),n(238),n(3)),j=function(){return Object(p.jsx)("div",{className:"site-page-header",children:Object(p.jsx)(b.a,{className:"site-page-header",title:"Clips",subTitle:"Upload Your Clips",style:{width:"100vw"}})})},h=(n(243),function(e){var t=e.header,n=e.text,r=e.isFirst;return Object(p.jsx)("div",{className:"bubble-container",style:!0===r?console.log(!0):{marginTop:"7vh"},children:Object(p.jsxs)("div",{style:{float:"left"},children:[Object(p.jsx)("section",{style:{marginLeft:"5vw"},children:Object(p.jsx)("label",{className:"header-label",children:t})}),Object(p.jsx)("div",{style:{marginTop:"2vh",marginLeft:"6vw",color:"white"},children:Object(p.jsxs)("p",{children:[" ",n," "]})}),Object(p.jsx)("div",{style:{float:"right"}})]})})}),f=(n(244),n(111),Object(r.createContext)()),x=n(37),O=n.n(x),g=n(65),m=n(68),v=n.n(m),y={cookies:{create:function(e){var t=e.key,n=e.value;return document.cookie="".concat(t,"=").concat(n)},readToken:function(){var e,t,n,r=document.cookie.split(";");for(e=0;e<r.length;e++)if(t=r[e].substr(0,r[e].indexOf("=")),n=r[e].substr(r[e].indexOf("=")+1),"token"==(t=t.replace(/^\s+|\s+$/g,"")))return unescape(n)},readUid:function(){var e,t,n,r=document.cookie.split(";");for(e=0;e<r.length;e++)if(t=r[e].substr(0,r[e].indexOf("=")),n=r[e].substr(r[e].indexOf("=")+1),"uid"==(t=t.replace(/^\s+|\s+$/g,"")))return unescape(n)},clear:function(){for(var e=document.cookie.split(";"),t=0;t<e.length;t++){var n=e[t],r=n.indexOf("="),a=r>-1?n.substr(0,r):n;document.cookie=a+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}}},w=n(127),C=(n(291),n(128)),k=n.n(C);w.a.initializeApp({apiKey:"AIzaSyCCe3EZBhYzzDDjVhYp2DWULin4ItgIjKA",authDomain:"clips-e8ad8.firebaseapp.com",projectId:"clips-e8ad8",storageBucket:"clips-e8ad8.appspot.com",messagingSenderId:"38161657877",appId:"1:38161657877:web:30befe0a6d2ef3e4139e1c",measurementId:"G-P0Y59FWJ03"});var S=w.a.auth(),A=S,T=function(){var e=Object(g.a)(O.a.mark((function e(t,n){var r,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,a=t.password,e.next=3,S.signInWithEmailAndPassword(r,a).then((function(e){return console.log("login ->",r,a),n(),e.user.uid})).catch((function(e){return k()("Uh oh!",e.code,"error"),{error:e,message:e.code}}));case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F="https://clips-api-node.herokuapp.com",N=y.cookies,R=(N.readToken,N.create),W=function(){var e=Object(g.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("try payload -",t),e.next=3,v.a.post("".concat(F,"/register"),t);case 3:n=e.sent,"200"===(r=n.data).status&&(R({key:"token",value:r.token}),window.open("/hub","_self")),console.log("registered response =>",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(g.a)(O.a.mark((function e(t){var n,r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("fetching new token"),n=v.a.get("".concat(F,"/app/new_token?uid=").concat(t)),e.next=4,n;case 4:return r=e.sent,a=r.data,alert(a),console.log("token get response",a),R({key:"token",value:a.token}),e.abrupt("return");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e){var t=e.children,n={login:function(e,t){return T(e,t)},register:function(e,t){return function(e,t){var n=e.email,r=e.password,a=e.username;S.createUserWithEmailAndPassword(n,r).then((function(e){alert(e.user.uid),W({data:{email:n,username:a,uid:e.user.uid}})})).catch((function(e){k()("Uh oh!",e.code,"error")}))}(e)}},a=Object(r.useReducer)((function(e,t){switch(t.type){case"setUid":return{auth:{uid:t.value,isAuth:!0}};case"setUsername":return{auth:{username:t.value}};case"isAuth":return{auth:{isAuth:!1}};case"logout":return function(){try{y.cookies.clear(),S.signOut().then((function(){window.open("/login","_self")}))}catch(e){}}(),{auth:{isAuth:!1,uid:""}}}}),{auth:{uid:"",isAuth:!1}}),c=Object(i.a)(a,2),o=c[0],s=c[1];Object(r.useEffect)((function(){A.onAuthStateChanged((function(e){if(e){var t=e.uid;s({type:"setUid",value:t}),E(t)}else s({type:"isAuth",value:!1})}))}),[]);var l=f.Provider;return Object(p.jsx)(l,{value:{state:o,dispatch:s,actions:n},children:t})},I=n(111)(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_URL:"https://clips-api-node.herokuapp.com"}).BASE_URL),L=function(){return y.cookies.readToken()},U=function(e){var t=e.children,n=Object(r.useContext)(f).dispatch;return Object(r.useEffect)((function(){var e=L();e&&I.emit("handShake",{token:e}),I.on("handShake",(function(e){var t=e.user;console.log(t),n({type:"setUsername",value:t.data.username})}))}),[]),Object(p.jsx)(P,{children:t})},_=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={messages:[{header:"Bradley",text:"Hey, hows it going!"},{header:"Robert",text:"Are we still playing Assasins Creed?"},{header:"Nate",text:"You are dog shit"},{header:"Bradley",text:"Hey, hows it going!"},{header:"Robert",text:"Are we still playing Assasins Creed?"},{header:"Nate",text:"You are dog shit"}]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.messages;return Object(p.jsx)("div",{className:"chat-container",children:Object(p.jsx)("div",{className:"scroll",children:e.map((function(e,t){return Object(p.jsx)(h,{isFirst:0==t,header:e.header,text:e.text})}))})})}}]),n}(r.Component),D=(n(294),n(210)),z=function(e){return Object(D.a)(e),Object(p.jsxs)("div",{className:"",style:{marginTop:"20%"},children:[Object(p.jsx)("section",{children:Object(p.jsx)("img",{className:"video-cell",src:"https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/warzone/strategy-guide/map/rebirth/BOCW-WZ-S1-RI-KEY-001.jpg"})}),Object(p.jsx)("section",{style:{marginTop:"2vh"}})]})},B=(n(295),n(296),n(110)),H=function(e){var t=e.action,n=e.color,r=e.title;return Object(p.jsx)("button",{onClick:function(){return t()},style:{backgroundColor:n||"#FF8300",width:"80%",marginLeft:"10%",height:"50px",outline:"none",borderRadius:"30px"},children:r})},Y=function(e){var t=e.open,n=e.toggle,a=e.username,c=Object(r.useContext)(f),o=(c.state,c.dispatch);return Object(p.jsx)("div",{children:Object(p.jsxs)(B.a,{open:t,toggle:n,children:[Object(p.jsx)(B.c,{children:"@".concat(a)}),Object(p.jsx)(B.b,{children:Object(p.jsx)("section",{style:{display:"flex"},children:Object(p.jsx)(H,{title:"Log Out",action:function(){return o({type:"logout",value:null})}})})})]})})},M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).setOpen=function(){return r.setState({})},r.state={data:[1,2,3,4]},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.data;return Object(p.jsxs)("div",{className:"clips-parent",style:{backgroundColor:"#f2f2f2",height:"100vh",borderRadius:"20px"},children:[Object(p.jsx)("section",{style:{marginTop:"3vh"},children:Object(p.jsx)("label",{className:"header-lbl",style:{fontSize:"70px",color:"#FF8300"},children:"CLIPS"})}),Object(p.jsx)("div",{className:"video-container",children:e.map((function(e){return Object(p.jsx)(z,{})}))})]})}}]),n}(r.Component),K=(n(396),n.p,function(e){e.onSearch,e.result;return Object(p.jsx)("div",{class:"wrapper",children:Object(p.jsxs)("div",{class:"container",children:[Object(p.jsx)("input",{type:"text",class:"input",placeholder:"Find Friends"}),Object(p.jsx)("input",{type:"button",value:"GO",class:"close-btn"})]})})}),$=n(457),J=(n(192),function(e){var t=e.username,n=e.toggle;return Object(p.jsx)("div",{onClick:function(){return n()},className:"username-container",children:Object(p.jsx)("label",{children:t})})}),G=function(e){var t=e.friends;return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"friends-page",children:Object(p.jsx)($.a,{bulleted:!0,children:t.map((function(e,t){return Object(p.jsxs)("section",{style:{textAlign:"left",fontWeight:"bolder",marginTop:"50px"},children:[Object(p.jsx)($.a.Item,{as:"a",style:{color:"black",fontSize:"40px",paddingLeft:"20%"},content:"\u2618\ufe0f ".concat(e),target:"_blank"},t),Object(p.jsx)("br",{})]})}))})})})},V="https://clips-api-node.herokuapp.com",Z=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).toggle=function(){return r.setState({open:!r.state.open})},r.fetchFriends=Object(g.a)(O.a.mark((function e(){var t,n,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert(V),t=y.cookies.readToken(),n=v.a.get("".concat(V,"/app/api/friends?token=").concat(t)),e.next=5,n;case 5:a=e.sent,c=a.data,console.log(c),r.setState({username:c.friends.username,friends:c.friends.friends});case 9:case"end":return e.stop()}}),e)}))),r.state={username:"",friends:[],open:!1},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fetchFriends()}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.friends,r=e.open;return Object(p.jsxs)("div",{className:"pannel-container",children:[Object(p.jsx)(J,{username:t,toggle:this.toggle}),Object(p.jsx)(Y,{username:t,open:r,toggle:this.toggle}),Object(p.jsx)("section",{className:"scroll",children:Object(p.jsx)(G,{friends:n})})]})}}]),n}(r.Component),q=n(454),Q=(n(400),n(25)),X=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){e.auth;return Object(s.a)(this,n),t.call(this)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"container-main",children:[Object(p.jsx)("div",{className:"searchbar-container",style:{textAlign:"center",justifyContent:"center"},children:Object(p.jsx)(K,{})}),Object(p.jsxs)("div",{className:"float-wrapper",children:[Object(p.jsx)("div",{className:"clip-bar",style:{float:"left"},children:Object(p.jsx)(M,{})}),Object(p.jsx)("div",{className:"friends-pannel",style:{float:"right"},children:Object(p.jsx)(Z,{})}),Object(p.jsx)("div",{style:{marginLeft:"40vw",marginTop:"15vh"},children:Object(p.jsx)(_,{})})]})]})}}]),n}(r.Component),ee=function(){var e=Object(r.useContext)(f).state.auth.isAuth;return Object(r.useEffect)((function(){}),[]),e?Object(p.jsx)(X,{}):(Object(Q.e)().push("/login"),Object(p.jsx)(q.a,{}))},te=n(87),ne=n(216),re=(n(415),function(){return Object(p.jsx)("div",{className:"mobile-view",children:Object(p.jsxs)("p",{style:{fontWeight:"bold",fontSize:"50px",color:"black"},children:["This Website Isn't",Object(p.jsx)("br",{})," Yet Available On Mobile."]})})}),ae=n(26),ce=n(51),oe=n(2),ie=n.n(oe),se=n(455),le=n(461),ue=n(460),de=n(459),be=(Object(ae.a)(Object(ae.a)({},{paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"}),{},{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}),{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"}),pe="#f44336",je="#4caf50",he=(Object(ae.a)({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},{boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"}),Object(ae.a)({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},{boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"}),Object(ae.a)({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},{boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"}),Object(ae.a)({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},{boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"}),Object(ae.a)({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},{boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"}),Object(ae.a)({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},{boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"}),Object(ae.a)({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},be),Object(ae.a)(Object(ae.a)({},{color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700",fontFamily:'"Roboto Slab", "Times New Roman", serif'}),{},{marginTop:".625rem"}),{disabled:{"&:before":{borderColor:"transparent !important"}},underline:{"&:hover:not($disabled):before,&:before":{borderColor:"#D2D2D2 !important",borderWidth:"1px !important"},"&:after":{borderColor:"#FF8300"}},underlineError:{"&:after":{borderColor:pe}},underlineSuccess:{"&:after":{borderColor:je}},whiteUnderline:{"&:hover:not($disabled):before,&:before":{borderColor:"#FFFFFF"},"&:after":{borderColor:"#FFFFFF"}},labelRoot:Object(ae.a)(Object(ae.a)({},be),{},{color:"#AAAAAA !important",fontWeight:"400",fontSize:"14px",lineHeight:"1.42857",top:"10px",letterSpacing:"unset","& + $underline":{marginTop:"0px"}}),labelRootError:{color:"#f44336 !important"},labelRootSuccess:{color:"#4caf50 !important"},formControl:{margin:"0 0 17px 0",paddingTop:"27px",position:"relative","& svg,& .fab,& .far,& .fal,& .fas,& .material-icons":{color:"white"}},input:{color:"white",height:"unset","&,&::placeholder":{fontSize:"14px",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"400",lineHeight:"1.42857",opacity:"1"},"&::placeholder":{color:"#AAAAAA"}},whiteInput:{"&,&::placeholder":{color:"#FFFFFF",opacity:"1"}}}),fe=Object(se.a)(he);function xe(e){var t,n,r,a,c=fe(),o=e.formControlProps,i=e.labelText,s=e.id,l=e.labelProps,u=e.inputProps,d=e.error,b=e.white,j=e.inputRootCustomClasses,h=e.success,f=e.handleChange,x=e.type,O=ie()((t={},Object(ce.a)(t," "+c.labelRootError,d),Object(ce.a)(t," "+c.labelRootSuccess,h&&!d),t)),g=ie()((n={},Object(ce.a)(n,c.underlineError,d),Object(ce.a)(n,c.underlineSuccess,h&&!d),Object(ce.a)(n,c.underline,!0),Object(ce.a)(n,c.whiteUnderline,b),n)),m=ie()(Object(ce.a)({},j,void 0!==j)),v=ie()((r={},Object(ce.a)(r,c.input,!0),Object(ce.a)(r,c.whiteInput,b),r));return a=void 0!==o?ie()(o.className,c.formControl):c.formControl,Object(p.jsxs)(le.a,Object(ae.a)(Object(ae.a)({},o),{},{className:a,children:[void 0!==i?Object(p.jsx)(ue.a,Object(ae.a)(Object(ae.a)({className:c.labelRoot+" "+O,htmlFor:s},l),{},{children:i})):null,Object(p.jsx)(de.a,Object(ae.a)(Object(ae.a)({classes:{input:v,root:m,disabled:c.disabled,underline:g},id:s,onChange:f},u),{},{type:x}))]}))}n(197),n(198);var Oe=function(e){e.setAuth;var t=Object(r.useState)(),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(),s=Object(i.a)(o,2),l=s[0],u=s[1],d=Object(r.useContext)(f),b=(d.state,d.dispatch,d.actions.login),j=Object(Q.e)();return Object(p.jsxs)("div",{className:"form",children:[Object(p.jsx)("h1",{style:{color:"white"},children:"Clips"}),Object(p.jsx)("section",{style:{color:"white",marginTop:"20px"},children:Object(p.jsx)(xe,{labelText:"Email",id:"email",formControlProps:{fullWidth:!0},handleChange:function(e){return c(e.target.value)},type:"text"})}),Object(p.jsx)("section",{style:{marginTop:"10%"},children:Object(p.jsx)(xe,{labelText:"Password",id:"password",formControlProps:{fullWidth:!0},handleChange:function(e){return u(e.target.value)},type:"password"})}),Object(p.jsx)("section",{style:{marginTop:"10%"},children:Object(p.jsx)(H,{title:"Login",action:function(){b({email:a,password:l},(function(){return j.push("/hub")}))}})})]})},ge=function(){var e=Object(r.useContext)(f).actions.register,t=Object(r.useState)(),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(),s=Object(i.a)(o,2),l=s[0],u=s[1],d=Object(r.useState)(),b=Object(i.a)(d,2),j=b[0],h=b[1],x=Object(Q.e)();return Object(p.jsxs)("div",{className:"form",children:[Object(p.jsx)("h1",{style:{color:"white"},children:"Clips"}),Object(p.jsx)("section",{style:{marginTop:"10%"},children:Object(p.jsx)(xe,{labelText:"Username",id:"username",formControlProps:{fullWidth:!0},type:"username",handleChange:function(e){return h(e.target.value)}})}),Object(p.jsx)("section",{style:{color:"white",marginTop:"20px"},children:Object(p.jsx)(xe,{labelText:"Email",id:"email",formControlProps:{fullWidth:!0},handleChange:function(e){return c(e.target.value)},type:"text"})}),Object(p.jsx)("section",{style:{marginTop:"10%"},children:Object(p.jsx)(xe,{labelText:"Password",id:"password",formControlProps:{fullWidth:!0},handleChange:function(e){return u(e.target.value)},type:"password"})}),Object(p.jsx)("section",{style:{marginTop:"10%"},children:Object(p.jsx)(H,{title:"Register",action:function(){return e({username:j,email:a,password:l},(function(){return x.push("/hub")}))}})})]})},me=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).setAuth=function(t){var n=t.uid,r=t.state;console.log(n,r),e.setState({auth:{uid:n,isAuthenticated:r}})},e.state={auth:{uid:"",isAuthenticated:!1}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state;e.auth,e.setAuth;return Object(p.jsxs)("div",{children:[Object(p.jsx)(j,{}),!0===!ne.isMobile?Object(p.jsxs)(te.a,{children:[Object(p.jsx)(Q.a,{path:"/hub",component:ee}),Object(p.jsx)(Q.a,{path:"/login",component:Oe}),Object(p.jsx)(Q.a,{path:"/register",component:ge})]}):Object(p.jsx)(re,{})]})}}]),n}(r.Component),ve=function(){return Object(p.jsx)(U,{children:Object(p.jsx)(me,{})})};r.Component,n(416);var ye=function(){var e=Object(r.useReducer)((function(e,t){switch(t.type){case"uid":e.uid=t.value;default:return e}}),{uid:""}),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(f.Provider,{value:{state:n,dispatch:a},children:Object(p.jsx)(ve,{})})})},we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,463)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(ye,{})}),document.getElementById("root")),we()}},[[417,1,2]]]);
//# sourceMappingURL=main.34219140.chunk.js.map