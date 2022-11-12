import React from 'react';
// CSS 
import './Footer.css';
// React Icons 
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaHome, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
// Router Dom 
import { Link } from 'react-router-dom';

const date = new Date().getFullYear();


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="company">
                    <h3>About the company</h3>
                    <p>This is me Ahsan Mughal. CEO & founder of this Website. I enjoy to creating new projects and coding challenges.</p>
                    <div className="social-media">
                        <FaFacebook className='fa' />
                        <FaInstagram className='fa' />
                        <FaGithub className='fa' />
                        <FaLinkedin className='fa' />
                    </div>
                </div>
                <div className="location">
                    <h3>Location</h3>
                    <p> <FaHome size={16} style={{ marginRight: '10px', alignItems: 'center' }} /> Okara , Pakistan</p>
                    <p> <FaPhoneAlt size={16} style={{ marginRight: '10px', alignItems: 'center' }} /> +92-3074961-938</p>
                    <p> <FaEnvelope size={16} style={{ marginRight: '10px', alignItems: 'center' }} /> ahsanwebengr@gmail.com</p>
                </div>
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <Link to='/' >Home</Link>
                        </li>
                        <li>
                            <Link to='/about' >About</Link>
                        </li>
                        <li>
                            <Link to='/project' >Project</Link>
                        </li>
                        <li>
                            <Link to='/contact' >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                 ©Copyright 2021- {date} All right reserved by <span>Ahsan Mughal</span>
            </div>
        </footer>
    )
}

export default Footer;