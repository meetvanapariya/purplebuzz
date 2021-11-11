import React from 'react';
import PricingCardOne from './PricingCardOne';
import PricingCardTwo from './PricingCardTwo';
import PricingCardThree from './PricingCardThree';
export default() => {
    return(
        <>
        <section className="pricing-section-one">
            <div className="container">
                <div className="title">
                <h1>Pricing</h1>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.</p>
                </div>
                <div className="pricing-box">
                <PricingCardOne />
                </div>
            </div>
        </section>
        <section className="pricing-section-two">
            <div className="container">
                <div className="title">
                <h1>Our Pricing</h1>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.</p>
                </div>
               <PricingCardTwo />
            </div>
        </section>
        <section className="pricing-section-three">
            <div className="container">
                <div className="title">
                <h1>Pricing</h1>
                <p>Vector illustration from StorySet. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut facilisis.</p>
                </div>
             <div className="row">
                 <div className="col-lg-6"> 
                    <img src="https://templatemo.com/templates/templatemo_561_purple_buzz/assets/img/pricing.svg" alt="" />
                </div>
                <div className="col-lg-6">
                 <PricingCardThree />
                </div>
             </div>
            </div>
        </section>
        </>
    );
}