import React, {useState, useEffect} from 'react'
import Marquee from 'react-fast-marquee'
import Volume from '../../svg/volume'
import Megaphone from '../../svg/Megaphone'
import Wallet from '../../svg/wallet'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import Logo from '../../svg/index'
import {FaUser} from 'react-icons/fa'
import {BsVolumeUpFill, BsFillVolumeMuteFill} from 'react-icons/bs'
import './marque.css'

export default () => {
  const [state, setState] = useState('sx')
  const [soundState, setSoundState] = useState(
    localStorage.getItem('sound') || 'on'
  )
  useEffect(() => {
    console.log('ilk hal storage:', localStorage.getItem('sound'))
    console.log('ilk hal statw:', soundState)
    !localStorage.getItem('sound') && localStorage.setItem('sound', 'on')
  }, [])

  const toggleSound = () => {
    let sound = localStorage.getItem('sound') === 'on' ? 'off' : 'on'
    sound === 'on' ? setSoundState('on') : setSoundState('off')
    localStorage.setItem('sound', sound)
    console.log('Sound:', sound)
  }

  return (
    <div className='d-flex'>
      <div className='d-flex align-items-center'>
        {soundState === 'on' ? (
          <BsVolumeUpFill className='mx-4 volume' onClick={toggleSound} />
        ) : (
          <BsFillVolumeMuteFill className='mx-4 volume' onClick={toggleSound} />
        )}
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
        <div
          className={
            state === 'sx'
              ? 'd-flex align-items-center bootstrapt-container colorSx'
              : 'd-flex align-items-center bootstrapt-container colorPol'
          }
        >
          <Dropdown.Toggle
            className='bootstrapt-button ms-2'
            split
            variant='success'
            id='dropdown-split-basic'
          >
            {state === 'sx' ? (
              <Logo className='bootsrapt-svg mx-2' />
            ) : (
              <img
                alt='poly'
                src={require('../../assets/images/polygon.png')}
                className='bootsrapt-svg mx-2'
              />
            )}
          </Dropdown.Toggle>
        </div>

        <div className='connect-wallet d-flex align-items-center'>
          <Wallet className='mx-2' />
          <span>Connect wallet</span>
        </div>

        <Dropdown.Menu>
          <Dropdown.Item>
            <div
              className='d-flex align-items-center wallet-dropdown py-2'
              onClick={() => setState('polygon')}
            >
              <img
                alt='poly'
                src={require('../../assets/images/polygon.png')}
                className='img'
              />
              <p className='colorpPol'>Polygon</p>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <div
              className='d-flex align-items-center wallet-dropdown py-2'
              onClick={() => setState('sx')}
            >
              <Logo className='img' />
              <p className='colorpSx'>Sx Network</p>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
