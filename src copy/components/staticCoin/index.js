import React, {useState, useEffect} from 'react'
import './coin.css'
import CoinIcon from '../../svg/CoinIcon'
import Col from 'react-bootstrap/Col'
import useSound from 'use-sound'
import coinstart from '../../assets/sounds/coinStart.wav'
export default ({type}) => {
  return (
    <div className='coinCon2 mx-auto'>
      <div id='coin2'>
        <div className='side-a2 mx-auto'>
          <img
            className='mx-auto'
            alt='coin'
            src={require('../../assets/images/coin.png')}
          />
          <p className='coinT2'>{type === 'heads' ? 'H' : 'T'}</p>
        </div>
      </div>
    </div>
  )
}
