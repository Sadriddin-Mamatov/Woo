import React from 'react';
import "./Develop.css";
import KorG from "../../img/korG.png";
import Board from "../../img/board.png";
import Points from "../../img/leftpoints.png";
import Rpoints from "../../img/rightpoint.png";



const Develop = () => {
    return (
        <div className="develop-main">
            <div className="top-info">
                <div className="circle"></div>
                <div className="imgG">
                <img src={KorG} alt="korg" className="korg"/>
                <img src={Points} alt="points" className="points"/>
                </div>
                <div className="circleBig"></div>
                
                <div className="develop-info">
                    <h1>Develop Without Limits</h1>
                    <p>WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.</p>
                    <button className="btn btn-read">Read the  Documentation</button>
                </div>
            </div>
            
         
            <div className="bottom-info">
                <div className="develop-binfo">
                    <h1>Know our Global Community</h1>
                    <p>WooCommerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!</p>
                    <button className="btn btn-read">Read the  Documentation</button>
                </div>
                <img src={Rpoints} alt="points" className="rpoints"/>
                <div className="circleb"></div>
                <img src={Board} alt="board" className="board"/>
                <div className="bigCircle"></div>
               

            </div>

            
        </div>
    );
};

export default Develop;