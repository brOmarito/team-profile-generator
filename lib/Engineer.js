const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.github = github;
        this.role = 'Engineer';
        this.headerString = `<i class="fab fa-dev header-icon"></i>Engineer`;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;
