# Changelog

## [Unreleased][unreleased]

### Base theme

- Added an empty libraries and attached them in templates which has styles in STARTER theme. Starter theme doesn't has these templates, this means to attach custom libraries for each of them it should be copied and updated, but his is too much work. For that, an empty libraries was attached into them and starter libraries just extends them with their own.
- [#3274961](https://www.drupal.org/node/3274961) Improved README.

### Starter theme

- Added `libraries-extends` into `*.info.yml` file. This replaces `STARTER_preprocess()` implementation.
- `STARTER_preprocess()` implementation was removed.
- Remove unnecessary PostCSS dependencies: `postcss-nesting` (used only in `breadcrumb.pcss` and `pager.pcss`), `postcss-import` (not used at all).

## [2.0-alpha1]

This is a small release that is mostly equals to 8.x-1.0-alpha21.

### Base theme

- Updated README file.

## Starter theme

- Removed STARTER_SCSS. I'm no longer use SCSS for a more than year, I don't want to support 'dead' starter. There is no any reason in it, since the PostCSS does the same and closer to a vanialla CSS. If you still need it, it downs to rename *.pcss to *.scss and replace PostCSS watcher with SASS compiler.
- STARTER_PCSS is now STARTER.

[unreleased]: https://github.com/Niklan/Glisseo/compare/2.0.x...HEAD
[2.0-alpha1]: https://github.com/Niklan/Glisseo/compare/8.x-1.0-alpha21...2.0.x
