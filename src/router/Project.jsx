import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import WorkCard from '../Components/WorkCard';
import PricingCard from '../Components/PricingCard'
import Footer from '../Components/Footer';

const Project = () => {
    return (
        <div>
            <Navbar />
            <Banner
                heading='Projects'
                text='Some of my Latest work.'
            />
            <WorkCard />
            <PricingCard />
            <Footer />
        </div>
    )
}

export default Project;