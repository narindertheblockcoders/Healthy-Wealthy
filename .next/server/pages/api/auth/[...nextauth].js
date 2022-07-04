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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    session: {\n        strategy: \"jwt\",\n        maxAge: 1500,\n        secret: \"ayC5ej+5fmSNxGt61XXH2uSa61wQgCr2dUwmAoDUzXs=\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            name: \"Custom Provider\",\n            async authorize (credentials) {\n                let { email , password  } = credentials;\n                console.log(credentials);\n                let data = {\n                    email: email,\n                    password: password\n                };\n                console.log(data, \"form email and password\");\n                let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://13.215.196.173:3000/api/v1/auth/signin\", data);\n                let user = response.data;\n                let token = response.data.data;\n                if (!token) {\n                    throw new Error(\"Invalid token\");\n                }\n                if (!(response.status == 200)) {\n                    throw new Error(\"Invalid Credentials\" + email);\n                }\n                if (response.status == 200) {\n                    return user = {\n                        name: token,\n                        email: email\n                    };\n                }\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUNrQztBQUVuRSxpRUFBZUMsZ0RBQVEsQ0FBQztJQUN0QkUsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLE1BQU0sRUFBRSxJQUFJO1FBQ1pDLE1BQU0sRUFBQyw4Q0FBOEM7S0FDdEQ7SUFDREMsU0FBUyxFQUFFO1FBQ1RMLHNFQUFvQixDQUFDO1lBQ25CTSxJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLE1BQU1DLFNBQVMsRUFBQ0MsV0FBVyxFQUFFO2dCQUMzQixJQUFJLEVBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFLEdBQUdGLFdBQVc7Z0JBQ3JDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osV0FBVyxDQUFDO2dCQUN4QixJQUFJSyxJQUFJLEdBQUc7b0JBQUVKLEtBQUssRUFBRUEsS0FBSztvQkFBRUMsUUFBUSxFQUFFQSxRQUFRO2lCQUFFO2dCQUMvQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJQyxRQUFRLEdBQUcsTUFBTWhCLGlEQUFVLENBQzdCLCtDQUErQyxFQUMvQ2UsSUFBSSxDQUNMO2dCQUNELElBQUlHLElBQUksR0FBR0YsUUFBUSxDQUFDRCxJQUFJO2dCQUN4QixJQUFJSSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0QsSUFBSSxDQUFDQSxJQUFJO2dCQUU5QixJQUFJLENBQUNJLEtBQUssRUFBRTtvQkFDVixNQUFNLElBQUlDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztpQkFFbEM7Z0JBQ0QsSUFBSSxDQUFDLENBQUNKLFFBQVEsQ0FBQ0ssTUFBTSxJQUFJLEdBQUcsQ0FBQyxFQUFFO29CQUU3QixNQUFNLElBQUlELEtBQUssQ0FBQyxxQkFBcUIsR0FBR1QsS0FBSyxDQUFDLENBQUM7aUJBQ2hEO2dCQUNELElBQUlLLFFBQVEsQ0FBQ0ssTUFBTSxJQUFJLEdBQUcsRUFBRTtvQkFDMUIsT0FBUUgsSUFBSSxHQUFHO3dCQUNiVixJQUFJLEVBQUVXLEtBQUs7d0JBQ1hSLEtBQUssRUFBRUEsS0FBSztxQkFDYixDQUFFO2lCQUNKO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhpLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gICAgbWF4QWdlOiAxNTAwLFxuICAgIHNlY3JldDpcImF5QzVlais1Zm1TTnhHdDYxWFhIMnVTYTYxd1FnQ3IyZFV3bUFvRFV6WHM9XCJcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcnMoe1xuICAgICAgbmFtZTogXCJDdXN0b20gUHJvdmlkZXJcIixcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBsZXQgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzO1xuICAgICAgICBjb25zb2xlLmxvZyhjcmVkZW50aWFscylcbiAgICAgICAgbGV0IGRhdGEgPSB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEsIFwiZm9ybSBlbWFpbCBhbmQgcGFzc3dvcmRcIik7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgXCJodHRwOi8vMTMuMjE1LjE5Ni4xNzM6MzAwMC9hcGkvdjEvYXV0aC9zaWduaW5cIixcbiAgICAgICAgICBkYXRhXG4gICAgICAgICk7XG4gICAgICAgIGxldCB1c2VyID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgbGV0IHRva2VuID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuXG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRva2VuXCIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkpIHtcbiAgICAgICAgICBcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIENyZWRlbnRpYWxzXCIgKyBlbWFpbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICByZXR1cm4gKHVzZXIgPSB7XG4gICAgICAgICAgICBuYW1lOiB0b2tlbixcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVycyIsInNlc3Npb24iLCJzdHJhdGVneSIsIm1heEFnZSIsInNlY3JldCIsInByb3ZpZGVycyIsIm5hbWUiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlc3BvbnNlIiwicG9zdCIsInVzZXIiLCJ0b2tlbiIsIkVycm9yIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();