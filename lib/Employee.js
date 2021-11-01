class Employee {
    typeQuestion = [
        {
            type: 'list',
            choices: ["Engineer", "Intern", "All done!"],
            name: 'type',
            message: 'What type of employee would you like to enter?'
        },
    ]

    generalQuestions = [
        {
            type: 'input',
            message: "What is the {{EMPLOYEE_TYPE}}'s name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the {{EMPLOYEE_TYPE}}'s ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the {{EMPLOYEE_TYPE}}'s email?",
            name: 'email',
        },
    ]

    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = 'Employee';
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;
