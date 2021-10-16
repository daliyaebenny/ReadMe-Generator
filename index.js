// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const path = require('path');


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created Readme ')
 );
}
//function to fetch data using inquirer
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
      choices: ['MIT', 'ISC', 'gpl', 'None'],
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description for the application',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation instruction for the application',
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
    // To resolve the same file name issue(as this project has its own readme) created a folder resut for the generated readme.
    writeToFile('./result/README.md', generateMarkdown(data));

  });
}
//function to initialize app
function init() {
  fetchData();
}

// Function call to initialize app
init();
