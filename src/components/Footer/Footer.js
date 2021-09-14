import React from 'react';
import "./Footer.css";
import {BiCheckCircle} from "react-icons/bi"
// import {IoFilterCircle} from "react-icons/io";
import {FaLock} from "react-icons/fa"
import Logob from "../../img/LOGOb.png";
import {GrTwitter} from "react-icons/gr";
import {FaFacebook} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {BsWifi} from "react-icons/bs";
const Footer = () => {
    return (
        <div className="lol">
            <div className="footer">
                        <div className="fottop">
                            <h6> <BiCheckCircle className="da"/> 30 day money back guarantee</h6>
                            <h6> Support teams across the world</h6>
                            <h6> <FaLock /> Safe & Secure online payment</h6>
                        </div>
                        <div className="avg">
                        <img src={Logob} alt="logo" className="logob"/>
                        </div>
                    
                        <div className="fotbottom">
                            <hr/>
                            <div className="1l">
                            <h6>WHO WE ARE</h6>
                            <p>About</p>
                            <p>Team</p>
                            <p>Work With Us</p>
                            </div>
                            <div className="l2">
                            <h6>Woocommerce</h6>
                            <p>About</p>
                            <p>Team</p>
                            <p>Work With</p>
                            <p>About</p>
                            <p>Team</p>
                            <p>Workd</p>
                            </div>
                            <div className="l3">
                            <h6>Woocommerce</h6>
                            <p>About</p>
                            <p>Team</p>
                            <p>Work With</p>
                            <p>About</p>
                            <p>Team</p>
                            <p>Workd</p>
                            </div>
                            <div className="l3">
                            <h6>Woocommerce</h6>
                            <p>About</p>
                            <p>Team</p>
                            <p>Work With</p>
                            <p>About</p>
                            <p>Team</p>
                            <p>Workd</p>
                            </div>
                            <div className="l3">
                            <h6>Woocommerce</h6>
                            <p>About</p>
                            <p>Team</p>
                            <p>Work With</p>
                            <p>About</p>
                            <p>Team</p>
                            <p>Workd</p>
                            </div>


                        </div>
                    </div>
                    <div className="bottombot">
                    <div>
                    <GrTwitter className="icon"/>
                    <FaFacebook className="icon"/>
                    <BsWifi className="icon"/>
                    <AiFillInstagram className="icon"/>
                    </div>
                
                    <span>COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS  PRIVACY POLICY</span>
                    <div>AUTOMATIC</div>
                </div>
        </div>
       
    );
};

export default Footer;