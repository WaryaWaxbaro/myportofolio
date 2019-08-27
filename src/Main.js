import React, { Component } from 'react';
import SideBar from './SideBar';
import Details from './Details';
import './scss/_base.scss';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentView : "home"
        }
        this.click = this.click.bind(this);
    }

    click(e){
        this.getViewName(e.target.id);
    }

    getViewName(view){
        this.setState({currentView: view});
    }

    render(){
        return(
            <main className="main">
                <SideBar view={this.click} current={this.state.currentView}/>
                <Details view={this.state.currentView}/>
            </main>
        )
    }
}

export default Main;