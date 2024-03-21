import React from 'react';
import './Hero.css'
import hand_icon from '../assest/hand_icon.png';
import hero_right from '../assest/hero_right.png';
import arrow_icon from '../assest/arrow_icon.png'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>latest collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_right} alt="" />

            </div>
        </div>
    );
}

export default Hero;
