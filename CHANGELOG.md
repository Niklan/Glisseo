# Changelog

## Master (changes maded since last release)

### Base theme

No changes has been made.

### Starter theme

- Button component base style moved from `.button` class to placeholder `%button`. This is more flexible solution because of `@extend .class` can broke in some behaviors with ordering.
- In /assets/utilities/_all.scss function and variables is swapped. Function is now has higher priority. It's allow to use functions inside variables.
- Colors like -site-color-1 and so forth is replaced by single variable -colors which is array.
- Added new function theme-color(). This functions return color by his key from -colors array. Bootstrap like.
- Added new function theme-color-level(). This function returns color mixing by his key and level. 0 - is the same color, negative values will desature color, positive is opposite. Bootstrap like.
- All base colors variables was replaced by functions.

## 1.0-alpha1

First initial release with version. For now, I am satisfied by theme at most. Some things can change, but from now on, I'll be track them in that file. I still no recommend to use it without understand the consequences. 

Since release of first alpha, now we can use composer to lock theme version, and I recommend to do that. Because theme is a little bit tricky to maintain. Just single changed class in base theme can create a lot of pain after update. So be careful.

- Added CHANGELOG.md to track all changes.
- Changed composer.json for theme to be `drupal-theme` instead of being `drupal-custom-theme`.
