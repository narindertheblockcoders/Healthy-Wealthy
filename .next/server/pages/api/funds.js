"use strict";
(() => {
var exports = {};
exports.id = 2663;
exports.ids = [2663];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 9295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({
        req
    });
    if (req.method === "POST") {
        try {
            const data = req.body;
            // let { token } = data;
            // console.log(token, "dataa");
            var config = {
                method: "post",
                url: "http://13.215.196.173:3000/api/v1/buy/transactions",
                headers: {
                    Authorization: `Bearer ${session.user.name} `
                }
            };
            await axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(function(response) {
                // console.log(JSON.stringify(response.data));
                res.status(200).json({
                    data: response.data.data
                });
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
var __webpack_exports__ = (__webpack_exec__(9295));
module.exports = __webpack_exports__;

})();