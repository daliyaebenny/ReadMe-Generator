// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    // fs.writeFile(fileName, data, (err) =>
    // err ? console.log(err) : console.log('Successfully created Readme ')
 // );
}

function fetchData() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your Project?',
    },
    {
      type: 'list',
      message: 'License',
      name: 'license',
      choices: ['MIT', 'ISC', 'APACHE 2.0', 'None'],
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your Project?',
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
