import React, { Component } from 'react';

class LandlineIcon extends Component {
    render(){
        return (
            <svg id={this.props.id} className="nav__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>landline</title>
                <path id={this.props.id} d="M4.902 0.25c-1.404-0.277-2.787 0.625-3.069 2.023-1.105 5.455-1.105 9.997 0 15.454 0.247 1.225 1.337 2.073 2.555 2.073 0.17 0 0.342-0.016 0.515-0.050 1.412-0.279 2.329-1.638 2.046-3.036-0.978-4.832-0.978-8.598 0-13.43 0.282-1.396-0.635-2.755-2.047-3.034zM17 2h-8.564c0.073 0.467 0.081 0.951-0.017 1.44-0.936 4.72-0.936 8.398 0 13.12 0.098 0.49 0.090 0.973 0.017 1.44h8.564c1.1 0 2-0.9 2-2v-12c0-1.1-0.899-2-2-2zM12 14.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5zM17 9h-7v-4h7v4z"></path>
            </svg>
        );
    }
}

export default LandlineIcon;