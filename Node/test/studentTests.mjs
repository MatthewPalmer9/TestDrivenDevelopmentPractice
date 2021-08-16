'use strict';

import chai, { expect, should } from 'chai';
import {v4 as uuid } from 'uuid';
chai.should();

class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
        this.id = uuid();
    }

    advanceGrade = () => {
        this.grade++;
    }

    toString = () => {
        return this.id + "\t" + this.name;
    }
}

describe("Student", () => {
    const STUDENT_NAME = "John Doe";
    const STUDENT_GRADE = 5;

    it('should save student information & create an ID for that student', () => {
        const student = new Student(STUDENT_NAME, STUDENT_GRADE);
        student.id.should.exist;
        student.name.should.equal(STUDENT_NAME);
        student.grade.should.equal(STUDENT_GRADE);
    });

    it("should increase the student's grade by 1 when advanceGrade is called", () => {
        const student = new Student(STUDENT_NAME, STUDENT_GRADE);
        student.advanceGrade();
        student.grade.should.equal(STUDENT_GRADE+1);
    });
});