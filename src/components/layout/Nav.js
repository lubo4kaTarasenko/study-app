import React from 'react'
import BaseBtn from '../buttons/BaseBtn'

const Nav = () => {
  return (
    <div className='navbar '>
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
    </div>
  )
}

export default Nav
