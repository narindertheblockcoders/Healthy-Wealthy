"use strict";
(() => {
var exports = {};
exports.id = 8252;
exports.ids = [8252];
exports.modules = {

/***/ 6119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow.14c7410d.svg","height":16,"width":16});

/***/ }),

/***/ 3704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_payment),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./public/arrow.svg
var arrow = __webpack_require__(6119);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./Component/Payment.js







const Payment = ()=>{
    const { 0: usd , 1: setUSD  } = (0,external_react_.useState)(0);
    const { 0: finalRes , 1: setFinalRes  } = (0,external_react_.useState)();
    const { 0: price , 1: setPrice  } = (0,external_react_.useState)(null);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    async function payment() {
        try {
            let res = await external_axios_default().post("/api/payment");
            const record = res.data;
            let ud = await JSON.parse(localStorage.getItem("query"));
            setUSD(ud.enteredFor);
            console.log(JSON.parse(localStorage.getItem("query")));
            setPrice(record.arr);
            setFinalRes(record.data.data);
        } catch (err) {
            console.log(err, "hello");
        }
    }
    async function formPut(e) {
        let currency = e?.currentTarget.value;
        console.log(e?.currentTarget.value);
        // return;
        try {
            const local = await localStorage.getItem("query");
            const localValue = JSON.parse(local);
            // const token = localStorage.getItem("token");
            let finalAmount = usd / price[currency - 2];
            const data = {
                usdAmount: localValue.enteredFor,
                tokenQuantity: localValue.finalValue,
                tokenPrice: localValue.tokenPrice,
                finalAmount: finalAmount.toFixed(4),
                paymentMode: 2,
                currencyId: currency
            };
            console.log(data, "Parse data on payment form");
            let res = await external_axios_default().post("/api/formfill", data);
            const response = res.data;
            console.log(response.data.message);
            setIsLoading(true);
            router.push({
                pathname: "/paymentForm",
                query: {
                    via: currency,
                    finalAmount: finalAmount
                }
            });
        } catch (err) {
            console.log(err, "error-1");
        }
    }
    async function currencyData() {
        try {
            let res = await external_axios_default().post("/api/currencydata");
            const response = res.data;
            console.log(response, "currencyData on payment form");
        } catch (err) {
            console.log(err, "error-2");
        }
    }
    // useEffect (()=> {
    //   currencyData()
    // }, [])
    function formSubmitHandler(event) {
        event.preventDefault();
    }
    (0,external_react_.useEffect)(()=>{
        payment();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "profile-sec verify-hight",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: "input-sec input-top",
                        onSubmit: formSubmitHandler,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "input-line credit-line",
                                id: "cred-line"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                className: "heading-text mt-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/creditPage",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "arrow-icon",
                                            style: {
                                                position: "relative",
                                                left: "-10%"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: arrow/* default.src */.Z.src
                                            })
                                        })
                                    }),
                                    "Select Payment Mode"
                                ]
                            }),
                            finalRes ? finalRes.map((item)=>{
                                if (item.id == 1) return;
                                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "input-item mt-3",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        type: "button",
                                        disabled: isLoading,
                                        onClick: (e)=>{
                                            formPut(e);
                                        },
                                        value: item.id,
                                        className: "btn credit-btn mt-2",
                                        style: {
                                            padding: "15px !important"
                                        },
                                        children: [
                                            "Pay with ",
                                            item.description,
                                            " ",
                                            (usd / price[item.id - 2]).toFixed(4)
                                        ]
                                    })
                                }, item.id);
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Spinner, {
                                animation: "border",
                                variant: "primary"
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const Component_Payment = (Payment);

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./pages/payment.js




const payment = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component_Payment, {})
    });
};
/* harmony default export */ const pages_payment = (payment);
async function getServerSideProps(context) {
    const session = await (0,react_.getSession)(context);
    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    return {
        props: {
            session
        }
    };
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664], () => (__webpack_exec__(3704)));
module.exports = __webpack_exports__;

})();