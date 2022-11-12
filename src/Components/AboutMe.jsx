import './AboutMe.css';

import React from 'react';
import person from '../assets/aboutMe.jpg';

const AboutMe = () => {
    return (
        <section className='about_me'>
        <div className="container">
            {/* <div className="row"> */}
                <div className="left">
                <img src={person} alt="about me img" />
                </div>
                <div className="right">
                    <h1>Who am I? </h1>
                    <h3>Senior React JS Front End Developer</h3>
                    <p>My name is Muhammad Ahsan. I have experience of 3 years in Web Development. I can create any kind of responsive website for you.</p>
                </div>
            </div>
        {/* </div> */}
        </section>
    )
}

export default AboutMe