"use strict";
(() => {
var exports = {};
exports.id = 2035;
exports.ids = [2035];
exports.modules = {

/***/ 6119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow.14c7410d.svg","height":16,"width":16});

/***/ }),

/***/ 4655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_tokenPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./public/arrow.svg
var arrow = __webpack_require__(6119);
;// CONCATENATED MODULE: ./Component/TokenPage.js





const TokenPage = ()=>{
    // const [rxAmt,setRxAmt ] =useState()
    const { 0: usdAmt , 1: setUsdAmt  } = (0,external_react_.useState)();
    async function tokenPrice(data) {
        try {
            // let token = localStorage.getItem("token");
            let res = await external_axios_default().post("/api/mytokens", data);
            const response = res.data;
            // localStorage.setItem("token", response.data.data);
            console.log(response.data);
            setUsdAmt(response.data);
        } catch (err) {
            console.log(err, err);
        }
    }
    (0,external_react_.useEffect)(()=>{
        tokenPrice();
    }, []);
    function onSubmitHandler(event) {
        event.preventDefault();
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "profile-sec",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        className: "funds-sec",
                        onSubmit: onSubmitHandler,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-head",
                            style: {
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-md-12 right-profile",
                                id: "right-profile",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "input-line linkPage-line"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "wallet-box",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/dashboard",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "arrows-icon",
                                                    style: {
                                                        position: "relative",
                                                        left: "-0%",
                                                        cursor: "pointer"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: arrow/* default.src */.Z.src
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "wallet-heading",
                                                style: {
                                                    paddingLeft: "20px"
                                                },
                                                children: "WALLET"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "wallet-box1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "wallet-para",
                                                    children: "Coin Price"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "wallet-amt",
                                                    children: [
                                                        "$ ",
                                                        usdAmt?.coinPrice,
                                                        " "
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "wallet-box1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "wallet-para",
                                                    children: "Locked"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "wallet-amt",
                                                    children: [
                                                        " ",
                                                        usdAmt?.locked,
                                                        " RXHEAL"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "wallet-box1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "wallet-para",
                                                    children: "Available Token"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "wallet-amt",
                                                    children: [
                                                        " ",
                                                        usdAmt?.availableToken,
                                                        " RXHEAL"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "wallet-box1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "wallet-para",
                                                    children: "Total"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "wallet-amt",
                                                    children: [
                                                        " ",
                                                        usdAmt?.total,
                                                        " RXHEAL"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "wallet-box1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "wallet-para",
                                                    children: "Total Value"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "wallet-amt",
                                                    children: [
                                                        "$ ",
                                                        usdAmt?.totalValue,
                                                        " "
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const Component_TokenPage = (TokenPage);
{}
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./pages/tokenPage.js




const tokenPage = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component_TokenPage, {})
    });
};
/* harmony default export */ const pages_tokenPage = (tokenPage);
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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664], () => (__webpack_exec__(4655)));
module.exports = __webpack_exports__;

})();