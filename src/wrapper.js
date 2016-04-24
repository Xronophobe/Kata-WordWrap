function Wrapper() {
}

function splitByChunking(textIn, limit){
    var lines = [];
    var splitAt = 0;
    
    while (textIn.length > limit){
        var spaceIsAt = textIn.lastIndexOf(" ", limit);
        splitAt = (spaceIsAt === -1 ) ? limit : spaceIsAt + 1;
        var line = textIn.substring(0, splitAt).trim();
        lines.push(line);
        textIn = textIn.substring(splitAt);
    }
    lines.push(textIn);
    
    return lines;
}

Wrapper.prototype.wrap = function(text, col) {
    if (isNaN(col) || col < 0 || !(col % 1 === 0)){
        return null;
    }
    
    return splitByChunking(text, col).join('\n');
};

module.exports = Wrapper;