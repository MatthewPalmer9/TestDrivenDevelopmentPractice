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

    it('should be ten whtn adding 5 to 5', () => {
        num = add(num, 5);
        num.should.equal(10);
    });

    it('should be twelve when adding 7 to 5', () => {
        add(num, 7).should.equal(12);
    });
});