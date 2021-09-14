import React from 'react';
import "./Supported.css";
import RealP from "../../img/people-section.png";
const Supported = () => {
    return (
        <div>
            <img src={RealP} alt="realP" className="realP"/>
            <div className="bottom">
                  <h1 className="ku">WooCommerce - the most customizable eCommerce platform for building your online business.</h1>
                  <button className="btn btnE">GET STARTED</button>
            </div>
    
        </div>
    );
};

export default Supported;