"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/success",{

/***/ "./Component/Welcome.js":
/*!******************************!*\
  !*** ./Component/Welcome.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_success_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/success.png */ \"./public/success.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Welcome = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    //   const via = router.query;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), transactionID = ref[0], setTransactionID = ref[1];\n    function setTransaction() {\n        return _setTransaction.apply(this, arguments);\n    }\n    function _setTransaction() {\n        _setTransaction = //   console.log( via, 'hello')\n        _asyncToGenerator(_home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tranx, token, query, data, res, dataa;\n            return _home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return JSON.parse(localStorage.getItem(\"tranx\"));\n                    case 2:\n                        tranx = _ctx.sent;\n                        console.log(tranx);\n                        token = localStorage.getItem(\"token\");\n                        _ctx.next = 7;\n                        return JSON.parse(localStorage.getItem(\"query\"));\n                    case 7:\n                        query = _ctx.sent;\n                        data = {\n                            transactionId: tranx.transId,\n                            id: tranx.id,\n                            token: token\n                        };\n                        localStorage.removeItem(\"query\");\n                        _ctx.next = 12;\n                        return axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"/api/payment/success\", data);\n                    case 12:\n                        res = _ctx.sent;\n                        dataa = res.data.data;\n                        console.log(dataa);\n                        setTransactionID({\n                            trans: tranx.transId,\n                            id: tranx.id\n                        });\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _setTransaction.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setTransaction();\n    }, []);\n    // const { finalAmount } = router.query\n    var notify = function(msg) {\n        return react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success(msg, {\n            position: \"top-right\",\n            autoClose: 5000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n            className: \"profile-sec\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {\n                            position: \"top-right\",\n                            autoClose: 5000,\n                            hideProgressBar: false,\n                            newestOnTop: false,\n                            closeOnClick: true,\n                            rtl: false,\n                            pauseOnFocusLoss: true,\n                            draggable: true,\n                            pauseOnHover: true\n                        }, void 0, false, {\n                            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            className: \"input-sec payment-form \",\n                            id: \"form-pay\",\n                            style: {\n                                width: \"35%\",\n                                padding: \"30px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"input-line welcome-line\"\n                                }, void 0, false, {\n                                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"wel-head mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: _public_success_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src\n                                    }, void 0, false, {\n                                        fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 1\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"heading-parts mt-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"order-text\",\n                                            style: {\n                                                color: \"green\"\n                                            },\n                                            children: \"ORDER CONFORMATION\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            className: \"pt-2\",\n                                            children: \"Your order has been successfully placed\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            className: \"pt-2 mt-0 text-break\",\n                                            children: [\n                                                \"Transaction ID : \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                                                    children: [\n                                                        \" \",\n                                                        transactionID === null || transactionID === void 0 ? void 0 : transactionID.trans,\n                                                        \" \"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 70\n                                                }, _this),\n                                                \"  \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__.CopyToClipboard, {\n                                                    text: transactionID === null || transactionID === void 0 ? void 0 : transactionID.trans,\n                                                    onCopy: function() {\n                                                        return notify(\"Copied Successfully\");\n                                                    },\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                        style: {\n                                                            marginLeft: \"10px\"\n                                                        },\n                                                        src: \"/mdi.png\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 25\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 113\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"head-partes\"\n                                }, void 0, false, {\n                                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"heading-parts mt-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/dashboard\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-round btn-warning form-btn w-50 p-0 mb-3\",\n                                            style: {\n                                                marginTop: \"0px\"\n                                            },\n                                            type: \"submit\",\n                                            children: \"DASHBOARD\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this);\n};\n_s(Welcome, \"5qLrAd8REkaP9iAT7Ihep2Hr7Ws=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Welcome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Welcome);\nvar _c;\n$RefreshReg$(_c, \"Welcome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFHO3dEQUFDSCxLQUFLLEVBQUU7NERBQUVXLFVBQVUsRUFBRSxNQUFNO3lEQUFFO3dEQUFFUCxHQUFHLEVBQUUsVUFBVTs7Ozs7NkRBQUk7Ozs7O3lEQUN2Qzs7Ozs7O2lEQUNkOzs7Ozs7eUNBRU47OENBR04sOERBQUNYLEtBQUc7b0NBQUNFLFNBQVMsRUFBQyxhQUFhOzs7Ozt5Q0FDcEI7OENBQ1IsOERBQUNGLEtBQUc7b0NBQUNFLFNBQVMsRUFBQyxvQkFBb0I7OENBQ2pDLDRFQUFDM0Msa0RBQUk7d0NBQUM0RCxJQUFJLEVBQUUsWUFBWTtrREFDeEIsNEVBQUNDLFFBQU07NENBQ0xsQixTQUFTLEVBQUMsa0RBQWtEOzRDQUM1REssS0FBSyxFQUFFO2dEQUFFYyxTQUFTLEVBQUUsS0FBSzs2Q0FBRTs0Q0FDM0JDLElBQUksRUFBQyxRQUFRO3NEQUNkLFdBRUQ7Ozs7O2lEQUFTOzs7Ozs2Q0FDRjs7Ozs7eUNBQ0g7Ozs7OztpQ0FDRDs7Ozs7O3lCQUNIOzs7OztxQkFDRjs7Ozs7aUJBQ0U7Ozs7O2FBQ04sQ0FDTjtDQUNIO0dBekdLeEQsT0FBTzs7UUFDSUwsa0RBQVM7OztBQURwQkssS0FBQUEsT0FBTztBQTJHYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudC9XZWxjb21lLmpzPzI4ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdWNjZXNzIGZyb20gXCIuLi9wdWJsaWMvc3VjY2Vzcy5wbmdcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSBcInJlYWN0LWNvcHktdG8tY2xpcGJvYXJkXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cblxuY29uc3QgV2VsY29tZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbi8vICAgY29uc3QgdmlhID0gcm91dGVyLnF1ZXJ5O1xuXG5jb25zdCBbdHJhbnNhY3Rpb25JRCwgc2V0VHJhbnNhY3Rpb25JRF09IHVzZVN0YXRlKG51bGwpXG4vLyAgIGNvbnNvbGUubG9nKCB2aWEsICdoZWxsbycpXG5hc3luYyBmdW5jdGlvbiBzZXRUcmFuc2FjdGlvbigpe1xuICAgIGxldCB0cmFueCA9IGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RyYW54JykpXG5jb25zb2xlLmxvZyh0cmFueClcbiAgICBsZXQgdG9rZW4gPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICBsZXQgcXVlcnk9IGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3F1ZXJ5JykpXG4gICAgLy8gaWYoIXF1ZXJ5KSByZXR1cm47XG4gICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRyYW5zYWN0aW9uSWQ6dHJhbngudHJhbnNJZCxpZDp0cmFueC5pZCx0b2tlblxuICAgICAgIH07XG4gICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3F1ZXJ5JylcblxuXG4gICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3BheW1lbnQvc3VjY2Vzc1wiLGRhdGEpXG4gICAgbGV0IGRhdGFhID0gcmVzLmRhdGEuZGF0YVxuICAgIGNvbnNvbGUubG9nKGRhdGFhKVxuXG5cbiAgICBzZXRUcmFuc2FjdGlvbklEKHt0cmFuczp0cmFueC50cmFuc0lkLGlkOnRyYW54LmlkfSlcbn1cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgICBcbiAgICBzZXRUcmFuc2FjdGlvbigpXG5cblxuICB9LFtdKVxuICAgIC8vIGNvbnN0IHsgZmluYWxBbW91bnQgfSA9IHJvdXRlci5xdWVyeVxuXG4gICAgY29uc3Qgbm90aWZ5ID0gKG1zZykgPT5cbiAgICB0b2FzdC5zdWNjZXNzKG1zZywge1xuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcbiAgICB9KTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtc2VjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcbiAgICAgICAgICAgICAgYXV0b0Nsb3NlPXs1MDAwfVxuICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuICAgICAgICAgICAgICBuZXdlc3RPblRvcD17ZmFsc2V9XG4gICAgICAgICAgICAgIGNsb3NlT25DbGlja1xuICAgICAgICAgICAgICBydGw9e2ZhbHNlfVxuICAgICAgICAgICAgICBwYXVzZU9uRm9jdXNMb3NzXG4gICAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgICBwYXVzZU9uSG92ZXJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXNlYyAgcGF5bWVudC1mb3JtIFwiXG4gICAgICAgICAgICAgIGlkPVwiZm9ybS1wYXlcIlxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzNSVcIiwgcGFkZGluZzogXCIzMHB4XCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1saW5lICAgd2VsY29tZS1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWwtaGVhZCBtdC01XCI+XG48aW1nIHNyYz17U3VjY2Vzcy5zcmN9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLXBhcnRzIG10LTVcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwib3JkZXItdGV4dFwiIHN0eWxlPXt7Y29sb3I6XCJncmVlblwifX0+T1JERVIgQ09ORk9STUFUSU9OPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yXCI+WW91ciBvcmRlciBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcGxhY2VkPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTIgbXQtMCB0ZXh0LWJyZWFrXCI+VHJhbnNhY3Rpb24gSUQgOiA8c3Ryb25nPiB7dHJhbnNhY3Rpb25JRD8udHJhbnN9IDwvc3Ryb25nPiAgPENvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dHJhbnNhY3Rpb25JRD8udHJhbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IG5vdGlmeShcIkNvcGllZCBTdWNjZXNzZnVsbHlcIil9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fSBzcmM9eycvbWRpLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPiBcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgbGFzc05hbWU9XCJwdC0yIG10LTBcIj4ge3RyYW5zYWN0aW9uSUQ/LmlkfSAgPC9wPiAqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWQtcGFydGVzXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1wYXJ0cyBtdC0yXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvZGFzaGJvYXJkXCJ9PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcm91bmQgYnRuLXdhcm5pbmcgZm9ybS1idG4gdy01MCBwLTAgbWItM1wiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIERBU0hCT0FSRFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3VjY2VzcyIsIkxpbmsiLCJheGlvcyIsInVzZVJvdXRlciIsIkNvcHlUb0NsaXBib2FyZCIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJTcGlubmVyIiwiV2VsY29tZSIsInJvdXRlciIsInRyYW5zYWN0aW9uSUQiLCJzZXRUcmFuc2FjdGlvbklEIiwic2V0VHJhbnNhY3Rpb24iLCJ0cmFueCIsInRva2VuIiwicXVlcnkiLCJkYXRhIiwicmVzIiwiZGF0YWEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInRyYW5zYWN0aW9uSWQiLCJ0cmFuc0lkIiwiaWQiLCJyZW1vdmVJdGVtIiwicG9zdCIsInRyYW5zIiwibm90aWZ5IiwibXNnIiwic3VjY2VzcyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJkaXYiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibmV3ZXN0T25Ub3AiLCJydGwiLCJwYXVzZU9uRm9jdXNMb3NzIiwiZm9ybSIsInN0eWxlIiwid2lkdGgiLCJwYWRkaW5nIiwiaW1nIiwic3JjIiwiaDMiLCJjb2xvciIsInAiLCJzdHJvbmciLCJ0ZXh0Iiwib25Db3B5IiwibWFyZ2luTGVmdCIsImhyZWYiLCJidXR0b24iLCJtYXJnaW5Ub3AiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Component/Welcome.js\n");

/***/ })

});