class Employee {
    constructor(id, name, email) {
        // Type and null check for params
        if (!id || !name || !email) {
            throw new Error("Parameters ID, Name, and Email should be defined");
        }
        if (typeof id !== "string" && typeof id !== "number") {
            throw new Error("Parameter ID should be a number or string");
        }
        if (typeof name !== "string" || typeof email !== "string") {
            throw new Error("Parameters Name and Email should be a string");
        }

        this.id = id;
        this.name = name;
        this.email = email;
        this.role = 'Employee';
        this.headerString = '';
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
