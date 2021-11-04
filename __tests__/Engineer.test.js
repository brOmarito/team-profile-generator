const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        // Positive Test
        it("should create an Engineer object with ID, name, email, role, and headerString attributes and takes 3 params when called with new", () => {
            const employee = new Engineer(11, "Manandrew Germaine", "mGer@gmail.com");

            expect(employee.id).toEqual(11);
            expect(employee.name).toEqual("Manandrew Germaine");
            expect(employee.email).toEqual("mGer@gmail.com");
            expect(employee.role).toEqual("Engineer");
            expect(employee.headerString).toEqual(`<i class="fab fa-dev header-icon"></i>Engineer`);
        })

        // Negative Test
        it("should throw an error for not providing one of the required parameters", () => {
            const cb1 = () => new Engineer();
            const cb2 = () => new Engineer(11);
            const cb3 = () => new Engineer(11, 'Test Name');

            const err1 = new Error("Parameters ID, Name, and Email should be defined");

            expect(cb1).toThrowError(err1);
            expect(cb2).toThrowError(err1);
            expect(cb3).toThrowError(err1);
        })
    });
})