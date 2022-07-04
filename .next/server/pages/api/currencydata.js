"use strict";
(() => {
var exports = {};
exports.id = 9996;
exports.ids = [9996];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6127:
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
            let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd");
            const reference = response.data;
            // console.log(reference, "string")
            res.status(200).json({
                data: reference
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
var __webpack_exports__ = (__webpack_exec__(6127));
module.exports = __webpack_exports__;

})();