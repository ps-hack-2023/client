const standard = require('@neutrinojs/standardjs');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
const typescript = require('neutrinojs-typescript')

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    typescript(),
    standard(),
    react({
      html: {
        title: 'proj'
      }
    }),
    jest(),
  ],
};
