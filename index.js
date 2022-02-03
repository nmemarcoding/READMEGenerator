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
            type: 'input',
            name: 'credits',
            message: 'List any contributors or third-party assets you wish to mention.',
        },
        {
            type: 'confirm',
            name: "confirmVideo",
            message: "Would you like add any viedo deployed app?",
            default: true
        },
        {
            type: 'input',
            name: 'video',
            message: "Enter video URL:",
            when: ({ confirmVideo }) => confirmVideo
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
