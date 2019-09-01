import React, { Component } from 'react';
import ProfileFile from './ProfileFile';
import './scss/_home.scss';

class Home extends Component {
    render(){
        return(
            <div className="Home">
                <div className="about">
                    <h1 className="about--heading">
                        About me
                    </h1>
                    <p className="about--paragraph">
                        I am a 4th-year Software Development student at Oulu University of Applied Sciences. I am a social and open person who values teamwork, cooperation and enjoys sharing a cup of coffee while talking about the big upcoming project. During my free time, I like watching football and keeping fit. 
                    </p>
                </div>
                <ProfileFile />
            </div>
        )
    }
}

export default Home;

