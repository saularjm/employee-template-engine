// Require base class Employee
const Employee = require("./Employee");

// Engineer class that extends Employee
class Engineer extends Employee {

    // Draw in base constructor and add GitHub username
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // Function to return role, overwritten 
    getRole() {
        return "Engineer";
    }

    // Function to return GitHub username
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;