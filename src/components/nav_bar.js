import '../assets/css/nav_bar.css';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return <nav className="left-body">
            <ul className="nav-bar">
                <li><Link to="/">About</Link></li>
                <li><Link to="/real-estate">Real Estate</Link></li>
                <li><Link to="/event">Event</Link></li>
                <li><Link to="/fashion">Fashion</Link></li>
                <li><Link to="/marketing">Marketing</Link></li>
            </ul>
        </nav>
    }
}

export default withRouter(NavBar);