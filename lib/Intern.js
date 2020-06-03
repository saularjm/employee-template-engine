// Require base class Employee
const Employee = require("./Employee");

// Intern class that extends Employee
class Intern extends Employee {

    // Draw in base constructor and add school
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // Function to return role, overwritten
    getRole() {
        return "Intern";
    }

    // Function to return school
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;