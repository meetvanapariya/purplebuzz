import React from 'react';
import { pricing } from '../../data/initialState';

const PricingCardOne = () =>{
    return(
        <>
        {pricing.map((price,idx)=> (
             <div key={price.title} className={(idx==1)?"active-box":""}>
             <i className="fa fa-cube"></i>
             <h2>{price.title}</h2>
             <p className="price">${price.price}/year</p>
             <ul>
                {price.users && <li> {price.users}</li> }
                {price.space && <li> {price.space}</li> }
                {price.support && <li> {price.support}</li> }
                {price.form && <li> {price.form}</li> }
                {price.customization && <li> {price.customization}</li> }
             </ul>
             <button className="price-btn">Get Now</button>
         </div>
        ))}
        </>
    )
}
export default PricingCardOne;