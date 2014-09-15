var Tempy = (function(){

    function compileObject(template, data) {
        for(key in data) {
            var reg = new RegExp("{{" + key + "}}" , "g");
            template = template.replace(reg, data[key]);
        }
        return template;
    }

    function compilePrimitive(template, data) {
        var reg = new RegExp("{{this}}" , "g");
        return template = template.replace(reg, data);
    }

    function compileArray(template, data) {
        for(var i = 0; i < data.length; i++) {
            var reg = new RegExp("{{" + i + "}}" , "g");

            var index=0;
            do {
                template = template.replace("{{" + i + "}}", data[i]);
            } while ((index=template.indexOf("{{" + i + "}}",index+1))>-1);
        }
        return template;
    }

    return {
        compile: function(target, data) {
            var dataType = Object.prototype.toString.call( data );
            switch(dataType) {
                case "[object Object]":
                    return compileObject(jQuery(target).html(), data);
                    break;
                case "[object Array]":
                    return compileArray(jQuery(target).html(), data);
                    break;
                case "[object Date]":
                    return compilePrimitive(jQuery(target).html(), data.getTime());
                    break;
                default:
                    return compilePrimitive(jQuery(target).html(), data);
            }
        }
    }
})();