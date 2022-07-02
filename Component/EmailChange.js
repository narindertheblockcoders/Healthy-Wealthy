import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import changePassword from "../pages/changePassword";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Arrow from "../public/arrow.svg";
import Link  from "next/link";


const EmailChange = () => {
//   const oldPasswordRef = useRef()
//   const newPasswordRef= useRef()
//   const confirmPasswordRef = useRef()
//   const sendCodeRef = useRef()
//   const [isValid, setIsValid] = useState(false);
//   const [email, setEmail] = useState()
//   const [isLoading, setIsLoading] = useState(false);
//   const  router = useRouter()
//   // const [enterfield, setEnterField] = useState(false);



//   async function passwordFill() {
//     try {
//       const token = localStorage.getItem('token')
//       console.log(token)
//       let res = await axios.post("/api", { token: token});
//       const record = res.data;
//       console.log(record, "hii man");
//       setEnterField(true)
//       setIsLoading(true);
//       // localStorage.setItem("token", record.data.data);
//       // window.location.reload();
//     } catch (err) {
//       console.log(err, "hello");
//     }
//   }
  
//   function onClickHandler() {
//     const oldPassword = oldPasswordRef.current.value
//     const password = newPasswordRef.current.value
//     const confirmPassword = confirmPasswordRef.current.value
  
//     if (!oldPassword || !password || !confirmPassword) {
//       notifyError("Please fill the details.")
//       return;
//     }
//     if (!(password===confirmPassword)) {
//       notifyError("Password doesn't match")
      
//       return;
//     }
//     setIsLoading(false);
//     passwordFill()
//     notify('otp sent')
//   }

//   async function changePass(data) {
//     try {
//       const token = localStorage.getItem('token')
//       console.log(token, 'weyfgqegfq')
//       let res = await axios.post("/api/changepassword",{token:token,data});
//       const resend = res.data.data;
//       console.log(resend, "Passsword Change");
//       notify(' change Successfuly')
//       setTimeout(()=>{

//         router.push('/linkPage')
//       },3000)
  
      
//     } catch (err) {
//       console.log(err, "SomeThing Went Wrong");
//       notifyError(' Invalid detail')
  
//     }
//   }


// function onSubmitHandler(e){
//   e.preventDefault()
//   const oldPassword = oldPasswordRef.current.value
//   const password = newPasswordRef.current.value
//   const confirmPassword = confirmPasswordRef.current.value
//   const otp = sendCodeRef.current.value

// const data = {
//   oldPassword,
//   password,
//   confirmPassword,
//   otp
// }
// console.log(data,'data here')


// if (!(password===confirmPassword)) {
//   notifyError("Password doesn't match")
//   return;
// }
// changePass(data)


// }

// const notify = (msg) =>
// toast.success(msg, {
//   position: "top-right",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
// });

// const notifyError = (msg) =>
// toast.error(msg, {
//   position: "top-right",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
// });


  return (
    
    <div>
      <section className="profile-sec pb-0 verify-hight" >
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
              <div className="line profile-line"></div>
              <h3 className="heading-text pink-text mt-2">
              <Link href={'/userProfile'}>
              <span  className="arrows-icon" style={{ position: "relative", left: "-27%", cursor:"pointer" }}  >
                    <img src={Arrow.src} />
                  </span>
                  </Link>
                 Update Email</h3>
                 


              <div className="input-item item-set mt-5">
                <h6 className="item-text">NEW EMAIL</h6>
                <input   required className="textinput" type="email" name="password" />
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">CODE</h6>
                <input  required className="textinput" type="number" name="password" />
              </div>

              {/* <div className="input-item item-set">
                <h6 className="item-text">OLD EMAIL</h6>
                <input ref={confirmPasswordRef} required className="textinput" type="password" name="confirmpassword" />
                {isValid && (<p style={{ color: "red" }}> Password doesn't match </p>)}

</div> */}
   <div className="input-item item-set">
                <h6 className="item-text">OLD EMAIL</h6>
                <div className="input-item item-set mt-0" style={{ marginRight: "10px", display: "flex" }} >
                  <input className="textinput w-50" type="email" name="username" style={{ borderRadius: " 10px 0 0 10px !important" }}  />
                  <button type="button"  className="btn btn-roundes  btn- w-50   " style={{ }}>
                    Send 
                  </button>

                </div>
              </div>


{/* <div style={{float:"left", width:"100%"}}>
                <h6 className="item-text">OLD EMAIL</h6>
              <div className="name-sec" >
                <div className="input-item item-set" style={{ marginRight: "10px", display: "flex" }} >
                  <input className="textinput w-50" type="name" name="username" style={{ borderRadius: " 10px 0 0 10px !important" }} ref={sendCodeRef} />
                  <button type="button"   disabled={isLoading} onClick={onClickHandler} className="btn btn-roundes  btn- w-50   " style={{  }}>
                    Send 
                  </button>

                </div>
                </div>
</div> */}

                {/* <div
                  className="input-item item-set"
                  style={{ marginLeft: "10px" }}
                  >

                </div> */}
                {/* {enterfield && (<p style={{ color: "red" }}> Invalid detail </p>)} */}



              {/* <Link href={"/login"}> */}
              <button
                href="funds-page.html"
                className="btn btn-round btn-warning w-100 "
                id="changemail-btn"
                style={{ marginTop: "126px", marginBottom: "20px" }}
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
