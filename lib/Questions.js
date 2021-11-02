const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's employee ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the team manager's email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'officeNumber',
    },
];

const internQuestions = [
    {
        type: 'input',
        message: "What school does the intern go to?",
        name: 'school',
    },
];

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'github',
    },
];

const typeQuestion = [
    {
        type: 'list',
        choices: ["Engineer", "Intern", "All done!"],
        name: 'type',
        message: 'What type of employee would you like to enter?\nSelect "All Done!" to generate the profile.'
    },
];

const generalQuestions = [
    {
        type: 'input',
        message: "What is the employee's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the employee's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the employee's email?",
        name: 'email',
    },
];

const continueQuestion = [
    {
        type: 'list',
        message: 'Would you like to enter another employee?',
        choices: ["Yes", "No"],
        name: 'continue',
    }
]

exports.managerQuestions = managerQuestions;
exports.internQuestions = internQuestions;
exports.engineerQuestions = engineerQuestions;
exports.typeQuestion = typeQuestion;
exports.generalQuestions = generalQuestions;
exports.continueQuestion = continueQuestion;
