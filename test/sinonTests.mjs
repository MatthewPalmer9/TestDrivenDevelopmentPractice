'use strict';

import chai, { expect } from 'chai';
import sinon from 'sinon'; 
chai.should();

describe('sinon tests', () => {
    let student, schedule;
    beforeEach(() => {
        student = {
            dropClass: (classId, callback) => {
                !!callback.dropClass ? callback.dropClass() : callback();
            }
        }

        schedule = {
            dropClass: () => {
                console.log('class dropped');
            }
        }
    });

    describe('student.dropClass', () => {
        it('should call the callback', () => {
            // spy is a function that sinon will use to watch & tell if the function
            // has been called (callback), how many times it's been called, and what
            // parameters it was called with on each invocation
            let spy = sinon.spy();

            student.dropClass(1, spy);
            // 'called' in this case will tell if 'callback()' was executed.
            spy.called.should.be.true;
        });

        it('should call the callback and log to the console', () => {
            const onClassDropped = () => {
                console.log("onClassDropped was called.");
            }

            let spy = sinon.spy(onClassDropped);

            student.dropClass(1, spy);
            spy.called.should.be.true;
        });

        it('should call the callback even if it\'s a method of an object', () => {
            // 'schedule' is a method like 'student' that also has a dropClass function
            sinon.spy(schedule, 'dropClass');
            student.dropClass(1, schedule);

            // 'schedule' is defined in beforeEach() as a reminder here...
            // 'called' doesn't exist in the 'dropClass' function on 'schedule'
            // To make this work, sinon has a way to replace the method with a spy
            // sinon.spy() above now takes two parameters.
                // First is the object the method belongs to.
                // Second is the name of the method
                // sinon goes in, grabs the method, wraps it in a spy, and replaces
                // the method with the wrapped spy.
            schedule.dropClass.called.should.be.true;
        });
    });
});