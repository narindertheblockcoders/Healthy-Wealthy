"use strict";
(() => {
var exports = {};
exports.id = 228;
exports.ids = [228];
exports.modules = {

/***/ 7390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Heart.2f3879f8.svg","height":45,"width":49});

/***/ }),

/***/ 6119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow.14c7410d.svg","height":16,"width":16});

/***/ }),

/***/ 4247:
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
// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(4780);
// EXTERNAL MODULE: ./public/Heart.svg
var Heart = __webpack_require__(7390);
// EXTERNAL MODULE: ./public/arrow.svg
var arrow = __webpack_require__(6119);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: external "react-bootstrap/Modal"
const Modal_namespaceObject = require("react-bootstrap/Modal");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_namespaceObject);
;// CONCATENATED MODULE: ./Component/ui/VideoModal.js




const VideoModal = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
        ...props,
        size: "lg",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        backdrop: "static",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                closeButton: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Body, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                    src: "https://player.vimeo.com/video/711429641?h=51271188df&title=0&byline=0&portrait=0",
                    width: "770",
                    height: "480",
                    frameborder: "0",
                    autoPlay: true,
                    allow: "autoplay; fullscreen; picture-in-picture",
                    allowfullscreen: true
                })
            })
        ]
    });
};
/* harmony default export */ const ui_VideoModal = (VideoModal);

;// CONCATENATED MODULE: ./Component/Buy.js











const Buy = ()=>{
    const forInputRef = (0,external_react_.useRef)();
    const { 0: tokenPrice , 1: setTokenPrice  } = (0,external_react_.useState)(null);
    const { 0: finalValue , 1: setFinalValue  } = (0,external_react_.useState)(null);
    const router = (0,router_.useRouter)();
    const { 0: amount , 1: setAmount  } = (0,external_react_.useState)(router?.query?.amount || 100);
    const { 0: modalShow , 1: setModalShow  } = (0,external_react_.useState)(false);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: isLoadingRef , 1: setLoadingRef  } = (0,external_react_.useState)(false);
    function simulateNetworkRequest() {
        return new Promise((resolve)=>setTimeout(resolve, 4000)
        );
    }
    console.log(router.query.amount);
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
        setLoadingRef(true);
        setIsLoading(true);
        router.push("/creditPage");
    }
    function onChangeHandler() {
        (e)=>e.current.value.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
        ;
        console.log(amount, "change");
        const enteredFor = forInputRef.current.value;
        setAmount(enteredFor);
        setFinalValue(enteredFor / tokenPrice);
    }
    function onAddHandler(e) {
        e.preventDefault();
        console.log(amount, "add");
        if (forInputRef.current.value == "") {
            forInputRef.current.value = e.currentTarget.value;
            return;
        }
        forInputRef.current.value = parseInt(forInputRef.current.value) + parseInt(e.currentTarget.value);
        setAmount(parseInt(forInputRef.current.value) + parseInt(e.currentTarget.value));
        setFinalValue(parseInt(forInputRef.current.value) / tokenPrice);
    }
    (0,external_react_.useEffect)(()=>{
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "profile-sec pb-3 pt-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: "input-sec iptset-line width-set ",
                            id: "fom-set",
                            style: {
                                width: "36%",
                                position: "relative"
                            },
                            onSubmit: onSubmitHandler,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "input-line buy-line"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    onClick: ()=>router.back()
                                    ,
                                    className: "arrows-icon",
                                    id: "arrows-icn",
                                    style: {
                                        position: "absolute",
                                        left: "-20%",
                                        cursor: "pointer"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: arrow/* default.src */.Z.src
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                    style: {
                                        marginTop: "-5px",
                                        borderRadius: "10px 10px 0 0"
                                    },
                                    className: "iframe-setting",
                                    src: "https://player.vimeo.com/video/711429641?h=51271188df&title=0&byline=0&portrait=0",
                                    width: "100%",
                                    height: "270px",
                                    frameborder: "0",
                                    allow: "autoplay; fullscreen; picture-in-picture",
                                    allowfullscreen: true
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ui_VideoModal, {
                                    show: modalShow,
                                    onHide: ()=>setModalShow(false)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "buy-header mt-3",
                                    id: "buy-header",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                            className: "heading-text",
                                            id: "ptext-set",
                                            style: {
                                                fontSize: "20px"
                                            },
                                            children: [
                                                " ",
                                                "Own RXHEAL Reward Tokens"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "pt-1",
                                            style: {
                                                fontSize: "14px",
                                                margin: "0"
                                            },
                                            children: " Be a leader in Healthcare 3.0 and receive extensive benefits (see below)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: " margin-txt",
                                    id: "set-text",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "buy-set",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                            className: "item-text w-100",
                                            style: {
                                                fontSize: "13px",
                                                color: "#0D0D0D",
                                                fontWeight: "600",
                                                marginBottom: "12px"
                                            },
                                            children: [
                                                "CURRENT RXHEAL PRICE - $",
                                                tokenPrice
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bottom-line"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "padding-set",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "buy-setting ",
                                            id: "buy-sett",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "input-item",
                                                    id: "item-setting",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "item-text",
                                                            style: {
                                                                color: "#D32286"
                                                            },
                                                            children: "FOR"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "input-group input-set mt-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "number",
                                                                    required: true,
                                                                    ref: forInputRef,
                                                                    // style={{ borderRadius: "10px 0 0 10px" }}
                                                                    onChange: onChangeHandler,
                                                                    className: "form-control",
                                                                    defaultValue: amount,
                                                                    min: "100",
                                                                    "aria-label": "Dollar amount (with dot and two decimal places)"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    className: "btn btn-outline-secondary btn-style",
                                                                    style: {
                                                                        width: "32%"
                                                                    },
                                                                    type: "button",
                                                                    "data-bs-toggle": "dropdown",
                                                                    "aria-expanded": "false",
                                                                    children: "USD"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "input-item ",
                                                    id: "item-setting",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "item-text",
                                                            style: {
                                                                color: "#D32286"
                                                            },
                                                            children: "YOU RECEIVE"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "input-group input-set mt-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    // style={{ borderRadius: "10px 0 0 10px" }}
                                                                    className: "form-control",
                                                                    disabled: true,
                                                                    // pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                                                                    // data-type="currency"
                                                                    defaultValue: finalValue,
                                                                    placeholder: "0.00945",
                                                                    "aria-label": " amount"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    // style={{ borderRadius: "0 10px 10px 0" }}
                                                                    className: "btn btn-outline-secondary btn-style",
                                                                    type: "button",
                                                                    "data-bs-toggle": "dropdown",
                                                                    "aria-expanded": "false",
                                                                    children: "RXHEAL"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "btn-buysec",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "button",
                                                    value: 100,
                                                    onClick: (e)=>{
                                                        onAddHandler(e);
                                                    },
                                                    className: "buy-btntst font-set",
                                                    children: "$100"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    value: 1000,
                                                    type: "button",
                                                    onClick: (e)=>{
                                                        onAddHandler(e);
                                                    },
                                                    className: "buy-btntst font-set",
                                                    id: "num-pad",
                                                    children: "$1000"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "button",
                                                    value: 5000,
                                                    onClick: (e)=>{
                                                        onAddHandler(e);
                                                    },
                                                    className: "buy-btntst font-set",
                                                    id: "num-pad",
                                                    children: "$5000"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "input-item benefit-type",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "item-text",
                                                    style: {
                                                        fontSize: "17px",
                                                        fontWeight: "600",
                                                        marginBottom: "9px",
                                                        color: "#D32286"
                                                    },
                                                    children: " BENEFITS"
                                                }),
                                                amount >= 100 & amount < 1000 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            style: {
                                                                fontSize: "14px",
                                                                fontWeight: "bold"
                                                            },
                                                            children: "$100 - $999"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/checkPink.svg",
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    }
                                                                }),
                                                                " 100 RXHEAL Bonus Tokens"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/checkPink.svg",
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    }
                                                                }),
                                                                " Book HealthiWealthi ($15 value)"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/checkPink.svg",
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    }
                                                                }),
                                                                "   Book Lifestyle Medicine Works ($20 value)"
                                                            ]
                                                        })
                                                    ]
                                                }) : null,
                                                amount > 999 && amount < 5000 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            style: {
                                                                fontSize: "14px",
                                                                fontWeight: "bold",
                                                                marginTop: "10px"
                                                            },
                                                            children: "    $1,000 - $4,999"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/checkPink.svg",
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    }
                                                                }),
                                                                " 1,000 RXHEAL Bonus Tokens"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/checkPink.svg",
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    }
                                                                }),
                                                                " Book HealthiWealthi ($15 value)"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/checkPink.svg",
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    }
                                                                }),
                                                                " Lifestyle Medicine Summit Premium Ticket ($197 value)"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/checkPink.svg",
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    }
                                                                }),
                                                                " The Art & Science of Self-Healing 101 Course ($297 value)"
                                                            ]
                                                        })
                                                    ]
                                                }) : null,
                                                amount > 4999 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            style: {
                                                                fontSize: "14px",
                                                                fontWeight: "bold",
                                                                marginTop: "10px"
                                                            },
                                                            children: "    $5,000 -  $10,000"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/checkPink.svg",
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    }
                                                                }),
                                                                " 5,000 RXHEAL Bonus Tokens"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/checkPink.svg",
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    }
                                                                }),
                                                                " Book HealthiWealthi ($15 value)"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/checkPink.svg",
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    }
                                                                }),
                                                                " Lifestyle Medicine Summit Premium Ticket ($197 value)"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/checkPink.svg",
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    }
                                                                }),
                                                                " The Art & Science of Self-Healing 101 Course ($297 value)"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/checkPink.svg",
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    }
                                                                }),
                                                                " HealthiWealthi\u2122 Coach Training Course ($997 value)"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/checkPink.svg",
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    }
                                                                }),
                                                                " $1,000 Lifestyle Prescriptions\xae University Training Scholarship"
                                                            ]
                                                        })
                                                    ]
                                                }) : null
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            variant: "primary",
                                            className: "btn btn-round btn-warning ",
                                            style: {
                                                marginTop: "30px",
                                                width: "87%"
                                            },
                                            type: "submit",
                                            disabled: isLoading,
                                            onClick: !isLoading ? handleClick : null,
                                            children: isLoadingRef ? "Loading\u2026" : "   CONTINUE"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "by-text ",
                                            children: [
                                                "By continuing you agree to our",
                                                " ",
                                                "privacy policy.",
                                                " "
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-set mt-0",
                id: "skip-page",
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

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

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
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664], () => (__webpack_exec__(4247)));
module.exports = __webpack_exports__;

})();