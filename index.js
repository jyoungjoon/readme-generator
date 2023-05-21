// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`)
const generateMarkdown = require(`./utils/generateMarkdown.js`);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: `checkbox`,
    name: `include`,
    message: `What would you like to include in your README?`,
    choices: [`Screenshot`, `Installation`, `Usage`, `License`, `Credits`, `Contributing`, `Tests`, `Questions`],
  },
  {
    type: `input`,
    name: `title`,
    message: `*What is the title of your project? (This field is required!)`,
  },
  {
    type: `input`,
    name: `description`,
    message: `*Please provide a description of your project. (This field is required!) `,
  },
  {
    type: `input`,
    name: `screenshot`,
    message: `Please provide a relative path to a screenshot of your project. Example: ./assets/images/screenshot.jpg`,
  },
  {
    type: `input`,
    name: `installation`,
    message: `Please provide installation instructions for your project.`,
  },
  {
    type: `input`,
    name: `usage`,
    message: `Please provide usage information for your project.`,
  },
  {
    type: `list`,
    name: `license`,
    message: `Please choose a license for your project.`,
    choices: [`MIT`, `Apache`, `GPL`, `ISC`, `BSD`, `Other`, `None`],
  },
  {
    type: `input`,
    name: `credits`,
    message: `Please provide credits for your project. \n (Please separate each credit with a comma and a space.)`,
  },
  {
    type: `input`,
    name: `contributing`,
    message: `Please provide contributing instructions for your project.`,
  },
  {
    type: `input`,
    name: `tests`,
    message: `Please provide test instructions for your project.`,
  },
  {
    type: `input`,
    name: `questions`,
    message: `Please provide instructions for how to reach you with questions about your project.`,
  },
  {
    type: `input`,
    name: `github`,
    message: `*Please provide your Github username. \n (This field is required!)`,
  },
  {
    type: `input`,
    name: `repo`,
    message: `*Please provide the name of your Github repository. \n (It must match the name of the repository exactly!)`,
  },
  {
    type: `input`,
    name: `email`,
    message: `*Please provide your email address. \n (This will be used for questions about your project.)`,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(`README file is created!`)
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        const readme = generateMarkdown(response);
        writeToFile(`README.md`, readme);
    });
};

// Function call to initialize app
init();
