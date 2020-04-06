'use strict';

module.exports = {
  extends: 'recommended',
  rules: {
    'no-bare-strings': true,
    'no-implicit-this': true,
    'no-inline-styles': {
      allowDynamicStyles: true,
    },
    'self-closing-void-elements': false,
    'no-curly-component-invocation': {
      allow: [
        'animated-if',
        'default-to',
        'fa-icon',
        'format-number',
        'format-report-row',
        'html-safe',
        'light-table',
        'local-date-format',
        'local-time-format',
        'local-time-format-short',
        'moment-format',
        'vertical-collection',
        'did-insert',
        'did-update',
        'will-destroy',
      ],
    },
  },
};
