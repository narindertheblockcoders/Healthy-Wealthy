"use strict";
(() => {
var exports = {};
exports.id = 2419;
exports.ids = [2419];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 2779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: external "typescript"
const external_typescript_namespaceObject = require("typescript");
;// CONCATENATED MODULE: ./pages/api/formfill.js



async function handler(req, res) {
    const session = await (0,react_.getSession)({
        req
    });
    if (req.method === "POST") {
        try {
            const data = req.body;
            console.log(data, "api values");
            const finalData = {
                usdAmount: data.usdAmount,
                tokenQuantity: data.tokenQuantity,
                tokenPrice: data.tokenPrice,
                finalAmount: data.finalAmount,
                paymentMode: data.paymentMode,
                currencyId: data.currencyId
            };
            console.log(finalData, "finnhubsahuc");
            // let token = data.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${session.user.name}`
                }
            };
            let response = await external_axios_default().post("http://13.215.196.173:3000/api/v1/buy/token", finalData, config);
            const reference = response.data;
            console.log(reference.data, "string");
            res.status(200).json({
                data: reference.data
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
var __webpack_exports__ = (__webpack_exec__(2779));
module.exports = __webpack_exports__;

})();