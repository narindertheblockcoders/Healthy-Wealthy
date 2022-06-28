import React from 'react'
import TokenPage from '../Component/TokenPage'
import {getSession} from 'next-auth/react'

const tokenPage = () => {
  return (
    <div>
        <TokenPage/>
    </div>
  )
}

export default tokenPage

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