import React from 'react'
import FrontPage from '../Component/FrontPage'
import {getSession} from 'next-auth/react'


const index = () => {
  return (
    <div>
      <FrontPage/>
    </div>
  )
}

export default index

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: "/linkPage",
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