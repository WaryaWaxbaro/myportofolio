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
            <div className="nav__link" >
                {name === 'home' ? <HomeIcon /> : 
                name === 'projects' ? <CodeIcon /> :
                name === 'skills' ? <ToolsIcon/> :
                name === 'contact' ? <LandlineIcon/> : 
                ""}
                <div className="nav__btn">{name}</div>
            </div>
        )
    }
}

export default SideBarItem;