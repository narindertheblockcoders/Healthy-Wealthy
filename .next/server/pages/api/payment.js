"use strict";
(() => {
var exports = {};
exports.id = 8624;
exports.ids = [8624];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    if (req.method === "POST") {
        try {
            // const data = req.body
            // console.log (data, "api values");
            let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://13.215.196.173:3000/api/v1/list/currencies");
            const reference = response.data;
            console.log(reference.data, "string");
            const token = [
                "bitcoin",
                "ethereum",
                "matic-network",
                "tether"
            ];
            let dat = await reference.data;
            let arr = [];
            for(let i = 0; i <= dat.length - 2; i++){
                let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.coingecko.com/api/v3/simple/price?ids=${token[i]}&vs_currencies=usd`);
                // arr.push(response.data)
                console.log(response.data);
                if (i == 0) {
                    arr.push(response.data.bitcoin.usd);
                } else if (i == 1) {
                    arr.push(response.data.ethereum.usd);
                } else if (i == 2) {
                    arr.push(response.data["matic-network"].usd);
                // console.log(response.data["matic-network"].usd)
                } else if (i == 3) {
                    arr.push(response.data.tether.usd);
                }
            }
            res.status(200).json({
                data: reference,
                arr: arr
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                Error: err
            });
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4668));
module.exports = __webpack_exports__;

})();