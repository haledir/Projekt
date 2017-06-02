import React, {Component} from 'react';
import AceEditor from 'react-ace';

class Kurs extends Component {
    render() {
        return (
            <div>
                    <div className="w3-row w3-border w3-padding">
                        <div className="w3-third w3-container w3-blue" style={{height: "555px"}}>
                            <h5>Aufgabe</h5>
                            <p>Auf dieser Seite wird die Aufgabe zu sehen sein</p>
                            <p>Bla bla</p>
                        </div>
                        <div className="w3-container w3-twothird">
                            <div className="w3-bar w3-blue-grey">
                                <button className="w3-bar-item w3-button active_btn w3-theme-dark">main.java</button>
                                <button className="w3-bar-item w3-button active_btn">side.java</button>
                                <button className="w3-bar-item w3-button active_btn">new.java</button>
                            </div>
                            <AceEditor mode="java"/>
                            <div id="side.java" className="java_file" style={{display:"none"}}>
                                <div id="editor_side" className="w3-margin-top" style={{height: "500px"}}></div>
                            </div>
                            <div id="new.java" className="java_file" style={{display:"none"}}>
                                <div id="editor_new" className="w3-margin-top" style={{height: "500px"}}></div>
                            </div>
                            <div className="w3-row w3-margin-top w3-right">
                                <button className="w3-bar-item w3-theme w3-button lucy-button">Check Code</button>
                                <button className="w3-bar-item w3-theme w3-button lucy-button">Reset</button>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Kurs;
