"use strict";
(() => {
var exports = {};
exports.id = 4501;
exports.ids = [4501];
exports.modules = {

/***/ 6119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow.14c7410d.svg","height":16,"width":16});

/***/ }),

/***/ 9620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_funds),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/btc.png
/* harmony default export */ const btc = ({"src":"/_next/static/media/btc.657f7df3.png","height":18,"width":18,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA60lEQVR42g3MMUoDQRSA4f/N7mY1pJCQRgUxS0ghFgErC5UoiNewsvYComiZMuQkamGwFU8QLNRgI4hGMJEdnZndp98BPgHI+1mHMO4RdAsIzDWHUtpjYCx5v92h+LiVtFk3SzuQVCkeLiBafISiGwu+p+VnXWpdH28eJfprgdgVo9MWafvMwH9bgqpJ1M7Q6Ssm207wIJLsGdVKgUK8cYh+T5BkHlwOCmCCQaIbIlA7dWahoYQfLV/uPBUAfy12sL6q7mlIVG2Zxj7l+yW4GaTZvfrnAwGwg7VlwuRc/dsulZUgpnaFG50AX39JsmM8yzx6XAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/eth.png
/* harmony default export */ const eth = ({"src":"/_next/static/media/eth.0297760b.png","height":18,"width":11,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAlUlEQVR42mMAgfnz53Onpqa2AJnsDDAwefLkvMzMzP9AZjJYYN68eUoTJ058l5yc/EVdXf2Vn5+fNENhYeH+uLi4/4aGhp/k5OT+a2pqbmNISkqaYWRkdBuo6i8vLy+QVpvMMHPmTJuuru49AQH+c01MjPe4ubmawyxqy8nJ+S8vL1PDAAMLFizgSE9PrwIyWRgYGBgAk+QxqYS4KQgAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/polygon.svg
/* harmony default export */ const polygon = ({"src":"/_next/static/media/polygon.0b7dbb8f.svg","height":20,"width":23});
;// CONCATENATED MODULE: ./public/tether.png
/* harmony default export */ const tether = ({"src":"/_next/static/media/tether.40c8ff5a.png","height":17,"width":19,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAApklEQVR42jWOMQrCQBBFR9RDiNfwDLa7hZ2FYCGItkEEbTyC2fUONjtH0DsEQbBLoekscoD1rUkGPrzJ+1lG0pjgbkZdadU9bHAFe0WunZzyMSIXJuQjo/kYzkjETQT5BN6ktMFvESf4Rb5W/T0VHEtNKnhDjvCH1JQPwqTSrn1yzi17/ozsq0bqpd/esqbIkb6AZ43zA8S5ZwLAIDKjfvlndUMRkR+D/GTnmJRSWAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/fei.png
/* harmony default export */ const fei = ({"src":"/_next/static/media/fei.11a52fc7.png","height":17,"width":17,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAElEQVR42mP4//8/g8D0HEXtmQWbGSbEvmOYlPhOe1bBBv4ZOfIgOQbFGXmKQIEHDJOT/s8+uun/hH0r/jNMSvoPFLuvODNPnkFhRu5m3VkF/xkmxv1adung/5mnt/9n6I/6pTur8L/8jNwNDIazi94x9Ib/nwnU/fjD6/+PPrz637FnKUjRfwOQHMOU1PdJa/v+//2PAF9///zvsaThP/fUjPcMDH2RG5p3Lfp/+/nDXxcf3Ph/8eHN/7eePfiVv3Hqf4YJcRsYHOZVyDNMTnnA0Bv6H2QVCIPZU9Mf2Mwtk2f4//8/g/OCannLOaUbTGYXvwdhyzklG6zmloO9CQAWNZd9hgofsQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: external "react-bootstrap/Nav"
const Nav_namespaceObject = require("react-bootstrap/Nav");
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./public/arrow.svg
var arrow = __webpack_require__(6119);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./Component/Funds.js













const Funds = ()=>{
    const router = (0,router_.useRouter)();
    const { 0: token1 , 1: setToken  } = (0,external_react_.useState)(null);
    const { 0: ref , 1: setRef  } = (0,external_react_.useState)();
    const { 0: stakes , 1: setStakes  } = (0,external_react_.useState)();
    const { 0: myTokens , 1: setMyTokens  } = (0,external_react_.useState)();
    async function register() {
        try {
            // let token = localStorage.getItem("token");
            let res = await external_axios_default().post("/api/funds");
            const rec = res.data;
            // console.log(rec, "error not show");
            setRef(rec.data);
        } catch (err) {
            console.log(err, "Err");
        }
    }
    (0,external_react_.useEffect)(()=>{
        staking();
        register();
    }, []);
    async function staking() {
        try {
            // let token = localStorage.getItem("token");
            let res = await external_axios_default().post("/api/staking");
            let rest = await external_axios_default().post("/api/mytokens");
            const rec = res.data;
            // console.log(rec)
            console.log(rest.data.data, "error not show");
            setStakes(rec.data);
            setToken([
                rest.data.data
            ], "rest here");
        } catch (err) {
            console.log(err, "Err");
        }
    }
    //  async function myToken() {
    //     try {
    //       console.log("my")
    //       let token = localStorage.getItem("token");
    //       const rec = res.data;
    //       console.log(rec, "my Token");
    //       setMyTokens(rec.data);
    //     } catch (err) {
    //       console.log(err, "Err");
    //     }
    //   }
    // useEffect(() => {
    // }, []);
    function formSubmitHandler(e) {
        e.preventDefault();
        transactions();
    }
    async function onClickHandler(event) {
        event.preventDefault();
        router.push("/pay");
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
                        onSubmit: formSubmitHandler,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                className: "funds-heading",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "arrows-icon",
                                        onClick: ()=>router.back()
                                        ,
                                        style: {
                                            position: "relative",
                                            left: "-1%",
                                            cursor: "pointer"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: arrow/* default.src */.Z.src
                                        })
                                    }),
                                    "FUNDS AND TRANSACTION"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Tabs, {
                                defaultActiveKey: "Funds",
                                id: "uncontrolled-tab-example",
                                className: "mb-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Tab, {
                                        eventKey: "Funds",
                                        className: "btn-ajayaar",
                                        title: "Funds",
                                        style: {
                                            height: "50px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "search-sec",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        className: "search-input",
                                                        type: "text",
                                                        name: "username",
                                                        placeholder: "Search"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "switch-sec",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "form-check form-switch",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    className: "form-check-input",
                                                                    style: {
                                                                        width: "3rem"
                                                                    },
                                                                    type: "checkbox",
                                                                    id: "flexSwitchCheckChecked"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "switch-text",
                                                                children: "Hide Zero Balances"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                                className: "table funds-table",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    style: {
                                                                        textAlign: "left"
                                                                    },
                                                                    children: " ASSETS"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    children: "COIN PRICE"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    children: "AVAILABLE BALANCE"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    children: "LOCKED"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    children: "TOTAL"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    style: {
                                                                        paddingRight: "15px"
                                                                    },
                                                                    children: " VALUE"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    colspan: "2",
                                                                    style: {
                                                                        textAlign: "right"
                                                                    },
                                                                    children: "ACTION"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                                        style: {
                                                            borderBottom: "1px solid black"
                                                        },
                                                        children: token1 ? token1?.map((item)=>{
                                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        className: "logo-txt",
                                                                        children: "RXHEAL"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        children: item.coinPrice
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        style: {
                                                                            textAlign: "center"
                                                                        },
                                                                        children: item?.availableToken
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                                        id: "padding-set",
                                                                        children: [
                                                                            " ",
                                                                            item.locked
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        children: item.total
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        style: {
                                                                            textAlign: "center"
                                                                        },
                                                                        children: item?.totalValue
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        style: {
                                                                            textAlign: "right"
                                                                        },
                                                                        children: item.totalValue > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                            type: "button",
                                                                            className: "btn deposit-btn",
                                                                            role: "button",
                                                                            onClick: ()=>router.push("/pay")
                                                                            ,
                                                                            children: "Withdraw"
                                                                        }) : null
                                                                    })
                                                                ]
                                                            });
                                                        }) : null
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                                className: "table funds-table mt-5",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    style: {
                                                                        textAlign: "left"
                                                                    },
                                                                    children: "STAKING DATE"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    children: "TOKEN"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    children: "ROI"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    id: "padding-set",
                                                                    children: "END DATE"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    style: {
                                                                        textAlign: "right"
                                                                    },
                                                                    children: " STATUS"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                                        children: stakes ? stakes.map((item, i)=>{
                                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        className: "logo-txt",
                                                                        children: new Date(item.createdAt).toLocaleString("en-us", {
                                                                            day: "numeric",
                                                                            year: "numeric",
                                                                            month: "numeric"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                                        children: [
                                                                            item.token,
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                                        children: [
                                                                            item.roi,
                                                                            "%"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        children: new Date(item.endDate).toLocaleString("en-us", {
                                                                            year: "numeric",
                                                                            month: "numeric",
                                                                            day: "numeric"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        style: {
                                                                            textAlign: "right"
                                                                        },
                                                                        children: "Approved"
                                                                    })
                                                                ]
                                                            }, i);
                                                        }) : null
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Tab, {
                                        eventKey: "Transfer",
                                        style: {
                                            height: "50px"
                                        },
                                        title: "Transaction",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                            className: "table funds-table",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                scope: "col",
                                                                children: "DATE"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                scope: "col",
                                                                children: "USD AMOUNT"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                scope: "col",
                                                                children: "TOKEN QUANTITY"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                scope: "col",
                                                                children: "TOKEN PRICE"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                scope: "col",
                                                                children: "PAYMENT MODE"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                scope: "col",
                                                                id: "coin-padd",
                                                                style: {
                                                                    width: "10%",
                                                                    paddingRight: "0"
                                                                },
                                                                children: "COIN"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                scope: "col",
                                                                style: {
                                                                    width: "20%",
                                                                    textAlign: "center"
                                                                },
                                                                children: "FINAL AMOUNT"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                scope: "col",
                                                                colSpan: "2",
                                                                style: {
                                                                    textAlign: "center"
                                                                },
                                                                children: "STATUS"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                                    children: ref ? ref?.map((item)=>{
                                                        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        className: "logo-txt",
                                                                        id: "logo-padd",
                                                                        style: {
                                                                            textAlign: "center"
                                                                        },
                                                                        children: new Date().toDateString()
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                                        children: [
                                                                            " ",
                                                                            item.usdAmount,
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        style: {
                                                                            paddingLeft: "0px !important"
                                                                        },
                                                                        children: item.tokenQuantity
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                                        id: "td-set",
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                                children: item.tokenPrice
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        children: item.paymentMode
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        style: {
                                                                            textAlign: "center",
                                                                            width: "10%"
                                                                        },
                                                                        children: item.coin
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        style: {
                                                                            textAlign: "center"
                                                                        },
                                                                        children: item.finalAmount
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        children: item.status
                                                                    })
                                                                ]
                                                            })
                                                        });
                                                    }) : null
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "tab-content",
                                id: "myTabContent",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "tab-pane fade show active",
                                    id: "home",
                                    role: "tabpanel",
                                    "aria-labelledby": "home-tab"
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const Component_Funds = (Funds);

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/funds.js





const funds = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Funds"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component_Funds, {})
        ]
    });
};
/* harmony default export */ const pages_funds = (funds);
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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [9505,1664], () => (__webpack_exec__(9620)));
module.exports = __webpack_exports__;

})();