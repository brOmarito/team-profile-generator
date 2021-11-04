const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        // Positive Test
        it("should create an Employee object with ID, name, email, role, and headerString attributes and takes 3 params when called with new", () => {
            const employee = new Employee(11, "Manandrew Germaine", "mGer@gmail.com");

            expect(employee.id).toEqual(11);
            expect(employee.name).toEqual("Manandrew Germaine");
            expect(employee.email).toEqual("mGer@gmail.com");
            expect(employee.role).toEqual("Employee");
            expect(employee.headerString).toEqual("");
        })

        // Negative Test
        it("should throw an error for not providing one of the required parameters", () => {
            const cb1 = () => new Employee();
            const cb2 = () => new Employee(11);
            const cb3 = () => new Employee(11, 'Test Name');

            const err = new Error("Parameters ID, Name, and Email should be defined");

            expect(cb1).toThrowError(err);
            expect(cb2).toThrowError(err);
            expect(cb3).toThrowError(err);
        })
    });
})