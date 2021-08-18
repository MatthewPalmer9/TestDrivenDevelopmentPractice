'use strict';

import chai, { expect } from 'chai';
import { v4 as uuid } from 'uuid';
import Course from './Course.js';
import Student from './Student.js';

chai.should();

describe("Course", () => {
    const COURSE_NAME = "Introduction to Awesomeness";
    const COURSE_CODE = "AWE 101";
    const COURSE_DESC = "This course will make you awesome!";
    const STUDENT_NAME = "John Doe";
    const STUDENT_GRADE = 5;

    it('should save data correctly', () => {
        const course = new Course(COURSE_NAME, COURSE_CODE, COURSE_DESC);
        course.name.should.equal(COURSE_NAME);
        course.code.should.equal(COURSE_CODE);
        course.description.should.equal(COURSE_DESC);

        // .equal() compares references (it would fail because the references in memory are not the same)
        // .eql() does a deep comparison of values (passes because the value of [] equals [])
        course.students.should.eql([]);
        course.times.should.eql([]);
    });

    describe('registerStudent', () => {
        const student = new Student(STUDENT_NAME, STUDENT_GRADE);

        it('should add the student to the students array', () => {
            const course = new Course(COURSE_NAME, COURSE_CODE, COURSE_DESC);

            course.registerStudent(student);

            course.students.length.should.equal(1);
            course.students[0].id.should.equal(student.id);
        });
    });

    describe('unregisterStudent', () => {
        it("should throw an error if we try to remove a student that doesn't exist", () => {
            const course = new Course(COURSE_NAME, COURSE_CODE, COURSE_DESC);

            expect(() => {
                course.unregisterStudent("asdf");
            }).to.throw();
        })
    });

    describe('addTimes', () => {
        it('should add the given days and times to the course', () => {
            const course = new Course(COURSE_NAME, COURSE_CODE, COURSE_DESC);
            const days = ["Monday", "Wednesday", "Friday"];
            const times = ["10:00AM", "2:00PM"]

            course.addTimes(days, times);

            course.times.length.should.equal(days.length*times.length);
            course.times[2].should.eql({
                day: "Wednesday", time: "10:00AM"
            });
        });

        it('should not add a non-day to the times array', () => {
            const course = new Course(COURSE_NAME, COURSE_CODE, COURSE_DESC);
            const day = "fabulousday", time = "10:00AM";

            expect(() => {
                course.addTimes(day, time)
            }).to.throw();
        })
    });
});