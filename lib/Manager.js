const Employee = require('./Employee');

class Manager extends Employee {
    questions = [
        {
            type: 'input',
            message: "What is the team manager's employee ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the team manager's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'officeNumber',
        },
    ]

    constructor(id, name, email, officeNumber) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;
