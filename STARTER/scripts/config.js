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
      PROJECT_ROOT + '/assets/css/**/*.pcss'
    ],
    destination: destinationToSource,
  },
  js: {
    source: [
      PROJECT_ROOT + '/assets/js/**/*.es6.js'
    ],
    destination: destinationToSource,
  }
}

export {
  paths,
}
