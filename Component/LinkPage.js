import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../public/profile.svg";
import Fingerprint from "../public/fingerprint.svg";
import Multiple from "../public/multiple.svg";
import ChangePassword from "../public/changePassword.svg"
import BuyIcon from "../public/buy-icon.svg";
import TokenIcon from "../public/token-icon.svg"
import {signOut} from 'next-auth/react';



const LinkPage = () => {

  // const [rxAmt,setRxAmt ] =useState()
  const [usdAmt, setUsdAmt] = useState()
  const [name, setName] = useState(null);


  async function tokenPrice(data) {
    try {
      // let token = localStorage.getItem("token");
      let res = await axios.post("/api/mytokens", data);
      const response = res.data
      // localStorage.setItem("token", response.data.data);
      console.log(response.data)
      setUsdAmt(response.data)
    }
    catch (err) {
      console.log(err, err);

    }
  }

  useEffect(() => {
    tokenPrice()
  }, [])
function logoutHandler (){
  signOut()
}

  async function getUserData() {
    let data = await axios.post("api/userProfile");
    setName(data.data.data);
  }

  useEffect(()=>{
  getUserData();
    },[])

  function onSubmitHandler(event) {
    event.preventDefault()
  }


  return (
    <div>

      <section className="profile-sec" id="ps-set">
        <div className="container">
          <div className="row justify-content-center">
            <form className="funds-sec" onSubmit={onSubmitHandler}>
              <h3 className="funds-heading">Your Dashboard</h3>
              <h4 className="wel-text">  Welcome  <strong> {name?.firstName}{" "}</strong> Please find below your RXHEAL details. Watch out for our HealthiWealthi™ email updates. Questions? 
              <a
                      href="/contact"
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        color: "#D32286",
                        textDecoration:"none"
                      }}
                    >
                      {" "}
                      Contact us.
                    </a>
                    
                      </h4>






              <div className="col-head" id="col-head">
                <div className="col-md-7 left-headSec">

                  <div className="link-head  " id="first-sec">
                    <Link href={"/userProfile"}>
                      <div className="link-item first-sec">PROFILE</div>
                    </Link>

                    
                    <Link href={"/funds"}>
                      <div className="link-item third-sec first-set" id="first-item ">
                        FUNDS
                      </div>
                    </Link>

                    <Link href={'/changePassword'}>
                      <div className="link-item four-sec" id="sec-item">
                        CHANGE PASSWORD
                      </div>
                    </Link>
                    <Link href={"/buy"}>
                      <div className="link-item five-sec" id="second-item">
                        BUY TOKEN
                      </div>
                    </Link>
                    <Link href={'/tokenPage'}>

                    <div className="link-item six-sec" id="third-item">
                      TOKEN
                    </div>
                    </Link>
                    <Link href={"/login"}>
                    <div className="link-item second-sec " onClick={logoutHandler} id="four-item">
                      LOGOUT
                    </div>
                    </Link>

                  </div>


                </div>
               



                <div className="col-md-2 right-profile">
               <div className="input-line linkPage-line" ></div>
                  <div className="wallet-box">
                    <h4 className="wallet-heading">Your Wallet</h4>
                  </div>

                  <div className="wallet-box1">
                  <div>
                      <p className="wallet-para">Coin Price</p>
                    </div>
                    <div >
                      <p className="wallet-amt">$ {usdAmt?.coinPrice} </p>
                    </div>
                  </div>

                  <div className="wallet-box1">
                    <div>
                      <p className="wallet-para">Locked</p>
                    </div>
                    <div>
                      <p className="wallet-amt"> {usdAmt?.locked} RXHEAL</p>
                    </div>
                  </div>

                  <div className="wallet-box1">
                    <div>

                      <p className="wallet-para">Available Token</p>
                    </div>
                    <div>
                      <p className="wallet-amt"> {usdAmt?.availableToken} RXHEAL</p>
                    </div>
                  </div>
                  <div className="wallet-box1">
                  <div>
                      <p className="wallet-para">Total</p>
                    </div>
                    <div>
                      <p className="wallet-amt"> {usdAmt?.total} RXHEAL</p>
                    </div>
                
                  </div>

                  <div className="wallet-box1">
                  <div>
                      <p className="wallet-para">Total Value</p>
                    </div>
                    <div>
                      <p className="wallet-amt">$ {usdAmt?.totalValue} </p>
                    </div>

                  </div>
                </div>
                <div className="col-md-3"></div>


              </div>

            </form>



          </div>
        </div>

      </section>


    </div>
  );
};

export default LinkPage;




{/* <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form
              className="input-sec  payment-form "
              id="form-pay"
              style={{ width: "35%", padding: "30px" }}
            >
              <div className="heading-parts">
                <h3
                  className="order-text"
                  style={{ textAlign: "left !important", paddingLeft: "25px" }}
                >
                  DASHBOARD
                </h3>
              </div>

              <div className="input-line   link-line"></div>
              <div className="link-head ">
                <Link href={"/userProfile"}>
                  <div className="link-item">PROFILE</div>
                </Link>

                <div className="link-item" id="first-item">
                  ENABLE 2FA
                </div>
                <Link href={"/funds"}>
                  <div className="link-item" id="first-item">
                    FUNDS
                  </div>
                </Link>

                <div className="link-item" id="second-item">
                  CHANGE PASSWORD
                </div>
                <Link href={"/buy"}>
                  <div className="link-item" id="third-item">
                    BUY TOKEN
                  </div>
                </Link>
                <div className="link-item" id="third-item">
                  TOKEN
                </div>
              </div>
            </form>
          </div>
        </div>
      </section> */}
