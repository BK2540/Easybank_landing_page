import React from 'react'
import Logo from '../../assets/logo.svg';
import Facebook from '../../assets/icon-facebook.svg';
import Instagram from '../../assets/icon-instagram.svg';
import Pinterest from '../../assets/icon-pinterest.svg';
import Twitter from '../../assets/icon-twitter.svg';
import Youtube from '../../assets/icon-youtube.svg';

import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-icons">
            <div className="footer-icons-logo">
                <img src={ Logo } alt='logo' />
            </div>

            <div className="footer-icons-socials">
                <img src={ Facebook } alt='Facebook'/>
                <img src={ Youtube } alt='Youtube'/>
                <img src={ Twitter } alt='Twitter'/>
                <img src={ Pinterest } alt='Pinterest'/>
                <img src={ Instagram } alt='Instagram'/>
            </div>
        </div>
        
        <div className="footer-menu">
            <div className="footer-menu_left">
                <span>About Us</span>
                <span>Contact</span>
                <span>Blogs</span>
            </div>
            <div className="footer-menu_right">
                <span>Carrers</span>
                <span>Support</span>
                <span>Privacy Policy</span>
            </div>
        </div>
        <div className="footer-copyright">
            <button className='custom-btn'>Request Invite</button>
            <span>© Easybank. All Right Reserved</span>
        </div>
    </div>
  )
}

export default Footer