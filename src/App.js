import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import config from './config/config';
import firebase from 'firebase/app';

class App extends Component {

    constructor(props) {
        super(props);

        this.app = firebase.initializeApp(config);
    }
    
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer">
                        flix.industries
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
