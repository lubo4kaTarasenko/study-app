import React from 'react'
import BaseBtn from '../buttons/BaseBtn'
import { CgMenuGridO } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'

const Nav = () => {
  return (
    <div className='navbar'>
      <div className='container flex'>
        <div className='logo flex-item'>
          <img src="/download.png"/>
        </div>
        <nav >
          <ul>
            <li><a href='#' className='nav-link'>Posts</a></li>
            <li><a href='#' className='nav-link'>About</a></li>
            <li ><BaseBtn type='outlined' text='Login'/></li>   
          </ul>
        </nav>
      </div>
      <div className='nav-toggle'>
        <CgMenuGridO/>
      </div>
    </div>
  )
}

export default Nav
