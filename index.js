// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 // return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created Readme ')
 );
}

function fetchData() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title of your application ',
    },
    {
      type: 'list',
      message: 'Choose a license for my application(Choose None if not in the list)',
      name: 'license',
      choices: ['MIT', 'ISC', 'APACHE 2.0', 'None'],
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description for your application',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation instruction for your application',
    },
    {
      type: 'input',
      name: 'usageInfo',
      message: 'Usage information of the application',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Contributors of the application',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Test Instructions of the application',
    },
    {
      type: 'input',
      name: 'githubUname',
      message: 'Github username ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address for communication',
    },
  ])
  .then((data) => {
    console.log(data);
    writeToFile('./result/README.md', generateMarkdown(data));

  });
}
// TODO: Create a function to initialize app
function init() {
  fetchData();
}

// Function call to initialize app
init();
