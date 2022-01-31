const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./tamplate');

const promptUser = readmeData => {
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
            choices: ['MIT', 'GPL', 'IBM', 'ISC', 'Apache', ]
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
            name: "contribute",
            message: "What dose the user need to know about conterbuting to the repo?"
        },
        {
            type: 'confirm',
            name: "confirmImage",
            message: "Would you like add any screen shot of deployed app?",
            default: true
        },
        {
            type: 'input',
            name: 'image',
            message: "Enter screen shot URL:",
            when: ({ confirmImage }) => confirmImage
        }

    ]);
};

promptUser()
    .then(answer => {
        const pageReadme = generateReadme(answer);
        fs.writeFile('./README.md', pageReadme, err => {
            if (err) throw new Error(err);

            console.log('File created! Check out README.md in this directory to see it!')
        });
    })