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
exports.id = "pages/api/payment/success";
exports.ids = ["pages/api/payment/success"];
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

/***/ "(api)/./pages/api/payment/success.js":
/*!**************************************!*\
  !*** ./pages/api/payment/success.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (req.method === \"POST\") {\n        try {\n            const data = req.body;\n            console.log(data, \"api values\");\n            const finalData = {\n                id: data.id,\n                transactionId: data.transactionId\n            };\n            console.log(finalData, \"finnhubsahuc\");\n            // let token = data.token;\n            const config = {\n                headers: {\n                    Authorization: `Bearer ${session.user.name}`\n                }\n            };\n            let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://13.215.196.173:3000/api/v1/buy/updatetransactionstatus\", finalData, config);\n            const reference = response.data;\n            console.log(reference.data, \"string\");\n            res.status(200).json({\n                data: reference.data\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {\n            session\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGF5bWVudC9zdWNjZXNzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNnQjtBQUUzQixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLE9BQU8sR0FBRyxNQUFNSiwyREFBVSxDQUFDO1FBQUNFLEdBQUc7S0FBQyxDQUFDO0lBQ3ZDLElBQUlBLEdBQUcsQ0FBQ0csTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0YsTUFBTUMsSUFBSSxHQUFHSixHQUFHLENBQUNLLElBQUk7WUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFaEMsTUFBTUksU0FBUyxHQUFHO2dCQUNoQkMsRUFBRSxFQUFFTCxJQUFJLENBQUNLLEVBQUU7Z0JBQ1hDLGFBQWEsRUFBRU4sSUFBSSxDQUFDTSxhQUFhO2FBRWxDO1lBQ0RKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDdkMsMEJBQTBCO1lBQzFCLE1BQU1HLE1BQU0sR0FBRztnQkFDYkMsT0FBTyxFQUFFO29CQUFFQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVYLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQztpQkFBRTthQUMxRDtZQUVELElBQUlDLFFBQVEsR0FBRyxNQUFNbkIsaURBQVUsQ0FDN0IsK0RBQStELEVBQy9EVyxTQUFTLEVBQ1RHLE1BQU0sQ0FDUDtZQUNELE1BQU1PLFNBQVMsR0FBR0YsUUFBUSxDQUFDWixJQUFJO1lBQy9CRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1csU0FBUyxDQUFDZCxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdENILEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFaEIsSUFBSSxFQUFFYyxTQUFTLENBQUNkLElBQUk7YUFBRSxDQUFDLENBQUM7U0FDaEQsQ0FBQyxPQUFPaUIsR0FBRyxFQUFFO1lBQ1pmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxHQUFHLENBQUMsQ0FBQztZQUNqQnBCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxLQUFLLEVBQUVELEdBQUc7YUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGO0FBRU0sZUFBZUUsa0JBQWtCLENBQUNDLE9BQU8sRUFBRTtJQUNoRCxNQUFNdEIsT0FBTyxHQUFHLE1BQU1KLDJEQUFVLENBQUMwQixPQUFPLENBQUM7SUFDekMsSUFBSSxDQUFDdEIsT0FBTyxFQUFFO1FBQ1osT0FBTztZQUNMdUIsUUFBUSxFQUFFO2dCQUNSQyxXQUFXLEVBQUUsR0FBRztnQkFDaEJDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1NBQ0Y7S0FDRjtJQUNELE9BQU87UUFDTEMsS0FBSyxFQUFDO1lBQ0oxQixPQUFPO1NBQ1I7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoaS8uL3BhZ2VzL2FwaS9wYXltZW50L3N1Y2Nlc3MuanM/NzZjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge2dldFNlc3Npb259IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7cmVxfSlcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsIFwiYXBpIHZhbHVlc1wiKTtcblxuICAgICAgY29uc3QgZmluYWxEYXRhID0ge1xuICAgICAgICBpZDogZGF0YS5pZCxcbiAgICAgICAgdHJhbnNhY3Rpb25JZDogZGF0YS50cmFuc2FjdGlvbklkLFxuICAgIFxuICAgICAgfTtcbiAgICAgIGNvbnNvbGUubG9nKGZpbmFsRGF0YSwgXCJmaW5uaHVic2FodWNcIik7XG4gICAgICAvLyBsZXQgdG9rZW4gPSBkYXRhLnRva2VuO1xuICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXNzaW9uLnVzZXIubmFtZX1gIH0sXG4gICAgICB9O1xuXG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBcImh0dHA6Ly8xMy4yMTUuMTk2LjE3MzozMDAwL2FwaS92MS9idXkvdXBkYXRldHJhbnNhY3Rpb25zdGF0dXNcIixcbiAgICAgICAgZmluYWxEYXRhLFxuICAgICAgICBjb25maWdcbiAgICAgICk7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSByZXNwb25zZS5kYXRhO1xuICAgICAgY29uc29sZS5sb2cocmVmZXJlbmNlLmRhdGEsIFwic3RyaW5nXCIpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiByZWZlcmVuY2UuZGF0YSB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IEVycm9yOiBlcnIgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL1wiLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOntcbiAgICAgIHNlc3Npb25cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldFNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImZpbmFsRGF0YSIsImlkIiwidHJhbnNhY3Rpb25JZCIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlciIsIm5hbWUiLCJyZXNwb25zZSIsInBvc3QiLCJyZWZlcmVuY2UiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/payment/success.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/payment/success.js"));
module.exports = __webpack_exports__;

})();