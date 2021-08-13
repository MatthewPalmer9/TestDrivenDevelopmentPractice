'use strict';

import chai, { expect } from 'chai';
chai.should();

function isEven(num) {
    return num % 2 === 0;
}

function add(num1, num2) {
    return num1 + num2;
}

/*** TESTS ***/ 
    // To run tests, type 'mocha test.mjs' in the terminal

const EVEN_NUMBER = 4;
const ODD_NUMBER = 3;

describe('Numerical Tests', () => {
    // if you only want one test to run, you can set to describe() to describe.only()
    describe('isEven', () => {
        it('should return true when number is even', () => {
            isEven(EVEN_NUMBER).should.be.true;
        });
    
        it('should return false when number is odd', () => {
            isEven(ODD_NUMBER).should.be.false;
        });
    });
    
    describe('add without setup/teardown', () => {
        let num;
        beforeEach(() => { // sets num to 5 before each test is run
            num = 5;
        });
    
        it('should be ten when adding 5 to 5', () => {
            num = add(num, 5);
            num.should.equal(10);
        });
    
        // use it.skip() if you would like to temporarily skip a test without deleting it entirely.
        // The shorthand version you can use is xit()
        // You can also only run a specific test by changing any it() to it.only() 

        // If you're feeling adventurous, try it with this test. :)
        it('should be twelve when adding 7 to 5', () => {
            add(num, 7).should.equal(12);
        });
    });
});