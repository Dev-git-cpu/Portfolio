import React, {useState} from 'react'
import './Navbar.css'
import MobileNav from '../MobileNav/MobileNav';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const[openMenu, setOpenMenu] = useState(false);

    const toggleMenu = ()=>{
        setOpenMenu(!openMenu);
    };

  return (
    <>

       <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

    <nav className='nav=wrapper'>
        <div className='nav-content'>
            <img className='logo' src="file.png" alt='' />
            {/* <h1>Time to program</h1> */}
            <ul>
                <li>
                    <Link className='menu-item' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='menu-item' to='/skills'>Skill</Link>
                </li>
                <li>
                    <Link className='menu-item' to='/work'>Work Exprience</Link>
                </li>
                <li>
                    <Link className='menu-item' to='/contact'>Contact Me</Link>
                </li>
                <button className='contact-btn' onClick={()=>{}}>
                    Hire Me
                </button>

            </ul>
            <button className='menu-btn' onClick={toggleMenu}>
                <span class={"material-symbols-outlined"}
                    style={{fontSize:"1.8rem"}}>
                        {openMenu ? "close" : "menu"}
                        </span>
            </button>

        </div>
    </nav>
    </>
  )
}

export default Navbar
