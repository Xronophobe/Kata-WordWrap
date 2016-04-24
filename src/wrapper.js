function Wrapper() {
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