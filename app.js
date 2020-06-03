const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeList = [];
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter Manager name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter Manager ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Manager email:"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter Manager office number:"
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter Engineer name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter Engineer ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Engineer email:"
    },
    {
        type: "input",
        name: "github",
        message: "Enter Engineer GitHub username:"
    }
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter Intern name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter Intern ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Intern email:"
    },
    {
        type: "input",
        name: "school",
        message: "Enter Intern school:"
    }
];

const initialQuestion = {
    type: "list",
    name: "employeeRole",
    message: "What is your role?",
    choices: [
        "Manager",
        "Engineer",
        "Intern"
    ]
};

const addAnother = {
    type: "list",
    name: "addAnother",
    message: "Would you like to add another employee?",
    choices: ["Yes", "No"]
};

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
