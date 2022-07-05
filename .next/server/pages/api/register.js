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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/register.js":
/*!*******************************!*\
  !*** ./pages/api/register.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const data = req.body;\n            console.log(data);\n            let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://13.215.196.173:3000/api/v1/auth/initsignup\", data);\n            const request = response.data;\n            console.log(request);\n            res.status(200).json({\n                data: request\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(403).json({\n                error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRVgsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1lBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7WUFFbEIsSUFBSUksUUFBUSxHQUFHLE1BQU1ULGlEQUFVLENBQUMsbURBQW1ELEVBQUVLLElBQUksQ0FBQztZQUMxRixNQUFNTSxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0osSUFBSTtZQUM3QkUsT0FBTyxDQUFDQyxHQUFHLENBQUNHLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCUixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFUixJQUFJLEVBQUVNLE9BQU87YUFBRSxDQUFDLENBQUM7U0FDekMsQ0FBQyxPQUFPRyxHQUFHLEVBQUU7WUFDWlAsT0FBTyxDQUFDQyxHQUFHLENBQUNNLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCWCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxLQUFLLEVBQUVELEdBQUc7YUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoaS8uL3BhZ2VzL2FwaS9yZWdpc3Rlci5qcz8xNzQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vMTMuMjE1LjE5Ni4xNzM6MzAwMC9hcGkvdjEvYXV0aC9pbml0c2lnbnVwXCIsIGRhdGEpO1xuICAgICAgY29uc3QgcmVxdWVzdCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVxdWVzdCB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7IGVycm9yOiBlcnIgfSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJwb3N0IiwicmVxdWVzdCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.js"));
module.exports = __webpack_exports__;

})();