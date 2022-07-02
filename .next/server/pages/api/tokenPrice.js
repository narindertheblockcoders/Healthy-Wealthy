"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/tokenPrice";
exports.ids = ["pages/api/tokenPrice"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/tokenPrice.js":
/*!*********************************!*\
  !*** ./pages/api/tokenPrice.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://13.215.196.173:3000/api/v1/list/tokenprice\");\n            const reference = response.data;\n            console.log(reference, \"string\");\n            res.status(200).json({\n                data: reference\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9rZW5QcmljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFWCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0YsSUFBSUMsUUFBUSxHQUFHLE1BQU1MLGlEQUFVLENBQzdCLG1EQUFtRCxDQUNwRDtZQUNELE1BQU1PLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxJQUFJO1lBQy9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDSixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFSixJQUFJLEVBQUVELFNBQVM7YUFBRSxDQUFDLENBQUM7U0FDM0MsQ0FBQyxPQUFPTSxHQUFHLEVBQUU7WUFDWkosT0FBTyxDQUFDQyxHQUFHLENBQUNHLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCVixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxLQUFLLEVBQUVELEdBQUc7YUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoaS8uL3BhZ2VzL2FwaS90b2tlblByaWNlLmpzPzJlNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBcImh0dHA6Ly8xMy4yMTUuMTk2LjE3MzozMDAwL2FwaS92MS9saXN0L3Rva2VucHJpY2VcIlxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhyZWZlcmVuY2UsIFwic3RyaW5nXCIpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiByZWZlcmVuY2UgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBFcnJvcjogZXJyIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInJlc3BvbnNlIiwicG9zdCIsInJlZmVyZW5jZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/tokenPrice.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tokenPrice.js"));
module.exports = __webpack_exports__;

})();