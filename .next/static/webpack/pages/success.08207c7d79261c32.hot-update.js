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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_success_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/success.png */ \"./public/success.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Welcome = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    //   const via = router.query;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), transactionID = ref[0], setTransactionID = ref[1];\n    function setTransaction() {\n        return _setTransaction.apply(this, arguments);\n    }\n    function _setTransaction() {\n        _setTransaction = //   console.log( via, 'hello')\n        _asyncToGenerator(_home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tranx, token, query, data, res, dataa;\n            return _home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return JSON.parse(localStorage.getItem(\"tranx\"));\n                    case 2:\n                        tranx = _ctx.sent;\n                        console.log(tranx);\n                        token = localStorage.getItem(\"token\");\n                        _ctx.next = 7;\n                        return JSON.parse(localStorage.getItem(\"query\"));\n                    case 7:\n                        query = _ctx.sent;\n                        data = {\n                            transactionId: tranx.transId,\n                            id: tranx.id,\n                            token: token\n                        };\n                        localStorage.removeItem(\"query\");\n                        _ctx.next = 12;\n                        return axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"/api/payment/success\", data);\n                    case 12:\n                        res = _ctx.sent;\n                        dataa = res.data.data;\n                        console.log(dataa);\n                        setTransactionID({\n                            trans: tranx.transId,\n                            id: tranx.id\n                        });\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _setTransaction.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setTransaction();\n    }, []);\n    // const { finalAmount } = router.query\n    var notify = function(msg) {\n        return react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success(msg, {\n            position: \"top-right\",\n            autoClose: 5000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n            className: \"profile-sec\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {\n                            position: \"top-right\",\n                            autoClose: 5000,\n                            hideProgressBar: false,\n                            newestOnTop: false,\n                            closeOnClick: true,\n                            rtl: false,\n                            pauseOnFocusLoss: true,\n                            draggable: true,\n                            pauseOnHover: true\n                        }, void 0, false, {\n                            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            className: \"input-sec payment-form \",\n                            id: \"form-pay\",\n                            style: {\n                                width: \"35%\",\n                                padding: \"30px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"input-line welcome-line\"\n                                }, void 0, false, {\n                                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"wel-head mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: _public_success_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src\n                                    }, void 0, false, {\n                                        fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 1\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"heading-parts mt-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            className: \"order-text\",\n                                            style: {\n                                                color: \"green\"\n                                            },\n                                            children: \"ORDER CONFORMATION\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            className: \"pt-2\",\n                                            children: \"Your order has been successfully placed\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            className: \"pt-2 mt-0 te\",\n                                            children: [\n                                                \"Transaction ID : \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                                                    children: [\n                                                        \" \",\n                                                        transactionID === null || transactionID === void 0 ? void 0 : transactionID.trans,\n                                                        \" \"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 62\n                                                }, _this),\n                                                \"  \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__.CopyToClipboard, {\n                                                    text: transactionID === null || transactionID === void 0 ? void 0 : transactionID.trans,\n                                                    onCopy: function() {\n                                                        return notify(\"Copied Successfully\");\n                                                    },\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                        style: {\n                                                            marginLeft: \"10px\"\n                                                        },\n                                                        src: \"/mdi.png\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 25\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 105\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"head-partes\"\n                                }, void 0, false, {\n                                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"heading-parts mt-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/dashboard\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-round btn-warning form-btn w-50 p-0 mb-3\",\n                                            style: {\n                                                marginTop: \"0px\"\n                                            },\n                                            type: \"submit\",\n                                            children: \"DASHBOARD\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/Welcome.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this);\n};\n_s(Welcome, \"5qLrAd8REkaP9iAT7Ihep2Hr7Ws=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Welcome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Welcome);\nvar _c;\n$RefreshReg$(_c, \"Welcome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBRzt3REFBQ0gsS0FBSyxFQUFFOzREQUFFVyxVQUFVLEVBQUUsTUFBTTt5REFBRTt3REFBRVAsR0FBRyxFQUFFLFVBQVU7Ozs7OzZEQUFJOzs7Ozt5REFDdkM7Ozs7OztpREFDZDs7Ozs7O3lDQUVOOzhDQUdOLDhEQUFDWCxLQUFHO29DQUFDRSxTQUFTLEVBQUMsYUFBYTs7Ozs7eUNBQ3BCOzhDQUNSLDhEQUFDRixLQUFHO29DQUFDRSxTQUFTLEVBQUMsb0JBQW9COzhDQUNqQyw0RUFBQzNDLGtEQUFJO3dDQUFDNEQsSUFBSSxFQUFFLFlBQVk7a0RBQ3hCLDRFQUFDQyxRQUFNOzRDQUNMbEIsU0FBUyxFQUFDLGtEQUFrRDs0Q0FDNURLLEtBQUssRUFBRTtnREFBRWMsU0FBUyxFQUFFLEtBQUs7NkNBQUU7NENBQzNCQyxJQUFJLEVBQUMsUUFBUTtzREFDZCxXQUVEOzs7OztpREFBUzs7Ozs7NkNBQ0Y7Ozs7O3lDQUNIOzs7Ozs7aUNBQ0Q7Ozs7Ozt5QkFDSDs7Ozs7cUJBQ0Y7Ozs7O2lCQUNFOzs7OzthQUNOLENBQ047Q0FDSDtHQXpHS3hELE9BQU87O1FBQ0lMLGtEQUFTOzs7QUFEcEJLLEtBQUFBLE9BQU87QUEyR2IsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnQvV2VsY29tZS5qcz8yOGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3VjY2VzcyBmcm9tIFwiLi4vcHVibGljL3N1Y2Nlc3MucG5nXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IENvcHlUb0NsaXBib2FyZCB9IGZyb20gXCJyZWFjdC1jb3B5LXRvLWNsaXBib2FyZFwiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5cbmNvbnN0IFdlbGNvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4vLyAgIGNvbnN0IHZpYSA9IHJvdXRlci5xdWVyeTtcblxuY29uc3QgW3RyYW5zYWN0aW9uSUQsIHNldFRyYW5zYWN0aW9uSURdPSB1c2VTdGF0ZShudWxsKVxuLy8gICBjb25zb2xlLmxvZyggdmlhLCAnaGVsbG8nKVxuYXN5bmMgZnVuY3Rpb24gc2V0VHJhbnNhY3Rpb24oKXtcbiAgICBsZXQgdHJhbnggPSBhd2FpdCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0cmFueCcpKVxuY29uc29sZS5sb2codHJhbngpXG4gICAgbGV0IHRva2VuID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgbGV0IHF1ZXJ5PSBhd2FpdCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdxdWVyeScpKVxuICAgIC8vIGlmKCFxdWVyeSkgcmV0dXJuO1xuICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0cmFuc2FjdGlvbklkOnRyYW54LnRyYW5zSWQsaWQ6dHJhbnguaWQsdG9rZW5cbiAgICAgICB9O1xuICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdxdWVyeScpXG5cblxuICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9wYXltZW50L3N1Y2Nlc3NcIixkYXRhKVxuICAgIGxldCBkYXRhYSA9IHJlcy5kYXRhLmRhdGFcbiAgICBjb25zb2xlLmxvZyhkYXRhYSlcblxuXG4gICAgc2V0VHJhbnNhY3Rpb25JRCh7dHJhbnM6dHJhbngudHJhbnNJZCxpZDp0cmFueC5pZH0pXG59XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgXG4gICAgc2V0VHJhbnNhY3Rpb24oKVxuXG5cbiAgfSxbXSlcbiAgICAvLyBjb25zdCB7IGZpbmFsQW1vdW50IH0gPSByb3V0ZXIucXVlcnlcblxuICAgIGNvbnN0IG5vdGlmeSA9IChtc2cpID0+XG4gICAgdG9hc3Quc3VjY2Vzcyhtc2csIHtcbiAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXG4gICAgfSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9maWxlLXNlY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1yaWdodFwiXG4gICAgICAgICAgICAgIGF1dG9DbG9zZT17NTAwMH1cbiAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cbiAgICAgICAgICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2tcbiAgICAgICAgICAgICAgcnRsPXtmYWxzZX1cbiAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzTG9zc1xuICAgICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1zZWMgIHBheW1lbnQtZm9ybSBcIlxuICAgICAgICAgICAgICBpZD1cImZvcm0tcGF5XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzUlXCIsIHBhZGRpbmc6IFwiMzBweFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtbGluZSAgIHdlbGNvbWUtbGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsLWhlYWQgbXQtNVwiPlxuPGltZyBzcmM9e1N1Y2Nlc3Muc3JjfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1wYXJ0cyBtdC01XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm9yZGVyLXRleHRcIiBzdHlsZT17e2NvbG9yOlwiZ3JlZW5cIn19Pk9SREVSIENPTkZPUk1BVElPTjwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMlwiPllvdXIgb3JkZXIgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHBsYWNlZDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yIG10LTAgdGVcIj5UcmFuc2FjdGlvbiBJRCA6IDxzdHJvbmc+IHt0cmFuc2FjdGlvbklEPy50cmFuc30gPC9zdHJvbmc+ICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0cmFuc2FjdGlvbklEPy50cmFuc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4gbm90aWZ5KFwiQ29waWVkIFN1Y2Nlc3NmdWxseVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19IHNyYz17Jy9tZGkucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+IFxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBsYXNzTmFtZT1cInB0LTIgbXQtMFwiPiB7dHJhbnNhY3Rpb25JRD8uaWR9ICA8L3A+ICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZC1wYXJ0ZXNcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLXBhcnRzIG10LTJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9kYXNoYm9hcmRcIn0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1yb3VuZCBidG4td2FybmluZyBmb3JtLWJ0biB3LTUwIHAtMCBtYi0zXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgREFTSEJPQVJEXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdWNjZXNzIiwiTGluayIsImF4aW9zIiwidXNlUm91dGVyIiwiQ29weVRvQ2xpcGJvYXJkIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIlNwaW5uZXIiLCJXZWxjb21lIiwicm91dGVyIiwidHJhbnNhY3Rpb25JRCIsInNldFRyYW5zYWN0aW9uSUQiLCJzZXRUcmFuc2FjdGlvbiIsInRyYW54IiwidG9rZW4iLCJxdWVyeSIsImRhdGEiLCJyZXMiLCJkYXRhYSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwidHJhbnNhY3Rpb25JZCIsInRyYW5zSWQiLCJpZCIsInJlbW92ZUl0ZW0iLCJwb3N0IiwidHJhbnMiLCJub3RpZnkiLCJtc2ciLCJzdWNjZXNzIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsImRpdiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJuZXdlc3RPblRvcCIsInJ0bCIsInBhdXNlT25Gb2N1c0xvc3MiLCJmb3JtIiwic3R5bGUiLCJ3aWR0aCIsInBhZGRpbmciLCJpbWciLCJzcmMiLCJoMyIsImNvbG9yIiwicCIsInN0cm9uZyIsInRleHQiLCJvbkNvcHkiLCJtYXJnaW5MZWZ0IiwiaHJlZiIsImJ1dHRvbiIsIm1hcmdpblRvcCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Component/Welcome.js\n");

/***/ })

});