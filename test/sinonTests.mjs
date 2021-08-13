'use strict';

import chai, { expect } from 'chai';
import sinon from 'sinon'; 
chai.should();

describe('sinon tests', () => {
    let student;
    beforeEach(() => {
        student = {
            dropClass: (classId, callback) => {
                callback();
            }
        }
    });

    describe('student.dropClass', () => {
        it('should call the callback', () => {
            // spy is a function that sinon will watch & tell if the function
            // has been called, how many times it's been called, and what
            // parameters it was called with on each invocation
            let spy = sinon.spy();

            student.dropClass(1, spy);
            // 'called' in this case will tell if 'callback()' was executed.
            spy.called.should.be.true;
        });
    });
});