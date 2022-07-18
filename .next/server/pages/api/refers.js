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
exports.id = "pages/api/refers";
exports.ids = ["pages/api/refers"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./pages/api/refers.js":
/*!*****************************!*\
  !*** ./pages/api/refers.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (req.method === \"POST\") {\n        try {\n            //   console.log(finalData, \"finnhubsahuc\");\n            // let token = data.token;\n            const config = {\n                headers: {\n                    Authorization: `Bearer ${session.user.name}`\n                }\n            };\n            let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://13.215.196.173:3000/api/v1/user/myrefferlist\", \"\", config);\n            const reference = response.data;\n            console.log(reference.data, \"string\");\n            res.status(200).json({\n                data: reference.data\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVmZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBRTNCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsT0FBTyxHQUFHLE1BQU1KLDJEQUFVLENBQUM7UUFBQ0UsR0FBRztLQUFDLENBQUM7SUFDdkMsSUFBSUEsR0FBRyxDQUFDRyxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLElBQUk7WUFFSiw0Q0FBNEM7WUFDMUMsMEJBQTBCO1lBQzFCLE1BQU1DLE1BQU0sR0FBRztnQkFDYkMsT0FBTyxFQUFFO29CQUFFQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVKLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQztpQkFBRTthQUMxRDtZQUVELElBQUlDLFFBQVEsR0FBRyxNQUFNWixpREFBVSxDQUM3QixxREFBcUQsRUFBQyxFQUFFLEVBQ3hETyxNQUFNLENBQ1A7WUFDRCxNQUFNTyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csSUFBSTtZQUMvQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFNBQVMsQ0FBQ0MsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDWCxHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFSixJQUFJLEVBQUVELFNBQVMsQ0FBQ0MsSUFBSTthQUFFLENBQUMsQ0FBQztTQUNoRCxDQUFDLE9BQU9LLEdBQUcsRUFBRTtZQUNaSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csR0FBRyxDQUFDLENBQUM7WUFDakJoQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxLQUFLLEVBQUVELEdBQUc7YUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoaS8uL3BhZ2VzL2FwaS9yZWZlcnMuanM/Mjk3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge2dldFNlc3Npb259IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7cmVxfSlcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcblxuICAgIC8vICAgY29uc29sZS5sb2coZmluYWxEYXRhLCBcImZpbm5odWJzYWh1Y1wiKTtcbiAgICAgIC8vIGxldCB0b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Nlc3Npb24udXNlci5uYW1lfWAgfSxcbiAgICAgIH07XG5cbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiaHR0cDovLzEzLjIxNS4xOTYuMTczOjMwMDAvYXBpL3YxL3VzZXIvbXlyZWZmZXJsaXN0XCIsJycsXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhyZWZlcmVuY2UuZGF0YSwgXCJzdHJpbmdcIik7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlZmVyZW5jZS5kYXRhIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldFNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsIm1ldGhvZCIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlciIsIm5hbWUiLCJyZXNwb25zZSIsInBvc3QiLCJyZWZlcmVuY2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/refers.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/refers.js"));
module.exports = __webpack_exports__;

})();