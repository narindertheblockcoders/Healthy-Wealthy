import React from "react";
import { useRouter } from "next/router";

const InvestPage = () => {
  const router = useRouter();

  function onSelect(e) {
    router.push({
      pathname: "/buy/",
      query: {
        amount: e.target.value,
      },
    });

    // (`/buy/${e.target.value}`)
  }

  return (
    <div>
      <section className="profile-sec" id="invest-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form className="funds-sec">
              <div className="invest-part">
                {/* <div  className='line-part'> */}

                <h3
                  style={{
                    color: "black",
                    fontSize: "22px",
                    fontWeight: "bold",
                    margin: "0",
                  }}
                >
                  Buy RXHEAL
                </h3>
                {/* <div className='invest-line'></div> */}
                {/* </div> */}
              </div>

              <div className="invest-part mt-5">
                <div className="col-md-4   invest-head">
                  <div className="invest-item">
                    <div className="input-line  "></div>
                    <div className="invest-box">
                      <h4 className="heal-text">RXHEAL $100+</h4>
                    </div>
                    <div className="invest-box1">
                      <h4 className="own-text">Own 100,000 RXHEAL </h4>
                      <h5 className="rx-text">
                        For pre-sale $0.01 per token price
                      </h5>
                      <div className="tick-sec">
                        <div className="check-head mt-2" id="tick-sec"></div>
                        <h5 className="rx-text">
                          {" "}
                          100 RXHEAL Bonus Tokens
                        </h5>
                        
                      </div>
                      <div className="tick-sec">
                        <div className="check-head mt-2" id="tick-sec"></div>
                        <h5 className="rx-text">
                          {" "}
                          Book HealthiWealthi ($15 value)
                        </h5>
                        
                      </div>
                      <div className="tick-sec">
                        <div className="check-head mt-2" id="tick-sec"></div>
                        <h5 className="rx-text">
                          {" "}
                          Book Lifestyle Medicine Works ($20 value)
                        </h5>
                        
                      </div>
                      {/* <h5 className='rx-text'>+ Book HealthiWealthi ($15 value)</h5> */}
                      <div className="invest-bsec" id="invest-one">
                        <button
                          value={100}
                          onClick={(e) => onSelect(e)}
                          className="invest-btn mt-4 mb-3"
                          type="button"
                        >
                          {" "}
                          CONTINUE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4   invest-head">
                  <div className=" invest-item1">
                    <div className="invest-box">
                      <h4 className="heal-text">RXHEAL $1,000+</h4>
                    </div>
                    <div className="invest-box1">
                      <h4 className="own-text">Own 100,000 RXHEAL </h4>
                      <h5 className="rx-text" id="tick-sec">
                        {" "}
                        <span>1,000</span> RXHEAL Bonus Tokens
                      </h5>
                      <h5 className="rx-text">
                        {" "}
                        <div id="tick-sec">
                          {" "}
                          Book HealthiWealthi ($15 value)
                        </div>{" "}
                      </h5>

                      <div className="tick-sec">
                        <div className="check-head mt-2" id="tick-sec"></div>
                        <h5 className="rx-text">
                          {" "}
                          Lifestyle Medicine Summit Premium Ticket ($197 value)
                        </h5>
                      </div>
                      <div className="tick-sec">
                        <div className="check-head mt-2" id="tick-sec"></div>
                        <h5 className="rx-text">
                          {" "}
                          The Art & Science of Self-Healing 101 Course ($297
                          value)
                        </h5>
                      </div>
                   
                      {/* <h5 className='rx-text'>  HealthiWealthi™ Coach Training Course ($997 value)</h5> */}

                      <div className="invest-bsec" id="invest-two">
                        <button
                          value={1000}
                          onClick={(e) => onSelect(e)}
                          className="invest-btn mt-4 mb-3"
                          type="button"
                        >
                          {" "}
                          CONTINUE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <img className='logo' style={{height:"100px"}} src='/logo.png'></img></div> */}

                <div className="col-md-4   invest-head">
                  <div className=" invest-item2">
                    <div className="invest-box">
                      <h4 className="heal-text">RXHEAL $5,000+</h4>
                    </div>
                    <div className="invest-box1">
                      <h4 className="own-text">Own 100,000 RXHEAL </h4>
                      <h5 className="rx-text" id="tick-sec">
                        {" "}
                        <span style={{ color: "#D32286", fontWeight: "bold" }}>
                          5,000
                        </span>{" "}
                        RXHEAL Bonus Tokens
                      </h5>
                      <h5 className="rx-text">
                        {" "}
                        <div id="tick-sec">
                          {" "}
                          Book HealthiWealthi ($15 value)
                        </div>{" "}
                      </h5>
                      <div className="tick-sec">
                        <div className="check-head mt-2" id="tick-sec"></div>
                        <h5 className="rx-text">
                          {" "}
                          Lifestyle Medicine Summit Premium Ticket ($197 value)
                        </h5>
                      </div>
                      <div className="tick-sec">
                        <div className="check-head mt-2" id="tick-sec"></div>
                        <h5 className="rx-text">
                          {" "}
                          The Art & Science of Self-Healing 101 Course ($297
                          value)
                        </h5>
                      </div>
                      <div className="tick-sec">
                        <div className="check-head mt-2" id="tick-sec"></div>
                        <h5 className="rx-text">
                          {" "}
                          HealthiWealthi™ Coach Training Course ($997 value)
                        </h5>
                      </div>
                      <div className="tick-sec">
                        <div className="check-head mt-2" id="tick-sec"></div>
                        <h5 className="rx-text">
                          {" "}
                          <span style={{ color: "#D32286" }}>
                            $1,000 Lifestyle Prescriptions University Degree
                            Scholarship
                          </span>
                        </h5>
                      </div>
                      {/* <h5 className='rx-text'>+ <span style={{color:"#D32286"}}>$1,000 Lifestyle Prescriptions University Degree Scholarship</span></h5> */}

                      <div className="invest-bsec">
                        <button
                          value={5000}
                          onClick={(e) => onSelect(e)}
                          className="invest-btn mt-4 mb-3"
                          type="button"
                        >
                          {" "}
                          CONTINUE
                        </button>
                      </div>
                    </div>
                    {/* <img className='logo' style={{height:"100px"}} src='/logo.png'></img></div> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestPage;
