const inquirer = require("inquirer");

function managerPrompt() {  
    return inquirer.prompt([
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
    ]);
        
}   
function addEmployee() {  
    return inquirer.prompt([ 
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "engineerOrIntern",
            choices: ["Engineer", "Intern", "Quit"],
        },
    ]);



} 
function engineerPrompt() {
    return inquirer.prompt([
        {
            message: "What is your engineer's name?",
            name: "name"
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
    ]);
    
}
function internPrompt() {
    return inquirer.prompt([
        {
            message: "What is your intern's name?",
            name: "name"
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
    ]);

}  

module.exports = { 
    addEmployee, 
    internPrompt, 
    managerPrompt, 
    engineerPrompt, 

}