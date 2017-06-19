import React, {Component} from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm: false,
            signUpForm: false,

            signIn: {
                benutzername: "",
                passwort: ""
            }
        };
    };
    componentWillReceiveProps(nextProps){
        if(nextProps.loginError){
            this.setState((prevState) => {
                let state = prevState;
                state.signIn.passwort = "";
                return state;
            })
        }
    };
    signInFormSubmit(event){
        event.preventDefault();
        this.props.signInHandler(this.state.signIn.benutzername, this.state.signIn.passwort);
    }
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
            loginError;
        if(this.props.loginError){
            loginError = <div className="w3-container w3-border-red w3-border w3-center">Falsche Logindaten eingegeben!</div>
        }
        loginScreenStyle.display = this.props.show ? "block" : "none";
        return (
            <form className="w3-container w3-card-4" onSubmit={this.signInFormSubmit.bind(this)}>
                {loginError}
                <div className="w3-section">
                    <input id="benutzername" className="w3-input" onChange={this.changeSignIn.bind(this)} value={this.state.signIn.benutzername} type="text" required/>
                    <label>Benutzername</label>
                </div>
                <div className="w3-section">
                    <input id="passwort" className="w3-input" onChange={this.changeSignIn.bind(this)} value={this.state.signIn.passwort} type="password" required/>
                    <label>Passwort</label>
                </div>
                <div className="w3-padding">
                    <button type="submit" className="w3-button w3-blue-grey" id="btnAnmelden">Anmelden
                    </button>
                </div>

            </form>
        );
    }
}

export default LoginForm;
