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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// export default async function handler(req, res) {\n//     const { quantity} = req.body;\n//     const stripe = await loadStripe(process.env.STRIPE_SECRET_KEY,{\n//   apiVersion:\"2020-03-02\"\n// });\n//   const session = await stripe.checkout.sessions.create({\n//     payment_method_types: [\"card\"],\n//     line_items: [\n//       {\n//         price: process.env.PRICE_ID,\n//         quantity,\n//       },\n//     ],\n//     mode: \"payment\",\n//     success_url: `${req.headers.origin}/`,\n//     cancel_url: `${req.headers.origin}/creditPage`,\n//   });\n//   res.redirect(303, session.url);\n//   res.status(200).json({ sessionId: session.id });\n// }\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(\"sk_test_51I9VYeJmw6LbIkvtbUCWUnKkwAsgslZ09Rcae7SJB4f3d8FRfLlTYW1OLnlOdArfhnkO0YjrEU3Ja1LXk3ump5ac009CfJZHYZ\");\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const quantity = req.body.data;\n            // Create Checkout Sessions from body params.\n            console.log(req.body);\n            let transformedItem = {\n                price_data: {\n                    currency: \"usd\",\n                    product_data: {\n                        name: \"HealthiWealthi\\u2122 RXHEAL Reward Tokens\"\n                    },\n                    unit_amount: 100\n                },\n                description: \"HealthiWealthi\\u2122 RXHEAL Reward Tokens\",\n                quantity\n            };\n            const session = await stripe.checkout.sessions.create({\n                line_items: [\n                    transformedItem\n                ],\n                mode: \"payment\",\n                success_url: `${req.headers.origin}/success?success=true/`,\n                cancel_url: `${req.headers.origin}/?paymentForm=true`\n            });\n            console.log(session);\n            // res.json(200, session.url);\n            // const checkOutSessions = session\n            res.status(200).json(session);\n        } catch (err) {\n            res.status(err.statusCode || 500).json(err.message);\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n};\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {\n            session\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vcGFnZXMvYXBpL3BheW1lbnQvc2Vzc2lvbi5qcz9hODA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcbmltcG9ydCB7Z2V0U2Vzc2lvbn0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuXG5cbi8vIC8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbi8vICAgICBjb25zdCB7IHF1YW50aXR5fSA9IHJlcS5ib2R5O1xuLy8gICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkse1xuLy8gICBhcGlWZXJzaW9uOlwiMjAyMC0wMy0wMlwiXG4vLyB9KTtcbi8vICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuLy8gICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbXCJjYXJkXCJdLFxuLy8gICAgIGxpbmVfaXRlbXM6IFtcbi8vICAgICAgIHtcbi8vICAgICAgICAgcHJpY2U6IHByb2Nlc3MuZW52LlBSSUNFX0lELFxuLy8gICAgICAgICBxdWFudGl0eSxcbi8vICAgICAgIH0sXG4vLyAgICAgXSxcbi8vICAgICBtb2RlOiBcInBheW1lbnRcIixcbi8vICAgICBzdWNjZXNzX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9gLFxuLy8gICAgIGNhbmNlbF91cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vY3JlZGl0UGFnZWAsXG4vLyAgIH0pO1xuLy8gICByZXMucmVkaXJlY3QoMzAzLCBzZXNzaW9uLnVybCk7XG5cbi8vICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzZXNzaW9uSWQ6IHNlc3Npb24uaWQgfSk7XG4vLyB9XG5cbmNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKFwic2tfdGVzdF81MUk5VlllSm13NkxiSWt2dGJVQ1dVbktrd0FzZ3NsWjA5UmNhZTdTSkI0ZjNkOEZSZkxsVFlXMU9MbmxPZEFyZmhua08wWWpyRVUzSmExTFhrM3VtcDVhYzAwOUNmSlpIWVpcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBxdWFudGl0eSAgPSByZXEuYm9keS5kYXRhO1xuICAgICAgLy8gQ3JlYXRlIENoZWNrb3V0IFNlc3Npb25zIGZyb20gYm9keSBwYXJhbXMuXG4gICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcbiAgICAgIGxldCB0cmFuc2Zvcm1lZEl0ZW0gPSAge3ByaWNlX2RhdGE6IHtcbiAgICAgICAgY3VycmVuY3k6ICd1c2QnLFxuICAgICAgICBwcm9kdWN0X2RhdGE6IHtcbiAgICAgICAgIFxuICAgICAgICAgIG5hbWU6IFwiSGVhbHRoaVdlYWx0aGnihKIgUlhIRUFMIFJld2FyZCBUb2tlbnNcIixcbiAgICAgICAgfSxcbiAgICAgICAgdW5pdF9hbW91bnQ6IDEwMCxcbiAgICAgIH0sXG4gICAgICBkZXNjcmlwdGlvbjogXCJIZWFsdGhpV2VhbHRoaeKEoiBSWEhFQUwgUmV3YXJkIFRva2Vuc1wiLFxuICAgICAgcXVhbnRpdHksXG4gICAgfTtcbiAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgICAgbGluZV9pdGVtczogW3RyYW5zZm9ybWVkSXRlbV0sXG4gICAgICAgIG1vZGU6ICdwYXltZW50JyxcbiAgICAgICAgc3VjY2Vzc191cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vc3VjY2Vzcz9zdWNjZXNzPXRydWUvYCxcbiAgICAgICAgY2FuY2VsX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS8/cGF5bWVudEZvcm09dHJ1ZWAsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHNlc3Npb24pXG4gICAgICAvLyByZXMuanNvbigyMDAsIHNlc3Npb24udXJsKTtcbi8vIGNvbnN0IGNoZWNrT3V0U2Vzc2lvbnMgPSBzZXNzaW9uXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihzZXNzaW9uKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoZXJyLnN0YXR1c0NvZGUgfHwgNTAwKS5qc29uKGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpO1xuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoJ01ldGhvZCBOb3QgQWxsb3dlZCcpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL1wiLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOntcbiAgICAgIHNlc3Npb25cbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsibG9hZFN0cmlwZSIsImdldFNlc3Npb24iLCJzdHJpcGUiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInF1YW50aXR5IiwiYm9keSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidHJhbnNmb3JtZWRJdGVtIiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwicHJvZHVjdF9kYXRhIiwibmFtZSIsInVuaXRfYW1vdW50IiwiZGVzY3JpcHRpb24iLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsImxpbmVfaXRlbXMiLCJtb2RlIiwic3VjY2Vzc191cmwiLCJoZWFkZXJzIiwib3JpZ2luIiwiY2FuY2VsX3VybCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJzdGF0dXNDb2RlIiwibWVzc2FnZSIsInNldEhlYWRlciIsImVuZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/payment/session.js\n");

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