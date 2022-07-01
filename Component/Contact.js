import axios from "axios";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Heart from "../public/Heart.svg";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "next-auth/react";
import Arrow from "../public/arrow.svg";



const Login = () => {
 


  const router = useRouter()

  return (
    <div><br/><br/>
      <section className="profile-sec pt-0 mt-4 pb-0" >
        <div className="container">
          <div className="row justify-content-center ipst">
        
            {/* {/ <form className="input-sec input-top"> /} */}
              <div className="input-line iptset-line"></div>
              {/* {/ <img src={Heart.src} className="mt-2 " /> /} */}
              <span onClick={()=>router.back()} className="arrows-icon" style={{ position: "absolute", left: "-20%", cursor: "pointer" }}  >
                    <img style={{width:"1.5%"}} src={Arrow.src} />
                  </span>
              <h1 class="u-custom-font u-text u-text-default u-text-1 mt-10" style={{color:"#D32286"}}>
           
                Contact Us</h1><br/><br/>
              <h5><strog> We're here for you to answer your questions and support you on your path to be HealthiWealthi™.</strog></h5><br/>
              <div className="mainbox">
              <ul>
               
                <li  style={{textDecoration:"none", color:"#D32286", fontWeight:"600"}} id="position-set" >You Can Contact us via <img src="/email.png"></img>
                <a href="#" class="systeme-show-popup-3443593 mail-btn" style={{textDecoration:"none", color:"#D32286", fontWeight:"600"}}>Email</a>
                <script id="form-script-tag-3443593" src="https://www.healthiwealthi.net/public/remote/page/4931931cf737288ba0e8b30a751ad4c276fd7bc.js"></script>
                  </li>
                
                {/* <li  style={{textDecoration:"none", color:"#D32286", fontWeight:"600"}} id="position-set"> or via HealthiWealthi™ RXHEAL<img src="/contactus.svg"></img>
                <a href=" https://systeme.io/dashboard/funnel/1066254/edit#step3443593" target="_blank" style={{textDecoration:"none", color:"#D32286", fontWeight:"600", paddingLeft:"5px"}}>Contact US</a></li> */}
              </ul>
              </div>
              <script src="//code.tidio.co/cxqo3ntmn8twp6qa7xomks3yhutwseht.js" async></script>
             
{/* 
              {/ <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 60 60" style=""><use xlink:href="#svg-1f10"></use></svg> /}
                {/* Contact us via <a href="#" class="systeme-show-popup-3443593" style={{textDecoration:"none", color:"#D32286", fontWeight:"600"}}>email</a>  
                  <script id="form-script-tag-3443593" src="https://www.healthiwealthi.net/public/remote/page/4931931cf737288ba0e8b30a751ad4c276fd7bc.js"></script> or see HealthiWealthi™ RXHEAL
                  <a href=" https://systeme.io/dashboard/funnel/1066254/edit#step3443593" target="_blank" style={{textDecoration:"none", color:"#D32286", fontWeight:"600", paddingLeft:"5px"}}> Contact Us</a>
                
                    <script src="//code.tidio.co/cxqo3ntmn8twp6qa7xomks3yhutwseht.js" async></script>  *

              <p>
              <script id="form-script-tag-3443593" src="https://www.healthiwealthi.net/public/remote/page/4931931cf737288ba0e8b30a751ad4c276fd7bc.js"></script>
              </p>
              {/* <button 
                className="btn btn-round btn-warning w-100"
                style={{ marginTop: "5px" }}
                type="submit"
              >
                Contact Us
              </button> */}
            {/* {/ </form> /} */}
          </div>
          </div>
      </section>
    </div>
  );
};

export default Login;
