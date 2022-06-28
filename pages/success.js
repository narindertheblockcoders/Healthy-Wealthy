import React from 'react'
import Welcome from '../Component/Welcome'
import {getSession} from 'next-auth/react'

const welcome = () => {
  return (
    <div>
        <Welcome/>
    </div>
  )
}

export default welcome

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