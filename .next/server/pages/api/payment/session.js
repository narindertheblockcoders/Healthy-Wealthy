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
exports.id = "pages/api/payment/session";
exports.ids = ["pages/api/payment/session"];
exports.modules = {

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/payment/session.js":
/*!**************************************!*\
  !*** ./pages/api/payment/session.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// export default async function handler(req, res) {\n//     const { quantity} = req.body;\n//     const stripe = await loadStripe(process.env.STRIPE_SECRET_KEY,{\n//   apiVersion:\"2020-03-02\"\n// });\n//   const session = await stripe.checkout.sessions.create({\n//     payment_method_types: [\"card\"],\n//     line_items: [\n//       {\n//         price: process.env.PRICE_ID,\n//         quantity,\n//       },\n//     ],\n//     mode: \"payment\",\n//     success_url: `${req.headers.origin}/`,\n//     cancel_url: `${req.headers.origin}/creditPage`,\n//   });\n//   res.redirect(303, session.url);\n//   res.status(200).json({ sessionId: session.id });\n// }\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(\"sk_test_51I9VYeJmw6LbIkvtbUCWUnKkwAsgslZ09Rcae7SJB4f3d8FRfLlTYW1OLnlOdArfhnkO0YjrEU3Ja1LXk3ump5ac009CfJZHYZ\");\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const quantity = req.body.data;\n            // Create Checkout Sessions from body params.\n            console.log(req.body);\n            let transformedItem = {\n                price_data: {\n                    currency: \"usd\",\n                    product_data: {\n                        name: \"RxH\"\n                    },\n                    unit_amount: 100\n                },\n                description: \"RxH\",\n                quantity\n            };\n            const session = await stripe.checkout.sessions.create({\n                line_items: [\n                    transformedItem\n                ],\n                mode: \"payment\",\n                success_url: `${req.headers.origin}/success?success=true/`,\n                cancel_url: `${req.headers.origin}/?paymentForm=true`\n            });\n            console.log(session);\n            // res.json(200, session.url);\n            // const checkOutSessions = session\n            res.status(200).json(session);\n        } catch (err) {\n            res.status(err.statusCode || 500).json(err.message);\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n};\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {\n            session\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z2VzL2FwaS9wYXltZW50L3Nlc3Npb24uanM/YTgwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XG5pbXBvcnQge2dldFNlc3Npb259IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcblxuXG4vLyAvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4vLyAgICAgY29uc3QgeyBxdWFudGl0eX0gPSByZXEuYm9keTtcbi8vICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBsb2FkU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZLHtcbi8vICAgYXBpVmVyc2lvbjpcIjIwMjAtMDMtMDJcIlxuLy8gfSk7XG4vLyAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbi8vICAgICBwYXltZW50X21ldGhvZF90eXBlczogW1wiY2FyZFwiXSxcbi8vICAgICBsaW5lX2l0ZW1zOiBbXG4vLyAgICAgICB7XG4vLyAgICAgICAgIHByaWNlOiBwcm9jZXNzLmVudi5QUklDRV9JRCxcbi8vICAgICAgICAgcXVhbnRpdHksXG4vLyAgICAgICB9LFxuLy8gICAgIF0sXG4vLyAgICAgbW9kZTogXCJwYXltZW50XCIsXG4vLyAgICAgc3VjY2Vzc191cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vYCxcbi8vICAgICBjYW5jZWxfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59L2NyZWRpdFBhZ2VgLFxuLy8gICB9KTtcbi8vICAgcmVzLnJlZGlyZWN0KDMwMywgc2Vzc2lvbi51cmwpO1xuXG4vLyAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2Vzc2lvbklkOiBzZXNzaW9uLmlkIH0pO1xuLy8gfVxuXG5jb25zdCBzdHJpcGUgPSByZXF1aXJlKCdzdHJpcGUnKShcInNrX3Rlc3RfNTFJOVZZZUptdzZMYklrdnRiVUNXVW5La3dBc2dzbFowOVJjYWU3U0pCNGYzZDhGUmZMbFRZVzFPTG5sT2RBcmZobmtPMFlqckVVM0phMUxYazN1bXA1YWMwMDlDZkpaSFlaXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcXVhbnRpdHkgID0gcmVxLmJvZHkuZGF0YTtcbiAgICAgIC8vIENyZWF0ZSBDaGVja291dCBTZXNzaW9ucyBmcm9tIGJvZHkgcGFyYW1zLlxuICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpXG4gICAgICBsZXQgdHJhbnNmb3JtZWRJdGVtID0gIHtwcmljZV9kYXRhOiB7XG4gICAgICAgIGN1cnJlbmN5OiAndXNkJyxcbiAgICAgICAgcHJvZHVjdF9kYXRhOiB7XG4gICAgICAgICBcbiAgICAgICAgICBuYW1lOiBcIlJ4SFwiLFxuICAgICAgICB9LFxuICAgICAgICB1bml0X2Ftb3VudDogMTAwLFxuICAgICAgfSxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlJ4SFwiLFxuICAgICAgcXVhbnRpdHksXG4gICAgfTtcbiAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgICAgbGluZV9pdGVtczogW3RyYW5zZm9ybWVkSXRlbV0sXG4gICAgICAgIG1vZGU6ICdwYXltZW50JyxcbiAgICAgICAgc3VjY2Vzc191cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vc3VjY2Vzcz9zdWNjZXNzPXRydWUvYCxcbiAgICAgICAgY2FuY2VsX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS8/cGF5bWVudEZvcm09dHJ1ZWAsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHNlc3Npb24pXG4gICAgICAvLyByZXMuanNvbigyMDAsIHNlc3Npb24udXJsKTtcbi8vIGNvbnN0IGNoZWNrT3V0U2Vzc2lvbnMgPSBzZXNzaW9uXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzZXNzaW9uKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoZXJyLnN0YXR1c0NvZGUgfHwgNTAwKS5qc29uKGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpO1xuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoJ01ldGhvZCBOb3QgQWxsb3dlZCcpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL1wiLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOntcbiAgICAgIHNlc3Npb25cbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsibG9hZFN0cmlwZSIsImdldFNlc3Npb24iLCJzdHJpcGUiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInF1YW50aXR5IiwiYm9keSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidHJhbnNmb3JtZWRJdGVtIiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwicHJvZHVjdF9kYXRhIiwibmFtZSIsInVuaXRfYW1vdW50IiwiZGVzY3JpcHRpb24iLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsImxpbmVfaXRlbXMiLCJtb2RlIiwic3VjY2Vzc191cmwiLCJoZWFkZXJzIiwib3JpZ2luIiwiY2FuY2VsX3VybCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJzdGF0dXNDb2RlIiwibWVzc2FnZSIsInNldEhlYWRlciIsImVuZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/payment/session.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/payment/session.js"));
module.exports = __webpack_exports__;

})();