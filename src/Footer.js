import React, { Component } from 'react';
import './scss/_footer.scss';

class Footer extends Component {
    render() { 
        return ( <div className="Footer">
            &copy; {`${new Date().getFullYear()}`} shakurmoller.com
        </div> );
    }
}
 
export default Footer;