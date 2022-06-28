import React from 'react'
import Varification from '../Component/Verification'
import {getSession} from 'next-auth/react'

const verification = () => {
  return (
    <div>
        <Varification/>
    </div>
  )
}

export default verification

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: "/linkPage",
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