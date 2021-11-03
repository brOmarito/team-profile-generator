const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = 'Manager';
        this.headerString = `<i class="fas fa-mug-hot header-icon"></i>Manager`;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;
