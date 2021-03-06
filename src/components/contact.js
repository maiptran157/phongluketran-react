import '../assets/css/contact.css';
import React from 'react';
import contactInfo from '../config/contact_info';

function Contact() {
    return <div className="page-container contact-container">
        <div className="section">
            <h1>Contact now for a limited time offer!</h1>
            <div className="contact-type">
                <div className="contact-info">
                    <a href={`tel::${contactInfo.phone}`} target="_top">
                        <i className="fas fa-phone" aria-hidden="true"></i>
                        {contactInfo.phone}
                    </a>
                </div>
                {/* <button><a href={`tel::${contactInfo.phone}`} target="_top">Call Today</a></button> */}
            </div>
            <div className="contact-type">
                <div className="contact-info">
                    <a href={`mailto:${contactInfo.email}`} target="_top">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        {contactInfo.email}
                    </a>
                </div>
                {/* <button><a href={`mailto:${contactInfo.email}`} target="_top">Send an Email</a></button> */}
            </div>
        </div>
    </div>
}

export default Contact;