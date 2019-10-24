import React, { Component } from 'react';
import logo from './logo.svg';

class Spins extends Component {
    constructor(props){
        super(props);
        this.state = {
            on: false,
            speed: 3
        };
    }
    handleClick = () =>{
        if(this.state.speed === 3){
            this.setState({on: !this.state.on,
                       speed: 0});
        } else{
            this.setState({on: !this.state.on,
                speed: 3});
        }
    }
    render() {

        const bSpins = this.state.on ? 'on' : 'off';
        return(
        <div className = "Spins">
            <img style={{animation: `spin ${this.state.speed}s linear infinite`}} src={logo} class="App-logo" alt="img"/>
            <br/>
            <button onClick={this.handleClick}
                    className={bSpins}>{bSpins.toLocaleUpperCase()}
            </button>
        </div>
        );
    }
}




export default Spins;