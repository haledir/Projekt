import React, {Component} from 'react';
import Login from './Login/Login.js';
import Cookies from 'universal-cookie';
import UserHome from './UserHome/UserHome.js';
import $ from 'jquery';
import Footer from "./Footer";

import './index.css'

class App extends Component {
    cookies;
    constructor(props) {
        super(props);
        this.cookies = new Cookies();
        this.state = {
            loggedIn:  typeof this.cookies.get("matNr") !== 'undefined',
            loginError: false
        };
    };
    signInHandler(benutzername, passwort){
        let benutzer = {benutzername, passwort};
        $.ajax({
            method: "POST",
            url: "http://localhost/Projekt/REST_API/user/login",
            headers: {
                "Authorization": "Basic cm9vdDp0MDBy"
            },
            dataType: 'json',
            data: benutzer
        })
            .done(function( data ) {
                let state = {};
                if(data.login){
                    this.cookies.set('matNr', data.matnr);
                    state.loggedIn = true;
                    state.loginError = false;
                } else {
                    state.loggedIn = false;
                    state.loginError = true;
                }
                this.setState((prevState) => {
                    return state;
                });
            }.bind(this));
    }
    signOutHandler(){
        this.cookies.remove("matNr");
        this.setState((prevState) => {
            return {loggedIn: false};
        });
    }
    render() {
        let body = {};
        if(this.state.loggedIn){
            body = <UserHome signOutHandler={this.signOutHandler.bind(this)} matNr={this.cookies.get('matNr')}/>;
        } else {
            body = <Login signInHandler={this.signInHandler.bind(this)} loginError={this.state.loginError}/>;
        }
        return (
            <div className="lucy-app">
                {body}
                <Footer/>
            </div>
        )
    }
}

export default App;