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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    session: {\n        strategy: \"jwt\",\n        maxAge: 500,\n        secret: \"ayC5ej+5fmSNxGt61XXH2uSa61wQgCr2dUwmAoDUzXs=\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            name: \"Custom Provider\",\n            async authorize (credentials) {\n                let { email , password  } = credentials;\n                console.log(credentials);\n                let data = {\n                    email: email,\n                    password: password\n                };\n                console.log(data, \"form email and password\");\n                let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://13.215.196.173:3000/api/v1/auth/signin\", data);\n                let user = response.data;\n                let token = response.data.data;\n                if (!token) {\n                    throw new Error(\"Invalid token\");\n                }\n                if (!(response.status == 200)) {\n                    throw new Error(\"Invalid Credentials\" + email);\n                }\n                if (response.status == 200) {\n                    return user = {\n                        name: token,\n                        email: email\n                    };\n                }\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUNrQztBQUVuRSxpRUFBZUMsZ0RBQVEsQ0FBQztJQUN0QkUsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLE1BQU0sRUFBRSxHQUFHO1FBQ1hDLE1BQU0sRUFBQyw4Q0FBOEM7S0FDdEQ7SUFDREMsU0FBUyxFQUFFO1FBQ1RMLHNFQUFvQixDQUFDO1lBQ25CTSxJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLE1BQU1DLFNBQVMsRUFBQ0MsV0FBVyxFQUFFO2dCQUMzQixJQUFJLEVBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFLEdBQUdGLFdBQVc7Z0JBQ3JDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osV0FBVyxDQUFDO2dCQUN4QixJQUFJSyxJQUFJLEdBQUc7b0JBQUVKLEtBQUssRUFBRUEsS0FBSztvQkFBRUMsUUFBUSxFQUFFQSxRQUFRO2lCQUFFO2dCQUMvQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJQyxRQUFRLEdBQUcsTUFBTWhCLGlEQUFVLENBQzdCLCtDQUErQyxFQUMvQ2UsSUFBSSxDQUNMO2dCQUNELElBQUlHLElBQUksR0FBR0YsUUFBUSxDQUFDRCxJQUFJO2dCQUN4QixJQUFJSSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0QsSUFBSSxDQUFDQSxJQUFJO2dCQUU5QixJQUFJLENBQUNJLEtBQUssRUFBRTtvQkFDVixNQUFNLElBQUlDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztpQkFFbEM7Z0JBQ0QsSUFBSSxDQUFDLENBQUNKLFFBQVEsQ0FBQ0ssTUFBTSxJQUFJLEdBQUcsQ0FBQyxFQUFFO29CQUU3QixNQUFNLElBQUlELEtBQUssQ0FBQyxxQkFBcUIsR0FBR1QsS0FBSyxDQUFDLENBQUM7aUJBQ2hEO2dCQUNELElBQUlLLFFBQVEsQ0FBQ0ssTUFBTSxJQUFJLEdBQUcsRUFBRTtvQkFDMUIsT0FBUUgsSUFBSSxHQUFHO3dCQUNiVixJQUFJLEVBQUVXLEtBQUs7d0JBQ1hSLEtBQUssRUFBRUEsS0FBSztxQkFDYixDQUFFO2lCQUNKO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhpLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gICAgbWF4QWdlOiA1MDAsXG4gICAgc2VjcmV0OlwiYXlDNWVqKzVmbVNOeEd0NjFYWEgydVNhNjF3UWdDcjJkVXdtQW9EVXpYcz1cIlxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVycyh7XG4gICAgICBuYW1lOiBcIkN1c3RvbSBQcm92aWRlclwiLFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGxldCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHM7XG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWRlbnRpYWxzKVxuICAgICAgICBsZXQgZGF0YSA9IHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQgfTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSwgXCJmb3JtIGVtYWlsIGFuZCBwYXNzd29yZFwiKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgICBcImh0dHA6Ly8xMy4yMTUuMTk2LjE3MzozMDAwL2FwaS92MS9hdXRoL3NpZ25pblwiLFxuICAgICAgICAgIGRhdGFcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHVzZXIgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBsZXQgdG9rZW4gPSByZXNwb25zZS5kYXRhLmRhdGE7XG5cbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdG9rZW5cIik7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoIShyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSkge1xuICAgICAgICAgIFxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgQ3JlZGVudGlhbHNcIiArIGVtYWlsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgIHJldHVybiAodXNlciA9IHtcbiAgICAgICAgICAgIG5hbWU6IHRva2VuLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXJzIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwic2VjcmV0IiwicHJvdmlkZXJzIiwibmFtZSIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicmVzcG9uc2UiLCJwb3N0IiwidXNlciIsInRva2VuIiwiRXJyb3IiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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