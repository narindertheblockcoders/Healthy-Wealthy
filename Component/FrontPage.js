import React, { useRef, useState, useEffect } from "react";
import Heart from "../public/Heart.svg";
import Mail from "../public/mail.png";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import Button from 'react-bootstrap/Button';


const FrontPage = () => {
  const emailRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRef, setLoadingRef] = useState(false);
  const [error, setError]= useState(false)
  const [verify, setVerify]=useState(false)
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 4000));
  }
  const router = useRouter();
  async function register(data) {
    try {
      let res = await axios.post("/api/register", data);
      const rec = res.data.data;
      
      
      if (rec) {
        console.log(rec);
        
        notify("Check your inbox for the verification code email");
        setError(false)
        setIsLoading(false);
        setVerify(true)
        setTimeout(() => {
          router.push("/verification");
        }, 3000);
      }
    } catch (err) {
      console.log(err, "Err");
      
      notifyError("This email exists already. Login below.");
      setError(true)
      setIsLoading(false );
      setLoadingRef(false);
    }
  }
  
  function onSubmitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    const email = emailRef.current.value;
    
    localStorage.setItem("email", email);
    const data = { email };

    register(data);
    
    
    
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
          setLoadingRef(false);
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
              <div className="input-line"></div>
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
                <div className="input-group height-set flex-nowrap mt-2 mb-5">
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
                  <p style={{ color: "red", fontSize:"13px", fontWeight:"600", margin:"0" }}> This email exists already. Login below. </p>
                )}
                   {verify && (
                  <p style={{ color: "green", fontSize:"13px", fontWeight:"600", margin:"0" }}> Check your inbox for the verification code email </p>
                )}
         

           
           <Link href={'/login'}>

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

        </Link>
    {/* {error && (
                  <p style={{ color: "red", fontSize:"13px" }}> This email exists already. Login below. </p>
                )}
                   {verify && (
                  <p style={{ color: "green", fontSize:"13px" }}> Check your inbox for the verification code email </p>
                )} */}



              {/* <button
                href="funds-page.html"
                Spinner 
                disabled={isLoading}
                className="btn btn-round btn-warning w-100 p-0 "
                style={{ marginTop: "175px" }}
                type="submit"
             
           
              >
                CONTINUE
              </button> */}

              {/* </Link> */}
              <p className="by-text">
                {" "}
                By continuing you agree to our privacy policy.
              </p>

              <div className="para-set">
                <Link href={"/login"}>
                  <p className="iptpara-text">
                    Already a Member?{" "}
                    <a
                      href="/login"
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        color: "#D32286",
                      }}
                    >
                      {" "}
                      Login
                    </a>
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrontPage;
