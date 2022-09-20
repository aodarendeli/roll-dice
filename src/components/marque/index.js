import React from 'react'
import Marquee from 'react-fast-marquee'
import Volume from '../../svg/volume'
import Megaphone from '../../svg/Megaphone'
import Wallet from '../../svg/wallet'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import Logo from '../../svg/index'

import './marque.css'

function index() {
  return (
    <div className='d-flex align-items-center'>
      <div>
        <Volume className='mx-4' />
      </div>
      <Marquee className='marque__background' pauseOnHover='true' speed={100}>
        <div
          className='d-flex justify-content-between'
          style={{columnGap: '100px'}}
        >
          <div className='profileMeta mt-3 d-flex justify-content-between align-items-center'>
            <Megaphone className='mx-2' />
            <span>Follow Us On Twitter </span>
          </div>
          <div className='profileMetaWhite mt-3 d-flex justify-content-between align-items-center'>
            <Megaphone className='mx-2' />
            <span>Follow Us On Twitter </span>
          </div>
          <div className='profileMetaBlue mt-3 d-flex justify-content-between align-items-center'>
            <Megaphone className='mx-2' />
            <span>Follow Us On Twitter </span>
          </div>
        </div>
      </Marquee>

      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle split variant='success' id='dropdown-split-basic' />

        <div className='connect-wallet d-flex align-items-center'>
          <Wallet className='mx-2' />
          <span>Connect wallet</span>
        </div>

        <Dropdown.Menu>
          <Dropdown.Item>
            <div className='d-flex align-items-center wallet-dropdown'>
              <Logo className='mx-2' />
              <span>Polygon</span>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <div className='d-flex align-items-center wallet-dropdown'>
              <Logo className='mx-2' />
              <span>Sx Network</span>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default index
