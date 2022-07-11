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


    {/* <p className="text-center text-muted" style={{fontSize:"14px",margin:"0"}}>© 2022 HealthiWealthi™. All rights reserved | <a href="https://healthiwealthi.io/contact-us" target="_blank" rel='noreferer' className="systeme-show-popup-3443593" style={{ color:"grey"}}>Contact us </a>| 
     Privacy Policy | Terms of Use |  <a href=" https://healthiwealthi.io/terms-of-use/" target="_blank" rel='noreferer'  style={{ color:"grey", paddingLeft:"5px"}}>   Cookie Policy  </a>
    </p>
  */}

    <p className="text-center text-muted" style={{fontSize:"14px",margin:"0"}}>© 2022 HealthiWealthi™. All rights reserved | 
   <a href="https://healthiwealthi.io/terms-of-use" target="_blank" rel='noreferer'  style={{ color:"grey", paddingLeft:"0px", textDecoration:"none"}}>      Privacy & Terms   </a>   <span style={{paddingLeft:"0px"}}> |</span>    <a href="https://healthiwealthi.io/contact-us" target="_blank" rel='noreferer' className="systeme-show-popup-3443593" style={{ color:"grey", textDecoration:"none"}}>Contact us </a>
    </p>
 
    {/* © 2022 HealthiWealthi™. All rights reserved | Privacy & Terms | Contact us  */}


  </footer>|
    </div>
  )
}

export default Footer