import React, {Component} from 'react';
import LoginForm from './LoginForm.js';
import RegistryForm from './RegistryForm.js';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm: false,
            signUpForm: false
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
    render() {
        let loginScreenStyle = {},
            signUpScreenStyle = {};
        loginScreenStyle.display = this.state.loginForm ? "block" : "none";
        signUpScreenStyle.display = this.state.signUpForm ? "block" : "none";
        return (
            <div className="body">
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
                        <RegistryForm show={this.state.signUpForm}/>
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
                            <LoginForm show={this.state.loginForm} signInHandler={this.props.signInHandler}/>
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
            </div>
        );
    }
}

export default Login;
