(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{12207:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgetPassword",function(){return s(78490)}])},78490:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return N},default:function(){return y}});var n=s(85893),r=s(67294),i=s(34051),a=s.n(i),o=s(9669),c=s.n(o),l=(s(97198),s(11163)),u=s(55678),d=s(96119),p=s(41664),m=s.n(p),h=s(35005),f=s(88375);function x(e,t,s,n,r,i,a){try{var o=e[i](a),c=o.value}catch(l){return void s(l)}o.done?t(c):Promise.resolve(c).then(n,r)}function v(e){return function(){var t=this,s=arguments;return new Promise((function(n,r){var i=e.apply(t,s);function a(e){x(i,n,r,a,o,"next",e)}function o(e){x(i,n,r,a,o,"throw",e)}a(void 0)}))}}var g=function(){var e=(0,r.useRef)(),t=(0,r.useRef)(),s=(0,r.useRef)(),i=(0,r.useState)(!1),o=i[0],p=i[1],x=(0,r.useState)(),g=x[0],w=x[1],j=(0,r.useState)(!1),N=j[0],y=j[1],P=(0,r.useState)(!1),S=P[0],b=P[1],C=(0,r.useState)(!1),O=C[0],_=C[1],E=(0,r.useState)(!1),k=E[0],I=E[1],R=(0,r.useState)(!1),T=R[0],A=R[1],B=(0,l.useRouter)();function F(){return(F=v(a().mark((function e(t){var s,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().post("/api/forgetpassword",t);case 3:s=e.sent,n=s.data,console.log(n,"hii man"),_(!1),q("Password Changed"),I(!0),b(!0),y(!0),setTimeout((function(){B.push("/login")}),2e3),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0,"hello"),D("Invalid Code"),_(!0);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}(0,r.useEffect)((function(){w(localStorage.getItem("email")),console.log(localStorage.getItem("email"))}),[]);var q=function(e){return u.Am.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},D=function(e){return u.Am.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};(0,r.useEffect)((function(){N&&new Promise((function(e){return setTimeout(e,4e3)})).then((function(){b(!0)}))}),[N]);return(0,n.jsx)("div",{children:(0,n.jsx)("section",{className:"profile-sec verify-hight",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row justify-content-center",children:[(0,n.jsx)(u.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,n.jsxs)("form",{className:"input-sec",onSubmit:function(n){n.preventDefault();var r=e.current.value,i=s.current.value,a=t.current.value,o={email:g,password:r,confirmPassword:i,otp:a};return console.log(o,"data here"),r!==i?(D("Password doesn't match"),p(!0),void _(!1)):/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(r)?(A(!1),p(!1),void function(e){F.apply(this,arguments)}(o)):(A(!0),b(!1),y(!1),!1)},children:[(0,n.jsx)("div",{className:"line profile-line",id:"forget-line"}),(0,n.jsxs)("h3",{className:"heading-text pink-text mt-2 mb-4",children:[(0,n.jsx)(m(),{href:"/emailVerify",children:(0,n.jsx)("span",{className:"arrows-icon",style:{position:"relative",left:"-23%",cursor:"pointer"},children:(0,n.jsx)("img",{src:d.Z.src})})}),"Forget Password"]}),(0,n.jsxs)("div",{className:"input-item item-set ",children:[(0,n.jsx)("h6",{className:"item-text",children:"EMAIL"}),(0,n.jsx)("input",{value:g,required:!0,disabled:!0,className:"textinput",type:"text",name:"password"})]}),(0,n.jsxs)("div",{className:"input-item item-set ",children:[(0,n.jsx)("h6",{className:"item-text",children:"NEW PASSWORD"}),(0,n.jsx)("input",{ref:e,required:!0,className:"textinput",type:"password",name:"password"}),T&&(0,n.jsx)(f.Z,{style:{margin:"0"},variant:"danger",children:"Your password must be at least 8 characters long, should contain at least  one number and special character have a mixture of uppercase and lowercase letters."})]}),(0,n.jsxs)("div",{className:"input-item item-set",children:[(0,n.jsx)("h6",{className:"item-text",children:"CONFIRM NEW PASSWORD"}),(0,n.jsx)("input",{ref:s,required:!0,className:"textinput",type:"password",name:"confirmpassword"}),o&&(0,n.jsx)("p",{style:{color:"red"},children:" Password doesn't match "})]}),(0,n.jsxs)("div",{className:"input-item item-set ",style:{marginBottom:"30px"},children:[(0,n.jsx)("h6",{className:"item-text",children:"VERIFICATION CODE"}),(0,n.jsx)("input",{ref:t,required:!0,className:"textinput",type:"number",name:"password"})]}),O&&(0,n.jsx)("p",{style:{color:"red",fontSize:"15px",margin:"0"},children:" Invalid Code "}),k&&(0,n.jsx)("p",{style:{color:"green",fontSize:"15px",margin:"0"},children:" Password Changed"}),(0,n.jsx)(h.Z,{variant:"primary",className:"btn btn-round btn-warning w-100 ",style:{marginTop:"0px",marginBottom:"10px"},type:"submit",disabled:N,onClick:N?null:function(){return b(!1)},children:S?"Loading\u2026":"     SUBMIT"})]})]})})})})},w=s(9008),j=s.n(w),N=!0,y=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(j(),{children:(0,n.jsx)("title",{children:"Forget Passsword"})}),(0,n.jsx)(g,{})]})}}},function(e){e.O(0,[6376,3098,5512,7198,9774,2888,179],(function(){return t=12207,e(e.s=t);var t}));var t=e.O();_N_E=t}]);