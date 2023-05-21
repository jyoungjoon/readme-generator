// TODO: Create a function that returns a license badge based on which license is passed in. If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "" && license !== "None")
    return `![license](https://img.shields.io/badge/license-${license.toUpperCase()}-green.svg)`;
  else return "";
}

// TODO: Create a function that returns the license link. If there is no license, return an empty string
function renderLinks(content) {
  if (content !== "" && content !== "None")
    return `- [${content}](#${content[0].toLowerCase() + content.slice(1)})`;
  else return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "" && license !== "None")
    return `## License
    This project is licensed under the ${license.toUpperCase()} license.`;
  else return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
${renderLicenseBadge(
  data.include.includes("License") ? `${data.license}` : ""
)} ${`![${data.repo}](https://img.shields.io/github/languages/count/${data.github}/${data.repo})`} ${`![${data.repo}](https://img.shields.io/github/languages/top/${data.github}/${data.repo})`}

---

  # ${data.title
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ")}

## Description

${
  data.include.includes("Screenshot")
    ? `![Screenshot](${data.screenshot})`
    : "No screenshot provided."
}

\`\`\` ${data.description} \`\`\`


---

## Table of Contents

${renderLinks(`${data.include.includes("Installation") ? "Installation" : ""}`)}
${renderLinks(`${data.include.includes("Usage") ? "Usage" : ""}`)}
${renderLinks(`${data.include.includes("Credits") ? "Credits" : ""}`)}
${renderLinks(`${data.include.includes("License") ? "License" : ""}`)}
${renderLinks(`${data.include.includes("Contributing") ? "Contributing" : ""}`)}
${renderLinks(`${data.include.includes("Tests") ? "Tests" : ""}`)}
${renderLinks(`${data.include.includes("Questions") ? "Questions" : ""}`)}

---

## Installation

${
  data.include.includes("Installation")
    ? `${data.installation}`
    : `No installation instructions provided.`
}

---

## Usage

${
  data.include.includes("Usage")
    ? `${data.usage}`
    : `No usage information provided.`
}

---

${renderLicenseSection(
  data.include.includes("License")
    ? `${data.license}`
    : "No license information provided."
)}

---

## Credits

${data.include.includes("Credits") ? `${data.credits}` : "No credits provided."}

---

## Contributing

${
  data.include.includes("Contributing")
    ? `${data.contributing}`
    : "No contributing information provided."
}

---

## Tests

${data.include.includes("Tests") ? `${data.tests}` : "No tests provided."}

---

## Questions

${data.include.includes("Questions") ? `${data.questions}` : ""}

${`Find me on Github: [${data.github}](https://github.com/${data.github})`}

${
  data.include.includes("Questions")
    ? `You can also contact me at ${data.email}.`
    : "No contact information provided."
}

---

`;
}

module.exports = generateMarkdown;
