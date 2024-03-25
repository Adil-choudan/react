import React from 'react';
import './NewsLatter.css'
const NewsLatter = () => {
    return (
        <div className='newslatter'>
            <h1>Get Exclusive Ofeers on Your Email</h1>
            <p>Subscribe to our newslatter and stay update</p>
            <div>
                <input type="email" placeholder='Your Email id' />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLatter;
