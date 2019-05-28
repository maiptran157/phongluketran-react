import '../assets/css/header.css';
import blankLogo from '../assets/images/Blank_Logo.png';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return <header>
            <div id="mobile-menu">Mobile Menu</div>
            <div className="header-text">
                <h1><Link to="/">PLMT</Link></h1>
                <h5>Invest in It</h5>
            </div>
            <div className="site-logo">
                <img src={blankLogo} alt="" />
            </div>
        </header>
    }
}

export default Header;