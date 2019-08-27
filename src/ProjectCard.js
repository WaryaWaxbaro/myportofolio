import React, { Component } from 'react';

class ProjectCard extends Component {
    render(){
        return(
            <div className="projects__card">
                <h1 className="projects__card--heading">
                    {this.props.name}
                </h1>
                <div className="projects__card--summary">
                    {this.props.about}
                </div>
                <a href={this.props.link} target="blank" className="projects__card--btn">{this.props.text}
                    {this.props.icon}
                </a>
            </div>
        )
    }
}

export default ProjectCard;