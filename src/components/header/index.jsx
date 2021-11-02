
import React from 'react';
import Nav from './nav';
import routes from '../../routes';

export default() =>{
    return(

        // Created using Bootstrep
       <>
        <nav id="main_nav" className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div className="container d-flex justify-content-between align-items-center">
            <a className="navbar-brand h1" href="/">
                <i className="bx bx-buildings bx-sm text-dark"></i>
                <span className="text-dark h4">Purple</span> <span className="text-primary h4">Buzz</span>
            </a>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler-success" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation" onClick={toggleNavMobile}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="align-self-center navbar-collapse flex-fill d-lg-flex justify-content-lg-between collapse " id="navbar-toggler-success">
                <div className="flex-fill mx-xl-5 mb-2">
                    <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
                       
                     {routes.map(route => (
                            <Nav key={route.name} navMenu={route}/>
                     ))}
                    </ul>
                </div>
                <div className="navbar align-self-center d-flex">
                    <a className="nav-link" href="#"><i className="fas fa-bell text-primary"></i></a>
                    <a className="nav-link" href="#"><i className="fas fa-cog text-primary"></i></a>
                    <a className="nav-link" href="#"><i className="fas fa-user text-primary"></i></a>
                </div>
            </div>
        </div>
    </nav>
       </>

    // Custom Code
    // <>
    //  <nav class="nav">
    //   <div class="container">
    //     <div class="main-nav-menu">
    //       <h4 class="logo"><i class="fas fa-building"></i> My <span>Website</span></h4>
    //       <button id="btnToggle" class="btn-nav-mob"><i class="fa fa-bars"></i></button>
    //       <div class="left-nav-menu">
    //         <ul>
    //         {routes.map(route => (
    //             <Nav key={route.name} navMenu={route}/>
    //         ))}
    //         </ul>
    //       </div>
    //       <div class="right-nav-menu">
    //         <ul>
    //           <li><a href="#"><i class="fas fa-bell"></i></a></li>
    //           <li><a href="#"><i class="fas fa-cog"></i></a></li>
    //           <li><a href="#"><i class="fas fa-user"></i></a></li>
    //         </ul>
    //       </div>

    //     </div>

    //   </div>
    // </nav>
    // </>
    )
}

const toggleNavMobile = () => {
    const navbar = document.querySelector('#navbar-toggler-success');
    navbar.classList.toggle('show');
}