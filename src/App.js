import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';
import './App.css';

import config from './config/config';
import firebase from 'firebase/app';

class App extends Component {

    constructor(props) {
        super(props);

        this.app = firebase.initializeApp(config);

        this.titleContents = ["industries", "inventory", "chat", "reflect", "office", "simplicity"];
    }

    render() {
        return (
            <div>
                <h1>flix.
                    <ReactRotatingText items={this.titleContents} typingInterval={100} pause={2500} />
                </h1>
                <h2>reimagine the future.</h2>
            </div>
        );
    }

}

export default App;
