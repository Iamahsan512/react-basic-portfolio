import React from 'react';
// CSS 
import './Banner.css';

const Banner = (props) => {
    const { heading, text } = props;
    return (
        <div className='project-banner'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Banner