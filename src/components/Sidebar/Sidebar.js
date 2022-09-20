import React, {useState} from 'react'
import {FaUser} from 'react-icons/fa'
import './sidebar.css'
import Logo from '../../svg/index'
import Wallet from '../../svg/wallet'
import Toggle from '../../svg/toggle'
import BlockChain from '../../svg/blockchain'
import Select from '../../svg/select'

function Sidebar(props) {
  const [gamesVisibility, setGamesVisibility] = useState(false)
  const [navActive, setNavActive] = useState(false)

  const handleClick = () => {
    let navValue = document.querySelector('nav')
    navValue.classList.toggle('active')
    setNavActive(!navActive)
    setGamesVisibility(false)
    props.setNav(!navActive)
    console.log('tıkladın')
  }
  const toggleGamesVisibility = () => {
    setGamesVisibility(!gamesVisibility)
  }
  return (
    <>
      <header>
        <div className='mobile-sidebar'>SX</div>
        <div className='d-flex'>
          <div className='mobile-connect-wallet d-flex align-items-center mx-2'>
            <Wallet className='mx-1' />
            <span className='mx-1'>Connect wallet</span>
          </div>
          <div className='mx-2'>
            <BlockChain />
          </div>
          <div onClick={handleClick} className='toggle mx-2'>
            <Toggle className='mx-1' />
          </div>
        </div>
      </header>
      <div id='sidebar__container'>
        <nav>
          <ul>
            <div className='text-center'>
              <Logo className='toggle' />
              <Select onClick={handleClick} />
            </div>
            <li>
              <a className='nav-tab' style={{marginTop: '25px'}}>
                <span className='icon'>
                  <FaUser className='mx-1' />
                </span>
                <span className='title'>Home</span>
              </a>
            </li>
            <li>
              <a className='nav-tab' onClick={toggleGamesVisibility}>
                <span className='icon'>
                  <FaUser className='mx-1' />
                </span>
                <span className='title'>Games</span>
              </a>
            </li>
            <div
              style={{
                display: gamesVisibility ? 'block' : 'none',
                marginLeft: '0px',
                transition: '.5s',
              }}
            >
              <li>
                <a className='nav-tab'>
                  <span className='icon'>
                    <FaUser className='mx-1' />
                  </span>
                  <span className='title'>Coinflip</span>
                </a>
              </li>
              <li>
                <a className='nav-tab'>
                  <span className='icon'>
                    <FaUser className='mx-1' />
                  </span>
                  <span className='title'>Dice</span>
                </a>
              </li>
              <li>
                <a className='nav-tab'>
                  <span className='icon'>
                    <FaUser className='mx-1' />
                  </span>
                  <span className='title'>Crash</span>
                </a>
              </li>
              <li>
                <a className='nav-tab'>
                  <span className='icon'>
                    <FaUser className='mx-1' />
                  </span>
                  <span className='title'>Plinko</span>
                </a>
              </li>
              <li>
                <a className='nav-tab'>
                  <span className='icon'>
                    <FaUser className='mx-1' />
                  </span>
                  <span className='title'>Slot</span>
                </a>
              </li>
              <li>
                <a className='nav-tab'>
                  <span className='icon'>
                    <FaUser className='mx-1' />
                  </span>
                  <span className='title'>Roulette</span>
                </a>
              </li>
              <li>
                <a className='nav-tab'>
                  <span className='icon'>
                    <FaUser className='mx-1' />
                  </span>
                  <span className='title'>Bridge</span>
                </a>
              </li>
              <li>
                <a className='nav-tab'>
                  <span className='icon'>
                    <FaUser className='mx-1' />
                  </span>
                  <span className='title'>Swap</span>
                </a>
              </li>
            </div>
            <li>
              <a className='nav-tab'>
                <span className='icon'>
                  <FaUser className='mx-1' />
                </span>
                <span className='title'>Profile</span>
              </a>
            </li>
            <li>
              <a className='nav-tab'>
                <span className='icon'>
                  <FaUser className='mx-1' />
                </span>
                <span className='title'>Stats</span>
              </a>
            </li>
            <li>
              <a className='nav-tab'>
                <span className='icon'>
                  <FaUser className='mx-1' />
                </span>
                <span className='title'>Contact</span>
              </a>
            </li>
            <li>
              <a className='nav-tab'>
                <span className='icon'>
                  <FaUser className='mx-1' />
                </span>
                <span className='title'>Dark</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
