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
exports.id = "pages/api/staking";
exports.ids = ["pages/api/staking"];
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

/***/ "(api)/./pages/api/staking.js":
/*!******************************!*\
  !*** ./pages/api/staking.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (req.method === \"POST\") {\n        try {\n            const data = req.body;\n            let { token  } = data;\n            //   console.log(token, \"dataa\");\n            var config = {\n                method: \"post\",\n                url: \"http://13.215.196.173:3000/api/v1/user/stakings\",\n                headers: {\n                    Authorization: `Bearer ${session.user.name} `\n                }\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                // console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data.data\n                });\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3Rha2luZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNtQjtBQUc5QixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU1DLE9BQU8sR0FBRyxNQUFNSiwyREFBVSxDQUFDO1FBQUNFLEdBQUc7S0FBQyxDQUFDO0lBQ3pDLElBQUlBLEdBQUcsQ0FBQ0csTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0YsTUFBTUMsSUFBSSxHQUFHSixHQUFHLENBQUNLLElBQUk7WUFFckIsSUFBSSxFQUFFQyxLQUFLLEdBQUUsR0FBR0YsSUFBSTtZQUN0QixpQ0FBaUM7WUFFL0IsSUFBSUcsTUFBTSxHQUFHO2dCQUNYSixNQUFNLEVBQUUsTUFBTTtnQkFDZEssR0FBRyxFQUFFLGlEQUFpRDtnQkFDdERDLE9BQU8sRUFBRTtvQkFDUEMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFUixPQUFPLENBQUNTLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDOUM7YUFDRjtZQUlELE1BQU1mLDRDQUFLLENBQUNVLE1BQU0sQ0FBQyxDQUFDTSxJQUFJLENBQUMsU0FBVUMsUUFBUSxFQUFFO2dCQUMzQyw4Q0FBOEM7Z0JBQzlDYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFWixJQUFJLEVBQUVVLFFBQVEsQ0FBQ1YsSUFBSSxDQUFDQSxJQUFJO2lCQUFFLENBQUMsQ0FBQzthQUVwRCxDQUFDLENBQUM7U0FDSixDQUFDLE9BQU9hLEdBQUcsRUFBRTtZQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7WUFDakJoQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFSSxLQUFLLEVBQUVILEdBQUc7YUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoaS8uL3BhZ2VzL2FwaS9zdGFraW5nLmpzPzNmZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oe3JlcX0pXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG5cbiAgICAgIGxldCB7IHRva2VuIH0gPSBkYXRhO1xuICAgIC8vICAgY29uc29sZS5sb2codG9rZW4sIFwiZGF0YWFcIik7XG5cbiAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIHVybDogXCJodHRwOi8vMTMuMjE1LjE5Ni4xNzM6MzAwMC9hcGkvdjEvdXNlci9zdGFraW5nc1wiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Nlc3Npb24udXNlci5uYW1lfSBgLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuXG4gICAgICBcbiAgICAgIGF3YWl0IGF4aW9zKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KTtcbiAgICAgICAgXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IEVycm9yOiBlcnIgfSk7XG4gICAgfVxuICB9XG59XG5cblxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0U2Vzc2lvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJ0b2tlbiIsImNvbmZpZyIsInVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlciIsIm5hbWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/staking.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/staking.js"));
module.exports = __webpack_exports__;

})();