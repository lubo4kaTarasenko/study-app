import React from 'react'

const Nav = () => {
  return (
    <nav className='nav flex'>
      <div className='logo flex-item'>LOGO</div>
      <div className='flex-item nav-links'>
        <a href='#' className='nav-link'>Posts</a>
        <a href='#' className='nav-link'>About</a>
        <a href='#' className='nav-link'>Login</a>      
      </div>
    </nav>
  )
}

export default Nav
