import '../assets/css/home.css';
import profilePhoto from '../assets/images/profile_photo.png';
import homesDotComLogo from '../assets/images/homes_dot_com_logo.png';
import CARLogo from '../assets/images/CAR_logo.png';
import adobeLogo from '../assets/images/adobe_logo.png';
import HUDLogo from '../assets/images/HUD_logo.png';
import realtorLogo from '../assets/images/realtor_logo.svg';
import matterportLogo from '../assets/images/matterport_logo.png';
import React, { Component } from 'react';

class Home extends Component {

    render() {
        return <div className="home-container">
            <div className="section about-section">
                <img src={profilePhoto} alt="" />
                <p className="about-text">
                    <strong>We help real estate agent sell house faster</strong>
                    <br />
                    With time and statiscally proven technologies, we can generate 49% more qualified leads for you (Apartment.com) and reduce properties' days on market by 56% (Gina Howarth, RE/MAX First Choice)
                    <br />
                    <strong>We only provide the best value for you</strong>
                    <br />
                    Our rates are always market compeitive and we only provide our best
                    <br />
                    <strong>You can make the world a better place</strong>
                    <br />
                    5% of our net profit always goes to charities and we could not have done it without you. Thank you.
                </p>
            </div>
            <div className="section clients-and-partners-section">
                <h1>Clients and Partners</h1>
                <div className="clients-and-partners-logo">
                    <img src={homesDotComLogo} alt="" />
                    <img src={CARLogo} alt="" />
                    <img src={adobeLogo} alt="" />
                    <img src={HUDLogo} alt="" />
                    <img src={realtorLogo} alt="" />
                    <img src={matterportLogo} alt="" />
                </div>
            </div>
            <div className="section charities-we-support-section">
                <h1>Charities We Support</h1>

            </div>
        </div>
    }
}

export default Home;