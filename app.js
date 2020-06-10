// Require classes and node packages
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Path to write HTML output
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Require function to render HTML
const render = require("./lib/htmlRenderer");

// Array to hold employee objects created from CLI
let employeeList = [];

// Array of questions for manager 
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter Manager name:",
        validate: async (input) => {
            if (input === "") {
                return "Please enter a name";
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Enter Manager ID:",
        validate: async (input) => {
            if (isNaN(input)) {
                return "Please enter a valid ID number";
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter Manager email:",
        validate: async (input) => {
            if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input)) {
                return true;
            }
            else {
                return "Please enter a valid email address";
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter Manager office number:",
        validate: async (input) => {
            if (isNaN(input)) {
                return "Please enter a valid office number";
            }
            else {
                return true;
            }
        }
    },
    {
        type: "list",
        name: "addAnother",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"]
    }
];

// Array of questions for engineer
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter Engineer name:",
        validate: async (input) => {
            if (input === "") {
                return "Please enter a name";
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Enter Engineer ID:",
        validate: async (input) => {
            if (isNaN(input)) {
                return "Please enter a valid ID number";
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter Engineer email:",
        validate: async (input) => {
            if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input)) {
                return true;
            }
            else {
                return "Please enter a valid email address";
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter Engineer GitHub username:",
        validate: async (input) => {
            if (input === "") {
                return "Please enter a username";
            }
            else {
                return true;
            }
        }
    },
    {
        type: "list",
        name: "addAnother",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"]
    }
];

// Array of questions for intern
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter Intern name:",
        validate: async (input) => {
            if (input === "") {
                return "Please enter a name";
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Enter Intern ID:",
        validate: async (input) => {
            if (isNaN(input)) {
                return "Please enter a valid ID number";
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter Intern email:",
        validate: async (input) => {
            if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input)) {
                return true;
            }
            else {
                return "Please enter a valid email address";
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "Enter Intern school:",
        validate: async (input) => {
            if (input === "") {
                return "Please enter a school";
            }
            else {
                return true;
            }
        }
    },
    {
        type: "list",
        name: "addAnother",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"]
    }
];

// Initial question to determine employee role
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

// Function to take user input data and write to output HTML file
function writeHTML(html) {
    fs.writeFile(outputPath, html, function(err) {
        if (err) throw err;

        console.log("Success! Team html created!");
    });
}

// Function for main running of app
function init() {

    // Prompt with initial question to determine employee role
    inquirer.prompt(initialQuestion).then(res => {

        // If manager, prompt with managerQuestions
        if (res.employeeRole === "Manager") {
            inquirer.prompt(managerQuestions).then(manRes => {

                // Create new Manager object using user input and push to array of employees
                let teamManager = new Manager(manRes.name, manRes.id, manRes.email, manRes.officeNumber);
                employeeList.push(teamManager);

                // If user chooses to add another employee, rerun init()
                if (manRes.addAnother === "Yes") {
                    init();
                }
                // Else, render HTML and write to output file
                else {
                    let teamHTML = render(employeeList);
                    writeHTML(teamHTML);
                }
            });
        }
        // If engineer, prompt with engineerQuestions
        else if (res.employeeRole === "Engineer") {
            inquirer.prompt(engineerQuestions).then(engRes => {

                // Create new Engineer object using user input and push to array of employees
                let teamEngineer = new Engineer(engRes.name, engRes.id, engRes.email, engRes.github);
                employeeList.push(teamEngineer);

                // If user chooses to add another employee, rerun init()
                if (engRes.addAnother === "Yes") {
                    init();
                }
                // Else, render HTML and write to output file
                else {
                    let teamHTML = render(employeeList);
                    writeHTML(teamHTML);
                }
            });
        }
        // If intern, prompt with internQuestions
        else {
            inquirer.prompt(internQuestions).then(intRes => {

                // Create new Intern object using user input and push to array of employees
                let teamIntern = new Intern(intRes.name, intRes.id, intRes.email, intRes.school);
                employeeList.push(teamIntern);

                // If user chooses to add another employee, rerun init()
                if (intRes.addAnother === "Yes") {
                    init();
                }
                // Else, render HTML and write to output file
                else {
                    let teamHTML = render(employeeList);
                    writeHTML(teamHTML);
                }
            });
        }
    });
};

// Call function to run app
init();