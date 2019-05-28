import '../assets/css/real_estate.css';
import homesDotComLogo from '../assets/images/homes_dot_com_logo.png';
import CARLogo from '../assets/images/CAR_logo.png';
import adobeLogo from '../assets/images/adobe_logo.png';
import HUDLogo from '../assets/images/HUD_logo.png';
import realtorLogo from '../assets/images/realtor_Logo.png';
import matterportLogo from '../assets/images/matterport_logo.png';
import React, { Component } from 'react';

class RealEstate extends Component {

    render() {
        return <div className="page-container real-estate-container">
            <div className="section">
                <h2>Invest in your business with the best technology</h2>
                <iframe src='https://my.matterport.com/show/?m=2YTPHAURcUg' frameBorder='0' allowFullScreen allow='vr'></iframe>
            </div>
            <div className="section">
                <h2>Look no further for the best photography</h2>
            </div>
            <div className="section clients-and-partners-section">
                <h1>In Compliance with:</h1>
                <div className="clients-and-partners-logo">
                    <img src={homesDotComLogo} alt="" />
                    <img src={CARLogo} style={{ margin: "50px 0px" }} alt="" />
                    <img src={adobeLogo} alt="" />
                    <img src={HUDLogo} alt="" />
                    <img src={realtorLogo} style={{ margin: "70px 0px" }} alt="" />
                    <img src={matterportLogo} style={{ margin: "59px 0px" }} alt="" />
                </div>
            </div>
        </div>
    }
}

export default RealEstate;