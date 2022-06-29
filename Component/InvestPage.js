import React from 'react'

const InvestPage = () => {
  return (
    <div>
           <section className="profile-sec" id='invest-sec'>
        <div className="container">
          <div className="row justify-content-center">
            <form className="funds-sec" >
              {/* <h3 className="funds-heading">FUNDS AND TRANSACTION</h3> */}
              <div className='invest-part'>
                <h3 style={{color:"black", fontWeight:"bold"}}>Buy RXHEAL</h3>
                {/* <div className='col-md-6 invest-left'><img className='logo' style={{height:"100px"}} src='/white.png'></img></div> */}

                {/* <div className='col-md-6 invest-right'>
                    <h4 className='invest-heading'><span style={{color:"white"}}>Invest</span> In What's <br/> Important </h4>
               <p className='invest-para'>Community Funding on HealthiWealthi.io</p>
                </div> */}
              </div>

              <div className='invest-part mt-5'>
                <div className='col-md-3 invest-item'>
                  <div className='invest-box'><h4 className='heal-text'>RXHEAL $100+</h4></div>
                  <div className='invest-box1'>
                    <h4 className='own-text'>Own 100,000 RXHEAL </h4>
<h5 className='rx-text'>For pre-sale $0.01 per token price</h5>
<h5 className='rx-text'>+ Book HealthiWealthi ($15 value)</h5>

                    </div>

                  {/* <img className='logo' style={{height:"100px"}} src='/logo.png'></img> */}
                  
                  </div>
                <div className='col-md-3 invest-item1'>
                <div className='invest-box'><h4 className='heal-text'>RXHEAL $1,000+</h4></div>
                <div className='invest-box1'>
                    <h4 className='own-text'>Own 100,000 RXHEAL </h4>
                    <h5 className='rx-text'> <span>500</span> RXHEAL Bonus Tokens</h5>
                    <h5 className='rx-text'>+ Book HealthiWealthi ($15 value)</h5>
                    <h5 className='rx-text'>+ The Art & Science of Self-Healing 101 Course ($297 value)</h5>
                    <h5 className='rx-text'>+  HealthiWealthi™ Coach Training Course ($997 value)</h5>

                    </div>
                    </div>
                  {/* <img className='logo' style={{height:"100px"}} src='/logo.png'></img></div> */}
                <div className='col-md-3 invest-item2'>
                <div className='invest-box'><h4  className='heal-text'>RXHEAL $5,000+</h4></div>
                <div className='invest-box1'>
                    <h4 className='own-text'>Own 100,000 RXHEAL </h4>
                    <h5 className='rx-text'> <span style={{color:"#D32286", fontWeight:"bold"}}>5,000</span> RXHEAL Bonus Tokens</h5>
                    <h5 className='rx-text'>+ Book HealthiWealthi ($15 value)</h5>
                    <h5 className='rx-text'>+ The Art & Science of Self-Healing 101 Course ($297 value)</h5>
                    <h5 className='rx-text'>+  HealthiWealthi™ Coach Training Course ($997 value)</h5>
                    <h5 className='rx-text'>+ <span style={{color:"#D32286"}}>$1,000 Lifestyle Prescriptions University Degree Scholarship</span></h5>

                    </div>
                  {/* <img className='logo' style={{height:"100px"}} src='/logo.png'></img></div> */}
                
              </div></div>
              
              </form>
              </div>
              </div>
              </section>
    </div>
  )
}

export default InvestPage