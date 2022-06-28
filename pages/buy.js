import React from 'react'
import Buy from '../Component/Buy'
import{getSession} from 'next-auth/react'

const buy = () => {
  return (
    <div>
    <Buy/>
    </div>
  )
}

export default buy

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