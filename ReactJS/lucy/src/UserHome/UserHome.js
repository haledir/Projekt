import React, {Component} from 'react';
import NavBar from "./NavBar";
import $ from 'jquery';
import Dashboard from "./Dashboard/Dashboard";
import Kurs from "./Kurs/Kurs";

import './UserHome.css';

class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedArea : this.area[1],
            benutzer: {
                name: "",
                email: "",
                fortschritt: "test"
            }
        }
    };
    area = ["dashboard", "kurs"];
    componentWillMount(){
        $.ajax({
            method: "GET",
            url: "http://localhost/Projekt/REST_API/user/"+this.props.matNr,
            headers: {
                "Authorization": "Basic cm9vdDp0MDBy"
            },
            dataType: 'json'
        })
            .done(function( data ) {
                let benutzer = {
                    name: data.Vorname + " " + data.Nachname,
                    email: data.Email,
                    fortschritt: "toll!"
                };
                this.setState((prevState) => {
                    return {benutzer};
                });
            }.bind(this));
    }
    startCourse(){
        this.setState((prevState) => {
            return {selectedArea: this.area[1]};
        });
    };
    showDashboard(){
        this.setState((prevState) => {
            return {selectedArea: this.area[0]};
        });
    }
    render() {
        let body;
        if(this.state.selectedArea === this.area[0]){
            body = <Dashboard benutzer={this.state.benutzer} startCourse={this.startCourse.bind(this)}/>
        } else {
            body = <Kurs />
        }
        return (
            <div id="user-home">
                <NavBar signOutHandler={this.props.signOutHandler} showDashboard={this.showDashboard.bind(this)}/>
                <div className="lucy-home-body">
                    {body}
                </div>
            </div>
        );
    }
}

export default UserHome;
