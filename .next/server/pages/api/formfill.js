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
exports.id = "pages/api/formfill";
exports.ids = ["pages/api/formfill"];
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

/***/ "typescript":
/*!*****************************!*\
  !*** external "typescript" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("typescript");

/***/ }),

/***/ "(api)/./pages/api/formfill.js":
/*!*******************************!*\
  !*** ./pages/api/formfill.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typescript */ \"typescript\");\n/* harmony import */ var typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typescript__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (req.method === \"POST\") {\n        try {\n            const data = req.body;\n            console.log(data, \"api values\");\n            const finalData = {\n                usdAmount: data.usdAmount,\n                tokenQuantity: data.tokenQuantity,\n                tokenPrice: data.tokenPrice,\n                finalAmount: data.finalAmount,\n                paymentMode: data.paymentMode,\n                currencyId: data.currencyId\n            };\n            console.log(finalData, \"finnhubsahuc\");\n            // let token = data.token;\n            const config = {\n                headers: {\n                    Authorization: `Bearer ${session.user.name}`\n                }\n            };\n            let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://13.215.196.173:3000/api/v1/buy/token\", finalData, config);\n            const reference = response.data;\n            console.log(reference.data, \"string\");\n            res.status(200).json({\n                data: reference.data\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZm9ybWZpbGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNnQjtBQUNBO0FBRTNCLGVBQWVHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsT0FBTyxHQUFHLE1BQU1MLDJEQUFVLENBQUM7UUFBQ0csR0FBRztLQUFDLENBQUM7SUFDdkMsSUFBSUEsR0FBRyxDQUFDRyxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLElBQUk7WUFDRixNQUFNQyxJQUFJLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSTtZQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztZQUVoQyxNQUFNSSxTQUFTLEdBQUc7Z0JBQ2hCQyxTQUFTLEVBQUVMLElBQUksQ0FBQ0ssU0FBUztnQkFDekJDLGFBQWEsRUFBRU4sSUFBSSxDQUFDTSxhQUFhO2dCQUNqQ0MsVUFBVSxFQUFFUCxJQUFJLENBQUNPLFVBQVU7Z0JBQzNCQyxXQUFXLEVBQUVSLElBQUksQ0FBQ1EsV0FBVztnQkFDN0JDLFdBQVcsRUFBRVQsSUFBSSxDQUFDUyxXQUFXO2dCQUM3QkMsVUFBVSxFQUFFVixJQUFJLENBQUNVLFVBQVU7YUFDNUI7WUFDRFIsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUN2QywwQkFBMEI7WUFDMUIsTUFBTU8sTUFBTSxHQUFHO2dCQUNiQyxPQUFPLEVBQUU7b0JBQUVDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRWYsT0FBTyxDQUFDZ0IsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQztpQkFBRTthQUMxRDtZQUVELElBQUlDLFFBQVEsR0FBRyxNQUFNeEIsaURBQVUsQ0FDN0IsNkNBQTZDLEVBQzdDWSxTQUFTLEVBQ1RPLE1BQU0sQ0FDUDtZQUNELE1BQU1PLFNBQVMsR0FBR0YsUUFBUSxDQUFDaEIsSUFBSTtZQUMvQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNlLFNBQVMsQ0FBQ2xCLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0Q0gsR0FBRyxDQUFDc0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVwQixJQUFJLEVBQUVrQixTQUFTLENBQUNsQixJQUFJO2FBQUUsQ0FBQyxDQUFDO1NBQ2hELENBQUMsT0FBT3FCLEdBQUcsRUFBRTtZQUNabkIsT0FBTyxDQUFDQyxHQUFHLENBQUNrQixHQUFHLENBQUMsQ0FBQztZQUNqQnhCLEdBQUcsQ0FBQ3NCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxLQUFLLEVBQUVELEdBQUc7YUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoaS8uL3BhZ2VzL2FwaS9mb3JtZmlsbC5qcz84MmUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7Z2V0U2Vzc2lvbn0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgc2V0RW1pdEZsYWdzIH0gZnJvbSBcInR5cGVzY3JpcHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7cmVxfSlcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsIFwiYXBpIHZhbHVlc1wiKTtcblxuICAgICAgY29uc3QgZmluYWxEYXRhID0ge1xuICAgICAgICB1c2RBbW91bnQ6IGRhdGEudXNkQW1vdW50LFxuICAgICAgICB0b2tlblF1YW50aXR5OiBkYXRhLnRva2VuUXVhbnRpdHksXG4gICAgICAgIHRva2VuUHJpY2U6IGRhdGEudG9rZW5QcmljZSxcbiAgICAgICAgZmluYWxBbW91bnQ6IGRhdGEuZmluYWxBbW91bnQsXG4gICAgICAgIHBheW1lbnRNb2RlOiBkYXRhLnBheW1lbnRNb2RlLFxuICAgICAgICBjdXJyZW5jeUlkOiBkYXRhLmN1cnJlbmN5SWQsXG4gICAgICB9O1xuICAgICAgY29uc29sZS5sb2coZmluYWxEYXRhLCBcImZpbm5odWJzYWh1Y1wiKTtcbiAgICAgIC8vIGxldCB0b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Nlc3Npb24udXNlci5uYW1lfWAgfSxcbiAgICAgIH07XG5cbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiaHR0cDovLzEzLjIxNS4xOTYuMTczOjMwMDAvYXBpL3YxL2J1eS90b2tlblwiLFxuICAgICAgICBmaW5hbERhdGEsXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhyZWZlcmVuY2UuZGF0YSwgXCJzdHJpbmdcIik7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlZmVyZW5jZS5kYXRhIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldFNlc3Npb24iLCJzZXRFbWl0RmxhZ3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImZpbmFsRGF0YSIsInVzZEFtb3VudCIsInRva2VuUXVhbnRpdHkiLCJ0b2tlblByaWNlIiwiZmluYWxBbW91bnQiLCJwYXltZW50TW9kZSIsImN1cnJlbmN5SWQiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXIiLCJuYW1lIiwicmVzcG9uc2UiLCJwb3N0IiwicmVmZXJlbmNlIiwic3RhdHVzIiwianNvbiIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/formfill.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/formfill.js"));
module.exports = __webpack_exports__;

})();