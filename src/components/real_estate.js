import '../assets/css/real_estate.css';

import residential01 from '../assets/images/residential_01.JPG';
import residential02 from '../assets/images/residential_02.JPG';
import residential03 from '../assets/images/residential_03.JPG';
import residential04 from '../assets/images/residential_04.JPG';
import residential05 from '../assets/images/residential_05.JPG';
import residential06 from '../assets/images/residential_06.JPG';

import commercial01 from '../assets/images/commercial_01.jpg';
import commercial02 from '../assets/images/commercial_02.jpg';

import homesDotComLogo from '../assets/images/homes_dot_com_logo.png';
import CARLogo from '../assets/images/CAR_logo.png';
import adobeLogo from '../assets/images/adobe_logo.png';
import HUDLogo from '../assets/images/HUD_logo.png';
import realtorLogo from '../assets/images/realtor_Logo.png';
import matterportLogo from '../assets/images/matterport_logo.png';

import Footer from './footer';
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
                <h3>Residential:</h3>
                <div className="gallery-section">
                    <img src={residential01} alt="" />
                    <img src={residential02} alt="" />
                    <img src={residential03} alt="" />
                    <img src={residential04} alt="" />
                    <img src={residential05} alt="" />
                    <img src={residential06} alt="" />
                </div>
                <h3>Commercial:</h3>
                <div className="gallery-section">
                    <img src={commercial01} alt="" />
                    <img src={commercial02} alt="" />
                </div>
                <h2 style={{ fontStyle: "italic" }}>Turnaround within 2 days or your money back</h2>
            </div>
            <div className="section partners-section">
                <h1>In Compliance with:</h1>
                <div className="partners-logo">
                    <img src={homesDotComLogo} alt="" />
                    <img src={CARLogo} style={{ margin: "50px 0px" }} alt="" />
                    <img src={adobeLogo} alt="" />
                    <img src={HUDLogo} alt="" />
                    <img src={realtorLogo} style={{ margin: "70px 0px" }} alt="" />
                    <img src={matterportLogo} style={{ margin: "59px 0px" }} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    }
}

export default RealEstate;