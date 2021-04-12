/**
 * Configuration file for some scripts.
 */
import path from 'path';
import destinationToSource from "./utils/destinationToSource";

/**
 * The project root directory.
 *
 * Different packages treat 'current dir' differently. Someone relative from
 * script and some from package.json. To mitigate that problem we set root
 * relative to this file.
 */
const PROJECT_ROOT = path.resolve(__dirname + '/..');

/**
 * Settings for custom theme.
 */
const paths = {
  projectRoot: PROJECT_ROOT,
  css: {
    source: [
      PROJECT_ROOT + '/assets/scss/03-generic/generic.scss',
      PROJECT_ROOT + '/assets/scss/04-elements/elements.scss',
      PROJECT_ROOT + '/assets/scss/05-objects/objects.scss',
      PROJECT_ROOT + '/assets/scss/06-components/components.scss',
      PROJECT_ROOT + '/assets/scss/07-utilities/utilities.scss',
    ],
    destination: PROJECT_ROOT + '/assets/css/',
  },
  js: {
    source: PROJECT_ROOT + '/assets/js/**/*.es6.js',
    destination: destinationToSource,
  }
}

export {
  paths,
}
