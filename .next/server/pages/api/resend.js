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
exports.id = "pages/api/resend";
exports.ids = ["pages/api/resend"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/resend.js":
/*!*****************************!*\
  !*** ./pages/api/resend.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const data = req.body;\n            console.log(data);\n            let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://13.215.196.173:3000/api/v1/auth/resendinitialcode\", data);\n            const request = response.data;\n            console.log(request);\n            res.status(200).json({\n                data: request\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(403).json({\n                error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVzZW5kLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUMwQjtBQUVYLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLElBQUk7WUFDRixNQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtZQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDO1lBRWxCLElBQUlJLFFBQVEsR0FBRyxNQUFNVCxpREFBVSxDQUFDLDBEQUEwRCxFQUFFSyxJQUFJLENBQUM7WUFDakcsTUFBTU0sT0FBTyxHQUFHRixRQUFRLENBQUNKLElBQUk7WUFDN0JFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxPQUFPLENBQUMsQ0FBQztZQUNyQlIsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRVIsSUFBSSxFQUFFTSxPQUFPO2FBQUUsQ0FBQyxDQUFDO1NBQ3pDLENBQUMsT0FBT0csR0FBRyxFQUFFO1lBQ1pQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxHQUFHLENBQUMsQ0FBQztZQUNqQlgsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFRCxHQUFHO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlYWx0aGkvLi9wYWdlcy9hcGkvcmVzZW5kLmpzP2IzMGMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovLzEzLjIxNS4xOTYuMTczOjMwMDAvYXBpL3YxL2F1dGgvcmVzZW5kaW5pdGlhbGNvZGVcIiwgZGF0YSk7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiByZXF1ZXN0IH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgZXJyb3I6IGVyciB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInBvc3QiLCJyZXF1ZXN0Iiwic3RhdHVzIiwianNvbiIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/resend.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/resend.js"));
module.exports = __webpack_exports__;

})();