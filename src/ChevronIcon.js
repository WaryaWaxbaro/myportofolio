import React, { Component } from 'react';
//import './scss/_sidebar.scss';

class ChevronIcon extends Component {
    render(){
        return (
            <svg className="projects__card--btn-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>chevron-small-right</title>
                <path d="M11 10l-3.141-3.42c-0.268-0.27-0.268-0.707 0-0.978 0.268-0.27 0.701-0.27 0.969 0l3.83 3.908c0.268 0.271 0.268 0.709 0 0.979l-3.83 3.908c-0.267 0.272-0.701 0.27-0.969 0s-0.268-0.707 0-0.978l3.141-3.419z"></path>
            </svg>
        );
    }
}

export default ChevronIcon;