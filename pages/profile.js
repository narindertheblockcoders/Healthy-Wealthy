import React from 'react'
import Profile from '../Component/Profile'
import{getSession} from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'

const profile = () => {
  return (
    <div>
        <Profile/>
  
    </div>
  )
}

export default profile

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: "/buy",
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
