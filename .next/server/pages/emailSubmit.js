"use strict";
(() => {
var exports = {};
exports.id = 3262;
exports.ids = [3262,3613];
exports.modules = {

/***/ 9119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/mail.2c32dad2.png","height":118,"width":151,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAAAAADbboAnAAAAQElEQVR42gVAUQqAIAx9979PuYLRcFOIPppf/gQJiucQtCQpi1X4X2nzfsO5zTGiodD+eDgyXmIKfBq+S1WjlAUCeiWRn2D06gAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 4154:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_Heart_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7390);
/* harmony import */ var _public_mail_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9119);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pages_emailSubmit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7469);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_6__, _pages_emailSubmit__WEBPACK_IMPORTED_MODULE_9__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_6__, _pages_emailSubmit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const EmailSubmit = ()=>{
    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isLoadingRef , 1: setLoadingRef  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: verify , 1: setVerify  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function simulateNetworkRequest() {
        return new Promise((resolve)=>setTimeout(resolve, 4000)
        );
    }
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    async function emailSubmit1(data) {
        try {
            let res = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/emailsubmit", data);
            const rec = res.data.data;
            setIsLoading(true);
            if (rec) {
                console.log(rec);
                notify("Verification code Sent");
                setVerify(true);
                setIsLoading(false);
                setLoadingRef(true);
                setTimeout(()=>{
                    router.push("/forgetPassword");
                }, 3000);
            }
        } catch (err) {
            console.log(err, "Err");
            notifyError("Invalid Email");
            setError(true);
            setLoadingRef(false);
        }
    }
    function onSubmitHandler(e) {
        e.preventDefault();
        const email = emailRef.current.value;
        localStorage.setItem("email", email);
        const data = {
            email
        };
        setIsLoading(false);
        emailSubmit1(data);
    }
    const notify = (msg)=>react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })
    ;
    const notifyError = (msg)=>react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })
    ;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isLoading) {
            simulateNetworkRequest().then(()=>{
                setLoadingRef(true);
            });
        }
    }, [
        isLoading
    ]);
    const handleClick = ()=>setLoadingRef(false)
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "profile-sec",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row justify-content-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            newestOnTop: false,
                            closeOnClick: true,
                            rtl: false,
                            pauseOnFocusLoss: true,
                            draggable: true,
                            pauseOnHover: true
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            className: "input-sec input-top",
                            onSubmit: onSubmitHandler,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "input-line email-submit"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: _public_Heart_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"].src */ .Z.src,
                                    className: "mt-2"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "heading-text mt-3",
                                    children: [
                                        " ",
                                        "Join the HealthiWealthi ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                            className: "sup-text",
                                            children: "TM"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " Global Community"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        fontSize: "10px",
                                        paddingTop: "7px",
                                        margin: "0"
                                    },
                                    children: "Own RXHEAL and unleash your potential on HealthiWealthi\u2122 living healthier, happier, longer, and richer."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "input-item",
                                    style: {
                                        marginTop: "50px"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "item-text",
                                            children: "ENTER YOUR EMAIL"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "input-group height-set flex-nowrap mt-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "input-group-text input-border",
                                                    id: "addon-wrapping",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: _public_mail_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                                        style: {
                                                            height: "20px"
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    ref: emailRef,
                                                    type: "email",
                                                    className: "form-control form-border",
                                                    required: true,
                                                    placeholder: "john.doe@example.com",
                                                    "aria-label": "Username",
                                                    "aria-describedby": "addon-wrapping"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        color: "red",
                                        fontWeight: "500",
                                        margin: "0"
                                    },
                                    children: " Invalid Email "
                                }),
                                verify && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        color: "green",
                                        fontSize: "13px",
                                        fontWeight: "500",
                                        margin: "0"
                                    },
                                    children: " Verification code Sent "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    variant: "primary",
                                    className: "btn btn-round btn-warning w-100 p-0 ",
                                    style: {
                                        marginTop: "5px"
                                    },
                                    type: "submit",
                                    disabled: isLoading,
                                    onClick: !isLoading ? handleClick : null,
                                    children: isLoadingRef ? "Loading\u2026" : "   CONTINUE"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailSubmit);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7469:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Component_EmailSubmit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4154);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Component_EmailSubmit__WEBPACK_IMPORTED_MODULE_2__]);
_Component_EmailSubmit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const emailSubmit = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_EmailSubmit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emailSubmit);
async function getServerSideProps(context) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)(context);
    if (session) {
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,7390], () => (__webpack_exec__(7469)));
module.exports = __webpack_exports__;

})();