import React from 'react'
import EmailSubmit from '../Component/EmailSubmit'
import {getSession} from 'next-auth/react'

const emailVerify = () => {
  return (
    <div>
        <EmailSubmit/>
    </div>
  )
}

export default emailVerify

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: "/",
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