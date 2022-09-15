import React from 'react'
import {FaUser} from 'react-icons/fa'
import './sidebar.css'
import Logo from '../../svg/index'
import Select from '../../svg/select'


function Sidebar() {
    const handleClick = () => {
        let navValue = document.querySelector('nav');
        navValue.classList.toggle('active');
        console.log('tıkladın');
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
        <div id='sidebar__container'>
           <nav>
            <ul>
                <div className='text-center'>
                    <Logo onClick={handleClick} className="toggle mx-2" />
                    <Select />
                </div>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Home</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Profile</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Messages</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Help</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Setting</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Password</span>
                    </a>
                </li>
                <li>
                    <a className='nav-tab'>
                        <span className="icon"><FaUser className='mx-1' /></span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </nav>
        </div>
    </>
  )
}

export default Sidebar