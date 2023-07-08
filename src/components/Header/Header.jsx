import React from 'react'
import Navbar from '../Navbar/Navbar';
import Hero from '../../assets/image-mockups.png';
import Pattern from '../../assets/bg-intro-desktop.svg';


import './Header.css';

const Header = () => {
    
  return (
    
    <div className="header" id='home'>

      
      
        {/* left side */}
        <div className="header-left flex-start">
            
            <h1 className='header-text'>Next generation digital banking</h1>
            <p className='desc-text'>
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
            </p>

            <button className='custom-btn'>Request Invite</button>
        </div>

        {/* right side */}
        <div className="header-right">
          <div className="header-right-imgBg">
          <img src={Pattern} alt='pattern'/>
          </div>
          <div className="header-right_imgOverflow">
            <img src={Hero} alt='hero image'/>
          </div>
        </div>
    </div>
  )
}

export default Header
