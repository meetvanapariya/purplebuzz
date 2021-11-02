import React from 'react';
import Footer1 from './FooterPart1';
import Footer2 from './FooterPart2';
import Footer3 from './FooterPart3';
import Footer4 from './FooterPart4';
import Footer5 from './FooterPart5';

import { footerRoute2 } from '../../routes';
import { footerRoute3 } from '../../routes';
const Footer = () => {
    return(
        <>
        <footer className="pt-4">
        <div className="container">
            <div className="row py-4">
              <Footer1 />
              <Footer2 navMenu={footerRoute2}/>
              <Footer3 navMenu={footerRoute3}/>
              <Footer4 />
            </div>
        </div>
        <Footer5/>
      

    </footer>
        </>
    )
}   

export default Footer;