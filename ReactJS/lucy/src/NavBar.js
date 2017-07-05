import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="w3-top lucy-top">
                <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
                    <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"><i className="fa fa-bars"></i></a>
                    <a className="w3-bar-item w3-button w3-padding-large w3-theme-d4" onClick={this.props.showDashboard}><i className="fa fa-home w3-margin-right"></i>LUCY</a>
                    <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Logout" onClick={this.props.signOutHandler}><i className="fa fa-sign-out"></i></a>
                    <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Einstellungen"><i className="fa fa-cog"></i></a>
                </div>
            </div>
        );
    }
}

export default NavBar;
