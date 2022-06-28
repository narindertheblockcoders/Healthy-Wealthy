import React from 'react'
import ForgetPassword from '../Component/ForgetPassword'
import {getSession} from 'next-auth/react'

const forgetPassword = () => {
  return (
    <div>
        <ForgetPassword/>
    </div>
  )
}

export default forgetPassword

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
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