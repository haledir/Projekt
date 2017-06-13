import $ from 'jquery';
import js_beautify from 'js-beautify';


// actionscript
 function FormatJS(oldformat) {
    if (oldformat.trim().length > 0) {
        var code = js_beautify(oldformat, {
            'indent_size' : 1,
            'indent_char' : ' '
        });
        code = code.split("- >").join("->");

        return code;
    }
}

 function MinifyJS(oldformat) {
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
                    return response;

                } catch (e) {

                }
            },
            error : function(e, s, a) {


            }
        });
    }
}

export { FormatJS, MinifyJS };
