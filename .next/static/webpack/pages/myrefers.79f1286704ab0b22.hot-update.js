"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/myrefers",{

/***/ "./Component/MyRefferal.js":
/*!*********************************!*\
  !*** ./Component/MyRefferal.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar MyRefferal = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), data = ref[0], setData = ref[1];\n    function getPeople() {\n        return _getPeople.apply(this, arguments);\n    }\n    function _getPeople() {\n        _getPeople = _asyncToGenerator(_home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var resp;\n            return _home_pc3_Desktop_helthiwelthi4_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().post(\"/api/refers\");\n                    case 2:\n                        resp = _ctx.sent;\n                        console.log(resp.data.data);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getPeople.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getPeople();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n            className: \"profile-sec\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        className: \"input-sec\",\n                        id: \"form-setting\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"line profile-line\",\n                                id: \"ch-line\"\n                            }, void 0, false, {\n                                fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/MyRefferal.js\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                className: \"heading-text pink-text mt-2 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/dashboard\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            className: \"arrows-icon\",\n                                            style: {\n                                                position: \"relative\",\n                                                left: \"-23%\",\n                                                cursor: \"pointer\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {}, void 0, false, {\n                                                fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/MyRefferal.js\",\n                                                lineNumber: 24,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/MyRefferal.js\",\n                                            lineNumber: 23,\n                                            columnNumber: 13\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/MyRefferal.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \"My Referal's\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/MyRefferal.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/MyRefferal.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/MyRefferal.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/MyRefferal.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/MyRefferal.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/pc3/Desktop/helthiwelthi4/Component/MyRefferal.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(MyRefferal, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = MyRefferal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyRefferal);\nvar _c;\n$RefreshReg$(_c, \"MyRefferal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnQvTXlSZWZmZXJhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUN0QjtBQUNIOztBQUN6QixJQUFNSyxVQUFVLEdBQUcsV0FBTTs7SUFDckIsSUFBdUJILEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUpyQyxJQUllLEdBQVlBLEdBQVUsR0FBdEIsRUFKZixPQUl1QixHQUFJQSxHQUFVLEdBQWQ7YUFDSk0sU0FBUztlQUFUQSxVQUFTOzthQUFUQSxVQUFTO1FBQVRBLFVBQVMsR0FBeEIsZ0xBQTBCO2dCQUNsQkMsSUFBSTs7Ozs7K0JBQVNMLGlEQUFVLENBQUMsYUFBYSxDQUFDOzt3QkFBdENLLElBQUksWUFBa0M7d0JBQzFDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDSCxJQUFJLENBQUNBLElBQUksQ0FBQzs7Ozs7O1NBQzlCO2VBSGNFLFVBQVM7O0lBSTVCUCxnREFBUyxDQUFDLFdBQUk7UUFDVk8sU0FBUyxFQUFFO0tBQ2QsQ0FBQztJQUNBLHFCQUNFLDhEQUFDSyxLQUFHO2tCQUNKLDRFQUFDQyxTQUFPO1lBQUNDLFNBQVMsRUFBQyxhQUFhO3NCQUM5Qiw0RUFBQ0YsS0FBRztnQkFBQ0UsU0FBUyxFQUFDLFdBQVc7MEJBQ3hCLDRFQUFDRixLQUFHO29CQUFDRSxTQUFTLEVBQUMsNEJBQTRCOzhCQUV6Qyw0RUFBQ0MsTUFBSTt3QkFBQ0QsU0FBUyxFQUFDLFdBQVc7d0JBQUNFLEVBQUUsRUFBQyxjQUFjOzswQ0FDM0MsOERBQUNKLEtBQUc7Z0NBQUNFLFNBQVMsRUFBQyxtQkFBbUI7Z0NBQUNFLEVBQUUsRUFBQyxTQUFTOzs7OztxQ0FBTzswQ0FDdEQsOERBQUNDLElBQUU7Z0NBQUNILFNBQVMsRUFBQyw4QkFBOEI7O2tEQUM1Qyw4REFBQ1osa0RBQUk7d0NBQUNnQixJQUFJLEVBQUUsWUFBWTtrREFDeEIsNEVBQUNDLE1BQUk7NENBQUVMLFNBQVMsRUFBQyxhQUFhOzRDQUFDTSxLQUFLLEVBQUU7Z0RBQUVDLFFBQVEsRUFBRSxVQUFVO2dEQUFFQyxJQUFJLEVBQUUsTUFBTTtnREFBRUMsTUFBTSxFQUFDLFNBQVM7NkNBQUU7c0RBQ3hGLDRFQUFDQyxLQUFHOzs7O3FEQUFJOzs7OztpREFDSDs7Ozs7NkNBQ0E7b0NBQUEsY0FDVTs7Ozs7O3FDQUFLOzs7Ozs7NkJBNEJyQjs7Ozs7eUJBQ0g7Ozs7O3FCQUNGOzs7OztpQkFDRTs7Ozs7YUFDTixDQUNMO0NBQ0Y7R0F6REtwQixVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUEyRGhCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudC9NeVJlZmZlcmFsLmpzPzhkNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmNvbnN0IE15UmVmZmVyYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgW2RhdGEsc2V0RGF0YV0gPSB1c2VTdGF0ZSgpXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGVvcGxlKCl7XG4gICAgICAgIGxldCByZXNwID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9yZWZlcnMnKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwLmRhdGEuZGF0YSlcbiAgICB9XG51c2VFZmZlY3QoKCk9PntcbiAgICBnZXRQZW9wbGUoKVxufSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtc2VjXCIgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuIFxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlucHV0LXNlY1wiIGlkPVwiZm9ybS1zZXR0aW5nXCIgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZSBwcm9maWxlLWxpbmVcIiBpZD1cImNoLWxpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkaW5nLXRleHQgcGluay10ZXh0IG10LTIgXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPXsnL2Rhc2hib2FyZCd9PlxuICAgICAgICAgICAgPHNwYW4gIGNsYXNzTmFtZT1cImFycm93cy1pY29uXCIgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgbGVmdDogXCItMjMlXCIsIGN1cnNvcjpcInBvaW50ZXJcIiB9fSAgPlxuICAgICAgICAgICAgICAgICAgPGltZyAgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIE15IFJlZmVyYWwmYXBvcztzPC9oMz5cbiAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgey8qIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1pdGVtIGl0ZW0tc2V0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICB7Lyoge2VudGVyZmllbGQgJiYgKDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PiBJbnZhbGlkIGRldGFpbCA8L3A+KX0gKi99XG5cblxuXG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj17XCIvbG9naW5cIn0+ICovfVxuXG4gICAgICAgICAgXG4gICAgICAgICAgICB7LyogPGJ1dHRvblxuICAgICAgICAgICAgICBocmVmPVwiZnVuZHMtcGFnZS5odG1sXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1yb3VuZCBidG4td2FybmluZyB3LTEwMCBcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIwcHhcIiB9fVxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVVBEQVRFXG4gICAgICAgICAgICA8L2J1dHRvbj4gKi99XG5cbiAgICAgICBcbiAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15UmVmZmVyYWwiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJheGlvcyIsIk15UmVmZmVyYWwiLCJkYXRhIiwic2V0RGF0YSIsImdldFBlb3BsZSIsInJlc3AiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImRpdiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJmb3JtIiwiaWQiLCJoMyIsImhyZWYiLCJzcGFuIiwic3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJjdXJzb3IiLCJpbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Component/MyRefferal.js\n");

/***/ })

});