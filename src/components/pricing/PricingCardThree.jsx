import React from 'react';
import { pricing } from '../../data/initialState';

const PricingCardThree = () =>{
    return(
        <>
        {pricing.map((price,idx)=> (
             <div className="card-three">
             <div className="fa-icon"><i className="fa fa-cube"></i></div>
             <div className="card-content-three">
                <h2>{price.title}</h2>
                <p>{price.description}</p>
            </div>
            <div>
                <button className="price-btn">${price.price}</button>
            </div>
         </div>
        ))}
        </>
    )
}
export default PricingCardThree;