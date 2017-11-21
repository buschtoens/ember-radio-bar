/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-radio-bar',

  options: {
    cssModules: {
      plugins: {
        before: [require('postcss-nested-ancestors'), require('postcss-nested')]
      }
    }
  }
};
