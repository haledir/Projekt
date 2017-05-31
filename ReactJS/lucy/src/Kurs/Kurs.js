import React, {Component} from 'react';
import Footer from '../Footer.js';
import NavBar from '../Dashboard/NavBar.js';
import $ from 'jquery';

class Kurs extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div>
                <NavBar signOutHandler={this.props.signOut}/>
                    <div className="w3-row w3-border w3-padding">
                        <div className="w3-third w3-container w3-blue" style="height: 555px">
                            <h5>Aufgabe</h5>
                            <p>Auf dieser Seite wird die Aufgabe zu sehen sein</p>
                            <p>Bla bla</p>
                        </div>
                        <div className="w3-container w3-twothird">
                            <div className="w3-bar w3-blue-grey">
                                <button className="w3-bar-item w3-button active_btn w3-theme-dark" onClick="openJavaFile(event, 'main.java')">main.java</button>
                                <button className="w3-bar-item w3-button active_btn" onClick="openJavaFile(event, 'side.java')">side.java</button>
                                <button className="w3-bar-item w3-button active_btn" onClick="openJavaFile(event, 'new.java')">new.java</button>
                            </div>
                            <div id="main.java" className="java_file">
                                <div id="editor_main" className="w3-margin-top" style={{height: "500px"}}>public class MyFirstJavaProgram {
                                    /* This is my first java program.
                                     * This will print 'Hello World' as the output
                                     */

                                    public static void main(String []args) {
                                    System.out.println("Hello World"); // prints Hello World
                                }
                                }</div>
                            </div>
                            <div id="side.java" className="java_file" style={{display:"none"}}>
                                <div id="editor_side" className="w3-margin-top" style={{height: "500px"}}>public class MyFirstJavaProgram {
                                    /* Side Klasse zum testen
                                     * This will print 'Hello World' as the output
                                     */

                                    public static void main(String []args) {
                                    System.out.println("Hello World"); // prints Hello World
                                }
                                }</div>
                            </div>
                            <div id="new.java" className="java_file" style={{display:"none"}}>
                                <div id="editor_new" className="w3-margin-top" style={{height: "500px"}}>public className MyFirstJavaProgram {
                                    public static void main(String []args) {
                                    System.out.println("Hello World");
                                }
                                }</div>
                            </div>
                            <div className="w3-row w3-margin-top w3-right">
                                <button className="w3-bar-item w3-theme w3-button">Check Code</button>
                                <button className="w3-bar-item w3-theme w3-button">Reset</button>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Kurs;
