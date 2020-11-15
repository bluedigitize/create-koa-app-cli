#!/usr/bin/env node
const inquirer = require("inquirer");
const {apiQuestions, updateFiles} = require('./api-config.js');

const whichApplicationQuestion = [
  {
    type: 'list',
    name: 'applicationType',
    message: 'Which application type?',
    choices: ['API'],
  }
];
inquirer.prompt(whichApplicationQuestion).then( async applicationTypeAnswers => {
  if (applicationTypeAnswers.applicationType === 'API') {
    await inquirer.prompt(apiQuestions).then( async answers => {
      const template = `${__dirname}/templates/${applicationTypeAnswers.applicationType}`;
      await updateFiles(template, answers)
      console.log('\nSummary:');
      console.log(JSON.stringify(answers, null, '  '));
    });
  } else {
    console.log('\nNo Applications Found');
  }
});
