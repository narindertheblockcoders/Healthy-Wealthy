import React from 'react'
import Login from '../Component/Login'
import {getSession} from 'next-auth/react'

const login = () => {
  return (
    <div>
      
        <Login/>
    </div>
  )
}

export default login
