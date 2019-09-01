import React, { Component } from 'react';
import './scss/_home.scss';
import image from './img/profile.png';

class ProfileFile extends Component {
    render(){
        return(
            <div className="about__img-container">
                <figure className="about--image">
                <img src={image} alt="Profile pic" />
                <figcaption>Abdishakur Hassan</figcaption>
                </figure>
            </div>
        )
    }
}

export default ProfileFile;