import axios from "axios";
import Link from "next/link";
// import Link from 'next/link'
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Arrow from "../public/arrow.svg";
import $ from "jquery";

const Verification = () => {
  const valueRef = useRef();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]= useState(false)


  //l///////////////////////////////////API for the OTP//////////////////////////
  async function verify(data) {
    // e.preventDefault()
    try {
      let res = await axios.post("/api/verify", data);
      const response = res.data;

      console.log(response, "rrr");
      router.replace("/profile");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      notifyError("Check your email inbox for the verification code");
      setError(true)

    }
  }

  ///////////////////////////////////API for the Second ///////////////////////////
  async function resendCode() {
    const email = localStorage.getItem("email");

    console.log(email);
    if (!email) {
      notifyError("Please register first!");
      return;
    }
    try {
      let res = await axios.post("/api/register", { email: email });
      const data = res.data;
      console.log(data.data.message);
      if (data.data?.message) {
        notify('Verification Code Sent');
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function formSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const otp = valueRef.current.value;
    const email = localStorage.getItem("email");

    if (otp.trim().length < 6) {
      notifyError("Check your email inbox for the verification code.");
      setIsLoading(false);
      setError(true)


      return;
    }

    const data = { otp, email };
    console.log(data);
    await verify(data);
    setIsLoading(false);
  }

  /////////////Toast//////////////////////
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
      <section className="profile-sec pb-0">
        <div className="container">
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
          <div className="row justify-content-center">
            <form
              className="input-sec iptset-line ipt-width"
              onSubmit={formSubmit}
            >
              <div className="input-line  varification-line"></div>

              <h3 className="heading-text" style={{ textAlign: "left" }}>
                <Link href={"/"}>
                  <span style={{ fontSize: "16px", paddingRight: "10px" }}>
                    <img src={Arrow.src} />
                  </span>
                </Link>
                Verification code
              </h3>

              <p className="check-txt">
                Check your email For verification code
              </p>
              <div className="ipt-box">
                <input
                  className="ipt-txt w-100"
                  required
                  type="number"
                  ref={valueRef}
                />
              </div>
              <div className="did-txt" style={{marginBottom:"100px"}}>
                <p>
                  {" "}
                  Didn't receive it?{" "}
                  <span
                    onClick={resendCode}
                    style={{ cursor: "pointer" }}
                    className="resend-txt "
                  >
                    Resend code
                  </span>{" "}
                </p>
                {/* <button  type="button" onClick={resendCode}>Resend Code</button> */}
              </div>
              {error && (
                  <p style={{ color: "red", fontSize:"13px",  fontWeight:"600", margin:"0" }}> Check your email inbox for the verification code. </p>
                )}
              <p
                className="by-text mb-0 "
                style={{
                  marginTop: "5px",
                  fontSize: "11px",
                  paddingLeft: "5px",
                  float: "left",
                }}
              >
                <input
                  required
                  className="form-check-input mt-0"
                  type="checkbox"
                  style={{ marginRight: "7px", height: "16px", width: "16px" }}
                  id="flexCheckDefault"
                  />
                I agree with HealthiWealthi™ <a target="_blank" rel="noreferrer" href={"https://healthiwealthi.io/terms-of-use.php"}>Terms of Use</a>  and <a target="_blank" rel="noreferrer" href={"https://healthiwealthi.io/privacy.php"}> Privacy Policy</a>.
              </p>
              {/* <Link href={"/profile"}> */}
              <button
                disabled={isLoading}
                className="btn btn-round btn-warning w-100 p-0"
                style={{ marginTop: "15px", marginBottom: "5px" }}
                type="submit"
              >
                CONTINUE
              </button>

              {/* </Link> */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Verification;
