import React from 'react';
import { pricing } from '../../data/initialState';

const PricingCardTwo = () =>{
    return(
        <>
        {pricing.map((price,idx)=> (
            <div className="pricing-box-two row" key={price.title}>
                <div className="col-md-3 fa-icon">
                        <i className="fa fa-cube"></i>
                        <h2>{price.title}</h2>
                </div>
                <div className="col-md-5 content">
                <ul>
                    {price.users && <li> {price.users}</li> }
                    {price.space && <li> {price.space}</li> }
                    {price.support && <li> {price.support}</li> }
                    {price.form && <li> {price.form}</li> }
                    {price.customization && <li> {price.customization}</li> }
                </ul>
                </div>
                <div className="col-md-4 price-content">
                        <p className="price">${price.price}/year</p>
                        <button className="price-btn">Get Now</button>
                </div>
            </div>
        ))}
        </>
    )
}
export default PricingCardTwo;