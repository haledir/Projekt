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
        this.updateContent(this.props);
    };
    componentWillReceiveProps(nextProps){
        this.updateContent(nextProps);
    };
    updateContent(props){
        let editors = {},
            state = {};
        editors = this.addEditor(editors, 'firstClass');
        $.when(
            $.ajax({
                method: "GET",
                url: "http://localhost/Projekt/REST_API/aufgabe/" + props.exercise,
                headers: {
                    "Authorization": "Basic cm9vdDp0MDBy"
                },
                dataType: 'json'
            }).done(function (data) {
                state.done = undefined;
                state.name = data.Name;
                state.inhalt = data.Inhalt;
                state.editors = editors;
                }.bind(this)),
            $.ajax({
                method: "GET",
                url: "http://localhost/Projekt/REST_API/schritt/"+props.exercise+"/"+props.difficulty,
                headers: {
                    "Authorization": "Basic cm9vdDp0MDBy"
                },
                dataType: 'json'
            })
                .done(function (data) {
                    try {
                        state.schritte = JSON.parse(data.Inhalt);
                    } catch (err){
                        state.schritte = {};
                    }
                    state.schritt = 0;
                }.bind(this))
        ).then(function () {
            this.setState((prevState) => {
                return state;
            })
        }.bind(this));
        this.resetEditor();
    };
    addEditor (actualEditors, name){
        let editors = actualEditors,
            i = 1,
            tmpName = name;
        while(editors.hasOwnProperty(name)){
            name = tmpName + i.toString();
            i++;
        }
        for(let editorName in editors) {
            if (editors.hasOwnProperty(editorName)){
                editors[editorName] = false;
            }
        }
        editors[name] = true;
        return editors;
    };
    addCustomEditor(){
        this.setState((prevState) => {
            return {
                editors : this.addEditor(prevState.editors, 'newClass')
            }
        })
    }
    resetEditor(){
        if(Object.keys(this.refs).length > 0) {
            this.refs[Object.keys(this.refs)[0]].resetDefault();
        }
    };
    checkCode(){
        let editor = Object.keys(this.state.editors)[0];
        $.ajax({
        method: "POST",
        url: "http://localhost/Projekt/REST_API/check",
        headers: {
            "Authorization": "Basic cm9vdDp0MDBy"
        },
        dataType: 'json',
        data: {
            'aufgabe' : this.props.exercise,
            'code' : this.refs[editor].state.value
        }
    })
        .done(function( data ) {
            if(data.status){
                this.setState((prevState) => {
                    return {
                        done: true
                    }
                })
            }
        }.bind(this));
    };
    changeEditor(name){
        let editors = this.state.editors;
        for(let editorName in editors) {
            if (editors.hasOwnProperty(editorName)) {
                editors[editorName] = (name === editorName);
            }
        }
        this.setState((prevState) => {
            return {
                editors: editors
            };
        });
    };
    closeEditor(name){
        let editors = this.state.editors,
            lastEditor = Object.keys(editors)[1];
        for(let editorName in editors) {
            if (editors.hasOwnProperty(editorName)) {
                if(editorName === name) {
                    break;
                }
                lastEditor = editorName;
            }
        }
        delete editors[name];
        editors[lastEditor] = true;
        this.setState((prevState) => {
            return {
                editors: editors
            };
        });
    }
    addHint(){
        if(this.state.schritt < Object.keys(this.state.schritte).length) {
            this.setState((prevState) => {
                prevState.schritt++;
                return prevState
            })
        }
    }
    render() {
        let editors = [],
            buttons = [],
            furtherButtons = [
            ],
            editorNames = Object.keys(this.state.editors),
            steps = [];
        for(let name of editorNames){
            let active = (this.state.editors[name] && Object.keys(this.state.editors).length > 1),
                addClassName = " lucy-close-button";
            editors.push(<CustomAceEditor ref={name} key={name} show={this.state.editors[name]}/>);
            buttons.push(<button className={"w3-bar-item w3-button active_btn"+(active ? "" : addClassName)} key={name} onClick={this.changeEditor.bind(this, name)}>{name}.java</button>);
            if(active){
                buttons.push(<button className={"w3-bar-item w3-button active_btn"+addClassName} onClick={this.closeEditor.bind(this, name)} key={name+"_button"}><i className="fa fa-close fa-2"/></button>);
            }
        }
        if(this.state.done !== null && this.state.done){
            furtherButtons.unshift(<button className="w3-bar-item w3-theme w3-button lucy-button" key="go_further_button" onClick={this.props.nextExercise}>Weiter</button>);
        }
        for(let i=1; i<= this.state.schritt; i++){
            steps.push(<p key={"hint_"+i}>{this.state.schritte["schritt"+i]}</p>)
        }
        if(steps.length > 0){
            steps.unshift(<h6 key="loesungshinweise"><b>Lösungshinweise:</b></h6>)
        }
        return (
            <div>
                <div className="w3-row w3-border w3-padding">
                    <div className="w3-third w3-container w3-blue" style={{height: "555px", overflow: "auto"}}>
                        <h5>{this.state.name}</h5>
                        <p>{this.state.inhalt}</p>
                        {steps}
                    </div>
                    <div className="w3-container w3-twothird">
                        <div className="w3-bar w3-blue-grey">
                            {buttons}
                            <button className="w3-bar-item w3-button active_btn" onClick={this.addCustomEditor.bind(this)}>
                                <i className="fa fa-plus-circle fa-2" />
                            </button>
                        </div>
                        {editors}
                        <div className="w3-row w3-margin-top w3-left">
                            {furtherButtons}
                            <button className="w3-bar-item w3-theme w3-button lucy-button" onClick={this.addHint.bind(this)}>Tipp</button>
                        </div>
                        <div className="w3-row w3-margin-top w3-right">
                            <button className="w3-bar-item w3-theme w3-button lucy-button" onClick={this.checkCode.bind(this)}>Check Code</button>,
                            <button className="w3-bar-item w3-theme w3-button lucy-button" onClick={this.resetEditor.bind(this)}>Zurücksetzen</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Kurs;
