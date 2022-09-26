import React, {useState, useEffect} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {CgGames} from 'react-icons/cg'
import {BsCoin} from 'react-icons/bs'
import {BsDice3} from 'react-icons/bs'
import {IoRocketOutline} from 'react-icons/io5'
import {FiTriangle} from 'react-icons/fi'
import {GiSloth} from 'react-icons/gi'
import {SiNintendogamecube} from 'react-icons/si'
import {GiTowerBridge} from 'react-icons/gi'
import {IoIosSwap} from 'react-icons/io'
import {HiOutlineUser} from 'react-icons/hi'
import {IoStatsChartOutline} from 'react-icons/io5'
import {TiContacts} from 'react-icons/ti'
import {MdDarkMode} from 'react-icons/md'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'

import './sidebar.css'
import Logo from '../../svg/index'
import Wallet from '../../svg/wallet'
import Toggle from '../../svg/toggle'
import BlockChain from '../../svg/blockchain'
import Select from '../../svg/select'
import {Link} from 'react-router-dom'

import {setTheme }from '../../Redux/Actions/themeAction'
import { useDispatch } from 'react-redux'

function Sidebar(props) {
  const dispatch=useDispatch()
  const [gamesVisibility, setGamesVisibility] = useState(false)
  const [navActive, setNavActive] = useState(false)
  const [themeState, setThemeState] = useState(
    localStorage.getItem('theme') || 'dark'
  )
  useEffect(() => {
    console.log('ilk hal storage:', localStorage.getItem('theme'))
    console.log('ilk hal statw:', themeState)
    !localStorage.getItem('theme') && localStorage.setItem('theme', 'dark')
  }, [])

  const toggleTheme = () => {
    let theme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'
    theme === 'dark' ? setThemeState('dark') : setThemeState('light')
    localStorage.setItem('theme', theme)
    dispatch(setTheme(theme))
    console.log('Theme:', theme)
  }
  const handleClick = () => {
    let navValue = document.querySelector('nav')
    navValue.classList.toggle('active')
    setNavActive(!navActive)
    setGamesVisibility(false)
    props.setNav(!navActive)
  }
  const toggleGamesVisibility = () => {
    setGamesVisibility(!gamesVisibility)
  }
  return (
    <div style={{zIndex: 9999}}>
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
              <Logo className='toggle mt-1' />
              <BsFillPlayCircleFill
                className={navActive ? 'mx-3 reverse' : 'regular'}
                onClick={handleClick}
              />
            </div>
            <Link to='/'>
              <span className='nav-tab' style={{marginTop: '25px'}}>
                <span className='icon'>
                  <AiOutlineHome className='mx-1' />
                </span>
                <Link to='/'>
                  <span className='title'>Home</span>
                </Link>
              </span>
            </Link>
            <Link>
              <span className='nav-tab' onClick={toggleGamesVisibility}>
                <span className='icon'>
                  <CgGames className='mx-1' />
                </span>
                <span className='title'>Games</span>
              </span>
            </Link>
            <div
              style={{
                display: gamesVisibility ? 'block' : 'none',
                marginLeft: '0px',
                transition: '.5s',
              }}
            >
              <Link to='./games/coin'>
                <span className='nav-tab'>
                  <span className='icon'>
                    <BsCoin className='mx-1' />
                  </span>
                  <span className='title'>Coinflip</span>
                </span>
              </Link>
              <Link to='./games/dice'>
                <span className='nav-tab'>
                  <span className='icon'>
                    <BsDice3 className='mx-1' />
                  </span>
                  <span className='title'>Dice</span>
                </span>
              </Link>
              <Link>
                <span className='nav-tab'>
                  <span className='icon'>
                    <IoRocketOutline className='mx-1' />
                  </span>
                  <span className='title'>Crash</span>
                  <span className='soon'>Soon</span>
                </span>
              </Link>
              <Link>
                <span className='nav-tab'>
                  <span className='icon'>
                    <FiTriangle className='mx-1' />
                  </span>
                  <span className='title'>Plinko</span>
                  <span className='soon'>Soon</span>
                </span>
              </Link>
              <Link>
                <span className='nav-tab'>
                  <span className='icon'>
                    <GiSloth className='mx-1' />
                  </span>
                  <span className='title'>Slot</span>
                  <span className='soon'>Soon</span>
                </span>
              </Link>
              <Link>
                <span className='nav-tab'>
                  <span className='icon'>
                    <SiNintendogamecube className='mx-1' />
                  </span>
                  <span className='title'>Roulette</span>
                  <span className='soon'>Soon</span>
                </span>
              </Link>
              <Link>
                <span className='nav-tab'>
                  <span className='icon'>
                    <GiTowerBridge className='mx-1' />
                  </span>
                  <span className='title'>Bridge</span>
                  <span className='soon'>Soon</span>
                </span>
              </Link>
              <Link>
                <span className='nav-tab'>
                  <span className='icon'>
                    <IoIosSwap className='mx-1' />
                  </span>
                  <span className='title'>Swap</span>
                  <span className='soon'>Soon</span>
                </span>
              </Link>
            </div>
            <Link>
              <span className='nav-tab'>
                <span className='icon'>
                  <HiOutlineUser className='mx-1' />
                </span>
                <span className='title'>Profile</span>
              </span>
            </Link>
            <Link>
              <span className='nav-tab'>
                <span className='icon'>
                  <IoStatsChartOutline className='mx-1' />
                </span>
                <span className='title'>Stats</span>
              </span>
            </Link>
            <Link>
              <span className='nav-tab'>
                <span className='icon'>
                  <TiContacts className='mx-1' />
                </span>
                <span className='title'>Contact</span>
              </span>
            </Link>
            <Link>
                {themeState === 'dark' ? (
                  <div className='nav-tab' onClick={toggleTheme}>
                    <span className='icon'>
                      <MdDarkMode className='mx-1' />
                    </span>
                    <span className='title'>Dark</span>
                  </div>
                ) : (
                  <div className='nav-tab' onClick={toggleTheme}>
                    <span className='icon'>
                      <BsFillSunFill className='mx-1' />
                    </span>
                    <span className='title'>Light</span>
                  </div>
                )}
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
