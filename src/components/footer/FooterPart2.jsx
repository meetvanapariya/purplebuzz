import React from 'react';
import { Link } from 'react-router-dom';
const Footer2 = (routes) =>{
    return(
        <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
        <h3 className="h4 pb-lg-3 text-light light-300">Our Company</h3>
            <ul className="list-unstyled text-light light-300">

                {routes.navMenu.map(route => (
                    <li className="pb-2" key={route.name}>
                         <i className="fas fa-chevron-right"></i><Link className="text-decoration-none text-light" to={route.url} > {route.name}</Link>
                    </li>
                ))}
            </ul>
    </div>
    );
}

export default Footer2;