import React, { useState } from 'react';
// CSS 
import './Navbar.css';
// React Router Dom 
import { Link } from 'react-router-dom';
// React icons 
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    window.addEventListener('scroll', changeColor)
    const navHandler = () => setShowNav(!showNav);

    return (
        <nav className={scrollNav ? 'navbar scrolled-nav' : 'navbar'}>
            <Link to='/'>
                <h2>Ahsan Mughal</h2>
            </Link>
            <ul className={showNav ? 'nav-menu' : 'nav-menu active'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>about</Link>
                </li>
                <li>
                    <Link to='/project'>project</Link>
                </li>
                <li>
                    <Link to='/contact'>contact</Link>
                </li>
            </ul>
            <div className="menu-icon" onClick={navHandler}>
                {showNav ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    )
}

export default Navbar;