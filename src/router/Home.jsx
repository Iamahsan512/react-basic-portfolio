import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import WorkCard from '../Components/WorkCard';
import Footer from '../Components/Footer';


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <WorkCard />
            <Footer />
        </>
    )
}

export default Home;