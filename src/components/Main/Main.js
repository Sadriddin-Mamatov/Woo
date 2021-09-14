import React from 'react';
import rightImg from "../../img/featured-image.png";
// import Girls from "../../img/image 15girls.png";
// import Oyoq from '../../img/PRODUCT.png';
// import Group5 from '../../img/Group 5.png';
// import Group7 from '../../img/Group 7.png';
// import Group8 from '../../img/Group 8.png';
// import Stripe from "../../img/Group 9.png";
import "./Main.css";


const Main = () => {
    return (
        <div className="main-kotta">
            <div className="main-left">
                <span className="header">Building exactly the eCommerce website you want.</span>
                <p className="par">WooCommerce is a customizable, open-source eCommerce platform built on WordPress. 
                  Get started quickly and make your way.</p>
                  <button className="btn start-btn">Start a New Store</button>
                   or
                  <a href="#dawa" className="c"> Customize & Extend ›</a>
            </div>
            <div className="main-right">
                <img src={rightImg} alt="imgr" className="imgr"/>
            </div>
        </div>
    );
};

export default Main;