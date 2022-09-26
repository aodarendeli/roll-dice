import React, { useState } from 'react'
import './rightsidebar.css'
import Usd from '../../svg/usdc'
import Logo from '../../svg/index'

export default function RightSidebar() {
  const [state, setState] = useState('sx')
  return (
    <div className='rightSideBar'>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col'>
            <div className='d-flex align-items-center'>
              <Usd className='mx-1' />
              <span>Recent</span>
            </div>
            <div className='d-flex mt-2  rightSideBarInput'>
{/* d */}
              {state==='sx'?<div className='d-flex border-color'>
                <Logo className='img' />
                <span className='mx-2 t1'>Sx Network</span>
              </div>:<div className='d-flex mx-3' onClick={()=>setState('sx')}>
                <Logo className='img' />
              </div>}

              {state==='sx'?<div className='d-flex mx-3'  onClick={()=>setState('poly')}>
              <img alt='poly' src={require('../../assets/images/polygon.png')} className='img'/>
              </div>:
              <div className='d-flex border-color2'>
              <img alt='poly' src={require('../../assets/images/polygon.png')} className='img'/>
              <span className='mx-2 t2'>Polygon</span>
              </div>
              }
{/* c */}
            </div>
            <div className='d-flex justify-content-between mt-4'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>Won</p>
                <span>loremıpsum</span>
              </div>
              <div className='d-flex align-items-center rightSideBarInformation'>
                <p>4,3</p>
                <Logo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
