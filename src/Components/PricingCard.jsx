import React from 'react';
// CSS 
import './PricingCard.css';
// Data 
import PriceData from '../Data/PriceData';
// React Router Dom 
import { Link } from 'react-router-dom';

const PricingCard = () => {
    return (
        <section className='price-table'>
        <h1>Pricing Table</h1>
            <div className="container">
                {
                    PriceData.map((data) => {
                        const { id, plan, price, days, pages, option, design } = data;
                        return <article className='card' key={id}>
                            <h4> - {plan} -</h4>
                            <div className="divider"></div>
                            <h1 className="price">${price}</h1>
                            <ul>
                                <li> - {days} Days -</li>
                                <li> - {pages} Pages - </li>
                                <li> - {option} - </li>
                                <li> - {design} - </li>
                            </ul>
                            <Link to='/contact' className='btn'>Add to Cart</Link>
                        </article>
                    })
                };
            </div>
        </section>
    )
}

export default PricingCard