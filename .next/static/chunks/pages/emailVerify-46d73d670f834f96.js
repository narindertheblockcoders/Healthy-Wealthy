(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[784],{1475:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/emailVerify",function(){return t(2584)}])},7390:function(e,n){"use strict";n.Z={src:"/_next/static/media/Heart.2f3879f8.svg",height:45,width:49}},6119:function(e,n){"use strict";n.Z={src:"/_next/static/media/arrow.14c7410d.svg",height:16,width:16}},9119:function(e,n){"use strict";n.Z={src:"/_next/static/media/mail.2c32dad2.png",height:118,width:151,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAAAAADbboAnAAAAQElEQVR42gVAUQqAIAx9979PuYLRcFOIPppf/gQJiucQtCQpi1X4X2nzfsO5zTGiodD+eDgyXmIKfBq+S1WjlAUCeiWRn2D06gAAAABJRU5ErkJggg=="}},2584:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return j},default:function(){return b}});var i=t(5893),r=t(7294),s=t(4051),a=t.n(s),o=t(7390),c=t(9119),l=t(9669),u=t.n(l),d=t(1163),p=t(2920),h=t(1664),m=t.n(h),f=t(5005),g=t(6119);function x(e,n,t,i,r,s,a){try{var o=e[s](a),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(i,r)}function v(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var s=e.apply(n,t);function a(e){x(s,i,r,a,o,"next",e)}function o(e){x(s,i,r,a,o,"throw",e)}a(void 0)}))}}var A=function(){var e=(0,r.useRef)(),n=(0,r.useState)(!1),t=n[0],s=n[1],l=(0,r.useState)(!1),h=l[0],x=l[1],A=(0,r.useState)(!1),j=A[0],b=A[1],w=(0,r.useState)(!1),N=w[0],y=w[1],E=(0,d.useRouter)();function _(){return(_=v(a().mark((function e(n){var t,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().post("/api/emailsubmit",n);case 3:t=e.sent,i=t.data.data,s(!0),i&&(console.log(i),O("Verification code Sent"),y(!0),s(!0),x(!0),setTimeout((function(){E.push("/forgetPassword")}),3e3)),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0,"Err"),C("Invalid Email"),b(!0),x(!1);case 15:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var O=function(e){return p.Am.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},C=function(e){return p.Am.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};(0,r.useEffect)((function(){t&&new Promise((function(e){return setTimeout(e,4e3)})).then((function(){x(!0)}))}),[t]);return(0,i.jsx)("div",{children:(0,i.jsx)("section",{className:"profile-sec verify-hight",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row justify-content-center",children:[(0,i.jsx)(p.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,i.jsxs)("form",{className:"input-sec input-top",onSubmit:function(n){n.preventDefault();var t=e.current.value;localStorage.setItem("email",t);var i={email:t};s(!1),function(e){_.apply(this,arguments)}(i)},children:[(0,i.jsx)("div",{className:"input-line email-submit",id:"email-line"}),(0,i.jsx)("img",{src:o.Z.src,className:"mt-2"}),(0,i.jsx)(m(),{href:"/login",children:(0,i.jsx)("span",{className:"arrows-icon",style:{position:"relative",left:"-52%",cursor:"pointer"},children:(0,i.jsx)("img",{src:g.Z.src})})}),(0,i.jsxs)("h3",{className:"heading-text mt-3",children:[" ","Join the HealthiWealthi ",(0,i.jsx)("sup",{className:"sup-text",children:"TM"}),(0,i.jsx)("br",{})," Global Community"]}),(0,i.jsx)("p",{style:{fontSize:"13px",paddingTop:"7px",margin:"0"},children:"Own RXHEAL and unleash your potential on HealthiWealthi\u2122 living healthier, happier, longer, and richer."}),(0,i.jsxs)("div",{className:"input-item",style:{marginTop:"50px"},children:[(0,i.jsx)("h6",{className:"item-text",children:"ENTER YOUR EMAIL"}),(0,i.jsxs)("div",{className:"input-group height-set flex-nowrap mt-2 mb-4",children:[(0,i.jsx)("span",{className:"input-group-text input-border",id:"addon-wrapping",children:(0,i.jsx)("img",{src:c.Z.src,style:{height:"20px"}})}),(0,i.jsx)("input",{ref:e,type:"email",className:"form-control form-border",required:!0,placeholder:"john.doe@example.com","aria-label":"Username","aria-describedby":"addon-wrapping"})]})]}),j&&(0,i.jsx)("p",{style:{color:"red",margin:"0"},children:" Invalid Email "}),N&&(0,i.jsx)("p",{style:{color:"green",fontSize:"15px",margin:"0"},children:" Verification code Sent "}),(0,i.jsx)(f.Z,{variant:"primary",className:"btn btn-round btn-warning w-100 p-0 ",style:{marginTop:"5px"},type:"submit",disabled:t,onClick:t?null:function(){return x(!1)},children:h?"Loading\u2026":"   CONTINUE"})]})]})})})})},j=!0,b=function(){return(0,i.jsx)("div",{children:(0,i.jsx)(A,{})})}}},function(e){e.O(0,[45,774,888,179],(function(){return n=1475,e(e.s=n);var n}));var n=e.O();_N_E=n}]);