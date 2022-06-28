import React from 'react'
import Payment from '../Component/Payment'
import{getSession} from 'next-auth/react'

const payment = () => {
  return (
    <div>
      <Payment/>
    </div>
  )
}

export default payment

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