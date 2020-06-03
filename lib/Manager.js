// Require base class Employee
const Employee = require("./Employee");

// Manager class that extends Employee
class Manager extends Employee {

    // Draw in base constructor and add office number
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Function to return role, overwritten
    getRole() {
        return "Manager";
    }

    // Function to return office number
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;