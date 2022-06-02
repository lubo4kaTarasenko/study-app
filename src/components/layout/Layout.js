import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

const Layout = () => {
  return (
    <div className='App'>
      <Header/>
      <Nav/>
      <Outlet/>
      <Footer/>      
    </div>
  )
}

export default Layout
