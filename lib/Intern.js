const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.school = school;
        this.role = 'Intern';
        this.headerString = `<i class="fas fa-university header-icon"></i>Intern`;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;
