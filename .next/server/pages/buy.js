"use strict";
(() => {
var exports = {};
exports.id = 228;
exports.ids = [228];
exports.modules = {

/***/ 1711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_buy),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./Component/Buy.js






const Buy = ()=>{
    const forInputRef = (0,external_react_.useRef)();
    const { 0: tokenPrice , 1: setTokenPrice  } = (0,external_react_.useState)(null);
    const { 0: finalValue , 1: setFinalValue  } = (0,external_react_.useState)(null);
    const { 0: amount , 1: setAmount  } = (0,external_react_.useState)(0);
    const router = (0,router_.useRouter)();
    async function currencyFunction() {
        try {
            let res = await external_axios_default().post("/api/tokenPrice");
            const crc = res.data;
            console.log(crc);
            setTokenPrice(crc.data.data);
        } catch (err) {
            console.log(err);
        }
    }
    (0,external_react_.useEffect)(()=>{
        currencyFunction();
    }, []);
    function onSubmitHandler(e) {
        e.preventDefault();
        const enteredFor = forInputRef.current.value;
        const query = {
            tokenPrice,
            enteredFor,
            finalValue
        };
        localStorage.setItem("query", JSON.stringify(query));
        router.push("/creditPage");
    }
    function onChangeHandler() {
        (e)=>e.current.value.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
        ;
        const enteredFor = forInputRef.current.value;
        setAmount(enteredFor);
        setFinalValue(enteredFor / tokenPrice);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "profile-sec pb-3 pt-4 ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: "input-sec iptset-line width-set ",
                            onSubmit: onSubmitHandler,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "input-line buy-line"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "heading-text ",
                                    style: {
                                        textAlign: "left"
                                    },
                                    children: [
                                        " ",
                                        "Own RXHEAL",
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-item",
                                    style: {
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "item-text",
                                            id: "text-width",
                                            children: "Currency Price"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "input-group input-set ",
                                            style: {
                                                height: "unset !important"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "price-text",
                                                children: tokenPrice
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-item mt-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "item-text",
                                            children: "FOR"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "input-group input-set mt-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    required: true,
                                                    ref: forInputRef,
                                                    // 
                                                    onChange: onChangeHandler,
                                                    className: "form-control",
                                                    placeholder: "300",
                                                    "aria-label": "Dollar amount (with dot and two decimal places)"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Dropdown, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Toggle, {
                                                            className: "btn-style",
                                                            style: {
                                                                height: "53px",
                                                                paddingRight: "35px !important",
                                                                borderRadius: "0 0.25rem 0.25rem 0"
                                                            },
                                                            children: "USD"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Dropdown.Menu, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                                                                    href: "#/action-1",
                                                                    children: "Action"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                                                                    href: "#/action-2",
                                                                    children: "Another action"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                                                                    href: "#/action-3",
                                                                    children: "Something else"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "item-text",
                                            children: "YOU RECEIVE"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "input-group input-set mt-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-control",
                                                    disabled: true,
                                                    // pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                                                    // data-type="currency"
                                                    defaultValue: finalValue,
                                                    placeholder: "0.00945",
                                                    "aria-label": " amount"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn btn-outline-secondary btn-style",
                                                    type: "button",
                                                    "data-bs-toggle": "dropdown",
                                                    "aria-expanded": "false",
                                                    children: "RXHEAL"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "item-text",
                                            children: "SUMMARY"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                            className: "form-control mt-2",
                                            style: {
                                                color: "#6a6a7a",
                                                height: "53px",
                                                paddingTop: "15px",
                                                fontSize: "1rem",
                                                backgroundImage: "none !important"
                                            },
                                            "aria-label": ".form-select-lg example",
                                            children: [
                                                "You get ",
                                                finalValue,
                                                " ",
                                                " ",
                                                "RXHEAL for ",
                                                parseInt(amount).toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency: "USD"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn btn-round btn-warning w-100 ",
                                    style: {
                                        marginTop: "35px"
                                    },
                                    type: "submit",
                                    children: "CONTINUE"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "by-text mb-0",
                                    children: [
                                        "By continuing you agree to our",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            style: {
                                                fontWeight: "bold"
                                            },
                                            children: " privacy policy."
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-set mt-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/dashboard",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            cursor: "pointer"
                        },
                        children: "Skip for Now"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Component_Buy = (Buy);

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./pages/buy.js




const buy = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component_Buy, {})
    });
};
/* harmony default export */ const pages_buy = (buy);
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
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664], () => (__webpack_exec__(1711)));
module.exports = __webpack_exports__;

})();