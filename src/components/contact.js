import '../assets/css/contact.css';
import React from 'react';
import contactInfo from '../config/contact_info';

function Contact() {
    return <div className="page-container contact-container">
        <div className="section">
            <h1>Let's Talk</h1>
            <button><a href={`tel::${contactInfo.phone}`} target="_top">Call Today</a></button>
            <button><a href={`mailto:${contactInfo.email}`} target="_top">Send an Email</a></button>
        </div>
        <div className="section contact-info-container">
            <div className="contact-info"><a href={`tel::${contactInfo.phone}`} target="_top"><i className="fas fa-phone" aria-hidden="true"></i>{contactInfo.phone}</a></div>
            <div className="contact-info"><a href={`mailto:${contactInfo.email}`} target="_top"><i className="fa fa-envelope" aria-hidden="true"></i>{contactInfo.email}</a></div>
        </div>
    </div>
}

export default Contact;