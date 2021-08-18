import { v4 as uuid } from 'uuid';

export default class Student {
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