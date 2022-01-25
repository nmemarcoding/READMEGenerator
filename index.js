const fs = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'userName',
            message: 'What is your GitHub username?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectName',
            message: "What is your project's name?",
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log("Please enter project's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'GPL', 'BDS', 'CC', 'APAC', ]
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?'
        },
        {
            type: 'input',
            name: "test",
            message: 'What command should be run to run test?'
        },
        {
            type: 'input',
            name: "usingRepo",
            message: 'What dose the user need to know about using the repo?'
        },
        {
            type: 'input',
            name: "conterbut",
            message: "What dose the user need to know about conterbuting to the repo?"
        }
    ]);
};

promptUser()
    .then(answer => {
        console.log(answer);
    })