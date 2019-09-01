import React, { Component } from 'react';
import NavButton from './NavButton';
import './scss/_topnav.scss';

class TopNavContainer extends Component {
    render() { 
        return ( <div className="TopNavContainer">
            <NavButton click={this.props.click} isVisible={this.props.isVisible}/>
        </div> );
    }
}
 
export default TopNavContainer;