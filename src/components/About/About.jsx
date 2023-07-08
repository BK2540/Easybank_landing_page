import React from 'react'
import Online from '../../assets/icon-online.svg';
import Budgeting from '../../assets/icon-budgeting.svg';
import Onboarding from '../../assets/icon-onboarding.svg';
import Api from '../../assets/icon-api.svg';

import './About.css'

const About = () => {
  return (
    <div className="about" id='about'>
        <div className="about-content">
            <span>Why choose Easybank? </span>
            <span>
            We leverage Open Banking to turn your bank account into your financial hub. 
            <br/> Control your finances like never before
            </span>
        </div>

        <div className="about-cards">
            <ul>
                <li className='about-card_detail'>
                    <span><img src={Online}/></span>
                    <span>Online Banking</span>
                    <span>
                    Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                    </span>
                </li>

                <li className='about-card_detail'>
                    <span><img src={Budgeting}/></span>
                    <span>Simple Budgeting</span>
                    <span>
                    See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.
                    </span>
                </li>

                <li className='about-card_detail'>
                    <span><img src={Onboarding}/></span>
                    <span>Fast Onboarding</span>
                    <span>
                    We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
                    </span>
                </li>

                <li className='about-card_detail'>
                    <span><img src={Api}/></span>
                    <span>Open API</span>
                    <span>
                    Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
                    </span>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default About
