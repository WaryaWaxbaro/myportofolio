import React, { Component } from 'react';

class NavButton extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.props.click(e.target.className);
    }
    render() { 
        return ( <span>
            {this.props.isVisible ? 
            <div onClick={this.handleClick} className="NavButton"></div>
        : <div onClick={this.handleClick} className="NavButton visible"></div>}
        </span> );
    }
}
 
export default NavButton;