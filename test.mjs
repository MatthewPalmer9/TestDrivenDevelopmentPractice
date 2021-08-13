'use strict';

import chai, { expect } from 'chai';
chai.should();

function isEven(num) {
    return num % 2 === 0;
}

/*** TESTS ***/ 
    // To run tests, type 'mocha test.mjs' in the terminal
    
describe('isEven', () => {
    it('should return true when number is even', () => {
        isEven(4).should.be.true;
    });
});