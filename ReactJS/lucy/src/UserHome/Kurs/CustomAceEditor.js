import React, {Component} from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/java'
import 'brace/theme/idle_fingers';
import 'brace/ext/language_tools';

class CustomAceEditor extends Component {
    constructor(props) {
        super(props);
        this.defaultValue = `public class MyFirstJavaProgram {
    /* This is my first java program.
    * This will print "Hello World" as the output */
    public static void main(String []args) {
        System.out.println("Hello World");
         // prints Hello World
    }
}`;
        this.state = {
            value: this.defaultValue
        };
    };
    defaultValue = "";
    onChange(newValue) {
        this.props.resetError();
        this.setState((prevState) => {
            return {value: newValue};
        });
    };

    resetDefault() {
        this.setState((prevState) => {
            return {value: this.defaultValue};
        });
    }

    render() {
        let display = this.props.show ? "block" : "none";
        const annotations = [];
        if(this.props.error){
            annotations.push({
                row: this.props.error - 1,
                text: this.props.errorMessage,
                type: 'error'
            });
        }
        return (
            <AceEditor
                style={{display: display}}
                className="w3-margin-top"
                mode="java"
                theme="idle_fingers"
                name="UNIQUE_ID_OF_DIV"
                editorProps={{$blockScrolling: true}}
                width="100%"
                annotations={annotations}
                onLoad={(editor) => {
                    editor.focus();
                    editor.session.setUseWrapMode(true);
                    editor.setOptions({
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 4,
                    });
                }}
                onChange={this.onChange.bind(this)}
                wrapEnabled={true}
                value={this.state.value}
            />)
    }

}

export default CustomAceEditor;
