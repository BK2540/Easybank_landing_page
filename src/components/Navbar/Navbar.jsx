import React from 'react'
import Logo from '../../assets/logo.svg';
import tab from '../../assets/icon-hamburger.svg';

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-container">

      <div className="nav-logo">
        <img src={ Logo } alt='logo'/>
      </div>

      <div className="nav-menu">
        <a href='#home' className='nav-menu_text'>Home</a>
        <a href='#about' className='nav-menu_text'>About</a>
        <a href='#' className='nav-menu_text'>Contact</a>
        <a href='#blogs' className='nav-menu_text'>Blogs</a>
        <a href='#' className='nav-menu_text'>Careers</a>
        <div className="animation start-home"></div>
      </div>

      <img src={tab} alt='menu tab' className='mobile-tab' />

      <div className="nav-button">
        <button className='custom-btn'>Request Invite</button>
      </div>
    </div>
  )
}

export default Navbar