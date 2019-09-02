import React, { Component } from 'react';
import SideBarItem from './SideBarItem';
import './scss/_sidebar.scss';

class SideBar extends Component {

    static defaultProps = {
        listName : ['about', 'projects', 'skills', 'contact']
    }

    render(){
        let active = this.props.current;
        let collapseMenu;
        !this.props.showHide ? collapseMenu = "nav show" : collapseMenu = "nav hide";
        return(
            <nav className={`${collapseMenu}`}>
                <ul className="nav__list">
                    {this.props.listName.map((li, i) => (
                        active === li ? 
                        <li key={i} onClick={this.props.view} id={`${li.toLowerCase()}`} className="nav__list--item nav__list--item-active">
                            <SideBarItem id={`${li.toLowerCase()}`} name={li}/>
                        </li>
                        :
                        <li key={i} onClick={this.props.view} id={`${li.toLowerCase()}`} className="nav__list--item">
                            <SideBarItem id={`${li.toLowerCase()}`} name={li}/>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default SideBar;

