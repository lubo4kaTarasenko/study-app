import React, { useState } from 'react'
import BaseBtn from '../buttons/BaseBtn'
import { CgMenuGridO } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <div className='navbar'>
      <div className='container flex'>
        <div className='logo flex-item'>
          <img src="/download.png"/>
        </div>
        <nav >
          <ul className={`nav-links ${ !showLinks && 'hidden'}`}>
            <li className='nav-link'>
              <NavLink className={({ isActive }) => isActive && 'active'} to="/" >
                Posts
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink className={({ isActive }) => isActive && 'active'} to="/about" >
                About
              </NavLink>
            </li>
            <li className='login-btn-cont'>
              <NavLink  to="/about" >
                <BaseBtn type='outlined' text='Login'/>
              </NavLink>            
            </li>   
          </ul>
        </nav>
        <div className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
          { showLinks ? <AiOutlineClose/> : <CgMenuGridO/>}
        </div>
      </div>
     
    </div>
  )
}

export default Nav
