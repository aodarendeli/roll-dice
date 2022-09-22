import React from 'react'
import './footer.css'
import Logo from '../../svg/index'

function Foooter() {
  return (
    <div className='container pt-3 pb-3'>
      <div className='row'>
        <div className='col-lg-8 col-md-12 col-sm-12'>
          <div className='footer'>
            <Logo />
            <p>Casıno</p>
          </div>
          <div className='footer__bottom mt-3'>
            <p>
              Sx is a decentrailized betting platform powered by SX Casno and
              Chainlink. Unliketradinal casinos that operate in black boxes, Sx
              run on smart contracts that are fair,transparent and immutable.
              The platform provides a low-cost and fast going experiences
              throughh the combination of both tradional care game blockchain
              mechanics.
            </p>
            <span>Copyright c 2022 SX Casino. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Foooter
