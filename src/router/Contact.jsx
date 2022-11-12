import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Form from '../Components/Form';
import Footer from '../Components/Footer';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Banner
                heading='Get in Touch'
                text='Feel free to Contact any information'
            />
            <Form />
            <Footer />
        </div>
    )
}

export default Contact;