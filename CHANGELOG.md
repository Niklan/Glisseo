# Changelog

## Master (changes made since last release)

### Base theme

- Issue [#3](https://github.com/Niklan/Glisseo/issues/3) "Unknown "dd" function"

### Starter theme

- Lost Grid default gutter is now multiple by 8px as `gap()`. A bit changed breakpoints ad their gutter to be multiple by 8px.
- Fixed active tab underline.

## 1.0-alpha8

### Base theme

- Updated README.md.
- Added workaround for field view mode if it missing.
- Added `{% spaceless %}` wrapper for breadcrumbs.
- Added blocks content and title for **taxonomy-term.html.twig**.
- Removed id's for taxonomy term and paragraphs.
- Added **media.html.twig** template.
- Added some blocks for templates for easier extending.
- Refactor block templates to use Twig `extends`.

### Starter theme

- Import for math.scss in variables.scss to support `gap()` function.
- Improved stylelintrc.
- Improved styles for breadcrumbs.scss.
- Improved tabs flexbox.
- Added mixin `button-size()`;
- Added `[bem_block]--label-inline` class for field.

## 1.0-alpha7

Hotfix version. Fix and improvements for alpha6 that can leads to problems.

### Base theme

- **Fix** bug in paragraph.html.twig.
- **Improved** block_id generation. Much more reliable in cases when block rendered programmatically.
- **Improved** block--system-branding-block.

### Starter theme

- **Fix** path to MDI icons font.
- Removed qutoes for keys of gray colors.

## 1.0-alpha6

**This release incompatible with previous versions.**

This release is all about SCSS and styles quality and management. Most significant change is [ITCSS architecture](https://github.com/ahmadajmi/awesome-itcss) for SCSS folder.

### Base theme

- Base theme is has hidden to true now.
- All regions were removed from base theme. They are not needed here.
- **Experimental**. Reworked all templates to BEM class naming.
- page.html.twig moved to STARTER templates.
- Added user entity theme suggestions user--{VIEW_MODE}.html.twig.
- Added user.html.twig.
- Added block--system-branding-block.html.twig.
- Added other templates which was missing and loaded from stable base theme.
- Added new field theme suggestions. field--{ENTITY}--{BUNDLE}--{FIELD_NAME}--{ENTITY_ID}.html.twig, field--{ENTITY}--{BUNDLE}--{FIELD_NAME}--{VIEW_MODE}.html.twig.

### Starter theme

- Added [stylelint](https://stylelint.io/) configuration.
- Refactored SCSS folder to ITCSS structure.
- Refactored all SCSS style comments to be excluded from compilation.
- Improved total styles size, from ~7k lines on clean starter theme and ~150kb size, to ~1k lines and ~20kb size.
- Improved performance of compilation due to more smart imports. ~600ms -> ~120ms on empty starter.
- Imports are back and sass-glob is not used anymore. This is cost of ITCSS architecture which is awesome!
- Single styles.css is now split to 5 separated files according to ITCSS weight. Also there is now 4 libraries for styles which included in their own groups.
- Material Design Icons package changed from mdi to @mdi/font to support new packages and icons.
- Added commented example in STARTER libraries how to import Google Fonts correctly.

## 1.0-alpha5

### Base theme

- Added new theme hook suggestion for comment `comment--{BUNDLE}--{VIEW_MODE}.html.twig`.
- Added `<a id="comments"></a>` in field--comment.html.twig.
- Added classes for comment template.
- field--comment.html.twig label is now translatable.
- Removed includes/layouts.inc. There was preprocess for old reset layout. After remove it, file was not needed.

### Starter theme

- `@lost cycle` changed from `none` to `auto`.
- `global-styling` library is renamed to `global-assets`.
- Added `$blockquote-bg` variable.
- Removed default white background from pager.
- Added `$mark-color` variable.
- Set `font-size: $font-size-base;` for `code` element. This will override normalize.
- Added `color: $input-color;` for `textarea` element.
- Removed `$susy` variable. Which was forgotten.

## 1.0-alpha4

### Base theme

- **Possible incompatible change.** Removed ds-reset layout.
- Added default layout templates with corrected markup.
- **Incompatible change**. Refactoring all templates and markup to satisfy [Drupal 8 CSS architecture](https://www.drupal.org/docs/develop/standards/css/css-architecture-for-drupal-8) (OOCSS).
- Fixed previously added suggestions for paragraphs:
  - paragraph--{ID}--{VIEW_MODE}.html.twig
  - paragraph--{ID}.html.twig
- Added suggestion to block content type:
  - block--{BLOCK_TYPE}.html.twig
- Slightly updated logo colors. For base theme and starter the svg logo is now contains objects, not the text because of font face that can be missed on systems.
- Added new templates from stable theme.
- **Possible incompatible change.** Added default **commerce-product.html.twig** template.
- Added `data-hook-suggestion` for input fields support.

### Starter theme

- Added new variable `$input-color` and added to inputs.
- Class naming according to OOCSS.
- All base styles was reworked to respect refactoring to OOCSS.
- Installed `gulp-sass-glob` and updated gulpfile to use it.
- SCSS folder is restructured for `gulp-sass-glob`. Now we have only one import file `styles.scss`, there are no more `_all.scss` inside any folder! You can now just create new `_file.scss` and it will be compiled! The splitting for components and base style to `_styles.scss`, `_variables.scss` and `_mixins.scss` is now removed and they are in a single file. This is done because gulp-sass-glob can't respect order and it will crash. The auto-include is much preferable than this splitting.
- Breadcrumbs is now responsive by default.
- Added PostCSS.
- `gulp-autoprefixier` replaced by `autoprefixier` from PostCSS.
- SUSY is removed, to replace it added [Lost Grid](http://lostgrid.org) for PostCSS.
- Added templates for local actions.
- Many of elements reworked and restyled.
- Added SCSS function `color-level()` with same functionality as `theme-color-level()`.

## 1.0-alpha3

### Base theme

No changes has been made.

### Starter theme

- Added new variable `$gap-size` with default value of `8px`.
- Added new function `gap()` which will be used by default in theme for "rule of 8px". You can read about this technique [here](https://medium.com/wayfair-design/more-padding-please-b95e19422acc).
- Added information about [SCSS architecture](docs/scss-architecture.md) in this theme.
- Removed default README.md files from scss folders.
- `/assets/scss/base/typography` was improved and reworked. Added new variables, edited old, some styles were removed to follow rules of base folder.
- Added new variable `$gray-50` and color for it.
- All gray colors was replaced with material design gray palette.
- Improve `media-container()` mixin. Now it supports argument `$with-gutters: true` which allows to disable gutters and include only width of container.
- Material Design Icons is now default icon font in theme. FontAwesome dependency were removed and added documentation how to take them back.
- All dependency libraries was updated.
- Added font-family parameter on all `input` element form default variable. This will override normalize font reset.

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
