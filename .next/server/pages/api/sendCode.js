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
exports.id = "pages/api/sendCode";
exports.ids = ["pages/api/sendCode"];
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

/***/ "(api)/./pages/api/sendCode.js":
/*!*******************************!*\
  !*** ./pages/api/sendCode.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (req.method === \"POST\") {\n        try {\n            // const{token} = req.body;\n            const { data  } = req.body;\n            var config = {\n                method: \"post\",\n                url: \"http://13.215.196.173:3000/api/v1/user/sendchangepasswordcode\",\n                headers: {\n                    Authorization: `Bearer ${session.user.name} `\n                },\n                data: data\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        // res.status(200).json({ data: reference });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZENvZGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDMEI7QUFDbUI7QUFFOUIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxPQUFPLEdBQUcsTUFBTUosMkRBQVUsQ0FBQztRQUFDRSxHQUFHO0tBQUMsQ0FBQztJQUN2QyxJQUFJQSxHQUFHLENBQUNHLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLDJCQUEyQjtZQUMzQixNQUFLLEVBQUNDLElBQUksR0FBQyxHQUFHSixHQUFHLENBQUNLLElBQUk7WUFFdEIsSUFBSUMsTUFBTSxHQUFHO2dCQUNYSCxNQUFNLEVBQUUsTUFBTTtnQkFDZEksR0FBRyxFQUFHLCtEQUErRDtnQkFDckVDLE9BQU8sRUFBRTtvQkFDUEMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFUCxPQUFPLENBQUNRLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDOUM7Z0JBQUNQLElBQUksRUFBQ0EsSUFBSTthQUNaO1lBQ0QsTUFBTVAsNENBQUssQ0FBQ1MsTUFBTSxDQUFDLENBQUNNLElBQUksQ0FBQyxTQUFVQyxRQUFRLEVBQUU7Z0JBQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNKLFFBQVEsQ0FBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0NILEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFZixJQUFJLEVBQUVTLFFBQVEsQ0FBQ1QsSUFBSTtpQkFBRSxDQUFDLENBQUM7YUFDL0MsQ0FBQyxDQUFDO1FBR0gsNkNBQTZDO1NBQzlDLENBQUMsT0FBT2dCLEdBQUcsRUFBRTtZQUNaTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssR0FBRyxDQUFDLENBQUM7WUFDakJuQixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFRCxHQUFHO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlYWx0aGkvLi9wYWdlcy9hcGkvc2VuZENvZGUuanM/NTI3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oe3JlcX0pXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdHt0b2tlbn0gPSByZXEuYm9keTtcbiAgICAgIGNvbnN0e2RhdGF9ID0gcmVxLmJvZHk7XG5cbiAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIHVybDogIFwiaHR0cDovLzEzLjIxNS4xOTYuMTczOjMwMDAvYXBpL3YxL3VzZXIvc2VuZGNoYW5nZXBhc3N3b3JkY29kZVwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Nlc3Npb24udXNlci5uYW1lfSBgLFxuICAgICAgICB9LGRhdGE6ZGF0YVxuICAgICAgfTtcbiAgICAgIGF3YWl0IGF4aW9zKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgICB9KTtcblxuXG4gICAgICAvLyByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlZmVyZW5jZSB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IEVycm9yOiBlcnIgfSk7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0U2Vzc2lvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjb25maWciLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXIiLCJuYW1lIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendCode.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sendCode.js"));
module.exports = __webpack_exports__;

})();