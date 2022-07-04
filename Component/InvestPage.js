// import React from "react";
// import { useRouter } from "next/router";

// const InvestPage = () => {
//   const router = useRouter();

//   function onSelect(e) {
//     router.push({
//       pathname: "/buy/",
//       query: {
//         amount: e.target.value,
//       },
//     });

//     // (`/buy/${e.target.value}`)
//   }

//   return (
//     <div>
//       <section className="profile-sec" id="invest-sec">
//         <div className="container">
//           <div className="row justify-content-center">
//             <form className="funds-sec">
//               <div className="invest-part">
//                 {/* <div  className='line-part'> */}

//                 <h3
//                   style={{
//                     color: "black",
//                     fontSize: "22px",
//                     fontWeight: "bold",
//                     margin: "0",
//                   }}
//                 >
//                   Buy RXHEAL
//                 </h3>
//                 {/* <div className='invest-line'></div> */}
//                 {/* </div> */}
//               </div>

//               <div className="invest-part mt-5" id="invest-res">
//                 <div className="col-md-4   invest-head">
//                   <div className="invest-item">
//                     <div className="input-line  "></div>
//                     <div className="invest-box">
//                       <h4 className="heal-text">RXHEAL $100+</h4>
//                     </div>
//                     <div className="invest-box1">
//                      <h4 className="own-text">Own 100,000 RXHEAL </h4> 
                     


//                       <div className="input-item benefit-type">
//                 <ul>
//                     <li style={{fontSize:"14px", fontWeight:"bold"}}>          For pre-sale $0.01 per token price</li>
//                   <li  className="rx-text"><img src="/check.png" className="cheking-img"/> 100 RXHEAL Bonus Tokens</li>
//                   <li  className="rx-text"><img src="/check.png" className="cheking-img"/> Book HealthiWealthi ($15 value)</li>
//                   <li  className="rx-text"><img src="/check.png" className="cheking-img"/>   Book Lifestyle Medicine Works ($20 value)</li>
//                  </ul>

//               </div>
//                     </div>
//                          </div>

//                   <div className="invest-bsec" id="invest-one">
//                         <button value={100} onClick={(e) => onSelect(e)} className="invest-btn mb-3"   type="button" >  {" "} CONTINUE</button>
//                       </div> 
//                 </div>

//                 <div className="col-md-4   invest-head">
//                   <div className=" invest-item1">
//                     <div className="invest-box">
//                       <h4 className="heal-text">RXHEAL $1,000+</h4>
//                     </div>
//                     <div className="invest-box1">
//                       <h4 className="own-text">Own 100,000 RXHEAL </h4>
//                       <div className="input-item benefit-type">
//                 <ul>
//                     {/* <li style={{fontSize:"14px", fontWeight:"bold"}}>          For pre-sale $0.01 per token price</li> */}
//                   <li  className="rx-text"><img src="/check.png" className="cheking-img"/>    1,000  RXHEAL Bonus Tokens</li>
//                   <li  className="rx-text"><img src="/check.png" className="cheking-img"/> Book HealthiWealthi ($15 value)</li>
//                   <li  className="rx-text"><img src="/check.png" className="cheking-img"/>    Lifestyle Medicine Summit Premium Ticket ($197 value)</li>
//                   <li  className="rx-text"><img src="/check.png" className="cheking-img"/>     The Art & Science of Self-Healing 101 Course ($297 value)</li>

//                  </ul>

                
//               </div>

//                     </div>
//                   </div>
//                   <div className="invest-bsec" id="invest-one">
//                         <button value={1000} onClick={(e) => onSelect(e)} className="invest-btn  mb-3"   type="button" >  {" "} CONTINUE</button>
//                       </div> 
//                 </div> 


//                 <div className="col-md-4   invest-head">
//                   <div className=" invest-item2">
//                     <div className="invest-box">
//                       <h4 className="heal-text">RXHEAL $5,000+</h4>
//                     </div>
//                     <div className="invest-box1">
//                       <h4 className="own-text">Own 100,000 RXHEAL </h4>



//                       <div className="input-item benefit-type">
//                 <ul>
//                     <li style={{fontSize:"14px", fontWeight:"bold"}}>          For pre-sale $0.01 per token price</li>
//                   <li  className="rx-text"><img src="/check.png" className="cheking-img"/>    
//                           5,000  
//                          RXHEAL Bonus Tokens</li>
//                   <li  className="rx-text"><img src="/check.png" className="cheking-img"/> Book HealthiWealthi ($15 value)</li>
//                   <li  className="rx-text"><img src="/check.png" className="cheking-img"/>Lifestyle Medicine Summit Premium Ticket ($197 value)</li>
//                   <li  className="rx-text"><img src="/check.png" className="cheking-img"/>The Art & Science of Self-Healing 101 Course ($297 value)</li>
//                   <li  className="rx-text"><img src="/check.png" className="cheking-img"/>HealthiWealthi™ Coach Training Course ($997 value)</li>
//                   <li  className="rx-text"><img src="/check.png" className="cheking-img"/>  <span style={{ color: "#D32286" }}>
//                             $1,000 Lifestyle Prescriptions University Degree
//                             Scholarship
//                           </span></li>
//                  </ul>
//               </div>
//                     </div>
//                   </div>
//                   <div className="invest-bsec" id="invest-one">
//                         <button value={5000} onClick={(e) => onSelect(e)} className="invest-btn mb-3"   type="button" >  {" "} CONTINUE</button>
//                       </div> 
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default InvestPage;
