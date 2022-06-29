import React from 'react'
import EmailSubmit from '../Component/EmailSubmit'
import {getSession} from 'next-auth/react'

const emailSubmit = () => {
  return (
    <div>
        <EmailSubmit/>
    </div>
  )
}

export default emailSubmit

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