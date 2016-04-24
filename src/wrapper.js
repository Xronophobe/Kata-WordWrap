function Wrapper() {
}

function splitByChunking(textIn, limit){
    var lines = [];
    var lastSpaceCur = textIn.lastIndexOf(" ", limit);
    while((lastSpaceCur > -1) ){  //textin length és a bvégén add hozzá mint korábban, csak utána nézd a space helyzetét
        if (textIn.length <= limit){
            lines.push(textIn);
            break;
        }
        lines.push(textIn.substring(0, lastSpaceCur));
        textIn = textIn.substring(lastSpaceCur+1);
        lastSpaceCur= textIn.lastIndexOf(" ", limit);
    }
    
    return lines;
}

Wrapper.prototype.wrap = function(text, col) {
    if (isNaN(col) || col < 0 || !(col % 1 === 0)){
        return null;
    } // ha ezt kiveszem, nem unidentified -et ad vissza az is, ahol torni kene de nincs space elotte. #TODO 
    
    if (text.length <= col) {
        return text;
    } else if (text.length > col){
        if (text.indexOf(" ") != -1){
            
        } else {
            return(text.substring(0,col) + '\n' + text.substring(col) );
        }
    }
};

module.exports = Wrapper;

var comeon = splitByChunking('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.', 25);
//var comeon = splitByChunking('1234567891011121314151617181920212223242526272829303132333435', 25);
console.log("comeon: ");
console.log(comeon);