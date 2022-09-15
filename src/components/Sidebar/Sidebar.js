import React,{useState} from 'react'
import {FaUser} from 'react-icons/fa'
import './sidebar.css'
import Logo from '../../svg/index'
import Select from '../../svg/select'


function Sidebar(props) {
    const [gamesVisibility, setGamesVisibility] = useState(false)
    const [navActive, setNavActive] = useState(false)

    const handleClick = () => {
        let navValue = document.querySelector('nav');
        navValue.classList.toggle('active');
        setNavActive(!navActive)
        setGamesVisibility(!gamesVisibility)
        props.setNav(!navActive)
        console.log('tıkladın');
    }
    const toggleGamesVisibility =()=>{
    }
  return (
    <>
        <header>
            <div onClick={handleClick} className="toggle">
                <FaUser className='mx-1' />
            </div>
            <h3>Dashboard</h3>
            <a href="#">
                <FaUser className='mx-1' />
            </a>
        </header>
        <div className='sidebar__container'>
           <nav>
            <ul>
                <div className='text-center'>
                    <Logo className="toggle mx-2" />
                    <Select  onClick={handleClick}/>
                </div>
                <li>
                    <a className='nav-tab' style={{marginTop:'25px'}}>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Home</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab' onClick={toggleGamesVisibility}>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Games</span>
                    </a>
                </li>
                <div style={{display:gamesVisibility ? 'block':'none',marginLeft:'30px',transition:'.5s'}}>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Coinflip</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Dice</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Crash</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Plinko</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Slot</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Roulette</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Bridge</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Swap</span>
                    </a>
                </li>
                </div>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Profile</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Stats</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Contact</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Dark</span>
                    </a>
                </li>
            </ul>
        </nav>
        </div>
    </>
  )
}

export default Sidebar