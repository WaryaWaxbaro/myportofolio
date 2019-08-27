import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ChevronIcon from './ChevronIcon';
import './scss/_project.scss';

class Projects extends Component {
    static defaultProps = {
        project : [
            {
                name : "MyCity",
                about : "MyCity is a web application where a user can submit their favourite image of their city.",
                link : "https://stormy-dawn-25100.herokuapp.com/cities",
                linkText : "live demo"
            },
            {
                name : "Cibada",
                about : "A client project that displays daily timetables.",
                link : "http://cibada.com",
                linkText : "live demo"
            },
            {
                name : "Lights Out",
                about : "Lights Out is a game that toggles patterns resembling light on and light off states.",
                link : "https://waryawaxbaro.github.io/lightsout/",
                linkText : "live demo"
            },
            {
                name : "MenuWeather",
                about : "A mobile application that displays OAMK's daily menu and weather forecast for that day.",
                link : "https://github.com/WaryaWaxbaro/menuweather",
                linkText : "Source code"
            },
            {
                name : "Bluetooth app",
                about : "Bluetooth photo-sharing app is an application that helps to send and receive images through Bluetooth. This was a school project and we did as a group.",
                link : "https://github.com/WaryaWaxbaro/bt-image-app-code.git",
                linkText : "Source code"
            },
            {
                name : "Door sensor",
                about : "This is a Raspberry PI project that detects movement around the main, it captures images and sends via Telegram.",
                link : "https://github.com/WaryaWaxbaro/DoorBell",
                linkText : "Source code"
            }
        ]
    }
    render(){
        return(
            <div className="projects">
                {
                    this.props.project.map((p, i) => (
                        <ProjectCard key={i} name={p.name} about={p.about} link={p.link} text={p.linkText} icon={<ChevronIcon />}/>
                    ))
                }
            </div>
        )
    }
}

export default Projects;