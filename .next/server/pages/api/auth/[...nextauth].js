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

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("jwt-decode");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    session: {\n        strategy: \"jwt\",\n        maxAge: 1500,\n        secret: \"ayC5ej+5fmSNxGt61XXH2uSa61wQgCr2dUwmAoDUzXs=\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            name: \"Custom Provider\",\n            async authorize (credentials) {\n                let { email , password  } = credentials;\n                // console.log(credentials)\n                let data = {\n                    email: email,\n                    password: password\n                };\n                // console.log(data, \"form email and password\");\n                let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://13.215.196.173:3000/api/v1/auth/signin\", data);\n                let user = response.data;\n                let token = response.data.data;\n                var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);\n                console.log(decoded);\n                let iat = decoded.referralcode.toString();\n                if (!token) {\n                    throw new Error(\"Invalid token\");\n                }\n                if (!(response.status == 200)) {\n                    throw new Error(\"Invalid Credentials\" + email);\n                }\n                if (response.status == 200) {\n                    return user = {\n                        name: token,\n                        email: iat\n                    };\n                }\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNPO0FBQ2tDO0FBQy9CO0FBQ3BDLGlFQUFlQyxnREFBUSxDQUFDO0lBQ3RCRyxPQUFPLEVBQUU7UUFDUEMsUUFBUSxFQUFFLEtBQUs7UUFDZkMsTUFBTSxFQUFFLElBQUk7UUFDWkMsTUFBTSxFQUFDLDhDQUE4QztLQUN0RDtJQUNEQyxTQUFTLEVBQUU7UUFDVE4sc0VBQW9CLENBQUM7WUFDbkJPLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsTUFBTUMsU0FBUyxFQUFDQyxXQUFXLEVBQUU7Z0JBQzNCLElBQUksRUFBRUMsS0FBSyxHQUFFQyxRQUFRLEdBQUUsR0FBR0YsV0FBVztnQkFDckMsMkJBQTJCO2dCQUMzQixJQUFJRyxJQUFJLEdBQUc7b0JBQUVGLEtBQUssRUFBRUEsS0FBSztvQkFBRUMsUUFBUSxFQUFFQSxRQUFRO2lCQUFFO2dCQUMvQyxnREFBZ0Q7Z0JBRWhELElBQUlFLFFBQVEsR0FBRyxNQUFNZixpREFBVSxDQUM3QiwrQ0FBK0MsRUFDL0NjLElBQUksQ0FDTDtnQkFDRCxJQUFJRyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0QsSUFBSTtnQkFDeEIsSUFBSUksS0FBSyxHQUFHSCxRQUFRLENBQUNELElBQUksQ0FBQ0EsSUFBSTtnQkFDOUIsSUFBSUssT0FBTyxHQUFHaEIsaURBQVUsQ0FBQ2UsS0FBSyxDQUFDO2dCQUMvQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztnQkFDcEIsSUFBSUcsR0FBRyxHQUFHSCxPQUFPLENBQUNJLFlBQVksQ0FBQ0MsUUFBUSxFQUFFO2dCQUN6QyxJQUFJLENBQUNOLEtBQUssRUFBRTtvQkFDVixNQUFNLElBQUlPLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztpQkFFbEM7Z0JBQ0QsSUFBSSxDQUFDLENBQUNWLFFBQVEsQ0FBQ1csTUFBTSxJQUFJLEdBQUcsQ0FBQyxFQUFFO29CQUU3QixNQUFNLElBQUlELEtBQUssQ0FBQyxxQkFBcUIsR0FBR2IsS0FBSyxDQUFDLENBQUM7aUJBQ2hEO2dCQUNELElBQUlHLFFBQVEsQ0FBQ1csTUFBTSxJQUFJLEdBQUcsRUFBRTtvQkFDMUIsT0FBUVQsSUFBSSxHQUFHO3dCQUNiUixJQUFJLEVBQUVTLEtBQUs7d0JBQ1hOLEtBQUssRUFBRVUsR0FBRztxQkFFWCxDQUFFO2lCQUVKO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFsdGhpLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgICBtYXhBZ2U6IDE1MDAsXG4gICAgc2VjcmV0OlwiYXlDNWVqKzVmbVNOeEd0NjFYWEgydVNhNjF3UWdDcjJkVXdtQW9EVXpYcz1cIlxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVycyh7XG4gICAgICBuYW1lOiBcIkN1c3RvbSBQcm92aWRlclwiLFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGxldCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHM7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNyZWRlbnRpYWxzKVxuICAgICAgICBsZXQgZGF0YSA9IHsgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQgfTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSwgXCJmb3JtIGVtYWlsIGFuZCBwYXNzd29yZFwiKTtcbiAgICAgICAgXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgXCJodHRwOi8vMTMuMjE1LjE5Ni4xNzM6MzAwMC9hcGkvdjEvYXV0aC9zaWduaW5cIixcbiAgICAgICAgICBkYXRhXG4gICAgICAgICk7XG4gICAgICAgIGxldCB1c2VyID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgbGV0IHRva2VuID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICB2YXIgZGVjb2RlZCA9IGp3dF9kZWNvZGUodG9rZW4pO1xuICAgICAgICBjb25zb2xlLmxvZyhkZWNvZGVkKVxuICAgICAgICBsZXQgaWF0ID0gZGVjb2RlZC5yZWZlcnJhbGNvZGUudG9TdHJpbmcoKVxuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0b2tlblwiKTtcblxuICAgICAgICB9XG4gICAgICAgIGlmICghKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApKSB7XG4gICAgICAgICAgXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBDcmVkZW50aWFsc1wiICsgZW1haWwpO1xuICAgICAgICB9IFxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgIHJldHVybiAodXNlciA9IHtcbiAgICAgICAgICAgIG5hbWU6IHRva2VuLFxuICAgICAgICAgICAgZW1haWw6IGlhdCxcbiAgICAgICAgICAgXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlcnMiLCJqd3RfZGVjb2RlIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwic2VjcmV0IiwicHJvdmlkZXJzIiwibmFtZSIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJwYXNzd29yZCIsImRhdGEiLCJyZXNwb25zZSIsInBvc3QiLCJ1c2VyIiwidG9rZW4iLCJkZWNvZGVkIiwiY29uc29sZSIsImxvZyIsImlhdCIsInJlZmVycmFsY29kZSIsInRvU3RyaW5nIiwiRXJyb3IiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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