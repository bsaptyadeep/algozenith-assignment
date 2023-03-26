import React from 'react';
import Logo from '../../assets/logo.png';

const Top = () => {
    return (
        <div className='top-container'>
            <div className='top-left'>
                <h1>Be better at DSA & CP</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div className='top-left-button'>
                    <button>Join now -></button>
                    <button className='curriculum-btn'>View curriculum</button>
                </div>
                <div className='top-bottom'>
                    <div className='top-bottom-line'>
                        <div className='feature-container'>
                            <div className='features-box'>
                            </div>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='feature-container'>
                            <div className='features-box'>
                            </div>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className='top-bottom-line'>
                        <div className='feature-container'>
                            <div className='features-box'>
                            </div>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='feature-container'>
                            <div className='features-box'>
                            </div>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='top-right'>
                <img src={Logo} alt="logo" />
            </div>
        </div>
    )
}

export default Top