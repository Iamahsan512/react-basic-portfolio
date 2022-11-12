import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';

const About = () => {
    return (
        <div>
            <Navbar />
            <Banner
                heading='About Me'
                text="I'm friendly a Front End Developer"
            />
            <AboutMe />
            <Footer />
        </div>
    )
}

export default About