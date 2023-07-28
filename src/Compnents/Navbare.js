import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbare = () => {
  return (
    <div>
       <nav>
        <ul>
            <li className='color'>
                <NavLink to ="/">Home</NavLink>
            </li>
            <li className='color'> <NavLink to ="/about">about us</NavLink></li>
            <li className='color'><NavLink to ="/user">blog</NavLink></li>
            <li className='color'><NavLink to ="/contact">contact</NavLink></li>
        </ul>
       </nav>
    </div>
  )
}

export default Navbare
