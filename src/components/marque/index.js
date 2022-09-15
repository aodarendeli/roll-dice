import React from 'react'
import Marquee from 'react-fast-marquee'
import {BsCurrencyBitcoin} from 'react-icons/bs'
import Megaphone from '../../svg/Megaphone'

import './marque.css'

function index() {
  return (
    <div className='container-fluid d-flex'>
      <div>
        merhaba
      </div>
      <Marquee className='marque__background' pauseOnHover='true' speed={100}>
        <div
          className='d-flex justify-content-between'
          style={{columnGap: '100px'}}
        >
          <div className='profileMeta mt-3 d-flex justify-content-between align-items-center'>
            <Megaphone className="mx-2" />
            <span>Follow Us On Twitter </span>
          </div>
          <div className='profileMeta mt-3 d-flex justify-content-between align-items-center'>
          <Megaphone className="mx-2" />
          <span>Follow Us On Twitter </span>
          </div>
          <div className='profileMeta mt-3 d-flex justify-content-between align-items-center'>
          <Megaphone className="mx-2"  />
          <span>Follow Us On Twitter </span>
          </div>
        </div>
      </Marquee>
    </div>
  )
}

export default index
