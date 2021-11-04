const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        // Positive Test
        it("should create an Intern object with ID, name, email, role, and headerString attributes and takes 3 params when called with new", () => {
            const employee = new Intern(11, "Manandrew Germaine", "mGer@gmail.com");

            expect(employee.id).toEqual(11);
            expect(employee.name).toEqual("Manandrew Germaine");
            expect(employee.email).toEqual("mGer@gmail.com");
            expect(employee.role).toEqual("Intern");
            expect(employee.headerString).toEqual(`<i class="fas fa-university header-icon"></i>Intern`);
        })

        // Negative Test
        it("should throw an error for not providing one of the required parameters", () => {
            const cb1 = () => new Intern();
            const cb2 = () => new Intern(11);
            const cb3 = () => new Intern(11, 'Test Name');

            const err1 = new Error("Parameters ID, Name, and Email should be defined");

            expect(cb1).toThrowError(err1);
            expect(cb2).toThrowError(err1);
            expect(cb3).toThrowError(err1);
        })
    });
})