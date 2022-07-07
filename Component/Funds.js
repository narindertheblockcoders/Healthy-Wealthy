import React, { useRef, useState, useEffect } from "react";
import BTC from "../public/btc.png";
import ETH from "../public/eth.png";
import Polygon  from "../public/polygon.svg";
import Tether from "../public/tether.png";
import FEI from "../public/fei.png";
import Nav from "react-bootstrap/Nav";
import { Tab, Tabs, Sonnet } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import Arrow from "../public/arrow.svg";
import Link from "next/link";



const Funds = () => {
  const router = useRouter();
  const [token1, setToken] = useState(null);
  const [ref, setRef] = useState();
 const [stakes,setStakes] =useState ()
 const [myTokens,setMyTokens] = useState()
  async function register() {
    try {
      // let token = localStorage.getItem("token");
      let res = await axios.post("/api/funds");
      const rec = res.data;
      // console.log(rec, "error not show");
      setRef(rec.data);
    } catch (err) {
      console.log(err, "Err");
    }
  }
  
  useEffect(() => {
    staking();
    register();
  }, []);


  async function staking() {
    try {
      // let token = localStorage.getItem("token");
      let res = await axios.post("/api/staking");
      let rest = await axios.post("/api/mytokens");

      const rec = res.data;
      // console.log(rec)
      console.log(rest.data.data, "error not show");

      setStakes(rec.data);
      setToken([rest.data.data],'rest here')
    } 
    catch (err) {
      console.log(err, "Err");
    }
  }
//  async function myToken() {
//     try {
//       console.log("my")
//       let token = localStorage.getItem("token");
//       const rec = res.data;
//       console.log(rec, "my Token");
      
//       setMyTokens(rec.data);
//     } catch (err) {
//       console.log(err, "Err");
//     }
//   }

  // useEffect(() => {
  // }, []);



  function formSubmitHandler(e) {
    e.preventDefault();
    transactions();
  }

  async function onClickHandler(event) {
    event.preventDefault();
    router.push("/pay");
  }

  return (
    <div>
      <section className="profile-sec" >
        <div className="container">
          <div className="row justify-content-center">
            <form className="funds-sec" onSubmit={formSubmitHandler}>
              <h3 className="funds-heading">
              <span className="arrows-icon"  onClick={()=>router.back()}  style={{ position: "relative", left: "-1%", cursor: "pointer" }}  >
                    <img src={Arrow.src} />
                  </span>
                 FUNDS AND TRANSACTION</h3>

              <Tabs
                defaultActiveKey="Funds"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                {/* <div className="funds-right-sec">
                        <h6 className="right-headinng">Estimated Portfolio -  <img src={Ayewa.src}/><strong> 23.0</strong> </h6>
                    </div> */}

                <Tab
                  eventKey="Funds"
                  className="btn-ajayaar"
                  title="Funds"
                  style={{ height: "50px" }}
                >
                  <div className="search-sec">
                    <input
                      className="search-input"
                      type="text"
                      name="username"
                      placeholder="Search"
                    />
                    <div className="switch-sec">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          style={{ width: "3rem" }}
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                      <p className="switch-text">Hide Zero Balances</p>
                    </div>
                  </div>
                  {/* <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"> */}
                  <table className="table funds-table" >
                    <thead>
                      <tr>
                        <th scope="col" style={{textAlign:"left"}}> ASSETS</th>
                        <th scope="col">COIN PRICE</th>
                        <th scope="col">AVAILABLE BALANCE</th>
                        <th scope="col">LOCKED</th>
                        <th scope="col">TOTAL</th>
                        <th scope="col" style={{paddingRight:"15px"}}> VALUE</th>
                        <th scope="col" colspan="2"  style={{textAlign:"right"}}>
                          ACTION
                        </th>
                      </tr>
                    </thead>

                    <tbody style={{borderBottom:"1px solid black"}}>
                   {token1? token1?.map((item)=>{
                     return (
                      <tr>
                      <td className="logo-txt">
                         RXHEAL
                      </td> 
                      <td >
                        {/* {item.availableToken>0? */}
                      {item.coinPrice}
                    {/* } */}
                      </td>
                      <td style={{textAlign:"center"}}>{item?.availableToken}</td>
                      <td id="padding-set"> {item.locked}</td>
                      <td>
                    {item.total}
                      </td>
                      <td  style={{textAlign:"center"}}>{item?.totalValue}</td>
                      <td   style={{textAlign:"right"}}>{item.totalValue>0?
                      
                        <button
                          type="button"
                          className="btn deposit-btn"
                          role="button"
                        
                          onClick={()=>router.push('/pay')}
                        >
                          Withdraw
                        </button>:null
                    }
                      </td>
                  
                    </tr>
                     )
                   }):null}
                   
                    
                    </tbody>
                  </table>

                  <table className="table funds-table mt-5">
                    
                    <thead>
                      <tr>
                        <th scope="col" style={{textAlign:"left"}}>STAKING DATE</th>
                        <th scope="col">TOKEN</th>
                        <th scope="col">ROI</th>
                        <th scope="col" id="padding-set">END DATE</th>
                        <th scope="col" style={{textAlign:"right"}}> STATUS</th>
                        
                        {/* <th scope="col" colspan="2" style={{textAlign:"right"}}>
                          ACTION
                        </th> */}
                      </tr>
                    </thead>
                    
                    <tbody>

                      {stakes? stakes.map((item,i)=>{
                        return(

                      
                      <tr key={i}>
                        <td className="logo-txt">
                        {new Date(item.createdAt).toLocaleString('en-us', { day:"numeric", year:"numeric", month:"numeric"})}
                        </td>
                        <td>{item.token} </td>
                        <td>{item.roi}%</td>
                        <td>
                          {new Date(item.endDate).toLocaleString('en-us', { year:"numeric", month:"numeric",day:"numeric", }) }
                       
                        </td>
                        <td style={{textAlign:"right"}}>Approved</td>
                        
                      </tr>
                        )

                      }):null}
                    </tbody>
                  </table>

                  {/* <table className="table funds-table mt-2">
                    <tbody>
                      <tr id="btc">
                        <td className="logo-txt">
                          <img src={BTC.src} /> Bitcoin (BTC)
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                          {" "}
                          <strong>0</strong>
                        </td>
                        <td>0.00</td>
                        <td>
                          <button
                            type="button"
                            className="btn deposit-btn"
                            role="button"
                          >
                            Deposit
                          </button>{" "}
                        </td> */}
                        {/* <td>
                          <button
                            type="button"
                            className="btn deposit-btn"
                            role="button"
                          >
                            Withdraw
                          </button>
                        </td> */}
                      {/* </tr>

                      <tr>
                        <td className="logo-txt">
                          <img src={ETH.src} /> Ethereum
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                          {" "}
                          <strong>0</strong>
                        </td>
                        <td>0.00</td>
                        <td>
                          <button
                            type="button"
                            className="btn deposit-btn"
                            role="button"
                          >
                            Deposit
                          </button>{" "}
                        </td> */}
                        {/* <td style={{ width: "5%" }}>
                          <button
                            type="button"
                            className="btn deposit-btn"
                            role="button"
                          >
                            Withdraw
                          </button>
                        </td> */}
                      {/* </tr>

                      <tr id="btc">
                        <td className="logo-txt">
                          <img src={Polygon.src}/>  Polygon
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                          {" "}
                          <strong>0</strong>
                        </td>
                        <td>0.00</td>
                        <td>
                          <button
                            type="button"
                            className="btn deposit-btn"
                            role="button"
                          >
                            Deposit
                          </button>{" "}
                        </td> */}
                        {/* <td style={{ width: "5%" }}>
                          <button
                            type="button"
                            className="btn deposit-btn"
                            role="button"
                          >
                            Withdraw
                          </button>
                        </td> */}
                      {/* </tr>

                      <tr>
                        <td className="logo-txt">
                         <img src={FEI.src} /> USD 
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                          {" "}
                          <strong>0</strong>
                        </td>
                        <td>0.00</td>
                        <td>
                          <button
                            type="button"
                            className="btn deposit-btn"
                            role="button"
                          >
                            Deposit
                          </button>{" "}
                        </td> */}
                        {/* <td style={{ width: "5%" }}>
                          <button
                            type="button"
                            className="btn deposit-btn"
                            role="button"
                          >
                            Withdraw
                          </button>
                        </td> */}
                        
                      {/* </tr> */}
                    {/* </tbody> */}
                  {/* </table> */}
                      {/* <div className='hydration'>
                        <Link href={'/dashboard'}>
                        <h5>   <span
                    className="arrow-icon"
                    style={{ position: "relative", left: "-0%" }}
                  >
                    <img src={Arrow.src} />
                  </span>  back</h5>
                  </Link>
  </div> */}

{/* <button href="funds-page.html" className="btn btn-round btn-warning usebutton " type="submit">CONTINUE</button> */}

                  {/* </div> */}
                </Tab>
                <Tab
                  eventKey="Transfer"
                  style={{ height: "50px" }}
                  title="Transaction"
                >
                  {/* <Sonnet /> */}

                  <table className="table funds-table">
                    <thead>
                      <tr>
                        <th scope="col" 
                        // style={{ textAlign:"left" }}
                        >
                          DATE
                        </th>
                        <th scope="col">USD AMOUNT</th>
                        <th scope="col">TOKEN QUANTITY</th>
                        <th scope="col">TOKEN PRICE</th>
                        <th scope="col">PAYMENT MODE</th>
                        <th
                          scope="col"
                          id="coin-padd"
                          style={{ width: "10%", paddingRight: "0" }}
                        >
                          COIN
                        </th>
                        <th
                          scope="col"
                          style={{ width: "20%", textAlign: "center" }}
                        >
                          FINAL AMOUNT
                        </th>
                        <th
                          scope="col"
                          colSpan="2"
                          style={{ textAlign: "center" }}
                        >
                          STATUS
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {ref
                        ? ref?.map((item) => {
                            return (
                              <>
                                <tr>
                                  <td
                                    className="logo-txt" id="logo-padd"
                                    style={{ textAlign:"center" }}
                                  >
                                    {new Date().toDateString()}
                                  </td>

                                  <td> {item.usdAmount} </td>
                                  <td style={{paddingLeft:"0px !important"}}>{item.tokenQuantity}</td>
                                  <td id="td-set">
                                    {" "}
                                    <strong>{item.tokenPrice}</strong>
                                  </td>
                                  <td>{item.paymentMode}</td>
                                  <td
                                    style={{
                                      textAlign: "center",
                                      width: "10%",
                                    }}
                                  >
                                    {item.coin}
                                  </td>
                                  <td style={{ textAlign: "center" }}>
                                    {item.finalAmount}
                                  </td>
                                  <td>{item.status}</td>
                                  {/* <td><button type="button" onClick={onClickHandler} className="btn deposit-btn" role="button">Deposit</button> </td>
         <td style={{width:"5%",}}><button type="button" className="btn deposit-btn" role="button">Withdraw</button></td> */}
                                </tr>
                              </>
                            );
                          })
                        : null}
                    </tbody>
                  </table>
                </Tab>
              </Tabs>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                ></div>
                {/* 
                        <table className="table funds-table mt-2">                          
                                    <tbody>                     
                                         <tr id="btc">
                                            <td className="logo-txt"><img src={BTC.src}/> Bitcoin (BTC)</td>
                                            <td>0</td>
                                            <td >0</td>
                                            <td > <strong>0</strong></td>
                                            <td >0.00</td>
                                            <td ><button type="button" onClick={onClickHandler} className="btn deposit-btn" role="button">Deposit</button> </td>
                                            {/* <td ><button type="button" className="btn deposit-btn" role="button">Withdraw</button></td>   */}
                {/* </tr> */}

                {/* <tr>
                                            <td className="logo-txt"><img src={ETH.src}/> Ethereum</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td> <strong>0</strong></td>
                                            <td>0.00</td>
                                            <td><button type="button" onClick={onClickHandler} className="btn deposit-btn" role="button">Deposit</button> </td>
                                            {/* <td style={{width:"5%"}}>  <button type="button" className="btn deposit-btn" role="button">Withdraw</button></td>   */}
                {/* </tr> */}

                {/* <tr id="btc">
                                            <td className="logo-txt" ><img src={Tether.src}/> Tether USD (USDT)</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td> <strong>0</strong></td>
                                            <td>0.00</td> */}
                {/* <td><button type="button" onClick={onClickHandler} className="btn deposit-btn" role="button">Deposit</button> </td> */}
                {/* <td style={{width:"5%"}}><button type="button" className="btn deposit-btn" role="button">Withdraw</button></td>     */}
                {/* </tr> */}

                {/* <tr>
                                            <td className="logo-txt"><img src={FEI.src}/> Fei USD (FEI)</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td> <strong>0</strong></td>
                                            <td>0.00</td>
                                            <td><button type="button" onClick={onClickHandler} className="btn deposit-btn" role="button">Deposit</button> </td>
                                            {/* <td style={{width:"5%"}}><button type="button" className="btn deposit-btn" role="button">Withdraw</button></td>     */}
                {/* </tr> */}
                {/* </tbody> */}
                {/* </table>  */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Funds;
