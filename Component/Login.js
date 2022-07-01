import axios from "axios";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Heart from "../public/Heart.svg";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [valid, setValid] = useState(false);

  // async function login(dat) {
  //   try {
  //     let res = await axios.post("/api/login", dat);
  //     const response = res.data;
  //     // console.log(response.data);
  //     setValid(false);
  //     // localStorage.setItem("token", response.data.data);
  //     // window.location.reload()
  //     // window.location.href = "/linkPage";
  //   } catch (err) {
  //     console.log(err, err);
  //     setValid(true);
  //   }
  // }

  async function formSubmitHandler(event) {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
  
    });
      console.log(res)
      if (res?.error) {
        // setError(res.error);
        console.log(res.error);
        setValid(true);
        notifyError("Invalid login details. Please try again or signup below.")
        

      } else {
        // setError(null);
      }
      if (!res.error) {router.push('/dashboard')};
    
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
      <section className="profile-sec mt-4 pb-0" style={{height:"78vh"}}>
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
            <form className="input-sec input-top" id="form-setik" onSubmit={formSubmitHandler}>
              <div className="input-line iptset-line"></div>
              <img src={Heart.src} className="mt-2 " />
              <h3 className="heading-text mt-3">
                {" "}
              
                 HealthiWealthi™ LOGIN
              </h3>
              <p style={{fontSize:"13px", paddingTop:"7px", margin:"0"}}> Unleash your potential on HealthiWealthi™ living healthier, happier, longer, and richer.
</p>





              <div className="input-item">
                <h6 className="item-text">EMAIL</h6>
                <input
                  className="textinput"
                  required
                  type="email"
                  name="username"
                  ref={emailInputRef}
                />
              </div>

              <div className="input-item" style={{ marginTop: "25px", marginBottom:"30px" }}>
                <h6 className="item-text">PASSWORD</h6>
                <input
                  className="textinput"
                  required
                  type="password"
                  name="last-name"
                  ref={passwordInputRef}
                />
               
              </div>
              {valid && <p style={{ color: "red", margin:"0", fontSize:"15px" }}> Invalid login details. Please try again or signup below. </p>}
              {/* <Link href={"/creditPage"}> */}
              <button
                className="btn btn-round btn-warning w-100 "
                style={{ marginTop: "5px" }}
                type="submit"
              >
                CONTINUE
              </button>
              {/* </Link> */}
              <p className="by-text mb-0">
                {" "}
                By continuing you agree to our cookie policy.
              </p>
              <Link href={'/emailVerify'}>
              <p className="by-text" style={{cursor:"pointer", marginTop:"5px", fontSize:"13px", color:"#2990DF"}}>
                
                {" "}
             Forget Your Password
              </p>
              </Link>

              <div className="para-set">
                <Link href={"/"}>
                  <p className="iptpara-text">
                    Are you new here?{" "}
                    <a
                      href="home-page.html"
                      style={{
                        fontWeight: "bold",
                        fontSize: "13px",
                        color: "#D32286",
                      }}
                    >
                      Sign Up
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

export default Login;
