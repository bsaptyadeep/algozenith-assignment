import React from 'react'
import Pricing from '../Pricing/Pricing';
import './bottom.css';

const Bottom = () => {
  return (
    <div className='bottom-container'>
      <div className='bottom-left'>
        <h1>Invest in skills, <span className='earn'>earn 10X</span> of what you paid.</h1>
        <p className='bottom-left-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div>
          <div className='top-bottom'>
            <div className='top-bottom-line'>
              <div className='feature-container'>
                <div className='grey-box'>
                </div>
                <div className='features-container-text'>
                  <h3>1.2 Cr/Year</h3>
                  <p>highest fresher package</p>
                </div>
              </div>
              <div className='feature-container'>
                <div className='grey-box'>
                </div>
                <div className='features-container-text'>
                  <h3>Multiple & 100 Ranks</h3>
                  <p>in kickstart last year</p>
                </div>
              </div>
            </div>
            <div className='top-bottom-line'>
              <div className='feature-container'>
                <div className='grey-box'>
                </div>
                <div className='features-container-text'>
                  <h3>1000+ Offers</h3>
                  <p>from top companies</p>
                </div>
              </div>
              <div className='feature-container'>
                <div className='grey-box'>
                </div>
                <div className='features-container-text'>
                  <h3>Trusted by IITians</h3>
                  <p>for career prep</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-right'>
        <Pricing />
      </div>
    </div>
  )
}

export default Bottom