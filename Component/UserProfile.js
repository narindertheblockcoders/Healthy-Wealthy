import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Arrow from "../public/arrow.svg";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import Button from 'react-bootstrap/Button';



const UserProfile = () => {

  const firstNameRef =useRef()
  const lastNameRef = useRef()
  const  emailRef =useRef()
  const contactNumberRef = useRef()
  const addressRef = useRef()
  const cityRef = useRef()
  const stateRef = useRef()
  const countryRef = useRef()
  const zipCodeRef = useRef()
  const [verify, setVerify]=useState(false)


  const [isLoadingRef, setLoadingRef] = useState(false);

const [isLoading,setIsLoading]= useState(false)
  const [isFinalData, setIsFinalData] = useState();
  // const [profileData,setProfileData] =useState()
  async function userProfile() {
    try {
      // const token = localStorage.getItem("token")
      // console.log(token, "for api");
      let res = await axios.post("/api/userProfile");
      const response = res.data;
      console.log(response.data);
      // localStorage.setItem("token", response.data);
      setIsFinalData(response.data)
      // window.location.href = "/linkPage";
    } catch (err) {
      console.log(err, err);
    }
  }
  
  
  
  useEffect(() => {
    userProfile()
  }, [])
  
  
  const router = useRouter()
  async function userData(data) {
    try {
      const token = localStorage.getItem("token")
      console.log(token, "for api");
      let res = await axios.post("/api/userdata",{token:token,data} );
      const request = res.data.data;
      console.log(request.data, 'data fet');
      // setProfileData (request.data)
      setIsFinalData(request.data)
      // console.log(profileData,"profile dara")
      setIsLoading(true)
      setVerify(true)
      notify ('User Detail Updated')
      setTimeout(() => {
        router.push("/linkPage");
      }, 3000);
      
    } catch (err) {
      console.log(err, err);
      // notifyError('Invalid Detail')
    }
  }



  function formSubmitHandler(event) {
    event.preventDefault();
    const firstName = firstNameRef.current.value
    const lastName = lastNameRef.current.value
    const email = emailRef.current.value
    const contactNumber = contactNumberRef.current.value
    const address = addressRef.current.value
    const city = cityRef.current.value
    const state = stateRef.current.value
    const country = countryRef.current.value
    const zipcode = zipCodeRef.current.value

    const data = {
      firstName,
      lastName,
      email,
      contactNumber,
      address,
      city,
      state,
      country,
      zipcode
    }

    console.log(data, "all data here")

    userData(data)

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


    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 3000));
    }


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
      <section className="profile-sec pb-0">
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
            <form className="input-sec mb-5" onSubmit={formSubmitHandler}>
              <div
                className="line userprofile-line" ></div>
              <h3 className="heading-text pink-text mt-2 mb-5">
                <Link href={'/linkPage'}>
                  <span className="arrows-icon" style={{ position: "relative", left: "-23%", cursor: "pointer" }}  >
                    <img src={Arrow.src} />
                  </span>
                </Link>
                Complete Profile</h3>

              <div className="name-sec">
                <div
                  className="input-item item-set"
                  style={{ marginRight: "10px" }}
                >
                  <h6 className="item-text">FIRST NAME</h6>
                  <input
                  ref={firstNameRef}
                    required
                    // value={profileData?.firstName}
              
                    className="textinput"
                    type="name"
                    name="username"
                    placeholder={isFinalData?.firstName}

                  />
                </div>

                <div
                  className="input-item item-set"
                  style={{ marginLeft: "10px" }}
                >
                  <h6 className="item-text">LAST NAME</h6>
                  <input
                  ref={lastNameRef}
                    required
                  //  value={profileData?.lastName}
                    className="textinput"
                    type="last name"
                    name="last-name"
                    placeholder={isFinalData?.lastName}
                  />
                </div>
              </div>
              {/* 
              <div className="input-item item-set">
                <h6 className="item-text">EMAIL</h6>
                <input disabled required className="textinput" name="email" value={isFinalData?.email} />
              </div> */}
              <div className="name-sec" >
                {/* <h6 className="item-text">EMAIL</h6> */}
                <div className="input-item item-set" style={{ marginRight: "10px", display: "flex" }} >
                  <input ref={emailRef} disabled  required className="textinput mt-0" name="email" placeholder={isFinalData?.email} />
                  <Link href={'/emailChange'}>

                    <button type="button" className="btn btn-roundes  btn- w-50  mt-0 ">
                      MODIFY
                    </button>
                  </Link>

                </div>
              </div>
              <div className="input-item item-set">
                <h6 className="item-text">CONTACT NUMBER</h6>
                <input ref={contactNumberRef}  required  placeholder={isFinalData?.contactNumber} className="textinput" name="contact no" />
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">ADDRESS</h6>
                <input  ref={addressRef} required placeholder={isFinalData?.address} className="textinput" name="address" />
              </div>
              <div className="input-item item-set">
                <h6 className="item-text">CITY</h6>
                <input ref={cityRef}  required placeholder={isFinalData?.city} className="textinput" name="city" />
              </div>
              <div className="input-item item-set">
                <h6 className="item-text">STATE/PROVINCE</h6>
                <input ref={stateRef} required placeholder={isFinalData?.state} className="textinput" name="state" />
              </div>

              <div className="input-item item-set">
                <h6 className="item-text"> COUNTRY </h6>
                <input ref={countryRef} required placeholder={isFinalData?.country} className="textinput" name="country" />
              </div>

              <div className="input-item item-set mb-4">
                <h6 className="item-text">ZIP Code</h6>
                <input ref={zipCodeRef} required placeholder={isFinalData?.zipcode} className="textinput" name="zip code" />
              </div>
              {/* 
              <div className="input-item item-set">
                <h6 className="item-text">PASSWORD</h6>
                <input required className="textinput" type="password" name="password" />
              </div> */}

              {/* <div className="input-item item-set">
                <h6 className="item-text">CONFIRMPASSWORD</h6>
                <input required className="textinput" type="password" name="confirmpassword" />
                {/* {isValid && <p style={{ color: "red" }}> Password doesn't match </p>} */}

              {/* </div> */}
              {/* <Link href={"/login"}> */}

              {/* </Link> */}
              {/* <button
                href="funds-page.html"
               disabled={isLoading}
               onClick={!isLoading ? handleClick : null}
                className="btn btn-round btn-warning w-100 p-0"
                style={{ marginTop: "50px" }}
                type="submit"
              >
                UPDATE
              </button> */}
      {verify && (
                    <p style={{ color: "green", fontSize:"13px", fontWeight:"600", margin:"0" }}> User Detail Updated </p>
                  )}
              <Button
      variant="primary"
      className="btn btn-round btn-warning w-100 p-0 "
      style={{ marginTop: "5px" }}
      type="submit"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoadingRef ? 'Loading…' : '   UPDATE'}
    </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
