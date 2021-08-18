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

export default Student;