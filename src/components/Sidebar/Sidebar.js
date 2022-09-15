import React from 'react'
import {FaUser} from 'react-icons/fa'
import './sidebar.css'

function Sidebar() {
    const handleClick = () => {
        let navValue = document.querySelector('nav');
        navValue.classList.toggle('active');
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
        <nav>
        <ul>
            <li>
                <a onClick={handleClick} className="toggle">
                    <span className="icon"><FaUser className='mx-1' /></span>
                    <span className="title">Menu</span>
                </a>
            </li>
            <li>
                <a>
                    <span className="icon"><FaUser className='mx-1' /></span>
                    <span className="title">Home</span>
                </a>
            </li>
            <li>
                <a>
                    <span className="icon"><FaUser className='mx-1' /></span>
                    <span className="title">Profile</span>
                </a>
            </li>
            <li>
                <a>
                    <span className="icon"><FaUser className='mx-1' /></span>
                    <span className="title">Messages</span>
                </a>
            </li>
            <li>
                <a>
                    <span className="icon"><FaUser className='mx-1' /></span>
                    <span className="title">Help</span>
                </a>
            </li>
            <li>
                <a>
                    <span className="icon"><FaUser className='mx-1' /></span>
                    <span className="title">Setting</span>
                </a>
            </li>
            <li>
                <a>
                    <span className="icon"><FaUser className='mx-1' /></span>
                    <span className="title">Password</span>
                </a>
            </li>
            <li>
                <a>
                    <span className="icon"><FaUser className='mx-1' /></span>
                    <span className="title">Sign Out</span>
                </a>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Sidebar