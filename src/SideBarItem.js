import React, { Component } from 'react';
import HomeIcon from './HomeIcon';
import CodeIcon from './CodeIcon';
import ToolsIcon from './ToolsIcon';
import LandlineIcon from './LandlineIcon';
import './scss/_sidebar.scss';

class SideBarItem extends Component {
    render(){
        let name = this.props.name;
        return(
            <div id={this.props.id} className="nav__link" >
                {name === 'about' ? <HomeIcon id={this.props.id} /> : 
                name === 'projects' ? <CodeIcon id={this.props.id} /> :
                name === 'skills' ? <ToolsIcon id={this.props.id}/> :
                name === 'contact' ? <LandlineIcon id={this.props.id}/> : 
                ""}
                <div id={this.props.id} className="nav__btn">{name}</div>
            </div>
        )
    }
}

export default SideBarItem;