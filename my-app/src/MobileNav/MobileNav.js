import React from 'react'
import './MobileNav.css'
const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active": ""}`}
    onClick={toggleMenu}
    >
        <div className='mobile-menu-container'>
            {/* <img className='logo' src='' alt='/>' */}
            <h1>Time to program</h1>

            <ul>
            <li>
                    <a className='menu-item'>Home</a>
            </li>

            <li>
                    <a className='menu-item'>Skill</a>
                </li>

                <li>
                    <a className='menu-item'>Work Exprience</a>
                </li>

                <li>
                    <a className='menu-item'>Contact Me</a>
                </li>
                <button className='contact-btn' onClick={()=>{}}>
                    Hire Me
                </button>
            </ul>

        </div>

    </div>
    </>
  )
}

export default MobileNav
