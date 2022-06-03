import React, { useState } from 'react'
import BaseBtn from '../buttons/BaseBtn'
import { CgMenuGridO } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'

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
            <li><a href='#' className='nav-link'>Posts</a></li>
            <li><a href='#' className='nav-link'>About</a></li>
            <li className='login-btn-cont'><BaseBtn type='outlined' text='Login'/></li>   
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
