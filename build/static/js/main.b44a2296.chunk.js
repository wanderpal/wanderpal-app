(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(144)},117:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},126:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},143:function(e,t){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),l=a(20),c=(a(117),a(38)),u=a(66),s=Object(c.combineReducers)({token:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0,t=e.type,a=e.payload;switch(t){case"TOKEN_SET":return a;case"TOKEN_REMOVE":default:return null}},itineraries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"CREATE_ITINERARY":return Object(u.a)({},e,{payload:n});case"EDIT_ITINERARY":var r=Object(u.a)({},e);return r[n.id]=n,r;case"DELETE_ITINERARY":var i=Object(u.a)({},e);return delete i[n.id],i;default:return e}}}),d=function(e){return function(t){return function(a){return"function"===typeof a?a(e):t(a)}}},m=a(88),p=function(e){return function(e){return function(t){try{return console.log("__ACTION__",t),e(t)}catch(a){return console.log("__ERROR__"),t.error=a,t}}}},h=a(11),f=a(12),b=a(14),E=a(13),g=a(15),y=a(59),O=a(42),v=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.location,a=e.token,n=t.pathname,i=null;return"/login"===n||"/signup"===n||"/"===n||"/dashboard"===n?a&&(i="/dashboard"):a||(i="/"),r.a.createElement("div",null,i?r.a.createElement(O.a,{to:i}):void 0)}}]),t}(r.a.Component),j=Object(l.b)(function(e){return{token:e.token}},null)(v),C=(a(119),a(120),a(49)),k=a(75),S=a.n(k),w=function(e){return{type:"TOKEN_SET",payload:e}},x="http://localhost:5000/",M=(a(126),a(181)),N=a(199),D=a(184),W=a(182),T=a(183),R=a(196),_={name:"",email:"",password:""},L=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.id,r=t.value;a.setState(Object(C.a)({},n,r),function(){"password"!==n&&"password2"!==n||a.checkPassword()})},a.checkPassword=function(){a.state.password&&a.state.password===a.state.password2?a.setState({passwordError:!1}):a.setState({passwordError:!0})},a.handleSubmit=function(e){e.preventDefault(),a.setState({isModalOpen:!1}),"login"===a.state.type?a.props.mappedLogin(a.state):a.props.mappedSignup(a.state),a.setState(_),a.handleModal(!1)},a.handleLogout=function(e){e.preventDefault(),a.props.mappedLogout()},a.handleModal=function(e){a.setState({isModalOpen:e})},a.handleFormType=function(e){a.setState({type:e})},a.authUrl=function(){var e={client_id:"98699548537-neqhekn88h7ue5kr964a2br4j8s54mog.apps.googleusercontent.com",redirect_uri:"http://localhost:3000/dashboard",scope:"email openid profile",prompt:"consent",response_type:"code"},t=Object.keys(e).map(function(t,a){return"".concat(t,"=")+encodeURIComponent(e[t])}).join("&");return"".concat("https://accounts.google.com/o/oauth2/v2/auth","?").concat(t)},a.state={name:"",email:"",password:"",password2:"",isModalOpen:!1,passwordError:!1,type:a.props.type},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.authUrl(),a=r.a.createElement(R.a,{id:"name",type:"name",label:"Name",placeholder:"Name",value:this.state.name,onChange:this.handleChange,fullWidth:!0}),n=r.a.createElement(R.a,{error:this.state.passwordError,id:"password2",type:"password",label:"Re-enter Password",value:this.state.password2,onChange:this.handleChange,fullWidth:!0}),i=r.a.createElement(M.a,{href:t,className:"loginButton",color:"primary",variant:"contained",onClick:this.handleModal,fullWidth:!0},"Log in with Google"),o=function(t){return r.a.createElement(W.a,null,"login"===t?"Have an account? ":"Don't have an account? ",r.a.createElement(M.a,{onClick:function(){return e.handleFormType(t)}},"login"===t?"Login":"Sign up"))};return r.a.createElement("div",null,this.props.token?r.a.createElement(M.a,{onClick:this.handleLogout},"Logout"):r.a.createElement(M.a,{onClick:function(){return e.handleModal(!0)}},"Login"),r.a.createElement(N.a,{open:this.state.isModalOpen,onBackdropClick:function(){return e.handleModal(!1)},maxWidth:"xs","aria-labelledby":"form-dialog-title"},r.a.createElement(T.a,{id:"form-dialog-title"},"login"===this.state.type?"Log in":"Sign up"),r.a.createElement(D.a,{id:"Login-form"},r.a.createElement("form",{onSubmit:this.handleSubmit},"login"!==this.state.type?a:void 0,r.a.createElement(R.a,{id:"email",type:"email",label:"Email",placeholder:"youremail@email.com",value:this.state.email,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(R.a,{id:"password",type:"password",label:"Password",value:this.state.password,onChange:this.handleChange,fullWidth:!0}),"login"===this.state.type?void 0:n,r.a.createElement(M.a,{className:"loginButton",color:"primary",type:"submit",variant:"contained",fullWidth:!0},this.state.type),"login"===this.state.type?i:void 0),"login"===this.state.type?o("signup"):o("login"))))}}]),t}(r.a.Component),I=Object(l.b)(function(e){return{token:e.token}},function(e){return{mappedLogin:function(t){return e(function(e){return function(t){return S.a.post("".concat(x).concat("login")).auth(e.email,e.password).then(function(e){return t.dispatch(w(e.body))}).catch(console.log)}}(t))},mappedSignup:function(t){return e(function(e){return function(t){return S.a.post("".concat(x).concat("signup")).send(e).then(function(e){return t.dispatch(w(e.text))}).catch(console.log)}}(t))},mappedLogout:function(){return e({type:"TOKEN_REMOVE"})}}})(L),A=a(185),q=a(186),P=a(99),B=a(187),H=a(201),U=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement(A.a,{position:this.props.position,className:this.props.class},r.a.createElement(q.a,null,r.a.createElement(P.a,{variant:"h6",color:"inherit"},"WanderPal"),r.a.createElement("ul",null,r.a.createElement("li",null,"Home"),r.a.createElement("li",null,"About"),r.a.createElement("li",null,r.a.createElement(I,{type:"login"}))),r.a.createElement("div",{id:"icon"},r.a.createElement(B.a,{"aria-label":"Account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit"},r.a.createElement(H.a,null))))))}}]),t}(r.a.Component),V=Object(l.b)(function(e){return{token:e.token}},null)(U),K=(a(135),a(188)),Y=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(K.a,{id:"about",maxWidth:"lg"},r.a.createElement(P.a,{variant:"h3"},"About"),r.a.createElement(P.a,{variant:"body1"},"Lorem ipsum dolor sit amet, qui essent mollis expetenda in, eum id mutat tantas. Ius stet vitae luptatum et, ullum impetus bonorum nam eu. Nostro putant nam at. Ad aeque aliquid accusam duo, magna mazim constituto mei at. Nam utroque inimicus ad, sea vidit inimicus et.            Sit at munere fastidii, soleat possit legendos sed an. Decore noster sea et, sit omnis petentium et. At sed quis eleifend voluptaria, per graecis conceptam delicatissimi eu. Eos justo lobortis neglegentur an, ius ut duis elitr. Ad dolore quaeque detraxit nec, tempor everti per an, vis dicit laudem luptatum ut. Affert mandamus quaerendum te mei, nec tollit eloquentiam ad."))}}]),t}(r.a.Component),F=a(189),G=a(190),J=a(191),z=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={cardData:["Open the thing and do something.","Then, click the thing and do something else.","Then, go do the thing again ok."]},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(K.a,{maxWidth:"lg"},r.a.createElement(P.a,{variant:"h3"},"How to Use"),r.a.createElement(F.a,{container:!0,justify:"center",spacing:2},this.state.cardData.map(function(e,t){return r.a.createElement(F.a,{item:!0,xs:!0,key:t},r.a.createElement(G.a,null,r.a.createElement(J.a,null,r.a.createElement(P.a,{variant:"h6"},"Step ",t+1),r.a.createElement(P.a,{variant:"body2"},e))))})))}}]),t}(r.a.Component),X=(a(136),a(192)),Q=a(193),Z=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).useStyles=function(){return Object(X.a)(function(e){return{button:{margin:e.spacing(1)},input:{display:"none"}}})},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.useStyles();return r.a.createElement(F.a,{className:"footer",maxWidth:"false"},r.a.createElement(K.a,{maxWidth:"lg"},r.a.createElement(P.a,{variant:"h6"},"WanderPal"),r.a.createElement(B.a,{className:e.button,"aria-label":"Delete"},r.a.createElement(Q.a,null,"fab fa-github"))))}}]),t}(r.a.Component),$=a(197),ee=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={message:"Create memories, together."},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("div",null,r.a.createElement($.a,{id:"header"},r.a.createElement("div",{id:"subheader"},r.a.createElement("h1",null,this.state.message))),r.a.createElement(Y,null),r.a.createElement(z,null)),r.a.createElement(V,{class:"landing-nav",props:"fixed"}),r.a.createElement(Z,null))}}]),t}(r.a.Component),te=Object(l.b)(function(e){return{token:e.token}},null)(ee),ae=(a(137),a(138),a(194)),ne=a(195),re=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.itinerary;return r.a.createElement(G.a,null,r.a.createElement(ae.a,null,r.a.createElement(ne.a,{height:"185px",component:"img",image:e.imagePath,title:e.name}),r.a.createElement(J.a,null,r.a.createElement(P.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),r.a.createElement(P.a,{variant:"body1"},e.dateStart," to ",e.dateEnd))))}}]),t}(r.a.Component),ie=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(F.a,{className:"carousel",container:!0,justify:"flex-start",spacing:2},[{name:"Summer Vacay in Mexico",dateStart:"2019-07-04",dateEnd:"2019-07-14",location:"Tulum, MX",imagePath:"./assets/test/tulum.jpg",id:1023910},{name:"Chris's birthday in Vegas",dateStart:"2019-08-08",dateEnd:"2019-08-11",location:"Las Vegas, NV",imagePath:"./assets/test/vegas.jpg",id:204224},{name:"Labor day in Bend, OR",dateStart:"2019-08-30",dateEnd:"2019-09-02",location:"Bend, OR",imagePath:"./assets/test/bend.jpg",id:202231},{name:"Christmas in Charleston",dateStart:"2019-12-24",dateEnd:"2019-12-30",location:"Charleston, SC",imagePath:"./assets/test/charleston.jpg",id:20531}].map(function(e){return r.a.createElement(F.a,{item:!0,xs:3,key:e.id},r.a.createElement(re,{itinerary:e}))}))}}]),t}(r.a.Component),oe=a(95),le=a(90),ce=a.n(le),ue=a(91),se=a.n(ue),de=a(68),me={name:"",location:"",dateStart:new Date,dateEnd:new Date,details:"",image:""},pe=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).handleModal=function(e){a.setState({isModalOpen:e})},a.handleChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value)),console.log(a.state)},a.handleDateChange=function(e,t){a.setState(Object(C.a)({},t,e))},a.handleSubmit=function(e){e.preventDefault(),a.props.mappedCreateItinerary(a.state),a.setState({isModalOpen:!1}),a.setState(me),a.handleModal(!1)},a.state={isModalOpen:!1,name:"",location:"",dateStart:new Date,dateEnd:new Date,details:"",image:""},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(M.a,{onClick:function(){return e.handleModal(!0)}},"New Itinerary"),r.a.createElement(N.a,{open:this.state.isModalOpen,onBackdropClick:function(){return e.handleModal(!1)},maxWidth:"xs","aria-labelledby":"form-dialog-title"},r.a.createElement(G.a,null,r.a.createElement(ae.a,null,r.a.createElement("label",null,r.a.createElement("input",{accept:"image/*",id:"contained-button-file",type:"file",className:"display-none"}),r.a.createElement(ne.a,{height:"200px",component:"img",image:se.a}))),r.a.createElement(T.a,{id:"form-dialog-title"},"Create New Itinerary"),r.a.createElement(D.a,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(R.a,{required:!0,type:"text",id:"name",label:"Itinerary Name",placeholder:"Itinerary Name",value:this.state.name,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(R.a,{required:!0,type:"text",id:"location",value:this.state.location,label:"Location",placeholder:"Location",onChange:this.handleChange,fullWidth:!0}),r.a.createElement(de.b,{utils:oe.a},r.a.createElement(de.a,{id:"itineraryDateStart",value:this.state.dateStart,onChange:function(t,a){return e.handleDateChange(t,"dateStart")},label:"Start Date",format:"MM/dd/yyyy"}),r.a.createElement(de.a,{id:"itineraryDateEnd",value:this.state.dateEnd,onChange:function(t,a){return e.handleDateChange(t,"dateEnd")},label:"End Date",format:"MM/dd/yyyy"})),r.a.createElement(R.a,{type:"text",id:"details",label:"Details",value:this.state.details,onChange:this.handleChange,rows:"6",multiline:!0,fullWidth:!0}),r.a.createElement(M.a,{className:"submitButton",color:"primary",type:"submit",variant:"contained",fullWidth:!0},"Create"))),"`")))}}]),t}(r.a.Component),he=Object(l.b)(function(e){return{itineraries:e.token}},function(e){return{mappedCreateItinerary:function(t){return e((a=t,{type:"CATEGORY_CREATE",payload:{id:ce()(),name:a.name,location:a.location,dateStart:a.dateStart,dateEnd:a.dateEnd,details:a.details}}));var a}}})(pe),fe=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).name=function(){return a.props.token?a.props.token[1].name.split(" ")[0]:"friend"},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){if(!this.props.token)return r.a.createElement("div",null,r.a.createElement(O.a,{to:"/"}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.token?void 0:r.a.createElement(O.a,{to:"/"}),r.a.createElement(V,{class:"dashboard-nav",position:"static"}),r.a.createElement(K.a,{id:"dashboard",maxWidth:"lg"},r.a.createElement("div",null,r.a.createElement(he,null)),r.a.createElement(P.a,{variant:"h4",mb:2},"Welcome back, ",this.name(),"!"),r.a.createElement(P.a,{variant:"h5"},"See upcoming trips"),r.a.createElement(ie,null),r.a.createElement(P.a,{variant:"h5"},"See past trips"),r.a.createElement(ie,null)),r.a.createElement(Z,null))}}]),t}(r.a.Component),be=Object(l.b)(function(e){return{token:e.token,currentUser:e.currentUser}},null)(fe),Ee=(a(143),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={itineraryHeaderStyle:{}},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement("div",{id:"itineraryHeader",style:this.state.itineraryHeaderStyle},r.a.createElement("h1",null,this.props.itineraryName)),r.a.createElement("div",null))}}]),t}(r.a.Component)),ge=Object(l.b)(function(e){return{}},function(e){return{}})(Ee),ye=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(y.a,null,r.a.createElement(O.b,{path:"*",component:j}),r.a.createElement(O.b,{exact:!0,path:"/",component:te}),r.a.createElement(O.b,{exact:!0,path:"/login",component:te}),r.a.createElement(O.b,{exact:!0,path:"/dashboard",component:be}),r.a.createElement(O.b,{exact:!0,path:"/itin",component:ge})))}}]),t}(r.a.Component),Oe=Object(c.createStore)(s,Object(m.composeWithDevTools)(Object(c.applyMiddleware)(d,p)));o.a.render(r.a.createElement(l.a,{store:Oe},r.a.createElement(ye,null)),document.getElementById("root"))},91:function(e,t,a){e.exports=a.p+"static/media/upload.3c0c4df6.jpg"}},[[108,1,2]]]);
//# sourceMappingURL=main.b44a2296.chunk.js.map