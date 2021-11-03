const fs = require('fs');
const inquirer = require('inquirer');

// Custom classes
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Question Info
const {
    managerQuestions,
    internQuestions,
    engineerQuestions,
    typeQuestion,
    generalQuestions,
    continueQuestion,
} = require('./lib/Questions');

// HTML Generator
const templateHelper = require('./src/templateHelper');

// Employee Array
const employees = [];

function writeToFile() {
    fs.writeFile("./dist/output/teamProfile.html", templateHelper.generateHtml(employees), (error) => {
        error ? console.log("Error when writing the file: " + error) : console.log("File created successfully!");
    });
}

function promptContinue() {
    inquirer.prompt(continueQuestion)
        .then((answers) => {
            if (answers.continue === "Yes") {
                promptEmployeeType();
            } else {
                writeToFile();
            }
        });
}

function promptIntern() {
    console.log("Please provide at least the ID, name, and email of the intern.");
    inquirer.prompt(generalQuestions.concat(internQuestions))
        .then(({id, name, email, school}) => {
            if (id && email && name) {
                employees.push(new Intern(id, name, email, school));
                promptContinue();
            } else {
                promptIntern();
            }
        });
}

function promptEngineer() {
    console.log("Please provide at least the ID, name, and email of the engineer.");
    inquirer.prompt(generalQuestions.concat(engineerQuestions))
        .then(({id, name, email, github}) => {
            if (id && email && name) {
                employees.push(new Engineer(id, name, email, github));
                promptContinue();
            } else {
                promptEngineer();
            }
        });
}

function promptEmployeeType() {
    inquirer
        .prompt(typeQuestion)
        .then(({type}) => {
            if (type === "Engineer") {
                promptEngineer();
            } else if (type === "Intern") {
                promptIntern();
            } else {
                writeToFile();
            }
        });
}

function init() {
    inquirer.prompt(managerQuestions)
        .then(({id, name, email, officeNumber}) => {
            if (id && name && email && officeNumber) {
                employees.push(new Manager(id, name, email, officeNumber));
                promptEmployeeType();
            } else {
                console.log("Please provide all of the requested information.");
                init();
            }
        });
}

console.log("Hello, and welcome to the Team Profile Generator!");
init();