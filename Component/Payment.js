import React, { useEffect, useState } from "react";
import Arrow from "../public/arrow.svg";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";

const Payment = () => {
  const [usd, setUSD] = useState(0);
  const [finalRes, setFinalRes] = useState();
  const [price, setPrice] = useState(null);
  const [isLoading,setIsLoading]=useState(false)

  const router = useRouter();

  async function payment() {
    try {
      let res = await axios.post("/api/payment");
      const record = res.data;
      let ud = await JSON.parse(localStorage.getItem("query"));
      setUSD(ud.enteredFor);
      console.log(JSON.parse(localStorage.getItem("query")));
      setPrice(record.arr);
      setFinalRes(record.data.data);
    } catch (err) {
      console.log(err, "hello");
    }
  }

  async function formPut(e) {
    let currency = e?.currentTarget.value;
    console.log(e?.currentTarget.value);
    // return;
    try {
      const local = await localStorage.getItem("query");
      const localValue = JSON.parse(local);
      // const token = localStorage.getItem("token");
      let finalAmount = usd / price[currency - 2];

      const data = {
        usdAmount: localValue.enteredFor,
        tokenQuantity: localValue.finalValue,
        tokenPrice: localValue.tokenPrice,
        finalAmount: finalAmount.toFixed(4),
        paymentMode: 2,
        currencyId: currency,
        // token,
      };

      console.log(data, "Parse data on payment form");

      let res = await axios.post("/api/formfill", data);
      const response = res.data;
      console.log(response.data.message);
      setIsLoading(true)
      router.push({
        pathname: "/paymentForm",
        query: { via: currency, finalAmount: finalAmount },
      });
    } catch (err) {
      console.log(err, "error-1");
    }
  }

  async function currencyData() {
    try {
      let res = await axios.post("/api/currencydata");
      const response = res.data;
      console.log(response, "currencyData on payment form");
    } catch (err) {
      console.log(err, "error-2");
    }
  }

  // useEffect (()=> {
  //   currencyData()
  // }, [])

  function formSubmitHandler(event) {
    event.preventDefault();
  }

  useEffect(() => {
    payment();
  }, []);

  return (
    <div>
        
      <section className="profile-sec verify-hight" >
        <div className="container">
          <div className="row justify-content-center">
            <form className="input-sec input-top" onSubmit={formSubmitHandler}>
              <div className="input-line credit-line" id="cred-line"></div>

              <h3 className="heading-text mt-0">
                <Link href={"/creditPage"}>
                  <span
                    className="arrow-icon"
                    style={{ position: "relative", left: "-10%" }}
                  >
                    <img src={Arrow.src} />
                  </span>
                </Link>
                Select Payment Mode
              </h3>

              {finalRes
                ? finalRes.map((item) => {
                    if (item.id == 1) return;
                    return (
                      <div key={item.id} className="input-item mt-3">
                        {/* <Link href={'/paymentForm'}> */}
                        <button
                          type="button"
                          disabled={isLoading}
                          onClick={(e) => {
                            formPut(e);
                         
                          }}
                          value={item.id}
                          className="btn  credit-btn mt-2"
                          style={{ padding: "15px !important" }}
                        >
                          Pay with {item.description}{" "}
                          {(usd / price[item.id - 2]).toFixed(4)}
                        </button>
                        {/* </Link> */}
                      </div>
                    );
                  })
                :   <Spinner animation="border" variant="primary" />}
              {/* <Link href={'/paymentForm'}>
              <button type="button" className="btn  credit-btn mt-2" style={{padding:"15px !important"}}><img className="icon-space" src={Bitcoin.src}/> Pay with Bitcoin</button> 
             </Link>
              <button type="button" className="btn  connect-btn mt-3  mb-0" style={{padding:"15px !important"}}><img className="icon-space" src={Eth.src}/>Pay with Ethereum</button>  
              <button type="button" className="btn  connect-btn mt-3 mb-0"  style={{padding:"15px !important"}}><img className="icon-space" src={Tether.src}/> Pay with USDT</button> 
             <Link href={"/pay"}>
              <button type="button" className="btn  connect-btn mt-3 mb-3" style={{padding:"15px !important"}}><img className="icon-space" src={Polygon.src}/> Pay with Polygon</button> 
     </Link> */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
