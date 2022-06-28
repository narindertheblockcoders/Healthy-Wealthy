import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import changePassword from "../pages/changePassword";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Arrow from "../public/arrow.svg";
import Link  from "next/link";


const ChangePassword = () => {
  const oldPasswordRef = useRef()
  const newPasswordRef= useRef()
  const confirmPasswordRef = useRef()
  const sendCodeRef = useRef()
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState()
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]= useState(false)
  const [errorValid, setErrorValid]= useState(false)
  const [verify, setVerify]=useState(false)

  

  

  const  router = useRouter()
  // const [enterfield, setEnterField] = useState(false);



  async function passwordFill() {
    try {
      // const token = localStorage.getItem('token')
      // console.log(token)
      let res = await axios.post("/api/sendCode");
      const record = res.data;
      console.log(record, "hii man");
      setEnterField(true)
      setIsLoading(true);
      // localStorage.setItem("token", record.data.data);
      // window.location.reload();
    } catch (err) {
      console.log(err, "hello");
    }
  }
  
  function onClickHandler() {
    const oldPassword = oldPasswordRef.current.value
    const password = newPasswordRef.current.value
    const confirmPassword = confirmPasswordRef.current.value
  
    if (!oldPassword || !password || !confirmPassword) {
      notifyError("Please fill the details.")
      setError("")
      return;
    }
    if (!(password===confirmPassword)) {
      notifyError("Password doesn't match")
      
      return;
    }
    setIsLoading(false);
    passwordFill()
    notify('Verification Code Sent')
  }
  
  async function changePass(data) {
    try {
      // const token = localStorage.getItem('token')
      // console.log(token, 'weyfgqegfq')
      let res = await axios.post("/api/changepassword",data);
      const resend = res.data.data;
      console.log(resend, "Passsword Change");
      notify(' Change Successfuly')
      setVerify(true)
      setTimeout(()=>{

        router.push('/linkPage')
      },3000)
  
      
    } catch (err) {
      console.log(err, "SomeThing Went Wrong");
      notifyError(' Invalid detail')
      setErrorValid(true)
  
    }
  }


function onSubmitHandler(e){
  e.preventDefault()
  const oldPassword = oldPasswordRef.current.value
  const password = newPasswordRef.current.value
  const confirmPassword = confirmPasswordRef.current.value
  const otp = sendCodeRef.current.value

const data = {
  oldPassword,
  password,
  confirmPassword,
  otp
}
console.log(data,'data here')
setError(false)


if (!(password===confirmPassword)) {
  notifyError("Password doesn't match")
  setError(true)

  return;
}
changePass(data)


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


  return (
    
    <div>
      <section className="profile-sec pb-0 pt-4">
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
            <form className="input-sec" onSubmit={onSubmitHandler}>
              <div className="line profile-line"></div>
              <h3 className="heading-text pink-text mt-2 ">
              <Link href={'/linkPage'}>
              <span  className="arrows-icon" style={{ position: "relative", left: "-23%", cursor:"pointer" }}  >
                    <img src={Arrow.src} />
                  </span>
                  </Link>
                 Change Password</h3>
                 


              <div className="input-item item-set mt-5">
                <h6 className="item-text">OLD PASSWORD</h6>
                <input ref={oldPasswordRef}  required className="textinput" type="password" name="password" />
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">NEW PASSWORD</h6>
                <input ref={newPasswordRef} required className="textinput" type="password" name="password" />
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">CONFIRMPASSWORD</h6>
                <input ref={confirmPasswordRef} required className="textinput" type="password" name="confirmpassword" />
                {isValid && (<p style={{ color: "red" }}> Password doesn't match </p>)}
              </div>

              <div className="name-sec mb-5" >
                <div className="input-item item-set" style={{ marginRight: "10px", display: "flex" }} >
                  <input className="textinput w-50" type="name" name="username" style={{ borderRadius: " 10px 0 0 10px !important" }} ref={sendCodeRef} />
                  <button type="button"   disabled={isLoading} onClick={onClickHandler} className="btn btn-roundes  btn- w-50   " style={{  }}>
                    Send Code
                  </button>

                </div>
                </div>

                {/* <div
                  className="input-item item-set"
                  style={{ marginLeft: "10px" }}
                  >
                </div> */}
                {/* {enterfield && (<p style={{ color: "red" }}> Invalid detail </p>)} */}



              {/* <Link href={"/login"}> */}

              {error && (
                  <p style={{ color: "red" }}> Password doesn't match </p>
                )}
                    {errorValid && (
                  <p style={{ color: "red", margin:"0px" }}> Invalid detail </p>
                )}
                       {verify && (
                  <p style={{ color: "green", fontSize:"15px", fontWeight:"600", margin:"0" }}>Change Successfuly </p>
                )}
              <button
                href="funds-page.html"
                className="btn btn-round btn-warning w-100 "
                style={{ marginTop: "0px", marginBottom: "0px" }}
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

export default ChangePassword
