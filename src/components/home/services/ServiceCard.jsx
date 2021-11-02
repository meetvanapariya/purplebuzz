import React from 'react';

const ServiceCard = ({serviceList}) =>{
    return(
        <>
        {serviceList.map(service =>(
            <div key={service.title} className="custom-card">
            <img src={service.url} alt="" />
            <div className="card-content">
                <span>{service.title}</span>
                <p>{service.description}</p>
            </div>
            </div>
        ))}
        </>
    )
}
export default ServiceCard;