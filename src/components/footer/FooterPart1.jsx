import React from 'react';

const Footer1 = () =>{
    return(
        <div className="col-lg-3 col-12 align-left">
        <a className="navbar-brand" href="index.html">
            <i className="bx bx-buildings bx-sm text-light"></i>
            <span className="text-light h5">Purple</span> <span className="text-light h5 semi-bold-600">Buzz</span>
        </a>
        <p className="text-light my-lg-4 my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut.
        </p>
        <ul className="list-inline footer-icons light-300">
            <li className="list-inline-item">
                <a className="text-light" target="_blank" href="http://facebook.com/">
                    <i className="fab fa-facebook-square"></i>
                </a>
            </li>
            <li className="list-inline-item">
                <a className="text-light" target="_blank" href="http://facebook.com/">
                    <i className="fab fa-instagram"></i>
                </a>
            </li>
            <li className="list-inline-item">
                <a className="text-light" target="_blank" href="http://facebook.com/">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
        </ul>
    </div>
    );
}

export default Footer1;