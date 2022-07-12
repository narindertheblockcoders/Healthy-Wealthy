import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import changePassword from "../pages/changePassword";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Arrow from "../public/arrow.svg";
import Link  from "next/link";


const EmailChange = () => {


const notify = (msg) =>
toast.success(msg, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

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
      <section className="profile-sec verify-hight" >
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
            <form className="input-sec"
            //  onSubmit={onSubmitHandler}
             >
              <div className="line profile-line" id="e-change"></div>
              <h3 className="heading-text pink-text mt-2">
              <Link href={'/userProfile'}>
              <span  className="arrows-icon" style={{ position: "relative", left: "-28%", cursor:"pointer" }}  >
                    <img src={Arrow.src} />
                  </span>
                  </Link>
                 Update Email</h3>
                 

              <div className="input-item item-set" >
                <h6 className="item-text mb-0" >OLD EMAIL</h6>
<p style={{margin:"0"}}>Check your inbox for a verification code.</p>
                <div className="input-item item-set mt-0" id="item-setting" style={{ marginRight: "10px",  display: "flex" }} >
                  <input className="textinput w-50 mt-2" type="email" name="username" style={{ borderRadius:"4px 0 0 4px !important" }}  />
                  <button type="button"  className="btn btn-roundes  btn- w-50  mt-2 " style={{ }}>
                    Send 
                  </button>
                </div>
              </div>

              

              <div className="input-item item-set">
                <h6 className="item-text">ENTER CODE {" "} </h6>
                <input  required className="textinput" type="number" name="password" />
              </div>

              <div className="input-item item-set mt-5">
                <h6 className="item-text">NEW EMAIL</h6>
                <input   required className="textinput" type="email" name="password" />
              </div>
                   {/* {enterfield && (<p style={{ color: "red" }}> Invalid detail </p>)} */}



              {/* <Link href={"/login"}> */}
              <button
                href="funds-page.html"
                className="btn btn-round btn-warning w-100 "
                id="changemail-btn"
                style={{ marginTop: "50px", marginBottom: "0px" }}
                type="submit"
              >
                UPDATE
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailChange;
