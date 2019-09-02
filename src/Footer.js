import React, { Component } from 'react';
import './scss/_footer.scss';

class Footer extends Component {
    render() { 
        return ( <div className="Footer">
            &copy; {`${new Date().getFullYear()} `} <a className="FooterLink" href="http://shakurmoller.com" target="_blank" rel="noopener noreferrer"> shakurmoller.com</a>All rights reserved.
        </div> );
    }
}
 
export default Footer;