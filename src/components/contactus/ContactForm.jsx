import React from 'react';
import FormFields from './FormFields';
export default () => {
    return (
        <section className="contact-section-two">
            <div className="container">
                <h2>Create success campaign with us!</h2>
                <h3>Elit, sed do eiusmod tempor</h3>
                <p>Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                <div className="row">
                <div className="col-lg-4">
                    <div className="contact-card">
                        <div>
                            <i className="fa fa-archive"></i>
                        </div>
                        <div>
                        <ul className="contact-info list-unstyled light-300">
                        <li className="h5 mb-0">Media Contact</li>
                        <li className="text-muted">Mr. John Doe</li>
                        <li className="text-muted">010-020-0340</li>
                    </ul>
                        </div>
                    </div>
                    <div className="contact-card">
                        <div>
                            <i className="fa fa-archive"></i>
                        </div>
                        <div>
                        <ul className="contact-info list-unstyled light-300">
                        <li className="h5 mb-0">Media Contact</li>
                        <li className="text-muted">Mr. John Doe</li>
                        <li className="text-muted">010-020-0340</li>
                    </ul>
                        </div>
                    </div>
                    <div className="contact-card">
                        <div>
                            <i className="fa fa-archive"></i>
                        </div>
                        <div>
                        <ul className="contact-info list-unstyled light-300">
                        <li className="h5 mb-0">Media Contact</li>
                        <li className="text-muted">Mr. John Doe</li>
                        <li className="text-muted">010-020-0340</li>
                    </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 mt-4">
                    <FormFields />
                </div>
            </div>
            </div>
           
        </section>
    );
}