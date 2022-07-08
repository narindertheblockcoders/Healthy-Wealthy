
import '../styles/globals.css'
import  'bootstrap/dist/css/bootstrap.css'
import Navbar from '../Component/ui/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import { SSRProvider } from 'react-bootstrap';
import {SessionProvider} from 'next-auth/react'
import Footer from '../Component/ui/Footer';
import Head  from 'next/head';

function MyApp({ Component, pageProps }) {
  return <SessionProvider session={pageProps.session}>
  <SSRProvider>
   <Navbar/>
   <Head>
        
        

        {/* <meta property="og:title" content=""/> */}
<meta key="description" property="og:description" content="HealthiWealthi™ RXHEAL | Get PAID to live healthi
Affordable, high-quality Health Coaching for everyone. Own RXHEAL and build wealth."/>
<meta property="og:image" key="image" content="/photo.png"/>
       </Head>
  <Component {...pageProps} />
  <Footer/>
  </SSRProvider>
  </SessionProvider>
}

export default MyApp
