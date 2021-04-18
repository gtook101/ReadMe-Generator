const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "How did you install the project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How will the project be used?",
    },
    {
      type: "input",
      name: "license",
      message: "Which license will you use?",      
    },
    {
      type: "input",
      name: "contributors",
      message: "Who were your contributors?",
    },
    {
      type: "input",
      name: "test",
      message: "What type of test will be performed?",
    },
    {
      type: "input",
      name: "questions",
      message: "What type of questions do you have?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github account?",
    },
    {
      type: "input",
      name: "linkedin",
      message: "What is your linkedin account?",
    },
  ]);
};

const generateHTML = (answers) => `# ${answers.title}
### Description
${answers.description}.
## Table of Content
  -[Title](#title) \n
  -[Installation](#installation) \n
  -[Usage](#usage) \n
  -[License](#license) \n
  -[Contributors](#contributors) \n
  -[Test](#test) \n
  -[Questions](#questions) \n
### Installation: ${answers.installation}.
### Usage: ${answers.usage}.
### License: ${answers.license}.
### Contributors: ${answers.contributors}.
### Test: ${answers.test}.
## Questions: ${answers.questions}.
* My GitHub username is ${answers.github}
* My Linkedin Account is ${answers.linkedin}`;


// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync("test1.md", generateHTML(answers)))
    .then(() => console.log("Successfully wrote to test1.md"))
    .catch((err) => console.error(err));
};

init();
