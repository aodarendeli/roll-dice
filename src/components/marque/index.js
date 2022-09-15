import React from 'react'
import Marquee from 'react-fast-marquee'
import {BsCurrencyBitcoin} from 'react-icons/bs'

import './marque.css'

function index() {
  return (
    <div className='container-fluid pt-5 mt-5'>
      <Marquee pauseOnHover='true' speed={100}>
        <div
          className='d-flex justify-content-between'
          style={{columnGap: '100px'}}
        >
          <div className='profileMeta mt-3 d-flex justify-content-between align-items-center'>
            <span>Metamask</span>
            <BsCurrencyBitcoin />
          </div>
          <div className='profileMeta mt-3 d-flex justify-content-between align-items-center'>
            <span>Metamask</span>
            <BsCurrencyBitcoin />
          </div>
          <div className='profileMeta mt-3 d-flex justify-content-between align-items-center'>
            <span>Metamask</span>
            <BsCurrencyBitcoin />
          </div>
        </div>
      </Marquee>
    </div>
  )
}

export default index
