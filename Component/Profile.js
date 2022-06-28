import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {signIn} from "next-auth/react"
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
        router.push("/buy");
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

  return (
    <div>
      <section className="profile-sec pt-4 pb-4">
        <div className="container">
          <div className="row justify-content-center">
            <form className="input-sec" onSubmit={formSubmitHandler}>
              <div className="line profile-line"></div>
              <h3 className="heading-text pink-text mt-2"> Secure Your Profile</h3>
              <p style={{fontSize:"10px", paddingTop:"7px", margin:"0"}}>and access your HealthiWealthi™
              {/* <br/> */}
RXHEAL dashboard with a 7 minute
 {/* <br/> */}
video that will change your life.</p>
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
                <h6 className="item-text">CONFIRMPASSWORD</h6>
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
