import React, { Component } from 'react';
import './scss/_home.scss';
import image from './img/profile.png';

class ProfileFile extends Component {
    render(){
        return(
            <figure className="about--image">
                <img src={image} alt="Profile pic" />
                <figcaption>Abdishakur Hassan</figcaption>
            </figure>
        )
    }
}

export default ProfileFile;