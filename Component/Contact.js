
import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Arrow from "../public/arrow.svg";


const Login = () => {
 


  const router = useRouter()

  return (
    <div>
      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            
            <form
              className="input-sec  payment-form "
              id="form-pay"
              style={{ width: "35%", padding: "30px" }}
            >
              <div className="input-line   welcome-line"></div>
                <span className="arrows-icon" onClick={()=>router.back()}  style={{ position: "relative", left: "-41%", cursor: "pointer" }}  >
                    <img id="arrow-icon" style={{width:"2.5%"}} src={Arrow.src} />
                  </span>
                <div className="wel-head mt-4"  id="heading-part">
<img src="email.png"/>
                </div>
              <div className="heading-parts mt-5"  id="heading-part">
                <h3 className="order-text" style={{color:"#D32286", fontSize:"24px !important"}}>Contact Us</h3>
                <p className="pt-2">We're here for you to answer your questions and support you on your path to be HealthiWealthi™.</p>
           
                      {/* <p lassName="pt-2 mt-0"> {transactionID?.id}  </p> */}
              </div>


              <div className="head-partes">
                </div>
              <div className="heading-parts mt-2">
                {/* <Link href={"/dashboard"}> */}
                <Script id="form-script-tag-3443593" src="https://www.healthiwealthi.net/public/remote/page/4931931cf737288ba0e8b30a751ad4c276fd7bc.js"></Script>
                <button
                  className="btn btn-round btn-warning form-btn w-50 p-0 mb-3 systeme-show-popup-3443593"
                  style={{ marginTop: "0px" }}
                  type="submit"
                >
               Email
                </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
      
      
      
      
      
      
      );
    };
    
    export default Login;
    
      
      
      
      {/* <br/><br/>
      <section className="profile-sec pt-0 mt-4 pb-0" >
        <div className="container">
          <div className="row justify-content-center ipst">
        
              <div className="input-line iptset-line"></div>
            
       
              <h1 class="u-custom-font u-text u-text-default u-text-1 mt-10" style={{color:"#D32286"}}>
              <span className="arrows-icon" onClick={()=>router.back()}  style={{ position: "relative", left: "-15%", cursor: "pointer" }}  >
                    <img style={{width:"1.5%"}} src={Arrow.src} />
                  </span>
               Contact Us</h1>
              <h5><strog> We're here for you to answer your questions and support you on your path to be HealthiWealthi™.</strog></h5><br/>
              <div className="mainbox">
              <ul>
               
                <li  style={{textDecoration:"none", color:"#D32286", fontWeight:"600"}} id="position-set" >You Can Contact us via <img src="/email.png"></img>
                <a href="#" class="systeme-show-popup-3443593 mail-btn" style={{textDecoration:"none", color:"#D32286", fontWeight:"600"}}>Email</a>
                <script id="form-script-tag-3443593" src="https://www.healthiwealthi.net/public/remote/page/4931931cf737288ba0e8b30a751ad4c276fd7bc.js"></script>
                  </li>
              </ul>
              </div>
              <script src="//code.tidio.co/cxqo3ntmn8twp6qa7xomks3yhutwseht.js" async></script>
     
          </div>
          </div>
      </section> */}

