import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import Script from "next/script";
import Heart from "../public/Heart.svg";
import Arrow from "../public/arrow.svg";
import VideoModal from "./ui/VideoModal";
import Button from "react-bootstrap/Button";
import $ from "jquery"

const Buy = () => {
  const forInputRef = useRef();
  const [tokenPrice, setTokenPrice] = useState(null);
  const [finalValue, setFinalValue] = useState(10000);
  const router = useRouter();
  const [amount, setAmount] = useState(router?.query?.amount || 100);
  const [modalShow, setModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRef, setLoadingRef] = useState(false);




  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 4000));
  }

  console.log(router.query.amount);

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
    setLoadingRef(true);
    setIsLoading(true);

    router.push({
      pathname: "/creditPage",
      query: { USD: enteredFor, total: finalValue },
    });
  }
  function onChangeHandler() {
    (e) =>
      e.current.value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    console.log(amount, "change");
    const enteredFor = forInputRef.current.value;
    setAmount(enteredFor);
    setFinalValue(enteredFor / tokenPrice);
  }

  function onAddHandler(e) {
    e.preventDefault();
    console.log(amount, "add");
    if (forInputRef.current.value == "") {
      forInputRef.current.value = e.currentTarget.value;
      return;
    }
    forInputRef.current.value = parseInt(e.currentTarget.value);
    setAmount(parseInt(e.currentTarget.value));
    setFinalValue(parseInt(forInputRef.current.value) / tokenPrice);
  }

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoadingRef(true);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoadingRef(false);

  let n = finalValue;
let str = n.toLocaleString("en-US");
console.log(str,"str here bro"); // "234,234.555"

// let o =forInputRef.current.value;
// let sta = o.toLocaleString("en-US");
// console.log(sta,"str here bro"); 


  return (
    <div>
      <section className="profile-sec pb-3 pt-4">
        <div className="container">
          <div className="row justify-content-center">
            <form
              className="input-sec iptset-line width-set "
              id="fom-set"
              style={{ width: "36%", position: "relative" }}
              onSubmit={onSubmitHandler}
            >
              <div className="input-line buy-line"></div>

              <span
                onClick={() => router.back()}
                className="arrows-icon"
                id="arrows-icn"
                style={{
                  position: "absolute",
                  left: "-20%",
                  cursor: "pointer",
                }}
              >
                <img src={Arrow.src} />
              </span>
              {/* <img src="/img.png" className=" mukan"  /> */}
              {/* <img src="/reactangle.png" className="icon-set"  /> */}

              <iframe
                style={{ marginTop: "-5px", borderRadius: "10px 10px 0 0" }}
                className="iframe-setting"
                src="https://player.vimeo.com/video/728168698?h=0206ea4572&title=0&byline=0&portrait=0"
                width="100%"
                height="270px"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>

              <VideoModal show={modalShow} onHide={() => setModalShow(false)} />

              {/* <Link href={'/'}> */}

              {/* </Link> */}
              <div className="buy-header mt-3" id="buy-header">
                <h3
                  className="heading-text"
                  id="ptext-set"
                  style={{ fontSize: "20px" }}
                >
                  {" "}
                  Own RXHEAL Reward Tokens
                </h3>
                <p className="pt-1" style={{ fontSize: "14px", margin: "0" }}>
                  {" "}
                  Invest in what's important. YOU. Purchase RXHEAL starting with
                  $100 and receive extensive benefits and bonus RXHEAL.
                </p>
                {/* <div className="input-line buy-line" id="buy-line"></div> */}
              </div>

              <div className=" margin-txt" id="set-text">
                <div className="buy-set">
                  <h6
                    className="item-text w-100"
                    style={{
                      fontSize: "13px",
                      color: "#0D0D0D",
                      fontWeight: "600",
                      marginBottom: "12px",
                    }}
                  >
                    CURRENT RXHEAL PRICE - ${tokenPrice}
                  </h6>
                  {/* <h4 className="price-text"> */}
                  {/* <div className="input-group  input-set  set-buy" > */}

                  {/* </h4> */}
                  {/* </div> */}
                </div>
              </div>

              <div className="bottom-line"></div>

              <div className="padding-set">
                <div className="buy-setting " id="buy-sett">
                  <div className="input-item" id="item-setting">
                    <h6 className="item-text" style={{ color: "#D32286" }}>
                      FOR
                    </h6>
                    <div className="input-group  input-set mt-2">
                      <input
                        type="number"
                        required
                        ref={forInputRef}
                        pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                        data-type="currency"
                        // style={{ borderRadius: "10px 0 0 10px" }}
                        onChange={onChangeHandler}
                        className="form-control"
                        defaultValue={amount}
                        min="100"
                        aria-label="Dollar amount (with dot and two decimal places)"
                      />

                      <button
                        className="btn  btn-outline-secondary btn-style"
                        style={{ width: "32%" }}
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
                    <h6 className="item-text" style={{ color: "#D32286" }}>
                      YOU RECEIVE
                    </h6>
                    <div className="input-group  input-set mt-2">
                      <input
                        // style={{ borderRadius: "10px 0 0 10px" }}
                        className="form-control"
                        disabled
                        // pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                        // data-type="currency"
                        value={str}
                        placeholder="10000"
                        aria-label=" amount"
                      />

                      <button
                        // style={{ borderRadius: "0 10px 10px 0" }}
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

                <div className="btn-buysec">
                  <button
                    type="button"
                    value={100}
                    onClick={(e) => {
                      onAddHandler(e);
                    }}
                    className="buy-btntst font-set"
                  >
                    $100
                  </button>
                  <button
                    value={1000}
                    type="button"
                    onClick={(e) => {
                      onAddHandler(e);
                    }}
                    className="buy-btntst font-set"
                    id="num-pad"
                  >
                    $1000
                  </button>

                  <button
                    type="button"
                    value={5000}
                    onClick={(e) => {
                      onAddHandler(e);
                    }}
                    className="buy-btntst font-set"
                    id="num-pad"
                  >
                    $5000
                  </button>
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
                  <h6
                    className="item-text"
                    style={{
                      fontSize: "17px",
                      fontWeight: "600",
                      marginBottom: "9px",
                      color: "#D32286",
                    }}
                  >
                    {" "}
                    BENEFITS
                  </h6>
                  {(amount >= 100) & (amount < 1000) ? (
                    <ul>
                      <li style={{ fontSize: "14px", fontWeight: "bold" }}>
                        $100 - $999
                      </li>
                      <li className="rx-text">
                        <img
                          src="/checkPink.svg"
                          style={{ paddingRight: "10px" }}
                        />{" "}
                        <span style={{ paddingRight: "5px" }}>PLUS</span> 100
                        RXHEAL Bonus Tokens
                      </li>
                      <li className="rx-text">
                        <img
                          src="/checkPink.svg"
                          style={{ paddingRight: "10px" }}
                        />{" "}
                        Book HealthiWealthi ($15 value)
                      </li>
                      <li className="rx-text">
                        <img
                          src="/checkPink.svg"
                          style={{ paddingRight: "10px" }}
                        />{" "}
                        Book Lifestyle Medicine Works ($20 value)
                      </li>
                    </ul>
                  ) : null}
                  {amount > 999 && amount < 5000 ? (
                    <ul>
                      <li
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          marginTop: "10px",
                        }}
                      >
                        {" "}
                        $1,000 - $4,999
                      </li>
                      <li className="rx-text">
                        <img
                          src="/checkPink.svg"
                          style={{ paddingRight: "10px" }}
                        />{" "}
                        <strong style={{ paddingRight: "5px" }}>PLUS</strong>{" "}
                        1,000 RXHEAL Bonus Tokens
                      </li>
                      <li className="rx-text">
                        <img
                          src="/checkPink.svg"
                          style={{ paddingRight: "10px" }}
                        />{" "}
                        Book HealthiWealthi ($15 value)
                      </li>
                      <li className="rx-text">
                        <img
                          src="/checkPink.svg"
                          style={{ paddingRight: "10px" }}
                        />{" "}
                        Lifestyle Medicine Summit Premium Ticket ($197 value)
                      </li>

                      <li>
                        <img
                          src="/checkPink.svg"
                          style={{ paddingRight: "10px" }}
                        />{" "}
                        The Art & Science of Self-Healing 101 Course ($297
                        value)
                      </li>
                    </ul>
                  ) : null}
                  {amount > 4999 ? (
                    <ul>
                      <li
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          marginTop: "10px",
                        }}
                      >
                        {" "}
                        $5,000 - $10,000
                      </li>
                      <li className="rx-text">
                        <img
                          src="/checkPink.svg"
                          style={{ paddingRight: "10px" }}
                        />{" "}
                        <strong style={{ paddingRight: "5px" }}>PLUS</strong>{" "}
                        5,000 RXHEAL Bonus Tokens
                      </li>
                      <li className="rx-text">
                        <img
                          src="/checkPink.svg"
                          style={{ paddingRight: "10px" }}
                        />{" "}
                        Book HealthiWealthi ($15 value)
                      </li>
                      <li className="rx-text">
                        <img
                          src="/checkPink.svg"
                          style={{ paddingRight: "10px" }}
                        />{" "}
                        Lifestyle Medicine Summit Premium Ticket ($197 value)
                      </li>

                      <li className="rx-text">
                        <img
                          src="/checkPink.svg"
                          style={{ paddingRight: "10px" }}
                        />{" "}
                        The Art & Science of Self-Healing 101 Course ($297
                        value)
                      </li>
                      <li className="rx-text">
                        <img
                          src="/checkPink.svg"
                          style={{ paddingRight: "10px" }}
                        />{" "}
                        HealthiWealthi™ Coach Training Course ($997 value)
                      </li>
                      <li className="rx-text">
                        <img
                          src="/checkPink.svg"
                          style={{ paddingRight: "10px" }}
                        />{" "}
                        $1,000 Lifestyle Prescriptions® University Training
                        Scholarship
                      </li>
                    </ul>
                  ) : null}
                </div>

                {/* <button
                className="btn btn-round btn-warning  "
                style={{ marginTop: "30px", width:"87%" }}
                type="submit"
                id="buy-btnton"
              >
                CONTINUE
              </button> */}

                <Button
                  variant="primary"
                  className="btn btn-round btn-warning  "
                  style={{ marginTop: "36px", width: "90%" }}
                  type="submit"
                  disabled={isLoading}
                  onClick={!isLoading ? handleClick : null}
                >
                  {isLoadingRef ? "Loading…" : "   CONTINUE"}
                </Button>

                {/* </Link> */}
                <p className="by-text ">
                  By continuing you agree to our privacy policy.{" "}
                </p>

                {/* <div className="para-set">
                <p className="iptpara-text">Are you new here? <a href="home-page.html" style={{fontWeight: "bold",  fontSize: "15px", color: "#D32286"}}>Sign Up</a></p>
              </div>  */}
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="text-set mt-0" id="skip-page">
        <Link href={"/dashboard"}>
          <p style={{ cursor: "pointer" }}>Skip for Now</p>
        </Link>
      </div>
    </div>
  );
};

export default Buy;
