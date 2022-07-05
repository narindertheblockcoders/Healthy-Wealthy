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
exports.id = "pages/api/fillProfile";
exports.ids = ["pages/api/fillProfile"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/fillProfile.js":
/*!**********************************!*\
  !*** ./pages/api/fillProfile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const data = req.body;\n            console.log(data, \"api values\");\n            // console.log(re)\n            let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://13.215.196.173:3000/api/v1/auth/signup\", data);\n            const reference = response.data;\n            let re = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"https://hooks.zapier.com/hooks/catch/2086978/bww2e69/\", {\n                email: data.email,\n                name: data.firstName\n            });\n            // console.log(reference, \"string\");\n            res.status(200).json({\n                data: reference\n            });\n        } catch (err) {\n            // console.log(err);        \"http://13.215.196.173:3000/api/v1/auth/signup\",\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmlsbFByb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRVgsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1lBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBRUgsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBRWpDLGtCQUFrQjtZQUNsQixJQUFJSSxRQUFRLEdBQUcsTUFBTVQsaURBQVUsQ0FDN0IsK0NBQStDLEVBQy9DSyxJQUFJLENBQ0g7WUFDRCxNQUFNTSxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0osSUFBSTtZQUMvQixJQUFJTyxFQUFFLEdBQUcsTUFBTVosaURBQVUsQ0FBQyx1REFBdUQsRUFBQztnQkFBQ2EsS0FBSyxFQUFDUixJQUFJLENBQUNRLEtBQUs7Z0JBQUVDLElBQUksRUFBQ1QsSUFBSSxDQUFDVSxTQUFTO2FBQUMsQ0FBQztZQUU1SCxvQ0FBb0M7WUFDcENaLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVaLElBQUksRUFBRU0sU0FBUzthQUFFLENBQUMsQ0FBQztTQUMzQyxDQUFDLE9BQU9PLEdBQUcsRUFBRTtZQUNaLDRFQUE0RTtZQUU1RWYsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFRCxHQUFHO2FBQUUsQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlYWx0aGkvLi9wYWdlcy9hcGkvZmlsbFByb2ZpbGUuanM/MTJkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICAgIGNvbnNvbGUubG9nIChkYXRhLCBcImFwaSB2YWx1ZXNcIik7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlKVxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgXCJodHRwOi8vMTMuMjE1LjE5Ni4xNzM6MzAwMC9hcGkvdjEvYXV0aC9zaWdudXBcIixcbiAgICAgICAgZGF0YVxuICAgICAgICApO1xuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBsZXQgcmU9ICBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cHM6Ly9ob29rcy56YXBpZXIuY29tL2hvb2tzL2NhdGNoLzIwODY5NzgvYnd3MmU2OS9cIix7ZW1haWw6ZGF0YS5lbWFpbCwgbmFtZTpkYXRhLmZpcnN0TmFtZX0pXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlZmVyZW5jZSwgXCJzdHJpbmdcIik7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJlZmVyZW5jZSB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7ICAgICAgICBcImh0dHA6Ly8xMy4yMTUuMTk2LjE3MzozMDAwL2FwaS92MS9hdXRoL3NpZ251cFwiLFxuXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IEVycm9yOiBlcnIgfSk7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicG9zdCIsInJlZmVyZW5jZSIsInJlIiwiZW1haWwiLCJuYW1lIiwiZmlyc3ROYW1lIiwic3RhdHVzIiwianNvbiIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/fillProfile.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fillProfile.js"));
module.exports = __webpack_exports__;

})();