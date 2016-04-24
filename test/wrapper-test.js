var chai = require('chai');
var expect = chai.expect;
var Wrapper = require('../src/wrapper.js');

// input <= col
describe('wrap() should return the input untouched: ', function() {
    it('input text\'s length is less than col', function(){
        var textIn = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.'; //textIn.length === 75
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, 80)).to.equal(textIn);
    });
    it('input text\'s length is EQUAL to col', function(){
        var textIn = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmode';
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, 80)).to.equal(textIn);
    });
    it('input text\'s length is EQUAL to col, last character is a space', function(){
        var textIn = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ';
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, 80)).to.equal(textIn);
    });
});

// input > col and there is a space somewhere before the col'th character
// input > col and there is a space somewhere before the col'th character, first character is a space


// input > col and there is no space before the col'th character

//-----------------------------------------------------------------------------

// col is not an integer