import React from 'react';
import { Link } from 'react-router-dom';
// CSS 
import './Hero.css'

const Hero = () => {
    return (
        <section className='hero'>
            <p>Hi, i'm freelancer</p>
            <h1>react developer</h1>
            <div className="btn-group">
                <Link to='/project' className='btn' >Project</Link>
                <Link to='/contact' className='btn-light'>Contact</Link>
            </div>
        </section>
    )
}

export default Hero;