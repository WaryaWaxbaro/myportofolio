import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Details from './Details';
import TopNavContainer from './TopNavContainer';
import Footer from './Footer';
import './scss/_base.scss';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentView : "about",
            isClicked: true
        }
        this.click = this.click.bind(this);
        this.buttonStatus = this.buttonStatus.bind(this);
    }

    click(e){
        e.stopPropagation();
        this.setState({currentView: e.target.id, isClicked: false});
        this.setState({isClicked: !this.state.isClicked});
    }

    buttonStatus(name){
        let clicked = this.state.isClicked;
        this.setState({isClicked: !clicked});
    }

    render(){
        return(
            <main className="main">
                <Header />
                <TopNavContainer click={this.buttonStatus} isVisible={this.state.isClicked} />
                <SideBar view={this.click} current={this.state.currentView} showHide={this.state.isClicked} />
                <Details view={this.state.currentView}/>
                <Footer />
            </main>
        )
    }
}

export default Main;