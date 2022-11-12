import './WorkCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import work from '../Data/WorkData';

const WorkCard = () => {
    return (
        <section className='workCard'>
            <h1>Projects</h1>
            <div className="container">
                <div className="project-container">
                    {work.map((data) => {
                        const { id, imgSrc, title, text } = data;
                        return <div className="project-card" key={id}>
                            <div className="projectImg">
                                <img src={imgSrc} alt={title} />
                            </div>
                            <h2>{title}</h2>
                            <p>{text}</p>
                            <Link to='/' className='btn'>View</Link>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default WorkCard;