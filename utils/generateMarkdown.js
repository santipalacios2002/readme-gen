// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = license != '' ? `https://img.shields.io/badge/license-${license}-brightgreen` : '';
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = license != '' ? `(##License)` : '';
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = license != '' ? `## License\nThis project is licensed under the ${license} license.` : '';
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
      //deconstructing the data
      const { gitUsername, email, projectName, description, license, installCmd, testCmd, repoUsage, repoContrib } = data
      //generating lincese via functions
      const licensePassed = renderLicenseBadge(license)  
      const licenseLink = renderLicenseLink(license);
      const licenseSection = renderLicenseSection(license);
      console.log('licensePassed:', licensePassed)  
  
      let readmeContent = `# ${projectName}
  
![${license}](${licensePassed})

## Description

${description}

## Table of Contents

* [Installation](##Installation)
* [Usage](##Usage)
* [License]${licenseLink}
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

${licenseSection}

## Contributing

${repoContrib}

## Test

\`\`\`
${testCmd}
\`\`\`
## Questions

If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${gitUsername}](https://github.com/${gitUsername})
`
  return readmeContent;
}

module.exports = generateMarkdown;

