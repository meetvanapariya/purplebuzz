import React from 'react';
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
const WorkCard = ({services}) =>{
    let { path, url } = useRouteMatch();
    return(
        <>
        {services.map(service => (
            <div className="col-md-4" key={service.title}>
            <div className="work-card-content">
                <img src={service.url} alt="img"/>
                <div className="card-body">
                    <h5 className="card-title light-300 text-dark">{service.title}</h5>
                    <p>{service.description}</p>
                    <Link to={`${url}/${service.slug}`} >Read More</Link>
                </div>
            </div>
            </div>
        ))}
    </>
    );
}

export default WorkCard;