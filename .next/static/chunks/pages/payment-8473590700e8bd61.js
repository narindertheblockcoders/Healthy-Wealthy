(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=i.apply(null,n);s&&e.push(s)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var o in n)r.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},7864:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/payment",function(){return n(3704)}])},6119:function(e,t){"use strict";t.Z={src:"/_next/static/media/arrow.14c7410d.svg",height:16,width:16}},3704:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return x},default:function(){return y}});var r=n(5893),i=n(7294),a=n(4051),s=n.n(a),o=n(6119),c=n(1664),u=n.n(c),l=n(9669),f=n.n(l),p=n(1163),d=n(6968);function v(e,t,n,r,i,a,s){try{var o=e[a](s),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(r,i)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function s(e){v(a,r,i,s,o,"next",e)}function o(e){v(a,r,i,s,o,"throw",e)}s(void 0)}))}}var h=function(){var e=(0,i.useState)(0),t=e[0],n=e[1],a=(0,i.useState)(),c=a[0],l=a[1],v=(0,i.useState)(null),h=v[0],x=v[1],y=(0,p.useRouter)();function g(){return(g=m(s().mark((function e(){var t,r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f().post("/api/payment");case 3:return t=e.sent,r=t.data,e.next=7,JSON.parse(localStorage.getItem("query"));case 7:i=e.sent,n(i.enteredFor),console.log(JSON.parse(localStorage.getItem("query"))),x(r.arr),l(r.data.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0,"hello");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function N(){return(N=m(s().mark((function e(n){var r,i,a,o,c,u,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null===n||void 0===n?void 0:n.currentTarget.value,console.log(null===n||void 0===n?void 0:n.currentTarget.value),e.prev=2,e.next=5,localStorage.getItem("query");case 5:return i=e.sent,a=JSON.parse(i),o=t/h[r-2],c={usdAmount:a.enteredFor,tokenQuantity:a.finalValue,tokenPrice:a.tokenPrice,finalAmount:o.toFixed(4),paymentMode:2,currencyId:r},console.log(c,"Parse data on payment form"),e.next=12,f().post("/api/formfill",c);case 12:u=e.sent,l=u.data,console.log(l.data.message),y.push({pathname:"/paymentForm",query:{via:r,finalAmount:o}}),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),console.log(e.t0,"error-1");case 21:case"end":return e.stop()}}),e,null,[[2,18]])})))).apply(this,arguments)}return(0,i.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),(0,r.jsx)("div",{children:(0,r.jsx)("section",{className:"profile-sec verify-hight",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row justify-content-center",children:(0,r.jsxs)("form",{className:"input-sec input-top",onSubmit:function(e){e.preventDefault()},children:[(0,r.jsx)("div",{className:"input-line credit-line",id:"cred-line"}),(0,r.jsxs)("h3",{className:"heading-text mt-0",children:[(0,r.jsx)(u(),{href:"/creditPage",children:(0,r.jsx)("span",{className:"arrow-icon",style:{position:"relative",left:"-10%"},children:(0,r.jsx)("img",{src:o.Z.src})})}),"Select Payment Mode"]}),c?c.map((function(e){if(1!=e.id)return(0,r.jsx)("div",{className:"input-item mt-3",children:(0,r.jsxs)("button",{type:"button",onClick:function(e){!function(e){N.apply(this,arguments)}(e)},value:e.id,className:"btn credit-btn mt-2",style:{padding:"15px !important"},children:["Pay with ",e.description," ",(t/h[e.id-2]).toFixed(4)]})},e.id)})):(0,r.jsx)(d.Z,{animation:"border",variant:"primary"})]})})})})})},x=!0,y=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(h,{})})}},6968:function(e,t,n){"use strict";var r=n(4184),i=n.n(r),a=n(7294),s=n(6792),o=n(5893);const c=a.forwardRef((({bsPrefix:e,variant:t,animation:n,size:r,as:a="div",className:c,...u},l)=>{const f=`${e=(0,s.vE)(e,"spinner")}-${n}`;return(0,o.jsx)(a,{ref:l,...u,className:i()(c,f,r&&`${f}-${r}`,t&&`text-${t}`)})}));c.displayName="Spinner",t.Z=c},6792:function(e,t,n){"use strict";n.d(t,{SC:function(){return u},vE:function(){return c}});var r=n(7294);n(5893);const i=["xxl","xl","lg","md","sm","xs"],a=r.createContext({prefixes:{},breakpoints:i}),{Consumer:s,Provider:o}=a;function c(e,t){const{prefixes:n}=(0,r.useContext)(a);return e||n[t]||t}function u(){const{dir:e}=(0,r.useContext)(a);return"rtl"===e}}},function(e){e.O(0,[774,888,179],(function(){return t=7864,e(e.s=t);var t}));var t=e.O();_N_E=t}]);