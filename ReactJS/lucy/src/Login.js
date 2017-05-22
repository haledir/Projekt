import React, {Component} from 'react';
import $ from 'jquery';
import Footer from './Footer.js';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm: false,
            signUpForm: false,

            signUp: {
                benutzername: "",
                vorname: "",
                nachname: "",
                matnr: "",
                email: "",
                "email-w": "",
                passwort: "",
                "passwort-w": "",
            },

            signIn: {
                benutzername: "",
                passwort: ""
            }
        };
    }; 

    showLoginScreen() {
        this.setState((prevState) => {
            return {loginForm: !prevState.loginForm, signUpForm: false};
        })
    };
    showSignUpScreen() {
        this.setState((prevState) => {
            return {signUpForm: !prevState.signUpForm, loginForm: false};
        })
    };
    signUpFormSubmit(event){
        event.preventDefault();
        let benutzer = {
            matnr: this.state.signUp.matnr,
            benutzername: this.state.signUp.benutzername,
            passwort: this.state.signUp.passwort,
            vorname: this.state.signUp.vorname,
            nachname: this.state.signUp.nachname,
            email: this.state.signUp.email
        };
        $.post
        ({
            method: "POST",
            url: "http://localhost/Projekt/REST_API/user",
            headers: {
                "Authorization": "Basic cm9vdDp0MDBy"
            },
            dataType: 'json',
            data: benutzer,
            success: function (){
                alert('Thanks for your registration!');
            }
        });
    };
    signInFormSubmit(event){
        event.preventDefault();
        let benutzer = this.state.signIn;
        console.log(benutzer);
        /*({
            method: "POST",
            url: "http://localhost/Projekt/REST_API/user",
            headers: {
                "Authorization": "Basic cm9vdDp0MDBy"
            },
            dataType: 'json',
            data: benutzer,
            success: function (){
                alert('Thanks for your registration!');
            }
        });*/
    }
    changeSignUp(event){
        let state = this.state,
            targetId = event.target.id;
        state.signUp[targetId] = event.target.value;
        this.setState((prevState) => {
            return state;
        });
    };
    changeSignIn(event){
        let state = this.state,
            targetId = event.target.id;
        state.signIn[targetId] = event.target.value;
        this.setState((prevState) => {
            return state;
        });
    };
    render() {
        let loginScreenStyle = {},
            signUpScreenStyle = {};
        loginScreenStyle.display = this.state.loginForm ? "block" : "none";
        signUpScreenStyle.display = this.state.signUpForm ? "block" : "none";
        return (
            <div className="App">
                <header className="w3-container w3-theme w3-padding" id="myHeader">
                    <div className="w3-center">
                        <h4>Lerne einfach und schnell Java mit</h4>
                        <h1 className="w3-xxxlarge w3-animate-bottom">Lucy</h1>
                        <div className="w3-padding-32">
                            <button className="w3-btn w3-xlarge w3-theme-dark w3-hover-teal lucy-button"
                                    onClick={this.showLoginScreen.bind(this)}>Anmelden
                            </button>
                            <button className="w3-btn w3-xlarge w3-theme-dark w3-hover-teal  lucy-button"
                                    onClick={this.showSignUpScreen.bind(this)}>Registrieren
                            </button>
                        </div>
                    </div>
                </header>
                <div id="id01" className="w3-modal" style={signUpScreenStyle}>
                    <div className="w3-modal-content w3-card-4 w3-animate-top">
                        <header className="w3-container w3-theme">
                            <span className="w3-button w3-display-topright"
                                  onClick={this.showSignUpScreen.bind(this)}>&times;</span>
                            <h4>Registieren</h4>
                        </header>
                        <div className="w3-padding">
                            <form className="w3-container w3-card-4" onSubmit={this.signUpFormSubmit.bind(this)}>
                                <div className="w3-section">
                                    <input id="benutzername" className="w3-input" type="text" onChange={this.changeSignUp.bind(this)} required/>
                                    <label>Benutzername</label>
                                </div>
                                <div className="w3-row">
                                    <div className="w3-half">
                                        <div className="w3-section">
                                            <input id="vorname" className="w3-input" type="text" onChange={this.changeSignUp.bind(this)} required/>
                                            <label>Vorname</label>
                                        </div>
                                    </div>
                                    <div className="w3-half">
                                        <div className="w3-section">
                                            <input id="nachname" className="w3-input" type="text" onChange={this.changeSignUp.bind(this)} required/>
                                            <label>Nachname</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="w3-section">
                                    <input id="matnr" className="w3-input" type="text" onChange={this.changeSignUp.bind(this)} required/>
                                    <label>Matrikelnummer</label>
                                </div>
                                <div className="w3-section">
                                    <input id="email" className="w3-input" type="email" onChange={this.changeSignUp.bind(this)} required/>
                                    <label>E-Mail</label>
                                </div>
                                <div className="w3-section">
                                    <input id="email-w" className="w3-input" type="email" onChange={this.changeSignUp.bind(this)} required/>
                                    <label>E-Mail wiederholen</label>
                                </div>
                                <div className="w3-section">
                                    <input id="passwort" className="w3-input" type="password" onChange={this.changeSignUp.bind(this)} required/>
                                    <label>Passwort</label>
                                </div>
                                <div className="w3-section">
                                    <input id="passwort-w" className="w3-input" type="password" onChange={this.changeSignUp.bind(this)} required/>
                                    <label>Passwort wiederholen</label>
                                </div>
                                <div className="w3-padding">
                                    <button type="submit" className="w3-button w3-blue-grey" id="btnRegister">
                                        Registrieren
                                    </button>
                                </div>
                            </form>
                        </div>
                        <footer className="w3-container w3-theme">
                            <p>Vielen Dank für dein Interesse und viel Erfolg beim lernen.</p>
                        </footer>
                    </div>
                </div>
                <div id="id02" className="w3-modal" style={loginScreenStyle}>
                    <div className="w3-modal-content w3-card-4 w3-animate-top">
                        <header className="w3-container w3-theme">
                            <span onClick={this.showLoginScreen.bind(this)}
                                  className="w3-button w3-display-topright">&times;</span>
                            <h4>Anmelden</h4>
                        </header>
                        <div className="w3-padding">
                            <form className="w3-container w3-card-4" onSubmit={this.signInFormSubmit.bind(this)}>
                                <div className="w3-section">
                                    <input id="benutzername" className="w3-input" onChange={this.changeSignIn.bind(this)} type="text" required/>
                                    <label>Benutzername</label>
                                </div>
                                <div className="w3-section">
                                    <input id="passwort" className="w3-input" onChange={this.changeSignIn.bind(this)} type="password" required/>
                                    <label>Passwort</label>
                                </div>
                                <div className="w3-padding">
                                    <button type="submit" className="w3-button w3-blue-grey" id="btnAnmelden">Anmelden
                                    </button>
                                </div>
                            </form>
                        </div>
                        <footer className="w3-container w3-theme">
                            <p>Melde dich an und beginne deine Tour!</p>
                        </footer>
                    </div>
                </div>
                <div className="w3-row-padding w3-center w3-margin-top">
                    <div className="w3-third">
                        <div className="w3-card-2 w3-container lucy-container">
                            <h3>Anfänger</h3><br />
                            <i className="fa fa-desktop w3-margin-bottom w3-text-theme lucy-cap"></i>
                            <p>Du bist neu auf der Insel?</p>
                            <p>Lerne Java von Grund auf</p>
                            <p>Zahlreiche Aufgaben</p>
                            <p>Schritt für Schritt Anleitungen</p>
                        </div>
                    </div>

                    <div className="w3-third">
                        <div className="w3-card-2 w3-container lucy-container">
                            <h3>Fortgeschritten</h3><br/>
                            <i className="fa fa-code w3-margin-bottom w3-text-theme lucy-cap"></i>
                            <p>Du hast schon Erfahrung auf der Insel?</p>
                            <p>Verwende bereits gelerntes</p>
                            <p>Zahlreiche Aufgaben</p>
                            <p>Einige Hilfestellungen</p>
                        </div>
                    </div>

                    <div className="w3-third">
                        <div className="w3-card-2 w3-container lucy-container">
                            <h3>Experte</h3><br/>
                            <i className="fa fa-graduation-cap w3-margin-bottom w3-text-theme lucy-cap"></i>
                            <p>Du kennst jeden Stein auf der Insel?</p>
                            <p>Stürze dich ins Abenteuer</p>
                            <p>Zahlreiche Herausforderungen</p>
                            <p>Keinerlei Hilfestellung</p>
                        </div>
                    </div>

                </div>
                    <Footer />
                </div>
        );
    }
}

export default Login;
