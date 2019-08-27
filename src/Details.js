import React, { Component } from 'react';
import Home from './Home';
import ProfileFile from './ProfileFile';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import './scss/_base.scss';

class Details extends Component {
    render(){
        let v = this.props.view;
        return(
            <div className="details">
            {
                v === 'home' ?
                    (<Home /> &&
                    <ProfileFile /> ):
                v === 'projects' ? <Projects /> : 
                v === 'skills' ? <Skills /> : 
                v === 'contact' ? <Contact /> : ""
            }
            </div>
        );
    }
}

export default Details;

