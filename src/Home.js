import React, { Component } from 'react';
import ProfileFile from './ProfileFile';
import './scss/_home.scss';

class Home extends Component {
    render(){
        return(
            <div className="Home">
                <div className="about">
                    <p className="about--paragraph">
                    I am a 4th-year Software Development student at Oulu University of Applied Sciences. During my studies, I did many personal as well as team projects with different programming languages for different platforms, it's fun learning new things every day. I am an open person who values teamwork, cooperation and enjoys sharing a cup of coffee while talking about the big upcoming project. During my free time, I like watching football and keeping fit.
                    </p>
                </div>
                <ProfileFile />
            </div>
        )
    }
}

export default Home;

