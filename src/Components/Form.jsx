import './Form.css';

import React from 'react'

const Form = () => {
    return (
        <section className='form-control'>
            <h1>Contact Us</h1>
            <form className='form'>
                <div className="name-field">
                    <div className="input-field">
                        <input type="text" placeholder='Enter First Name' required />
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder='Enter Last Name' required />
                    </div>
                </div>
                <div className="input-field">
                    <input type="email" placeholder='Enter Email' required />
                </div>
                <div className="input-field">
                    <input type="text" placeholder='Enter Subject' required />
                </div>
                <div className="input-field">
                    <textarea cols="30" rows="10" placeholder='Write Message'></textarea>
                </div>
                <button type='button' className='btn'>Send Message</button>
            </form>
        </section>
    )
}

export default Form;