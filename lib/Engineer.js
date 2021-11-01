const Employee = require('./Employee');

class Engineer extends Employee {
    questions = [
        {
            type: 'input',
            message: "What is the engineer's GitHub username?",
            name: 'github',
        },
    ]

    constructor(id, name, email, github) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.github = github;
        this.role = 'Engineer';
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;
