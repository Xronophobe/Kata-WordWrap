function Wrapper() {
}

function splitByChunking(textIn, limit){
    var lines = [];
    var splitAt = textIn.lastIndexOf(" ", limit);
        
    while (textIn.length > limit){
        //darabolj: ha találsz szóközt az elejében, vágd, ha nem, csonkold a limitnél
        var spaceIsAt = textIn.lastIndexOf(" ", limit);
        splitAt = (spaceIsAt === -1 ) ? limit : spaceIsAt;
        lines.push(textIn.substring(0, splitAt));
        textIn = textIn.substring(splitAt+1); // itt karaktert veszit, ha nem szokoz miatt torte a sort
    }
    lines.push(textIn);
    
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

//var comeon = splitByChunking('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.', 25);
var comeon = splitByChunking('1234567891011121314151617181920212223242526272829303132333435', 25);
console.log("comeon: ");
console.log(comeon);