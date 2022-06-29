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
exports.id = "pages/api/userdata";
exports.ids = ["pages/api/userdata"];
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

/***/ "(api)/./pages/api/userdata.js":
/*!*******************************!*\
  !*** ./pages/api/userdata.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (req.method === \"POST\") {\n        try {\n            // const{token} = req.body;\n            const { data  } = req.body;\n            console.log(req.body);\n            console.log(data, \"data a gya\");\n            var config = {\n                method: \"post\",\n                url: \"http://13.215.196.173:3000/api/v1/user/updateprofile\",\n                headers: {\n                    Authorization: `Bearer ${session.user.name} `\n                },\n                data\n            };\n            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data.data\n                });\n            });\n        // res.status(200).json({ data: reference });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcmRhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDZ0I7QUFFM0IsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxPQUFPLEdBQUcsTUFBTUosMkRBQVUsQ0FBQztRQUFDRSxHQUFHO0tBQUMsQ0FBQztJQUN2QyxJQUFJQSxHQUFHLENBQUNHLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLDJCQUEyQjtZQUMxQixNQUFNLEVBQUNDLElBQUksR0FBQyxHQUFHSixHQUFHLENBQUNLLElBQUk7WUFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxHQUFHLENBQUNLLElBQUksQ0FBQztZQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksRUFBRSxZQUFZLENBQUM7WUFDekIsSUFBSUksTUFBTSxHQUFHO2dCQUNYTCxNQUFNLEVBQUUsTUFBTTtnQkFDZE0sR0FBRyxFQUFHLHNEQUFzRDtnQkFDNURDLE9BQU8sRUFBRTtvQkFDUEMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFVCxPQUFPLENBQUNVLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDOUM7Z0JBQ0RULElBQUk7YUFDTDtZQUNELE1BQU1QLDRDQUFLLENBQUNXLE1BQU0sQ0FBQyxDQUFDTSxJQUFJLENBQUMsU0FBVUMsUUFBUSxFQUFFO2dCQUMzQ1QsT0FBTyxDQUFDQyxHQUFHLENBQUNTLElBQUksQ0FBQ0MsU0FBUyxDQUFDRixRQUFRLENBQUNYLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNDSCxHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRWYsSUFBSSxFQUFFVyxRQUFRLENBQUNYLElBQUksQ0FBQ0EsSUFBSTtpQkFBRSxDQUFDLENBQUM7YUFDcEQsQ0FBQyxDQUFDO1FBR0gsNkNBQTZDO1NBQzlDLENBQUMsT0FBT2dCLEdBQUcsRUFBRTtZQUNaZCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2EsR0FBRyxDQUFDLENBQUM7WUFDakJuQixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFRCxHQUFHO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlYWx0aGkvLi9wYWdlcy9hcGkvdXNlcmRhdGEuanM/YTBmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge2dldFNlc3Npb259IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7cmVxfSlcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGNvbnN0e3Rva2VufSA9IHJlcS5ib2R5O1xuICAgICAgIGNvbnN0IHtkYXRhfSA9IHJlcS5ib2R5XG4gICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpXG5jb25zb2xlLmxvZyhkYXRhICwnZGF0YSBhIGd5YScpXG4gICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICB1cmw6ICBcImh0dHA6Ly8xMy4yMTUuMTk2LjE3MzozMDAwL2FwaS92MS91c2VyL3VwZGF0ZXByb2ZpbGVcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXNzaW9uLnVzZXIubmFtZX0gYCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YVxuICAgICAgfTtcbiAgICAgIGF3YWl0IGF4aW9zKGNvbmZpZykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KTtcbiAgICAgIH0pO1xuXG5cbiAgICAgIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVmZXJlbmNlIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRTZXNzaW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJ1cmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXIiLCJuYW1lIiwidGhlbiIsInJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/userdata.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/userdata.js"));
module.exports = __webpack_exports__;

})();