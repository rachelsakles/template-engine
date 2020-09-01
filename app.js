// Node modules
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!) 
inquirer.prompt([
    {
        message: "What is your manager's name?",
        name: "name"
    },
    {
        message: "What is your manager's id?",
        name: "id"
    },
    {
        message: "What is your manager's email address?",
        name: "email"
    },
    {
        message: "What is your manager's office number?",
        name: "officeNumber"
    },
]).then(function (manager) {
    console.log(manager);
    inquirer
        .prompt([
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "engineerOrIntern",
                choices: ["Engineer", "Intern", "Quit"],
            }
        ])
        .then(function ({ engineerOrIntern }) {
            if (engineerOrIntern === "Engineer") {
                // prompt for engineer details 
                engineerPrompt();
            } else if (engineerOrIntern === "Intern") {
                // prompt for intern details 
                internPrompt();
            } else {
                // write to file

            }
        })
    });
function engineerPrompt() {
    inquirer
        .prompt([
            {
                message: "What is your engineer's name?",
                name: name
            },
            {
                message: "What is your engineer's id?",
                name: "id"
            },
            {
                message: "What is your engineer's email address?",
                name: "email"
            },
            {
                message: "What is your engineer's GitHub username?",
                name: "officeNumber"
            },
        ])
}
function internPrompt() {
    inquirer
        .prompt([
            {
                message: "What is your intern's name?",
                name: name
            },
            {
                message: "What is your intern's id?",
                name: "id"
            },
            {
                message: "What is your intern's email address?",
                name: "email"
            },
            {
                message: "What is your intern's school?",
                name: "officeNumber"
            },
        ])
}


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```