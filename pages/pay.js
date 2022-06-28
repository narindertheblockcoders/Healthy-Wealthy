import React from 'react'
import Pay from '../Component/Pay'
import {getSession} from 'next-auth/react'

const pay = () => {
  return (
    <div>

        <Pay/>
    </div>
  )
}

export default pay

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