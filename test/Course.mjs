class Course {
    constructor(name, code, description) {
        this.name = name;
        this.code = code;
        this.description = description;

        this.students = [];
        this.times = [];
    }

    registerStudent = (student) => {
        this.students.push(student);
    }

    unregisterStudent = (studentId) => {
        const student = this.students.filter(id => id === studentId);
        if(student.length > 0) { 
            this.students.splice(this.students.indexOf(student), 1) 
        } else {
            throw new Error("Student " +studentId+ " is not registered for this course.")
        }
    };

    addTimes = (days, times) => {
        if(!Array.isArray(days)) {
            days = [days];
        }

        if(!Array.isArray(times)) {
            times = [times];
        }

        days.forEach(day => {
            times.forEach(time => {
                this.times.push({
                    "day": day,
                    "time": times
                });
            });
        });
    };

    showSchedule = () => {
        let scheduleStr = "";
        let first = true;

        this.times.forEach(time => {
            if(!first) {
                scheduleStr += "\n"
            }
            
            first = false;
            scheduleStr += time.day + " at " + time.time;
        });
        return scheduleStr;
    };

    showStudents = () => {
        let studentStr = "";
        first = true;

        this.students.forEach(student => {
            if(!first) {
                studentStr += "\n";
            }
            first = false;
            studentStr += student.toString();
        });
        return studentStr;
    }
};

export default Course;