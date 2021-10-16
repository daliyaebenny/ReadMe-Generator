// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

//function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `[License](#license)`;
  }
  return '';
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License
    This project is licensed under the ${license} license.`;
  }
  return '';
}

//function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge(data.license)} 

  ## Description 
  ${data.description}

  ## Table of contents 

   * [Installation](#installation)    
   * ${renderLicenseLink(data.license)}    
   * [Usage](#usage)    
   * [Contributors](#contributors)    
   * [Test](#test)    
   * [Contact](#contact)

  ## Installation
  ${data.installation}
  ${renderLicenseSection(data.license)}
  ## Usage
  ${data.usageInfo}    
  ## Contributors
  ${data.contribution}    
  ## Test
  ${data.testInstructions}
  ## Contact
  *Find me on GitHub*: [${data.githubUname}](https://github.com/${data.githubUname})    
  *Email me with any questions*: ${data.email}
  `
  
  ;
}

module.exports = generateMarkdown;
