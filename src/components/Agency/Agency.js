import React from 'react';
import Gals from "../../img/gals.png"
import Kor from "../../img/kit.png";
import Semiz from "../../img/achki.png";
import CenterImg from "../../img/testim.png";
import Negr from "../../img/negr.png";
import Jin from "../../img/jin.png";
import soqol from "../../img/soqol.png";
import "./Agency.css"

const Agency = () => {
    return (
        <div>
            <h1>Trusted by Agencies & Store Owners</h1>
            <div className="leftBox">
                <img src={Gals} alt="gals" className="gals"/>
               
                <img src={Semiz} alt="semiz" className="semiz"/>
                <img src={Kor} alt="kor" className="kor"/>
            </div>
            <img src={CenterImg} alt="center" className="centerI"/>
            <div className="rightBox">
                <img src={Negr} alt="negr" className="negr"/>
                <img src={Jin} alt="jin" className="jin"/>
                <img src={soqol} alt="soqol" className="soqol"/>
            </div>
           
            

        </div>
    );
};

export default Agency;