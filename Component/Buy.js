import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

const Buy = () => {
  const forInputRef = useRef();
  const [tokenPrice, setTokenPrice] = useState(null);
  const [finalValue, setFinalValue] = useState(null);
  const [amount, setAmount] = useState(null);
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
      <section className="profile-sec pb-3 pt-5 ">
        <div className="container">
          <div className="row justify-content-center">
            <form
              className="input-sec iptset-line width-set "
              onSubmit={onSubmitHandler}
            >
              <div className="input-line buy-line"></div>

              <h3 className="heading-text " style={{ textAlign: "left" }}>
                {" "}
                Own RXHEAL{" "}
              </h3>

              <div className="input-item" style={{display:"flex", alignItems:"center", }}>
                <h6 className="item-text" id="text-width">Currency Price</h6>
                <div className="input-group  input-set " style={{height:"unset !important", }}>

                  <h4 className="price-text">
                    
                 {tokenPrice}
                
                  </h4>

              
                </div>
              </div>

              <div className="input-item mt-3">
                <h6 className="item-text">FOR</h6>
                <div className="input-group  input-set mt-2">
                  <input
                    type="text"
                    required
                    ref={forInputRef}
                    // value={}
                    onChange={onChangeHandler}
                    className="form-control"
                    placeholder="300"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    
                  />

                  <Dropdown>
                    <Dropdown.Toggle
                      className="btn-style"
                      style={{
                        height: "53px",
                        paddingRight: "35px !important",
                        borderRadius: "0 0.25rem 0.25rem 0",
                      }}
                    >
                      USD
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <div className="input-item">
                <h6 className="item-text">YOU RECEIVE</h6>
                <div className="input-group  input-set mt-2">
                  <input
                    className="form-control"
                    disabled
                    // pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                    // data-type="currency"

                    defaultValue={finalValue?.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })} 

                    placeholder="0.00945"
                    aria-label=" amount"
                  />

                  <button
                    className="btn  btn-outline-secondary btn-style"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    RXHEAL
                  </button>
                </div>
              </div>

              <div className="input-item">
                <h6 className="item-text">SUMMARY</h6>
              
                {/* <select
                  className="form-select form-select-lg mb-3 textinput"
                  style={{ color: "#6a6a7a" }}
                  aria-label=".form-select-lg example"
                > */}
                
                  <option className="form-control  mt-2"   style={{ color: "#6a6a7a", height:"53px", paddingTop:"15px", fontSize:"1rem", backgroundImage:"none !important" }}
                  aria-label=".form-select-lg example">
                    You get {finalValue?.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})}  RXHEAL for ${amount?.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})} 
                  </option>
                  {/* <option defaultValue="1">One</option>
                  <option defaultValue="2">Two</option>
                  <option defaultValue="3">Three</option> */}
                {/* </select> */}
              </div>

              {/* <Link href={"/creditPage"}> */}
              <button
                className="btn btn-round btn-warning w-100 "
                style={{ marginTop: "35px" }}
                type="submit"
              >
                CONTINUE
              </button>
              {/* </Link> */}
              <p className="by-text mb-0">
                By continuing you agree to our{" "}
                <span style={{ fontWeight: "bold" }}> privacy policy.</span>{" "}
              </p>

              {/* <div className="para-set">
                <p className="iptpara-text">Are you new here? <a href="home-page.html" style={{fontWeight: "bold",  fontSize: "15px", color: "#D32286"}}>Sign Up</a></p>
              </div>  */}
            </form>
          </div>
        </div>
      </section>
      <div className="text-set mt-0">
        <Link href={'/linkPage'}>
        <p style={{ cursor: "pointer" }}>Skip for Now</p>
        </Link>
      </div>
    </div>
  );
};

export default Buy;
