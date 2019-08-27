import React, { Component } from 'react';
import './scss/_skills.scss';

class Skills extends Component {
    render(){
        return(
            <div className="skills">
            <h3 className="skills__heading">
                I have used the following programming languages during my school projects as well as during my personal projects.
            </h3>
            <div className="skills__content">
                <div className="skills__content--item">
                    <h2 className="skills__content--item-head">
                        Web development
                    </h2>
                    <p className="skills__content--item-paragraph">
                        My web development projects I used one or more of the following 
                        <span>Vanilla JavaScript</span>, <span>Nodejs</span>, <span>Expressjs</span>, 
                        <span>Passportjs</span>, <span>React</span>, <span>Bootstrap</span>, <span>HTML</span>, <span>CSS</span>, 
                        <span>SASS</span>, <span>JSON</span> and <span>MongoDB</span>.
                    </p>
                </div>
                <div className="skills__content--item">
                    <h2 className="skills__content--item-head">
                        Mobile development
                    </h2>
                    <p className="skills__content--item-paragraph">
                        I used mainly <span>Java</span> and <span>Android Studio</span> for mobile development projects and <span>SQLite</span> database.
                    </p>
                </div>
                <div className="skills__content--item">
                    <h2 className="skills__content--item-head">
                        Embedded systems
                    </h2>
                    <p className="skills__content--item-paragraph">
                        We used <span>C</span> in <span>Arduino Uno</span> projects and <span>Python</span> in <span>Raspberry PI</span> projects.
                    </p>
                </div>
                <div className="skills__content--item">
                    <h2 className="skills__content--item-head">
                        Others
                    </h2>
                    <p className="skills__content--item-paragraph">
                        During school projects, we used <span>C++</span> with <span>Qt</span> and <span>C#</span> for a desktop application 
                        and <span>MySQL</span> database.
                    </p>
                </div>
            </div>
        </div>
        );
    }
}

export default Skills;