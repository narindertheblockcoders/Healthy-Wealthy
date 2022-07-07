import React from 'react'
import Script from 'next/script'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer className="footer-head py-3 " id='footer-set' style={{display:"flex", justifyContent:"center"}}>
    {/* <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">© 2022 HealthiWealthi™. </a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">All rights reserved | <a href="#" className="systeme-show-popup-3443593">Contact us </a> </a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"></a></li>

      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">    
</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">     Privacy Policy | Terms of Use | Cookie Policy (see links on ico page)
</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">All rights reserved</a></li>
    </ul> */}
    <p className="text-center text-muted" style={{fontSize:"14px",margin:"0"}}>© 2022 HealthiWealthi™. All rights reserved | <a href="#" className="systeme-show-popup-3443593" style={{textDecoration:"none", color:"grey", fontWeight:"600"}}>Contact us </a>
    <Script id="form-script-tag-3443593" src="https://www.healthiwealthi.net/public/remote/page/4931931cf737288ba0e8b30a751ad4c276fd7bc.js"></Script>  |
     Privacy Policy | Terms of Use |  <a href=" https://healthiwealthi.io/rxheal/cookie.php" target="_blank" style={{textDecoration:"none", color:"grey", fontWeight:"600", paddingLeft:"5px"}}>   Cookie Policy  </a>
    </p>
 
  </footer>
    </div>
  )
}

export default Footer