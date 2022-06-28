import React from 'react'
import LinkPage from '../Component/LinkPage'
import {getSession} from 'next-auth/react'

const linkPage = () => {
  return (
    <div>
        <LinkPage/>
    </div>
  )
}

export default linkPage

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: "/login",
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