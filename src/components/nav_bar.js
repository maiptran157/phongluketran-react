import '../assets/css/nav_bar.css';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.checkIfHomeActive = this.checkIfHomeActive.bind(this);
        this.checkIfActive = this.checkIfActive.bind(this);
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

    render() {
        return <nav className="left-body">
            <ul className="nav-bar">
                <li className={this.checkIfHomeActive()}><Link to="/">About</Link></li>
                <li className={this.checkIfActive("/real-estate")}><Link to="/real-estate">Real Estate</Link></li>
                <li className={this.checkIfActive("/event")}><Link to="/event">Event</Link></li>
                <li className={this.checkIfActive("/fashion")}><Link to="/fashion">Fashion</Link></li>
                <li className={this.checkIfActive("/marketing")}><Link to="/marketing">Marketing</Link></li>
            </ul>
        </nav>
    }
}

export default withRouter(NavBar);