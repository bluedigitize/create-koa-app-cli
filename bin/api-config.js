const replace = require('replace-in-file');
const ncp = require('ncp').ncp;

const apiQuestions = [
  {
    type: 'input',
    name: 'installLocation',
    message: `Where do you want to install?`,
    default: '',
  },
  {
    type: 'input',
    name: 'serviceName',
    message: 'Name of service?',
    default: 'projection-name-api',
    validate: (value) => {
      const valid = value !== null;
      return valid || 'Please enter a service name';
    },
  },
  {
    type: 'input',
    name: 'serviceDesc',
    message: 'Description of service?',
    default: 'This example service serves the purpose of being the example api',
    validate: (value) => {
      const valid = value !== null;
      return valid || 'Please enter a description';
    },
  },
  {
    type: 'input',
    name: 'serviceAuthor',
    message: 'Author of the service?',
    default: 'bluedigitize',
    validate: (value) => {
      const valid = value !== null;
      return valid || 'Please enter an author';
    },
  },
  {
    type: 'input',
    name: 'nodeVersion',
    message: 'Version of Node?',
    default: '14.15.0',
    validate: (value) => {
      const valid = value !== null;
      return valid || 'Please enter a Node Version';
    },
  },
  {
    type: 'input',
    name: 'exposedPort',
    message: 'What Port do you wish to expose?',
    default: '8080',
    validate: (value) => {
      const valid = value !== null;
      return valid || 'Please enter a Port';
    },
  },
];

const updateFiles = async (template, answers) => {
  const destination = `${answers.installLocation === '' ? process.cwd() : process.cwd() + '/' + answers.installLocation}/${answers.serviceName}`;
  const files = [
    `${destination}/**/*`
  ];
  const options = [
    {
      files: files,
      from: /Service_Name/g,
      to: answers.serviceName,

    },
    {
      files: files,
      from: /Service_Desc/g,
      to: answers.serviceDesc,

    },
    {
      files: files,
      from: /Service_Author/g,
      to: answers.serviceAuthor,

    },
    {
      files: files,
      from: /Node_Version/g,
      to: answers.nodeVersion,

    },
    {
      files: files,
      from: /Exposed_Port/g,
      to: answers.exposedPort,
    },
  ];
  try {
    await ncp(template, destination, async () => {
      for(const option of options){
        await replace(option).catch(e=>{console.log(e)});
      }
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {apiQuestions, updateFiles};
