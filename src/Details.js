import React, { Component } from 'react';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import './scss/_base.scss';

class Details extends Component {
    changeView(x){
        if(x === 'home'){
            return <Home />;
        }
        if(x === 'projects'){
            return <Projects /> ;
        }
        if(x === 'skills'){
            return <Skills /> ;
        }
        if(x === 'contact'){
            return <Contact />;
        }
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

