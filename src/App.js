import React, { Component } from 'react';
import './App.css';

import config from './config/config';
import firebase from 'firebase/app';

class App extends Component {

    constructor(props) {
        super(props);

        this.app = firebase.initializeApp(config);
    }

    render() {

        var TxtRotate = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = "";
            this.tick();
            this.isDeleting = false;
        };

        TxtRotate.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

            var that = this;
            var delta = 300 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(() => {
                that.tick();
            }, delta);
        };

        window.onload = () => {
            var els = document.getElementsByClassName('txt-rotate');
            for (var i = 0; i < els.length; i++) {
                var toRotate = els[i].getAttribute('data-rotate');
                var period = els[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtRotate(els[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
            document.body.appendChild(css);
        };

        return (
            <div>
                <h1>flix.
                    <span className="txt-rotate" data-period="2000" data-rotate='[ "industries", "inventory", "chat", "reflect", "office", "simplicity" ]'></span>
                </h1>
                <h2>reimage the future. ayy</h2>
            </div>
        );
    }

}

export default App;