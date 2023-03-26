import React from 'react';
import './Pricing.css';
import Logo from '../../assets/logo.svg';

const Pricing = () => {
    return (
        <div className='pricing-container'>
            <div className='pricing-container-top'>
                <div className='pricing-container-top-left'>
                    <p>Premium Victory Batch</p>
                    <h2><del>₹19,999</del></h2>
                    <h1>₹13,999</h1>
                </div>
                <div className='pricing-container-top-right'>
                    <img src={Logo} alt="logo" />
                </div>
            </div>
            <div className='pricing-container-features'>
                <div className='feature-container-pricing'>
                    <div className='features-box'>
                    </div>
                    <p>100+ Hrs Live Content</p>
                </div>
                <div className='feature-container-pricing'>
                    <div className='features-box'>
                    </div>
                    <p>50+ Hrs Contest</p>
                </div>
                <div className='feature-container-pricing'>
                    <div className='features-box'>
                    </div>
                    <p>500+ Problems</p>
                </div>
                <div className='feature-container-pricing'>
                    <div className='features-box'>
                    </div>
                    <p>Includes an interview bootcamp and access to a mentor network</p>
                </div>
                <div className='feature-container-pricing'>
                    <div className='features-box'>
                    </div>
                    <p>Enjoy access to our content for one year (paid extensions available)</p>
                </div>
                <div className='feature-container-pricing'>
                    <div className='features-box'>
                    </div>
                    <p>Flexible payment options, including no-cost EMI, are available.</p>
                </div>
                <button>Join now -></button>
            </div>
        </div>
    )
}

export default Pricing