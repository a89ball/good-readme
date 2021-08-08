const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt( 
   [
        {
            type: "input",
            message: "Enter name of project.",
            name:"title",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to proceed'}},
        },
        {
            type: "input",
            message: "What is the description of the project?",
            name:"description",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to proceed'}},
        },
        {
            type: "input",
            message: "Enter instructions of this project",
            name:"instructions",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to proceed'}},
        },
        {
            type: "input",
            message: "Installation",
            name:"installation",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to proceed'}},
        },
        {
            type: "input",
            message: "Usage Information?",
            name:"usage",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to proceed'}},
        },
        {
            type: "input",
            message: "What are the contribution Guidlines?",
            name:"contribution",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to proceed'}},
        },
        {
            type: "input",
            message: "What are the testing instructions for this project",
            name:"test",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to proceed'}},
        },
        {
            type: "list",
            message: "What license did you use?",
            name:"license",
            choices: ['MIT', 'GPL', 'Apache', 'GNU', 'none'],
            validate: (value)=>{ if(value){return true} else {return 'I need a value to proceed'}},
        },
        {
            type: "input",
            message: "What is your GitHub user name?",
            name:"github",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to proceed'}},
        },
        {
            type: "input",
            message: "What is your email address?",
            name:"email",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to proceed'}},
        }
        

       
    ]
    ).then(({
        title,
        description,
        installation,
        instructions,
        usage,
        contribution,
        test,
        license,
        github,
        email
  
  })=> {
    const template = `# ${title}
    # Table of Contents
   
    - [Description](#description)
    - [Installation](#installation)
    - [Intructions](#instructions)
    - [Usage](#usage)
    - [constribution](#contribution)
    - [Test](#test)
    - [License](#license)
  ## Description:
  ![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg "Liscense Badge")
    ${description}
  ## Installation:
  ${installation}
  ## Intructions:
  ${instructions}
  ## Usage:
  ${usage}
  ## Contribution:
  ${contribution}
  ## Test
  ${test}
  ## License:
  for more information about the license, click on the link below.
  - [License](https://opensource.org/licenses/${license})
  ## Questions:
    For Questions about the ReadMe Generator you can visit my GitHub page at the following link:
    - [GitHub profile](https://github.com/${github})
    For additional questions please reach out to my email at: ${email}.`;
    createNewFile(title, template);
});

//create the createNewFile function 
function createNewFile(fileName,data){
    //fs
    fs.writeFile('./README.md', data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your README has been generated');
    })
}

