import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {signIn} from "next-auth/react"
import Link from "next/link";
import Arrow from "../public/arrow.svg";
import { ToastContainer, toast } from "react-toastify";



const Profile = () => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const [email, setEmail] = useState(null);
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const router = useRouter();

  const [isValid, setIsValid] = useState(false);

    useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);
  async function profileFill(data) {
    try {
      let res = await axios.post("/api/fillProfile", data);
      const record = res.data;
      console.log(record, "hii man");
      let { email, password } = data;
      const rest = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      console.log(rest, "anything");
      if (rest?.error) {
        // setError(res.error);
        console.log(rest.error);
        // setValid(true);
      } else {
        // setError(null);
      }
      if (!rest.error) {
        router.push("/investPage");
      }
      // localStorage.setItem("token", record.data.data);
      // window.location.reload();
    } catch (err) {
      console.log(err, "hello");
    }
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    const firstName = firstNameInputRef.current.value;
    const lastName = lastNameInputRef.current.value;
    const password = passwordInputRef.current.value;
    const confimPassword = confirmPasswordInputRef.current.value;

    if (password !== confimPassword) {
      setIsValid(true);
      notifyError(" Password doesn't match");

      return;
    }
    // router.push("/buy");

    const local = {
      firstName,
      lastName,
      email,
      password,
      confimPassword,
    };
    console.log(local, "sxqwdqwdx");

    localStorage.setItem("profile", JSON.stringify(local));

    profileFill(local);
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
      <section className="profile-sec  pb-4" >
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
            <form className="input-sec" onSubmit={formSubmitHandler}>
              <div className="line profile-line"></div>
              <h3 className="heading-text pink-text mt-2"> 
              {/* <Link href={'/verification'}>
                  <span className="arrows-icon" style={{ position: "relative", left: "-15%", cursor: "pointer" }}  >
                    <img src={Arrow.src} />
                  </span>
                </Link> */}
                Complete Your Profile</h3>
              <p style={{fontSize:"14px", paddingTop:"7px",  margin:"0"}}>To access your HealthiWealthi™RXHEAL dashboard and the 7-minute Welcome Video that will change your life.</p>
              <div className="name-sec">
                <div
                  className="input-item item-set"
                  style={{ marginRight: "10px" }}
                >
                  <h6 className="item-text">FIRST </h6>
                  <input
                    ref={firstNameInputRef}
                    required
                    className="textinput"
                    type="name"
                    name="username"
                  />
                </div>

                <div
                  className="input-item item-set"
                  style={{ marginLeft: "10px" }}
                >
                  <h6 className="item-text">LAST </h6>
                  <input
                    ref={lastNameInputRef}
                    required
                    className="textinput"
                    type="last name"
                    name="last-name"
                  />
                </div>
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">EMAIL</h6>
                <input
                  disabled
                  required
                  className="textinput"
                  defaultValue={email}
                  name="email"
                />
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">PASSWORD</h6>
                <input
                  ref={passwordInputRef}
                  required
                  className="textinput"
                  type="password"
                  name="password"
                />
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">CONFIRM PASSWORD</h6>
                <input
                  ref={confirmPasswordInputRef}
                  required
                  className="textinput"
                  type="password"
                  name="confirmpassword"
                />
                {isValid && (
                  <p style={{ color: "red" }}> Password doesn't match </p>
                )}
              </div>
              {/* <Link href={"/login"}> */}
              <button
                href="funds-page.html"
                className="btn btn-round btn-warning w-100 "
                style={{ marginTop: "30px" }}
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

export default Profile;
