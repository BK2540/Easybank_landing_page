import React from 'react'
import Currency from '../../assets/image-currency.jpg';
import Plane from '../../assets/image-plane.jpg';
import Confetti from '../../assets/image-confetti.jpg';
import restaurant from '../../assets/image-restaurant.jpg';

import './Blogs.css'

const Blogs = () => {
  return (
    <div className="blogs" id='blogs'>
        <div className="blogs-content">
            <span className='header-text'>Latest Articles</span>
            
        </div>

        <div className="blog-cards">
            <ul>
                <li className='blog-card_detail'>
                    <span><img src={Currency}/></span>
                    <span>By Claire Robinson</span>
                    <span>Receive money in any currency with no fees</span>
                    <span>
                    The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...
                    </span>
                </li>

                <li className='blog-card_detail'>
                    <span><img src={restaurant}/></span>
                    <span>By Wilson Hutton</span>
                    <span>Treat yourself without worrying about money</span>
                    <span>
                    Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …
                    </span>
                </li>

                <li className='blog-card_detail'>
                    <span><img src={Plane}/></span>
                    <span>By Wilson Hutton</span>
                    <span>Take your Easybank card wherever you go</span>
                    <span>
                    We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … 
                    </span>
                </li>

                <li className='blog-card_detail'>
                    <span><img src={Confetti}/></span>
                    <span>By Claire Robinson</span>
                    <span>Our invite-only Beta accounts are now live!</span>
                    <span>
                    After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... 
                    </span>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Blogs