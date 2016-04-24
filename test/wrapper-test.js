var chai = require('chai');
var expect = chai.expect;
var Wrapper = require('../src/wrapper.js');

describe('Wrapper', function() {
    it('wrap() should return the input untouched when col is <= the text\'s length', function(){
        var textIn = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.';
        var wrapper = new Wrapper();
        expect(wrapper.wrap(textIn, 80)).to.equal(textIn);
    });
});