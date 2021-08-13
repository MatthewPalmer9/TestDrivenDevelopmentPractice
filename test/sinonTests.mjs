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
            },

            addClass: (schedule) => {
                if(!schedule.classIsFull()) {
                    return true;
                } else {
                    return false;
                }
            }
        };

        schedule = {
            dropClass: () => {
                console.log('class dropped');
            },

            classIsFull: () => {
                return true;
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

    // stubs are a way to watch an entire object
    // stubs have all the functionalities that a spy does.
    // It's more common to use stubs since we generally work with entire objects instead of lone functions
    describe('student with stubs', () => {
        it('should call a stubbed method', () => {
            // sinon.stub will go through every method on the object and replace it with a stub function
            let stub = sinon.stub(schedule);
            student.dropClass(1, stub);
            stub.dropClass.called.should.be.true;
        });

        it('should return true when the class is not full', () => {
            let stub = sinon.stub(schedule);
            stub.classIsFull.returns(false);

            let returnVal = student.addClass(stub);
            returnVal.should.be.true;
        });
    });
});