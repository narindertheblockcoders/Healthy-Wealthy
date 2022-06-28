import React from 'react'
import Funds from '../Component/Funds'
import {getSession} from 'next-auth/react'

const funds = () => {
  return (
    <div>
        <Funds/>
    </div>
  )
}

export default funds

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