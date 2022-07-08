import React from 'react'

import {getSession} from 'next-auth/react'
import LinkPage from '../Component/LinkPage'
import Head from 'next/head'

const dashboard = (props) => {
  return (
    <div>
      <Head>
      <title>Dashboard</title>
      </Head>
    <LinkPage props={props} />
    </div>
  )
}

export default dashboard

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