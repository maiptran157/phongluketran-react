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
                <h1>This is how you will get a higher closing price in less time</h1>
                <iframe src='https://my.matterport.com/show/?m=2YTPHAURcUg' frameBorder='0' allowFullScreen allow='vr'></iframe>
            </div>
            <div className="section">
                <h1>For the effective real estate agent</h1>
                <div className="gallery-section">
                    <img src={residential01} alt="" />
                    <img src={residential02} alt="" />
                    <img src={residential03} alt="" />
                    <img src={residential04} alt="" />
                    <img src={residential05} alt="" />
                    <img src={residential06} alt="" />
                </div>
                <div className="gallery-section">
                    <img src={commercial01} alt="" />
                    <img src={commercial02} alt="" />
                </div>
                <h2>Quick 2 days turnaround
                <br />
                    or
                <br />
                    your money back <span style={{ textDecoration: "underline" }}>guaranteed</span>
                </h2>
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
            <div className="section pricing-section">
                <table>
                    <tr>
                        <th>Service Type</th>
                        <th><span>Limited Time</span> Pricing</th>
                    </tr>
                    <tr>
                        <td className="service-type-detail">
                            <span className="service-type-detail-title">Photography</span>
                            <span className="service-type-detail-desc"> (Up to 4 photos per room)</span>
                        </td>
                        <td><span className="limited-price">$100</span><span className="original-line-cross-out"> $150</span></td>
                    </tr>
                    <tr>
                        <td className="service-type-detail">
                            <span className="service-type-detail-title">Matterport 3D Scan</span>
                            <span className="service-type-detail-desc"> (Up to 2,000 sq. ft.)</span>
                            <span className="service-type-detail-bonus-flag">Additional 500 sq. ft.</span>
                        </td>
                        <td className="price-with-bonus">
                            <span className="limited-price">$200</span><span className="original-line-cross-out"> $250</span>
                            <br />
                            <span className="bonus-limited-price">+ $25</span>
                            <span className="bonus-original-line-cross-out"> + $50</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="service-type-detail">
                            <span className="service-type-detail-title">Video Slideshow</span>
                            <span className="service-type-detail-desc"> (3 for YouTube, Facebook, and Instagram)</span>
                        </td>
                        <td><span className="limited-price">$100</span><span className="original-line-cross-out"> $150</span></td>
                    </tr>
                    <tr>
                        <td className="service-type-detail">
                            <span className="service-type-detail-title">Floorplan</span>
                        </td>
                        <td><span className="limited-price">$25</span><span className="original-line-cross-out"> $25</span></td>
                    </tr>
                </table>

                {/* <h1>Services offer:</h1>
                <ul>
                    <li>Photography</li>
                    <li>3D Photography</li>
                    <li>Videography</li>
                </ul>
                <h1>Starting at only $150</h1> */}
            </div>
            <Footer />
        </div>
    }
}

export default RealEstate;