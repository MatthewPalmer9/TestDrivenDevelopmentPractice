'use strict';

import chai, { expect } from 'chai';
chai.should();

describe('some other test file', () => {
    it('should return true', () =>{
        expect(true).to.be.true;
    });

    it('should return false', () => {
        expect(false).to.be.false;
    });
});