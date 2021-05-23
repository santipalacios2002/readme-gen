// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const utility = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'gitUsername',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project\'s name?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What kind of license should your project have?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installCmd',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'testCmd',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'repoUsage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo',
        name: 'repoContrib',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, JSON.stringify(data), (err) => err ? console.log(err) : console.log('file created'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {                        //then add this to the html code as a string with template literals
        console.log('answers:', answers)
        writeToFile('readme.md', answers)
    });
}

// Function call to initialize app
init();
