import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbare from '../Compnents/Navbare'



const RootLayout = () => {
  return (
    <div>
       <Navbare />
       <Outlet />
    </div>
  )
}

export default RootLayout
