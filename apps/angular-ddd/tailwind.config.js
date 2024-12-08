const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const coreConfig = require('../../libs/ui-core/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...coreConfig,
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
