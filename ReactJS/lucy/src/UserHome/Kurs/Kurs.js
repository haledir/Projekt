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
            inhalt: '',
            editors: {}
        }
    };
    componentWillMount(){
        this.addEditor('newClass');
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
    addEditor (name){
        let editors = this.state.editors,
            editorNames = Object.keys(editors),
            i = 1;
        console.log(editorNames);
        while(editors.hasOwnProperty(name)){
            name = name + i.toString();
            i++;
        }
        for(let editorName in editors) {
            if (editors.hasOwnProperty(editorName)){
                console.log(editorName);
                editors[editorName] = false;
            }
        }
        editors[name] = true;
        this.setState((prevState) => {
            return {
                editors: editors
            };
        });
    };
    resetEditor(){
        this.refs.test.resetDefault();
    };
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
        let editors = [],
            buttons = [],
            editorNames = Object.keys(this.state.editors);
        for(let name of editorNames){
            editors.push(<CustomAceEditor ref={name} key={name}/>);
            buttons.push(<button className="w3-bar-item w3-button active_btn" key={name}>{name}.java</button>)
        }
        return (
            <div>
                <div className="w3-row w3-border w3-padding">
                    <div className="w3-third w3-container w3-blue" style={{height: "555px"}}>
                        <h5>{this.state.name}</h5>
                        <p>{this.state.inhalt}</p>
                    </div>
                    <div className="w3-container w3-twothird">
                        <div className="w3-bar w3-blue-grey">
                            {buttons}
                            <button className="w3-bar-item w3-button active_btn" onClick={this.addEditor.bind(this, "newClass")}>
                                <i className="fa fa-plus-circle fa-2" />
                            </button>
                        </div>
                        {editors}
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
