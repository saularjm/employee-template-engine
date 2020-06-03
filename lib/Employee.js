// Base employee class
class Employee {

    // Constructor takes in name, id, and email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Function to return name
    getName() {
        return this.name;
    }

    // Function to return id
    getId() {
        return this.id;
    }

    // Function to return email
    getEmail() {
        return this.email;
    }

    // Function to return role
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;