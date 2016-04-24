var chai = require('chai');
var expect = chai.expect;
var Wrapper = require('../src/wrapper.js');

// input <= col
describe('wrap() should return the input untouched', function() {
    it('if input text\'s length is less than col', function(){
        var textIn = 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.'; //textIn.length == 75
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, 80)).to.equal(textIn);
    });
    it('if input text\'s length is EQUAL to col', function(){
        var textIn = 
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmode';
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, 80)).to.equal(textIn);
    });
    it('if input text\'s length is EQUAL to col, last character is a space', function(){
        var textIn = 
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ';
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, 80)).to.equal(textIn);
    });
});

// input > col and there is a space somewhere before the col'th character
describe('wrap() should split the text at word boundaries right before the given column', function() {
    it('when there are space(s) before the col\'th character', function(){
        var textIn = 
            '1 1/2 cups flour, 2 teaspoons baking powder, 2 tablespoons sugar, 3/4 teaspoon salt, 1 1/2 cups milk, 1 egg, 2 tablespoons oil';
        var col = 55;
        var textOut = 
            '1 1/2 cups flour, 2 teaspoons baking powder, 2\n' +
            'tablespoons sugar, 3/4 teaspoon salt, 1 1/2 cups milk,\n' +
            '1 egg, 2 tablespoons oil';
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, col)).to.equal(textOut);
    }); 
});

// input > col and there is no space before the col'th character
describe('wrap() should split the text at the given character', function() {
    it('when there is no space character before the given column 1', function(){
        var textIn = '0123456789';
        var textOut = 
            '01234'
            + '\n'
            + '56789';
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, 5)).to.equal(textOut);
    });
    it('when there is no space character before the given column 2', function(){
        var textIn =   
            '1234567891011121314151617181920212223242526272829303132333435'; // textIn.length == 61
        var textOut =
            '12345678910111213141516171819202122232425262728293'
            + '\n'
            + '03132333435';
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, 50)).to.equal(textOut);
    });
});

describe('wrap() should split either at the last space or the column limiter when', function(){
    it('the given text contains both lines with and without spaces', function(){
        var textIn = 
            'Lorem ipsum dolor sit amet, consectetur';
        var textOut = 
            'Lorem\n'+
            'ipsum\n'+
            'dolor\n'+
            'sit\n'+
            'amet,\n'+
            'conse\n'+
            'ctetu\n'+
            'r'
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, 5)).to.equal(textOut);
    });
        it('the given text contains both lines with and without spaces', function(){
        var textIn = 
            'Lorem ipsum dolor sit amet, con s ec te tur';
        var textOut = 
            'Lorem\n'+
            'ipsum\n'+
            'dolor\n'+
            'sit\n'+
            'amet,\n'+
            'con s\n'+
            'ec te\n'+
            'tur'
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, 5)).to.equal(textOut);
    });
});
//-----------------------------------------------------------------------------

// col is not a positive integer
describe('wrap() should return nothing when', function() {
    it('col is not numeric', function(){
        var textIn = 'I really, really would like to split this long string at...';
        var col = '...well, say, at every fifth character!';
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, col)).to.be.null;
    });
    it('col is not an integer', function(){
        var textIn = 'Tullamore Dew, Jack Daniels, Chivas Regal, Bushmills';
        var col = 123.4;
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, col)).to.be.null;
    });
    it('col is not a positive integer', function(){
        var textIn = 
            '1 1/2 cups flour, 2 teaspoons baking powder, 2 tablespoons sugar, 3/4 teaspoon salt, 1 1/2 cups milk, 1 egg, 2 tablespoons oil';
        var col = -987;
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, col)).to.be.null;
    });
});