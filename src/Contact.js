import React, { Component } from 'react';
import EmailIcon from './EmailIcon';
import MobileIcon from './MobileIcon';
import TwitterIcon from './TwitterIcon';
import './scss/_contact.scss';

class Contact extends Component {
    render(){
        return(
            <div className="contact">
                <div className="contact__detail">
                    <EmailIcon />
                    <span>t5haab00@students.oamk.fi</span>
                </div>
                <div className="contact__detail">
                    <MobileIcon />
                    <span>O45 893 7270</span>
                </div>
                <div className="contact__detail">
                    <TwitterIcon />
                    <span>shakurHssn</span>
                </div>
            </div>
        );
    }
}

export default Contact;