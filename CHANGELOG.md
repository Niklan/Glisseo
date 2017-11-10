# Changelog

## Master (changes maded since last release)

### Base theme

No changes has been made.

### Starter theme

- Button component base style moved from `.button` class to placeholder `%button`. This is more flexible solution because of `@extend .class` can broke in some behaviors with ordering.

## 1.0-alpha1

First initial release with version. For now, I am satisfied by theme at most. Some things can change, but from now on, I'll be track them in that file. I still no recommend to use it without understand the consequences. 

Since release of first alpha, now we can use composer to lock theme version, and I recommend to do that. Because theme is a little bit tricky to maintain. Just single changed class in base theme can create a lot of pain after update. So be careful.

- Added CHANGELOG.md to track all changes.
- Changed composer.json for theme to be `drupal-theme` instead of being `drupal-custom-theme`.
