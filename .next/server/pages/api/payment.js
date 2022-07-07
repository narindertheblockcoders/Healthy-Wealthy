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
exports.id = "pages/api/payment";
exports.ids = ["pages/api/payment"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/payment.js":
/*!******************************!*\
  !*** ./pages/api/payment.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            // const data = req.body\n            // console.log (data, \"api values\");\n            let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://13.215.196.173:3000/api/v1/list/currencies\");\n            const reference = response.data;\n            console.log(reference.data, \"string\");\n            const token = [\n                \"bitcoin\",\n                \"ethereum\",\n                \"matic-network\",\n                \"tether\"\n            ];\n            let dat = await reference.data;\n            let arr = [];\n            for(let i = 0; i <= dat.length - 2; i++){\n                let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.coingecko.com/api/v3/simple/price?ids=${token[i]}&vs_currencies=usd`);\n                // arr.push(response.data)\n                console.log(response.data);\n                if (i == 0) {\n                    arr.push(response.data.bitcoin.usd);\n                } else if (i == 1) {\n                    arr.push(response.data.ethereum.usd);\n                } else if (i == 2) {\n                    arr.push(response.data[\"matic-network\"].usd);\n                // console.log(response.data[\"matic-network\"].usd)\n                } else if (i == 3) {\n                    arr.push(response.data.tether.usd);\n                }\n            }\n            res.status(200).json({\n                data: reference,\n                arr: arr\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGF5bWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFWCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0Ysd0JBQXdCO1lBQ3hCLG9DQUFvQztZQUVwQyxJQUFJQyxRQUFRLEdBQUcsTUFBTUwsaURBQVUsQ0FDN0IsbURBQW1ELENBQ3BEO1lBQ0QsTUFBTU8sU0FBUyxHQUFHRixRQUFRLENBQUNHLElBQUk7WUFDL0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxTQUFTLENBQUNDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0QyxNQUFNRyxLQUFLLEdBQUc7Z0JBQUMsU0FBUztnQkFBRSxVQUFVO2dCQUFFLGVBQWU7Z0JBQUUsUUFBUTthQUFDO1lBQ2hFLElBQUlDLEdBQUcsR0FBRyxNQUFNTCxTQUFTLENBQUNDLElBQUk7WUFDOUIsSUFBSUssR0FBRyxHQUFHLEVBQUU7WUFDWixJQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSUYsR0FBRyxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUFFRCxDQUFDLEVBQUUsQ0FBRTtnQkFDeEMsSUFBSVQsUUFBUSxHQUFHLE1BQU1MLGdEQUFTLENBQzVCLENBQUMsa0RBQWtELEVBQUVXLEtBQUssQ0FBQ0csQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FDbEY7Z0JBQ0QsMEJBQTBCO2dCQUMxQkwsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7Z0JBQzNCLElBQUlNLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ1ZELEdBQUcsQ0FBQ0ksSUFBSSxDQUFDWixRQUFRLENBQUNHLElBQUksQ0FBQ1UsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQztpQkFDckMsTUFBTSxJQUFJTCxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNqQkQsR0FBRyxDQUFDSSxJQUFJLENBQUNaLFFBQVEsQ0FBQ0csSUFBSSxDQUFDWSxRQUFRLENBQUNELEdBQUcsQ0FBQyxDQUFDO2lCQUN0QyxNQUFNLElBQUlMLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2pCRCxHQUFHLENBQUNJLElBQUksQ0FBQ1osUUFBUSxDQUFDRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUNXLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QyxrREFBa0Q7aUJBQ25ELE1BQU0sSUFBSUwsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDakJELEdBQUcsQ0FBQ0ksSUFBSSxDQUFDWixRQUFRLENBQUNHLElBQUksQ0FBQ2EsTUFBTSxDQUFDRixHQUFHLENBQUMsQ0FBQztpQkFDcEM7YUFDRjtZQUVEaEIsR0FBRyxDQUFDbUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVmLElBQUksRUFBRUQsU0FBUztnQkFBRU0sR0FBRyxFQUFFQSxHQUFHO2FBQUUsQ0FBQyxDQUFDO1NBQ3JELENBQUMsT0FBT1csR0FBRyxFQUFFO1lBQ1pmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxHQUFHLENBQUMsQ0FBQztZQUNqQnJCLEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRSxLQUFLLEVBQUVELEdBQUc7YUFBRSxDQUFDLENBQUM7U0FDdEM7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoaS8uL3BhZ2VzL2FwaS9wYXltZW50LmpzP2FlOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCBkYXRhID0gcmVxLmJvZHlcbiAgICAgIC8vIGNvbnNvbGUubG9nIChkYXRhLCBcImFwaSB2YWx1ZXNcIik7XG5cbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiaHR0cDovLzEzLjIxNS4xOTYuMTczOjMwMDAvYXBpL3YxL2xpc3QvY3VycmVuY2llc1wiXG4gICAgICApO1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKHJlZmVyZW5jZS5kYXRhLCBcInN0cmluZ1wiKTtcbiAgICAgIGNvbnN0IHRva2VuID0gW1wiYml0Y29pblwiLCBcImV0aGVyZXVtXCIsIFwibWF0aWMtbmV0d29ya1wiLCBcInRldGhlclwiXTtcbiAgICAgIGxldCBkYXQgPSBhd2FpdCByZWZlcmVuY2UuZGF0YTtcbiAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGRhdC5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgIGBodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9zaW1wbGUvcHJpY2U/aWRzPSR7dG9rZW5baV19JnZzX2N1cnJlbmNpZXM9dXNkYFxuICAgICAgICApO1xuICAgICAgICAvLyBhcnIucHVzaChyZXNwb25zZS5kYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgIGFyci5wdXNoKHJlc3BvbnNlLmRhdGEuYml0Y29pbi51c2QpO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT0gMSkge1xuICAgICAgICAgIGFyci5wdXNoKHJlc3BvbnNlLmRhdGEuZXRoZXJldW0udXNkKTtcbiAgICAgICAgfSBlbHNlIGlmIChpID09IDIpIHtcbiAgICAgICAgICBhcnIucHVzaChyZXNwb25zZS5kYXRhW1wibWF0aWMtbmV0d29ya1wiXS51c2QpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGFbXCJtYXRpYy1uZXR3b3JrXCJdLnVzZClcbiAgICAgICAgfSBlbHNlIGlmIChpID09IDMpIHtcbiAgICAgICAgICBhcnIucHVzaChyZXNwb25zZS5kYXRhLnRldGhlci51c2QpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVmZXJlbmNlLCBhcnI6IGFyciB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IEVycm9yOiBlcnIgfSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVzcG9uc2UiLCJwb3N0IiwicmVmZXJlbmNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsImRhdCIsImFyciIsImkiLCJsZW5ndGgiLCJnZXQiLCJwdXNoIiwiYml0Y29pbiIsInVzZCIsImV0aGVyZXVtIiwidGV0aGVyIiwic3RhdHVzIiwianNvbiIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/payment.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/payment.js"));
module.exports = __webpack_exports__;

})();