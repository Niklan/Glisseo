/**
 * Provides callback for saving destination file into it's source directory.
 *
 * This scripts exists to re-use for Gulp tasks that requires destination files
 * to be placed into their source directory.
 */

export default function (file) {
  return file.base;
}
