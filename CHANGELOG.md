# Changelog

## Master (changes made since last release)

### Base theme

No changes has been made.

### Starter theme

- Added new variable `$gap-size` with default value of `8px`.
- Added new function `gap()` which will be used by default in theme for "rule of 8px". You can read about this technique [here](https://medium.com/wayfair-design/more-padding-please-b95e19422acc).
- `/assets/scss/base/typography` was improved and reworked. Added new variables, edited old, some styles were removed to follow rules of base folder.

## 1.0-alpha2

### Base theme

No changes has been made.

### Starter theme

- Button component base style moved from `.button` class to placeholder `%button`. This is more flexible solution because of `@extend .class` can broke in some behaviors with ordering.
- In `/assets/utilities/_all.scss` function and variables is swapped. Function is now has higher priority. It's allow to use functions inside variables.
- Colors like `$ui-site-color-1` and so forth is replaced by single variable -colors which is array.
- Added new function `theme-color()`. This functions return color by his key from -colors array. Bootstrap alike.
- Added new function `theme-color-level()`. This function returns color mixing by his key and level. 0 - is the same color, negative values will desature color, positive is opposite. Bootstrap alike.
- All base colors variables was replaced by functions.
- Added new color map `$grays` with gray colors. Bootstrap alike.
- Added new function `gray()`. Returns gray color by his key. Bootstrap alike.
- All old `$gray-*` variables were replaced by `gray()` function.
- Added `$colors` variable for all others colors. Bootstrap alike.
- Added new function `color()`. Returns color by his key. Bootstrap alike.
- Some default colors were replaced by new `color()` function.
- `color-contrast()` function is renamed to `color-yiq()`.
- Added two new variables `$yiq-text-dark` and `$yiq-text-light`. They used in `color-yiq()` function as default values.
- Pointless readme files in assets folder, which created for keep folders in repo were removed and replaced by hidden files `.gitkeep`.
- `base/_base.scss` is moved to personal folder `base/global`.
- Added variables to control focus outline and set default value. It's [bad practice](http://www.outlinenone.com) to ignore them, so they are back now!
- `base/_typography.scss` is moved to personal folder `base/typography`.
- Added !default to all variables. They now overridable in external files.
- Cleaned utilities directory.
- Variables is now has several files. By default `_global.scss` to all global default variables and `_custom.scss` with your overridden variables and new ones. You still can edit variables directly, because it's all in your custom theme and can't brake anything else. All depends on your preferences.

## 1.0-alpha1

First initial release with version. For now, I am satisfied by theme at most. Some things can change, but from now on, I'll be track them in that file. I still no recommend to use it without understand the consequences. 

Since release of first alpha, now we can use composer to lock theme version, and I recommend to do that. Because theme is a little bit tricky to maintain. Just single changed class in base theme can create a lot of pain after update. So be careful.

- Added CHANGELOG.md to track all changes.
- Changed composer.json for theme to be `drupal-theme` instead of being `drupal-custom-theme`.
