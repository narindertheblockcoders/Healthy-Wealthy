import { loadStripe } from "@stripe/stripe-js";
import {getSession} from 'next-auth/react'


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

const stripe = require('stripe')("sk_test_51I9VYeJmw6LbIkvtbUCWUnKkwAsgslZ09Rcae7SJB4f3d8FRfLlTYW1OLnlOdArfhnkO0YjrEU3Ja1LXk3ump5ac009CfJZHYZ");

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const quantity  = req.body.data;
      // Create Checkout Sessions from body params.
      console.log(req.body)
      let transformedItem =  {price_data: {
        currency: 'usd',
        product_data: {
         
          name: "HealthiWealthi™ RXHEAL Reward Tokens",
        },
        unit_amount: 100,
      },
      description: "HealthiWealthi™ RXHEAL Reward Tokens",
      quantity,
    };
      const session = await stripe.checkout.sessions.create({
        line_items: [transformedItem],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?success=true/`,
        cancel_url: `${req.headers.origin}/?paymentForm=true`,
      });
      console.log(session)
      // res.json(200, session.url);
// const checkOutSessions = session
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }
  return {
    props:{
      session
    }
  }
}