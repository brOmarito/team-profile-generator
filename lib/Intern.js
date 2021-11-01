const Employee = require('./Employee');

class Intern extends Employee {
    questions = [
        {
            type: 'input',
            message: "What school does the intern go to?",
            name: 'school',
        },
    ]

    constructor(id, name, email, school) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}