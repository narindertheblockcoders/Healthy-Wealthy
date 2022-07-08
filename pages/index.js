import React from 'react'
import FrontPage from '../Component/FrontPage'
import {getSession} from 'next-auth/react'
import Head from 'next/head'

const index = () => {
  return (
    <div>
       <Head>
        
        <title>Signup</title>

        <meta property="og:title" content="HealthiWealthi™ RXHEAL | Get PAID to live healthi
Affordable, high-quality Health Coaching for everyone. Own RXHEAL and build wealth."/>
<meta key="description" property="og:description" content="HealthiWealthi™ RXHEAL | Get PAID to live healthi
Affordable, high-quality Health Coaching for everyone. Own RXHEAL and build wealth."/>
<meta property="og:image" key="image" content="/photo.png"/>
       </Head>
      <FrontPage/>
    </div>
  )
}

export default index

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      }
    }
  }
  return {
    props:{
      session
    }
  }
}