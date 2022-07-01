"use strict";
(() => {
var exports = {};
exports.id = 2298;
exports.ids = [2298];
exports.modules = {

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "@stripe/stripe-js"
const stripe_js_namespaceObject = require("@stripe/stripe-js");
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./pages/api/payment/session.js


// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// export default async function handler(req, res) {
//     const { quantity} = req.body;
//     const stripe = await loadStripe(process.env.STRIPE_SECRET_KEY,{
//   apiVersion:"2020-03-02"
// });
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: [
//       {
//         price: process.env.PRICE_ID,
//         quantity,
//       },
//     ],
//     mode: "payment",
//     success_url: `${req.headers.origin}/`,
//     cancel_url: `${req.headers.origin}/creditPage`,
//   });
//   res.redirect(303, session.url);
//   res.status(200).json({ sessionId: session.id });
// }
const stripe = __webpack_require__(8174)("sk_test_51I9VYeJmw6LbIkvtbUCWUnKkwAsgslZ09Rcae7SJB4f3d8FRfLlTYW1OLnlOdArfhnkO0YjrEU3Ja1LXk3ump5ac009CfJZHYZ");
async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const quantity = req.body.data;
            // Create Checkout Sessions from body params.
            console.log(req.body);
            let transformedItem = {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: "RxH"
                    },
                    unit_amount: 100
                },
                description: "RxH",
                quantity
            };
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    transformedItem
                ],
                mode: "payment",
                success_url: `${req.headers.origin}/success?success=true/`,
                cancel_url: `${req.headers.origin}/?paymentForm=true`
            });
            console.log(session);
            // res.json(200, session.url);
            // const checkOutSessions = session
            res.status(200).json(session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};
async function getServerSideProps(context) {
    const session = await (0,react_.getSession)(context);
    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    return {
        props: {
            session
        }
    };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(741));
module.exports = __webpack_exports__;

})();