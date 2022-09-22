import React from 'react'
import './mobilesidebar.css'
import Usd from '../../svg/usdc'
import Logo from '../../svg/index'

function MobileRightSidebar() {
  return (
    <div className='container mt-3'>
      <div className='row mx-auto'>
        <div className='col-sm-8 mobileRightSideBar  mx-auto'>
          <div className='d-flex align-items-center mt-2'>
            <Usd className='mx-1' />
            <span>Recent</span>
          </div>
          <div className='d-flex justify-content-between mt-1'>
            <div className='d-flex align-items-center'>
              <p>Won</p>
              <span className='mx-2'>loremıpsum</span>
            </div>
            <div className='d-flex align-items-center'>
              <p className='mx-2'>4,3</p>
              <Logo />
            </div>
          </div>
          <div className='d-flex justify-content-between mt-1'>
            <div className='d-flex align-items-center'>
              <p>Won</p>
              <span className='mx-2'>loremıpsum</span>
            </div>
            <div className='d-flex align-items-center'>
              <p className='mx-2'>4,3</p>
              <Logo />
            </div>
          </div>
          <div className='d-flex justify-content-between mt-1'>
            <div className='d-flex align-items-center'>
              <p>Won</p>
              <span className='mx-2'>loremıpsum</span>
            </div>
            <div className='d-flex align-items-center'>
              <p className='mx-2'>4,3</p>
              <Logo />
            </div>
          </div>
          <div className='d-flex justify-content-between mt-1'>
            <div className='d-flex align-items-center'>
              <p>Won</p>
              <span className='mx-2'>loremıpsum</span>
            </div>
            <div className='d-flex align-items-center'>
              <p className='mx-2'>4,3</p>
              <Logo />
            </div>
          </div>
          <div className='d-flex justify-content-between mt-1'>
            <div className='d-flex align-items-center'>
              <p>Won</p>
              <span className='mx-2'>loremıpsum</span>
            </div>
            <div className='d-flex align-items-center'>
              <p className='mx-2'>4,3</p>
              <Logo />
            </div>
          </div>
          <div className='d-flex justify-content-between mt-1'>
            <div className='d-flex align-items-center'>
              <p>Won</p>
              <span className='mx-2'>loremıpsum</span>
            </div>
            <div className='d-flex align-items-center'>
              <p className='mx-2'>4,3</p>
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileRightSidebar
