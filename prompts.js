// const path = require('path');
// const resolve = file => path.resolve(__dirname, file);

const presets = require('./util/presets.js');

function isCustom(answers) {
  return answers.preset === 'configure';
}

module.exports = [
  {
    name: 'preset',
    message: 'Choose a preset:',
    type: 'list',
    choices: [
      ...presets,
      { name: 'Configure (advanced)', value: 'configure' }
    ],
    default: 'default'
  },
  {
    name: 'useStorybook',
    type: 'confirm',
    message: 'Use Storybook?',
    default: true,
    when: isCustom
  },
  {
    name: 'useVuetify',
    type: 'confirm',
    message: 'Use Vuetify?',
    default: false,
    when: isCustom
  }
];
