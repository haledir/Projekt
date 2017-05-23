import React, {Component} from 'react';
import $ from 'jquery';

class RegitryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            passwordDifference: false,
            emailDifference: false
        };
    };
    changeSignUp(event){
        let state = this.state,
            targetId = event.target.id;
        state.signUp[targetId] = event.target.value;
        state.emailDifference = (state.signUp.email !== state.signUp["email-w"]);
        state.passwordDifference = (state.signUp.passwort !== state.signUp["passwort-w"]);
        this.setState((prevState) => {
            return state;
        });
    };
    signUpFormSubmit(event) {
        event.preventDefault();
        if(!this.state.passwordDifference &&     !this.state.emailDifference) {
            let benutzer = {
                matnr: this.state.signUp.matnr,
                benutzername: this.state.signUp.benutzername,
                passwort: this.state.signUp.passwort,
                vorname: this.state.signUp.vorname,
                nachname: this.state.signUp.nachname,
                email: this.state.signUp.email
            };
            $.ajax
            ({
                method: "POST",
                url: "http://localhost/Projekt/REST_API/user",
                headers: {
                    "Authorization": "Basic cm9vdDp0MDBy"
                },
                dataType: 'json',
                data: benutzer
            }).done(function( data ) {

            });
        }
    };
    render() {
        let loginScreenStyle = {};
        loginScreenStyle.display = this.props.show ? "block" : "none";
        let emailClassName = this.state.emailDifference ? " lucy-repeat-failure" : "";
        let passwortClassName = this.state.passwordDifference ? " lucy-repeat-failure" : "";
        return (
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
                    <input id="email-w" className={"w3-input"+ emailClassName} type="email" onChange={this.changeSignUp.bind(this)} required/>
                    <label>E-Mail wiederholen</label>
                </div>
                <div className="w3-section">
                    <input id="passwort" className="w3-input" type="password" onChange={this.changeSignUp.bind(this)} required/>
                    <label>Passwort</label>
                </div>
                <div className="w3-section">
                    <input id="passwort-w" className={"w3-input" + passwortClassName} type="password" onChange={this.changeSignUp.bind(this)} required/>
                    <label>Passwort wiederholen</label>
                </div>
                <div className="w3-padding">
                    <button type="submit" className="w3-button w3-blue-grey" id="btnRegister" disabled={this.state.emailDifference || this.state.passwordDifference}>
                        Registrieren
                    </button>
                </div>
            </form>
        );
    }
}

export default RegitryForm;
