import '../assets/css/header.css';
import blankLogo from '../assets/images/Blank_Logo.png';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isTSExpressionWithTypeArguments } from '@babel/types';

class Header extends Component {
    constructor(props) {
        super(props);
        this.checkIfHomeActive = this.checkIfHomeActive.bind(this);
        this.checkIfActive = this.checkIfActive.bind(this);
        this.state = {
            iOpen: false
        }
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    checkIfActive(pathname) {
        var currentPath = this.props.location.pathname;
        return currentPath.includes(pathname) ? "active" : null;
    }

    checkIfHomeActive() {
        var currentPath = this.props.location.pathname;
        if (currentPath.split("")[currentPath.length - 1] === "/") {
            return "active";
        }
        return null;
    }

    toggleMobileMenu() {
        this.setState(
            prevState => ({
                iOpen: !prevState.iOpen
            })
        )
    }

    render() {
        return <header>
            <div id="mobile-menu">
                <div className="mobile-menu-symbol" onClick={this.toggleMobileMenu}> {this.state.iOpen ? "Close" : "Menu"} </div>
                {
                    this.state.iOpen ?
                        <div className="mobile-menu-container">
                            <ul className="nav-bar">
                                <li className={this.checkIfHomeActive()} onClick={this.toggleMobileMenu}><Link to="/">About</Link></li>
                                <li className={this.checkIfActive("/real-estate")} onClick={this.toggleMobileMenu}><Link to="/real-estate">Real Estate</Link></li>
                                <li className={this.checkIfActive("/event")} onClick={this.toggleMobileMenu}><Link to="/event">Event</Link></li>
                                <li className={this.checkIfActive("/fashion")} onClick={this.toggleMobileMenu}><Link to="/fashion">Fashion</Link></li>
                                <li className={this.checkIfActive("/marketing")} onClick={this.toggleMobileMenu}><Link to="/marketing">Marketing</Link></li>
                                <li className={this.checkIfActive("/contact")} onClick={this.toggleMobileMenu}><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        : null
                }

            </div>
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

export default withRouter(Header);