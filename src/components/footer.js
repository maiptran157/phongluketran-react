import '../assets/css/footer.css';
import React, { Component } from 'react';
import contactInfo from '../config/contact_info';

class Footer extends Component {

    render() {
        return <footer id="site-footer">
            <div className="footer-child copy-right">© 2019 PLMT.  All rights reserved.</div>
            <div className="footer-child contact-info">
                <a href={`tel::${contactInfo.phone}`} target="_top">
                    <i className="fas fa-phone" aria-hidden="true"></i>
                    {contactInfo.phone}
                </a>
            </div>
            <div className="footer-child contact-info">
                <a href={`mailto:${contactInfo.email}`} target="_top">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    {contactInfo.email}
                </a>
            </div>
        </footer>
    }
}

export default Footer;