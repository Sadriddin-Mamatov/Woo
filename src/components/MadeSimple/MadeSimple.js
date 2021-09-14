import React from 'react';
import Apple from "../../img/kisspng-apple-pay-google-pay-apple-wallet-payment-5b074a74632137 1.png";
import Info from "../../img/image 16.png";
import Phone from "../../img/Rectangle 223.png";
import Square from "../../img/A.png";
import Orta from "../../img/Rectangle 224orta.png";
import Face from "../../img/face.png";
import Jetpack from "../../img/jetpack.png";
import Comp from "../../img/comp.png";
import People from "../../img/peopla.png";
import Girl from "../../img/girl.png";
import ManL from "../../img/manlaptop.png";
import Squ from "../../img/image sq.png";


import "./Madesimple.css";

const MadeSimple = () => {
    return (
        <div>
            <h1 className="SimpleTitle">Your eCommerce made simple</h1>
               <div className="madesimple">
            
                <div className="card chapda">
                    <img src={Apple} alt="apple" className="apple"/>
                    <img src={Info} alt="info" className="info"/>
                    <img src={Phone} alt="phone" className="phone"/>
                    <div className="card-body1">
                        <h1 className="card-title">All You Need to Start</h1>
                        <p className="card-text">Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
                        <a href="#" className="card-link">Ecommerce for Wordpress ›</a>
                    </div>
                </div>
                <div className="card ortada">
                    <img src={Squ} alt="squ" className="squ"/>
                    <img src={Square} alt="square" className="square"/>
                    <img src={Orta} alt="orta" className="orta"/>
                    <img src={Face} alt="face" className="face"/>
                    <img src={Jetpack} alt="jetpack" className="jetpack"/>
                    <div className="card-body2">
                        <h1 className="card-title">Customize and Extend</h1>
                        <p className="card-text">From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.</p>
                        <a href="#" className="card-link">Browse Extensions ›</a>
                    </div>
                </div>
                <div className="card ongda">
                    <img src={Comp} alt="comp" className="comp"/>
                    <img src={People} alt="people" className="people"/>
                    <img src={Girl} alt="girlss" className="girlss"/>
                    <img src={ManL} alt="manl" className="manl"/>
                    <div className="card-body3">
                        <h1 className="card-title">Active Community</h1>
                        <p className="card-text">WooCommerce is one of the fastest-growing eCommerce communities. </p>
                        <a href="#" className="card-link">Check our Forums ›</a>
                    </div>
                </div>
                
            </div>
        </div>
       
    );
};

export default MadeSimple;