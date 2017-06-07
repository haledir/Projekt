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
            selectedDif: 0,
            benutzer: {
                name: "",
                email: "",
                fortschritt: "test"
            },
            schwierigkeit: {
                1: 0,
                2: 0,
                3: 0
            },
            aufgaben: 0
        }
    };
    area = ["dashboard", "kurs"];
    componentWillMount(){
        let state = {};
        $.when(
            $.ajax({
                method: "GET",
                url: "http://localhost/Projekt/REST_API/user/" + this.props.matNr,
                headers: {
                    "Authorization": "Basic cm9vdDp0MDBy"
                },
                dataType: 'json'
            })
                .done(function (data) {
                    state.benutzer = {
                        name: data.vorname + " " + data.nachname,
                        email: data.email,
                        fortschritt: "toll!"
                    };
                }),
            $.ajax({
                method: "GET",
                url: "http://localhost/Projekt/REST_API/aufgaben",
                headers: {
                    "Authorization": "Basic cm9vdDp0MDBy"
                },
                dataType: 'json'
            })
                .done(function (data) {
                    state.aufgaben = parseInt(data.Anzahl,10);
                }),
            $.ajax({
                method: "GET",
                url: "http://localhost/Projekt/REST_API/benutzeraufgabe/" + this.props.matNr,
                headers: {
                    "Authorization": "Basic cm9vdDp0MDBy"
                },
                dataType: 'json'
            })
                .done(function (data) {
                    let schwierigkeit = this.state.schwierigkeit;
                    for(let schwierigkeitgrad of data){
                        schwierigkeit[schwierigkeitgrad.schwierigkeit] = parseInt(schwierigkeitgrad['max(a_id)'],10);
                    }
                    state.schwierigkeit = schwierigkeit;
                }.bind(this))
    ).then(function () {
            this.setState((prevState) => {
                return state;
            })
        }.bind(this));
    }
    startCourse(level){
        this.setState((prevState) => {
            return {selectedDif: level};
        });
    };
    showDashboard(){
        this.setState((prevState) => {
            return {selectedDif: 0};
        });
    }
    render() {
        let body;
        if(this.state.selectedDif === 0){
            body = <Dashboard benutzer={this.state.benutzer} startCourse={this.startCourse.bind(this)} benutzeraufgaben={this.state.schwierigkeit} aufgaben={this.state.aufgaben}/>
        } else {
            body = <Kurs difficulty={this.state.selectedDif}/>
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
