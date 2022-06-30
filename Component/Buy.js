import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import Script from "next/script";
import Heart from "../public/Heart.svg";



const Buy = () => {
  const forInputRef = useRef();
  const [tokenPrice, setTokenPrice] = useState(null);
  const [finalValue, setFinalValue] = useState(null);
  const [amount, setAmount] = useState(0 );
  const router = useRouter();

  async function currencyFunction() {
    try {
      let res = await axios.post("/api/tokenPrice");
      const crc = res.data;
      console.log(crc);
      setTokenPrice(crc.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    currencyFunction();
  }, []);

  function onSubmitHandler(e) {
    e.preventDefault();

    const enteredFor = forInputRef.current.value;

    const query = {
      tokenPrice,
      enteredFor,
      finalValue,
    };

    localStorage.setItem("query", JSON.stringify(query));
    router.push("/creditPage");
  }
  function onChangeHandler() {
    (e)=>e.current.value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    const enteredFor = forInputRef.current.value;
    setAmount(enteredFor);
    setFinalValue(enteredFor / tokenPrice);
  }

  return (
    <div>
      <section className="profile-sec pb-3 pt-4 ">
        <div className="container">
          <div className="row justify-content-center">
            <form
              className="input-sec iptset-line width-set "
              onSubmit={onSubmitHandler}
            >
              <div className="input-line buy-line"></div>
<div className="buy-header">

              <img src={Heart.src} className="mt-2 " />
              <h3 className="heading-text mt-2" id="ptext-set">
                {" "}
              
                Own RXHEAL
              </h3>
              <p className="pt-1" style={{fontSize:"13px",  margin:"0"}}> Own RXHEAL and unleash your potential on HealthiWealthi™ living healthier, happier, longer, and richer.

</p>
<div className="input-line buy-line" id="buy-line"></div>
</div>

              <div className="input-item "  id="set-text" >
                <div className="buy-set">
                <h6 className="item-text w-100" style={{fontSize:"16px"}}>CURRENT RXHEAL PRICE</h6>
                <div className="input-group  input-set  set-buy" >
                  <h4 className="price-text">
                 {tokenPrice}
                  </h4>
                </div>
                </div>
              </div>


<div className="buy-setting">
              <div className="input-item" id="item-setting" >
                <h6 className="item-text">FOR</h6>
                <div className="input-group  input-set mt-2">
                  <input
                    type="number"
                    required
                    ref={forInputRef}
                    style={{borderRadius: "10px 0 0 10px"}}
                    onChange={onChangeHandler}
                    className="form-control"
                    placeholder="1000"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    
                  />


                    <button
                    className="btn  btn-outline-secondary btn-style"
                    style={{width:"32%",borderRadius:"10px", borderRadius: "0 10px 10px 0" }}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    USD
                  </button>

               {/* <button
                      className="btn-style"
                      style={{
                        height: "53px",
                        paddingRight: "35px !important",
                        borderRadius: "0 0.25rem 0.25rem 0",
                      }}>
                  
                      USD
                      </button>
                  */}
                </div>
              </div>

              <div className="input-item " id="item-setting">
                <h6 className="item-text">YOU RECEIVE</h6>
                <div className="input-group  input-set mt-2">
                  <input style={{borderRadius: "10px 0 0 10px"}}
                    className="form-control"
                    disabled
                    
                    // pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                    // data-type="currency"

                    defaultValue={finalValue }

                    placeholder="0.00945"
                    aria-label=" amount"
                  />

                  <button
                    style={{borderRadius: "0 10px 10px 0"}}
                    className="btn  btn-outline-secondary btn-style"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    RXHEAL
                  </button>
                </div>
              </div>
</div>

<div  className="btn-buysec">
  <button type="button"   onClick={(e)=>{console.log(forInputRef.current.value = parseInt(forInputRef.current.value) + 100)}} className="buy-btntst">100</button>
  <button type="button"   onClick={(e)=>{console.log(forInputRef.current.value = parseInt(forInputRef.current.value) + 1000)}} className="buy-btntst" id="num-pad">1000</button>
  <button type="button"  onClick={(e)=>{console.log(forInputRef.current.value = parseInt(forInputRef.current.value) + 5000)}}  className="buy-btntst" id="num-pad">5000</button>

</div>


{/* 
              <a href="#" target="_blank" className="systeme-show-popup-3389131">Click me</a>
              <Script id="form-script-tag-3389131"  target="_blank" src="https://www.healthiwealthi.net/public/remote/page/48549691423a09a08ff4b1955cbdb0a41ab9559.js"></Script>

              <Script id="form-script-tag-3258113" src="https://www.rxheal.me/public/remote/page/46707985906fa5108279fea0f049cefd9880264.js"></Script> */}
              {/* <div className="input-item">
                <h6 className="item-text">SUMMARY</h6>
            
                
                  <option className="form-control  mt-2"   style={{ color: "#6a6a7a", height:"53px", paddingTop:"15px", fontSize:"1rem", backgroundImage:"none !important" }}
                  aria-label=".form-select-lg example">
                    You get {finalValue} {' '}
                      RXHEAL for {parseInt(amount).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})} 
                  </option>
                 
              </div> */}

       

              <div className="input-item benefit-type">
                <h6 className="item-text" style={{fontSize:"18px", fontWeight:"bold", marginBottom:"10px"}}>YOUR BENEFITS</h6>
                <ul>
                  <li>Benefit 1</li>
                  <li>Benefit 2</li>
                  <li>Benefit 3</li>
                  <li>Benefit 4</li>
                  <li>Benefit 5</li>
                </ul>

                
                </div>

              <button
                className="btn btn-round btn-warning w-100 "
                style={{ marginTop: "35px" }}
                type="submit"
                id="buy-btnton"
              >
                CONTINUE
              </button>
              {/* </Link> */}
              <p className="by-text mb-0">
                By continuing you agree to our{" "}
                privacy policy.{" "}
              </p>

              {/* <div className="para-set">
                <p className="iptpara-text">Are you new here? <a href="home-page.html" style={{fontWeight: "bold",  fontSize: "15px", color: "#D32286"}}>Sign Up</a></p>
              </div>  */}
            </form>
          </div>
        </div>
      </section>
      <div className="text-set mt-0">
        <Link href={'/dashboard'}>
        <p style={{ cursor: "pointer" }}>Skip for Now</p>
        </Link>
      </div>
    </div>
  );
};

export default Buy;
