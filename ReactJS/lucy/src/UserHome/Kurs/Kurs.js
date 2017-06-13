import React, {Component} from 'react';
import CustomAceEditor from './CustomAceEditor.js';
import $ from 'jquery';

import 'brace/mode/java'
import 'brace/theme/idle_fingers';
import 'brace/ext/language_tools';

import { FormatJS, MinifyJS } from './functions.js';

class Kurs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            inhalt: ''
        }
    };
    componentWillMount(){
        $.ajax({
            method: "GET",
            url: "http://localhost/Projekt/REST_API/aufgabe/" + this.props.exercise,
            headers: {
                "Authorization": "Basic cm9vdDp0MDBy"
            },
            dataType: 'json'
        })
            .done(function (data) {
                this.setState((prevState) => {
                    return {
                        name: data.Name,
                        inhalt: data.Inhalt
                    };
                });
            }.bind(this))
    };
    resetEditor(){
        this.refs.test.resetDefault();
    }
    checkCode(){
        $.ajax({
        method: "POST",
        url: "http://localhost/Projekt/REST_API/check",
        headers: {
            "Authorization": "Basic cm9vdDp0MDBy"
        },
        dataType: 'json',
        data: {
            'aufgabe' : this.props.exercise,
            'code' : this.refs.test.state.value
        }
    })
        .done(function( data ) {
            console.log(data);
        });
    }
    render() {
        return (
            <div>
                <div className="w3-row w3-border w3-padding">
                    <div className="w3-third w3-container w3-blue" style={{height: "555px"}}>
                        <h5>{this.state.name}</h5>
                        <p>{this.state.inhalt}</p>
                    </div>
                    <div className="w3-container w3-twothird">
                        <div className="w3-bar w3-blue-grey">
                            <button className="w3-bar-item w3-button active_btn w3-theme-dark">main.java</button>
                            <button className="w3-bar-item w3-button active_btn">side.java</button>
                            <button className="w3-bar-item w3-button active_btn">new.java</button>
                        </div>
                        <CustomAceEditor ref="test"/>
                        <div id="side.java" className="java_file" style={{display: "none"}}>
                            <div id="editor_side" className="w3-margin-top" style={{height: "500px"}}></div>
                        </div>
                        <div id="new.java" className="java_file" style={{display: "none"}}>
                            <div id="editor_new" className="w3-margin-top" style={{height: "500px"}}></div>
                        </div>
                        <div className="w3-row w3-margin-top w3-right">
                            <button className="w3-bar-item w3-theme w3-button lucy-button" onClick={this.checkCode.bind(this)}>Check Code</button>
                            <button className="w3-bar-item w3-theme w3-button lucy-button" onClick={this.resetEditor.bind(this)}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Kurs;
