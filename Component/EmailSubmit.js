import React, { useRef, useState, useEffect } from "react";
import Heart from "../public/Heart.svg";
import Mail from "../public/mail.png";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import Button from 'react-bootstrap/Button';
import emailSubmit from "../pages/emailSubmit";


const EmailSubmit = () => {
  const emailRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRef, setLoadingRef] = useState(false);
  const [error,setError]= useState(false)
  const [verify, setVerify]=useState(false)

    function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 4000));
  }
  const router = useRouter();
  async function emailSubmit(data) {
    try {
      let res = await axios.post("/api/emailsubmit", data);
      const rec = res.data.data;
      setIsLoading(true);
     
      if (rec) {
        console.log(rec);

        notify('Verification code Sent' );
        setVerify(true)
        setIsLoading(false);
      
        setTimeout(() => {
          router.push("/forgetPassword");
        }, 3000);
      }
    } catch (err) {
      console.log(err, "Err");
      notifyError("Invalid Email");
      setError(true)
      setLoadingRef(false);
    }
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    const email = emailRef.current.value;

    localStorage.setItem("email", email);
    const data = { email };
    setIsLoading(false);
    emailSubmit(data);

    
  }

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

    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoadingRef(true);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoadingRef(true);
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
            <form className="input-sec input-top" onSubmit={onSubmitHandler}>
              <div className="input-line email-submit"></div>
              <img src={Heart.src} className="mt-2" />
              <h3 className="heading-text mt-3">
                {" "}
                Join the HealthiWealthi <sup className="sup-text">TM</sup><br></br> Global Community
              </h3>
              <p style={{fontSize:"10px", paddingTop:"7px", margin:"0"}}>Own RXHEAL and unleash your
potential on HealthiWealthi™ living
healthier, happier, longer, and richer.</p>


              <div className="input-item" style={{ marginTop: "50px" }}>
                <h6 className="item-text">ENTER YOUR EMAIL</h6>
                <div className="input-group height-set flex-nowrap mt-2 mb-4">
                  <span
                    className="input-group-text input-border"
                    id="addon-wrapping"
                  >
                    <img src={Mail.src} style={{ height: "20px" }} />
                  </span>
                  <input
                    ref={emailRef}
                    type="email"
                    className="form-control form-border"
                    required
                    placeholder="john.doe@example.com"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                </div>
              </div>

              {/* <Link href={"/varification"}> */}

              {error && (
                  <p style={{ color: "red", fontWeight:"600", margin:"0" }}> Invalid Email </p>
                )}
                 {verify && (
                  <p style={{ color: "green", fontSize:"13px", fontWeight:"600", margin:"0" }}> Verification code Sent </p>
                )}
            
              <Button
      variant="primary"
      className="btn btn-round btn-warning w-100 p-0 "
      style={{ marginTop: "5px" }}
      type="submit"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoadingRef ? 'Loading…' : '   CONTINUE'}
    </Button>
  
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailSubmit;
