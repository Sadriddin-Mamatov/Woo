import React from 'react';
import First from "../../img/1.jpg"
import Second from "../../img/2.jpg";
import Three from "../../img/3.jpg";

import "./Madesimple.css";

const MadeSimple = () => {
    return (
        <div className="madesimpleB">
            <h1 className="SimpleTitle">Your eCommerce made simple</h1>
               <div className="madesimple">
            
                <div className="card chapda">
                    <img src={First} alt="apple" className="first"/>
               
                    <div className="card-body">
                        <h1 className="card-title">All You Need to Start</h1>
                        <p className="card-text">Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
                        <a href="#sdds" className="card-link">Ecommerce for Wordpress ›</a>
                    </div>
                </div>
                <div className="card ortada">
                    <img src={Second} alt="squ" className="second"/>
                    <div className="card-body">
                        <h1 className="card-title">Customize and Extend</h1>
                        <p className="card-text">From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.</p>
                        <a href="#sead" className="card-link">Browse Extensions ›</a>
                    </div>
                </div>
                <div className="card ongda">
                    <img src={Three} alt="comp" className="three"/>
                    <div className="card-body">
                        <h1 className="card-title">Active Community</h1>
                        <p className="card-text">WooCommerce is one of the fastest-growing eCommerce communities. </p>
                        <a href="#afsre" className="card-link">Check our Forums ›</a>
                    </div>
                </div>
                
            </div>
        </div>
       
    );
};

export default MadeSimple;