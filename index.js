// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
generateMarkdown('testing');
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
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'testCmd',
        default: 'npm test',
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
    
    //deconstructing the data

    const { gitUsername, email, projectName, description, license, installCmd, testCmd, repoUsage, repoContrib } = data
    console.log('data!!!!!!!!!!!!!!!!!!!!!!!!!!!:', data)
    console.log('gitUsername:', gitUsername)
    let readmeContent = `# ${projectName}

![${license}](https://img.shields.io/badge/license-${license}-brightgreen)
    
## Description
    
${description}
    
## Table of Contents
    
* [Installation](##Installation)
* [Usage](##Usage)
* [License](##License)
* [Contributing](##Contributing)
* [Tests](##Test)
* [Questions](##Questions)
    
## Installation
    
To install the necessary dependencies, run the following command:
    
\`\`\`
${installCmd}
\`\`\`
    
## Usage
    
${repoUsage}
    
## License
    
This project is licensed under the "${license} license.
    
## Contributing
    
${repoContrib}
    
## Test
    
\`\`\`
${testCmd}
\`\`\`
## Questions
    
If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${gitUsername}](https://github.com/${gitUsername})
    `
    fs.writeFile(fileName, readmeContent, (err) => err ? console.log(err) : console.log('file created'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('answers:', answers)
        writeToFile('README.md', answers)
    });
}

// Function call to initialize app
init();