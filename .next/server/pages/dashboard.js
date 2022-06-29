"use strict";
(() => {
var exports = {};
exports.id = 8026;
exports.ids = [8026];
exports.modules = {

/***/ 7916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_dashboard),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./public/profile.svg
/* harmony default export */ const profile = ({"src":"/_next/static/media/profile.b434cd31.svg","height":31,"width":31});
;// CONCATENATED MODULE: ./public/fingerprint.svg
/* harmony default export */ const fingerprint = ({"src":"/_next/static/media/fingerprint.f5fd1534.svg","height":30,"width":27});
;// CONCATENATED MODULE: ./public/multiple.svg
/* harmony default export */ const multiple = ({"src":"/_next/static/media/multiple.03dcef58.svg","height":38,"width":38});
;// CONCATENATED MODULE: ./public/changePassword.svg
/* harmony default export */ const changePassword = ({"src":"/_next/static/media/changePassword.f27d010d.svg","height":35,"width":35});
;// CONCATENATED MODULE: ./public/buy-icon.svg
/* harmony default export */ const buy_icon = ({"src":"/_next/static/media/buy-icon.87d3d955.svg","height":41,"width":41});
;// CONCATENATED MODULE: ./public/token-icon.svg
/* harmony default export */ const token_icon = ({"src":"/_next/static/media/token-icon.8358eaf8.svg","height":31,"width":31});
;// CONCATENATED MODULE: ./Component/LinkPage.js










const LinkPage = ()=>{
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
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: "funds-sec",
                        onSubmit: onSubmitHandler,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "funds-heading",
                                children: "DASHBOARD"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-head",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-7 left-headSec",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "link-head ",
                                            id: "first-sec",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/userProfile",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "link-item first-sec",
                                                        children: "PROFILE"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "link-item second-sec",
                                                    id: "first-item",
                                                    children: "ENABLE 2FA"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/funds",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "link-item third-sec",
                                                        id: "first-item",
                                                        children: "FUNDS"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/changePassword",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "link-item four-sec",
                                                        id: "second-item",
                                                        children: "CHANGE PASSWORD"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/buy",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "link-item five-sec",
                                                        id: "third-item",
                                                        children: "BUY TOKEN"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/tokenPage",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "link-item six-sec",
                                                        id: "third-item",
                                                        children: "TOKEN"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-md-2 right-profile",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "input-line linkPage-line"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "wallet-box",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "wallet-heading",
                                                    children: "WALLET"
                                                })
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
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-3"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const Component_LinkPage = (LinkPage);
{}
;// CONCATENATED MODULE: ./pages/dashboard.js




const dashboard = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component_LinkPage, {})
    });
};
/* harmony default export */ const pages_dashboard = (dashboard);
async function getServerSideProps(context) {
    const session = await (0,react_.getSession)(context);
    if (!session) {
        return {
            redirect: {
                destination: "/login",
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
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664], () => (__webpack_exec__(7916)));
module.exports = __webpack_exports__;

})();