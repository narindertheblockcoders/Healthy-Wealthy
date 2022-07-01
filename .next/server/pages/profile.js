"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 6119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow.14c7410d.svg","height":16,"width":16});

/***/ }),

/***/ 3415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_profile),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./public/arrow.svg
var arrow = __webpack_require__(6119);
;// CONCATENATED MODULE: ./Component/Profile.js







const Profile = ()=>{
    const firstNameInputRef = (0,external_react_.useRef)();
    const lastNameInputRef = (0,external_react_.useRef)();
    const { 0: email1 , 1: setEmail  } = (0,external_react_.useState)(null);
    const passwordInputRef = (0,external_react_.useRef)();
    const confirmPasswordInputRef = (0,external_react_.useRef)();
    const router = (0,router_.useRouter)();
    const { 0: isValid , 1: setIsValid  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setEmail(localStorage.getItem("email"));
    }, []);
    async function profileFill(data) {
        try {
            let res = await external_axios_default().post("/api/fillProfile", data);
            const record = res.data;
            console.log(record, "hii man");
            let { email , password  } = data;
            const rest = await (0,react_.signIn)("credentials", {
                redirect: false,
                email,
                password
            });
            console.log(rest, "anything");
            if (rest?.error) {
                // setError(res.error);
                console.log(rest.error);
            // setValid(true);
            } else {
            // setError(null);
            }
            if (!rest.error) {
                router.push("/investPage");
            }
        // localStorage.setItem("token", record.data.data);
        // window.location.reload();
        } catch (err) {
            console.log(err, "hello");
        }
    }
    function formSubmitHandler(event) {
        event.preventDefault();
        const firstName = firstNameInputRef.current.value;
        const lastName = lastNameInputRef.current.value;
        const password = passwordInputRef.current.value;
        const confimPassword = confirmPasswordInputRef.current.value;
        if (password !== confimPassword) {
            setIsValid(true);
            return;
        }
        // router.push("/buy");
        const local = {
            firstName,
            lastName,
            email: email1,
            password,
            confimPassword
        };
        console.log(local, "sxqwdqwdx");
        localStorage.setItem("profile", JSON.stringify(local));
        profileFill(local);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "profile-sec pb-4",
            style: {
                height: "81vh"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: "input-sec",
                        onSubmit: formSubmitHandler,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "line profile-line"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "heading-text pink-text mt-2",
                                children: "Complete Your Profile"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                style: {
                                    fontSize: "14px",
                                    paddingTop: "7px",
                                    margin: "0"
                                },
                                children: "To access your HealthiWealthi\u2122RXHEAL dashboard and the 7-minute Welcome Video that will change your life."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "name-sec",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "input-item item-set",
                                        style: {
                                            marginRight: "10px"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "item-text",
                                                children: "FIRST "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                ref: firstNameInputRef,
                                                required: true,
                                                className: "textinput",
                                                type: "name",
                                                name: "username"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "input-item item-set",
                                        style: {
                                            marginLeft: "10px"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "item-text",
                                                children: "LAST "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                ref: lastNameInputRef,
                                                required: true,
                                                className: "textinput",
                                                type: "last name",
                                                name: "last-name"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "input-item item-set",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "item-text",
                                        children: "EMAIL"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        disabled: true,
                                        required: true,
                                        className: "textinput",
                                        defaultValue: email1,
                                        name: "email"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "input-item item-set",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "item-text",
                                        children: "PASSWORD"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: passwordInputRef,
                                        required: true,
                                        className: "textinput",
                                        type: "password",
                                        name: "password"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "input-item item-set",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "item-text",
                                        children: "CONFIRM PASSWORD"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: confirmPasswordInputRef,
                                        required: true,
                                        className: "textinput",
                                        type: "password",
                                        name: "confirmpassword"
                                    }),
                                    isValid && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            color: "red"
                                        },
                                        children: " Password doesn't match "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                href: "funds-page.html",
                                className: "btn btn-round btn-warning w-100 ",
                                style: {
                                    marginTop: "30px"
                                },
                                type: "submit",
                                children: "CONTINUE"
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const Component_Profile = (Profile);

// EXTERNAL MODULE: ./node_modules/next/dist/server/api-utils/index.js
var api_utils = __webpack_require__(8464);
;// CONCATENATED MODULE: ./pages/profile.js





const profile = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component_Profile, {})
    });
};
/* harmony default export */ const pages_profile = (profile);
async function getServerSideProps(context) {
    const session = await (0,react_.getSession)(context);
    if (session) {
        return {
            redirect: {
                destination: "/buy",
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

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

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
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664,8464], () => (__webpack_exec__(3415)));
module.exports = __webpack_exports__;

})();