import Link from "next/link";
import React, { useState } from "react";
import Credit from "../public/credit.svg";
import Bitc from "../public/bitc.png";
import Arrow from "../public/arrow.svg";
import {Stripe, loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const stripePromise = loadStripe("pk_test_51I9VYeJmw6LbIkvthtU60uARcY69ymGd7PXiuzXUnUIvp0NsuKCywpsvugi4utnvW6GCA9McIOIeQ4GG4zdvinXv00l55gtZ1n");

const CreditPage = () => {
  

const [isLoading,setIsLoading]=useState(false)
const [error, setError] =useState(false)

const handleClick = async (e) => {
  e.preventDefault();
  setIsLoading (true)
  let total = JSON.parse(localStorage.getItem("query"))
  try{

    const response = await axios.post("/api/payment/session", {data:total?.enteredFor})
    console.log(response.data.id)


    let query= await JSON.parse(localStorage.getItem('query'))
    if(!query) return;
    // let token =  localStorage.getItem('token')
    
    const data = {
         usdAmount: query.enteredFor,
         tokenQuantity: query.finalValue,
         tokenPrice: query.tokenPrice,
         finalAmount: query.enteredFor,
         paymentMode: 1,
         currencyId: 1,
        //  token,
       };

       let res = await axios.post("/api/formfill",data)
       let dataa = res.data.data
       console.log(dataa)
       let datas = JSON.stringify({transId:response.data.id,id:dataa.id})

       localStorage.setItem("tranx",datas)



    const stripe = await stripePromise;

    


    const {error}  =await stripe.redirectToCheckout({
      sessionId: response.data.id
      
    })
    if(error){
      setIsLoading(false)
      
    }
  }
catch (err){
  console.log(err)
  setIsLoading(false)
  notifyError('Invalid amount')
  setError(true)
  
}
}
const notifyError = (msg) =>
toast.error(msg, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

  return (
    <div>
      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <div className="input-sec input-top">
              <div className="input-line credit-line" id="credit-line"></div>

              <h3 className="heading-text mt-0">
                <Link href={"/buy"}>
                  <span style={{ position: "relative", left: "-15%" }}>
                    <img src={Arrow.src} />
                  </span>
                </Link>
                Select Payment Mode
              </h3>

              <div className="input-item">
              <form onSubmit={handleClick} method="POST">

                    {error && (<p style={{color:"red", textAlign:"center", fontSize:"15px", margin:"0"}}> Invalid amount</p>)}
                <button type="submit" disabled={isLoading} className="btn credit-btn" id="credit-btn">
                  <img className="icon-space" src={Credit.src} /> Pay with
                  Credit Card
                </button>
              </form>
                <p className="or-text">OR</p>
                <Link href={"/payment"}>
                  <button type="button" disabled={isLoading} className="btn  connect-btn mb-2" >
                    <img
                      className="icon-space"
                      src={Bitc.src}
                      style={{ height: "21.17px" }}
                      />{" "}
                    Pay with Crypto
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreditPage;
