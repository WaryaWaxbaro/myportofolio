import React, { Component } from 'react';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import './scss/_base.scss';

class Details extends Component {
    changeView(x){
        return x === 'about' ? <Home /> : x === 'projects' ? <Projects /> 
        : x === 'skills' ? <Skills /> : x === 'contact' ? <Contact /> : null;
    }
    render(){
        let v = this.props.view;
        return(
            <div className="details">
            {
                this.changeView(v)
            }
            </div>
        );
    }
}

export default Details;

