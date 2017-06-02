import $ from 'jquery';
import 'beautifier.js';

// actionscript
function FormatJS() {
    editorResult.getSession().setUseWrapMode(false);
    var oldformat = editorAce.getValue();
    if (oldformat.trim().length > 0) {
        var code = js_beautify(oldformat, {
            'indent_size' : 1,
            'indent_char' : ' '
        });
        code = code.split("- >").join("->");

        return code;
    }
}

function MinifyJS() {
    editorResult.getSession().setUseWrapMode(true);
    var oldformat = editorAce.getValue();
    if (oldformat.trim().length > 0) {

        $.ajax({
            type : "post",
            url : "http://codebeautify.org/service/jsmin",
            dataType : "text",
            data : {
                data : oldformat
            },
            success : function(response) {
                try {
                    editorResult.setValue(response);

                } catch (e) {
                    openErrorDialog("invalid Input");
                }
            },
            error : function(e, s, a) {
                openErrorDialog("Failed Minifining=" + s);

            }
        });
    }
}
