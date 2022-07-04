"use strict";
(() => {
var exports = {};
exports.id = 876;
exports.ids = [876];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8417:
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
            const data = req.body;
            console.log(data);
            let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://13.215.196.173:3000/api/v1/auth/verifyinitialcode", data);
            const redirect = response.data;
            console.log(response);
            res.status(200).json({
                data: redirect
            });
        } catch (err) {
            console.log(err.data);
            res.status(500).json({
                err: err
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
var __webpack_exports__ = (__webpack_exec__(8417));
module.exports = __webpack_exports__;

})();