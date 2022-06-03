import React from 'react'

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
            <li><a href='#' className='nav-link'>Login</a></li>   
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav
