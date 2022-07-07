"use strict";
(() => {
var exports = {};
exports.id = 2846;
exports.ids = [2846];
exports.modules = {

/***/ 6119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow.14c7410d.svg","height":16,"width":16});

/***/ }),

/***/ 2377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6119);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_6__]);
react_toastify__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const UserProfile = ()=>{
    const firstNameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const lastNameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const contactNumberRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const addressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const cityRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const stateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const countryRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const zipCodeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: verify , 1: setVerify  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: lastName1 , 1: setLastName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: contactNumber1 , 1: setContactNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: address1 , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: city1 , 1: setCity  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: country1 , 1: setCountry  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: state1 , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: zipcode1 , 1: setZipcode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: isLoadingRef , 1: setLoadingRef  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isFinalData , 1: setIsFinalData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // const [profileData,setProfileData] =useState()
    async function userProfile() {
        try {
            let res = await axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/userProfile");
            const response = res.data;
            console.log(response.data);
            setIsFinalData(response.data);
            setName(response.data.firstName);
            setLastName(response.data.lastName);
            setContactNumber(response.data.contactNumber);
            setAddress(response.data.address);
            setCity(response.data.city);
            setCountry(response.data.country);
            setState(response.data.state);
            setZipcode(response.data.zipcode);
        } catch (err) {
            console.log(err, err);
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        userProfile();
    }, []);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    async function userData(data) {
        try {
            const token = localStorage.getItem("token");
            console.log(token, "for api");
            let res = await axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/userdata", {
                token: token,
                data
            });
            const request = res.data;
            console.log(request.data, "data fet");
            setIsFinalData(request.data);
            setIsLoading(true);
            setVerify(true);
            notify("User Detail Updated");
            setLoadingRef(true);
            setTimeout(()=>{
                router.push("/dashboard");
            }, 3000);
        } catch (err) {
            console.log(err, err);
        // notifyError('Invalid Detail')
        }
    }
    function formSubmitHandler(event) {
        event.preventDefault();
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const contactNumber = contactNumberRef.current.value;
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const state = stateRef.current.value;
        const country = countryRef.current.value;
        const zipcode = zipCodeRef.current.value;
        const data = {
            firstName,
            lastName,
            email,
            contactNumber,
            address,
            city,
            state,
            country,
            zipcode
        };
        console.log(data, "all data here");
        userData(data);
    }
    /////////////Toast//////////////////////
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
    function simulateNetworkRequest() {
        return new Promise((resolve)=>setTimeout(resolve, 3000)
        );
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isLoading) {
            simulateNetworkRequest().then(()=>{
                setLoadingRef(false);
            });
        }
    }, [
        isLoading
    ]);
    const handleClick = ()=>setLoadingRef(false)
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "profile-sec ",
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
                            className: "input-sec mb-5",
                            onSubmit: formSubmitHandler,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "line userprofile-line"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "heading-text pink-text mt-2 mb-5",
                                    id: "mb-mar",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/dashboard",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "arrows-icon",
                                                style: {
                                                    position: "relative",
                                                    left: "-23%",
                                                    cursor: "pointer"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: _public_arrow_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"].src */ .Z.src
                                                })
                                            })
                                        }),
                                        "Complete Profile"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "name-sec",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "input-item item-set",
                                            style: {
                                                marginRight: "10px"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "item-text",
                                                    children: "FIRST NAME"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    ref: firstNameRef,
                                                    // required
                                                    value: name,
                                                    onChange: (e)=>setName(e.currentTarget.value)
                                                    ,
                                                    className: "textinput",
                                                    type: "name",
                                                    name: "username"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "input-item item-set",
                                            style: {
                                                marginLeft: "10px"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "item-text",
                                                    children: "LAST NAME"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    ref: lastNameRef,
                                                    // required
                                                    value: lastName1,
                                                    onChange: (e)=>setLastName(e.currentTarget.value)
                                                    ,
                                                    className: "textinput",
                                                    type: "last name",
                                                    name: "last-name"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "name-sec",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "input-item item-set",
                                        style: {
                                            marginRight: "10px",
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                style: {
                                                    borderRadius: "4px 0 0 4px"
                                                },
                                                ref: emailRef,
                                                disabled: true,
                                                className: "textinput mt-0",
                                                name: "email",
                                                defaultValue: isFinalData?.email
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                href: "/emailChange",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "btn btn-roundes btn- w-50 mt-0 ",
                                                    children: "MODIFY"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "input-item item-set",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "item-text",
                                            children: "CONTACT NUMBER"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ref: contactNumberRef,
                                            onChange: (e)=>setContactNumber(e.currentTarget.value)
                                            ,
                                            value: contactNumber1,
                                            // placeholder={isFinalData?.contactNumber} 
                                            className: "textinput",
                                            name: "contact no"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "input-item item-set",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "item-text",
                                            children: "ADDRESS"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ref: addressRef,
                                            value: address1,
                                            onChange: (e)=>setAddress(e.currentTarget.value)
                                            ,
                                            // placeholder={isFinalData?.address} 
                                            className: "textinput",
                                            name: "address"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "input-item item-set",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "item-text",
                                            children: "CITY"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ref: cityRef,
                                            value: city1,
                                            onChange: (e)=>setCity(e.currentTarget.value)
                                            ,
                                            // placeholder={isFinalData?.city} 
                                            className: "textinput",
                                            name: "city"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "input-item item-set",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "item-text",
                                            children: "STATE/PROVINCE"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ref: stateRef,
                                            value: state1,
                                            onChange: (e)=>setState(e.currentTarget.value)
                                            ,
                                            // placeholder={isFinalData?.state} 
                                            className: "textinput",
                                            name: "state"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "input-item item-set",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "item-text",
                                            children: " COUNTRY "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ref: countryRef,
                                            value: country1,
                                            onChange: (e)=>setCountry(e.currentTarget.value)
                                            ,
                                            // placeholder={isFinalData?.country} 
                                            className: "textinput",
                                            name: "country"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "input-item item-set mb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "item-text",
                                            children: "ZIP Code"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ref: zipCodeRef,
                                            value: zipcode1,
                                            onChange: (e)=>setZipcode(e.currentTarget.value)
                                            ,
                                            // placeholder={isFinalData?.zipcode} 
                                            className: "textinput",
                                            name: "zip code"
                                        })
                                    ]
                                }),
                                verify && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        color: "green",
                                        fontSize: "15px",
                                        margin: "0"
                                    },
                                    children: " User Detail Updated "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    variant: "primary",
                                    className: "btn btn-round btn-warning w-100 p-0 ",
                                    style: {
                                        marginTop: "5px"
                                    },
                                    type: "submit",
                                    disabled: isLoading,
                                    onClick: !isLoading ? handleClick : null,
                                    children: isLoadingRef ? "Loading\u2026" : "   UPDATE"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4581:
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
/* harmony import */ var _Component_UserProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2377);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Component_UserProfile__WEBPACK_IMPORTED_MODULE_2__]);
_Component_UserProfile__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const userprofile = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component_UserProfile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userprofile);
async function getServerSideProps(context) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)(context);
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
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664], () => (__webpack_exec__(4581)));
module.exports = __webpack_exports__;

})();