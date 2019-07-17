# Material Design Icons

Material Design Icons (MDI) is a font with more than 3800+ icons designed by Material Deisgn guidelines.

**Install dependency**

```bash
npm install @mdi/font
```

or

```bash
yarn add @mdi/font
```

**Create custom mixin**

Create file `assets/scss/tools/mixins/_material-design-icon.scss`.

Add this content in it, modify for your needs:

```scss
// =============================================================================
// Material Design Icons
// @see https://materialdesignicons.com
// =============================================================================

$mdi-font-path: "../../node_modules/@mdi/font/fonts";

// If you want to full icon classes, animations and other stuff. Import single
// file with all other imports. This will affect compiling performance and
// increase size of styles by ~100kb and SCSS compilation time ~ +500ms on Ryzen
// 1700 on clean starter theme. When your theme will grow, things get worse. So
// be careful with that.
//
// The best way, is to create your own array with icons used in classes, and
// generate selectors only for them, nothing else. See _icons.scss from path
// below to copy-paste example.
//
// If you uncomment this line, remove all imports below.
// @import "../../../../node_modules/@mdi/font/scss/materialdesignicons";

// Import only necessary stuff.
@import "../../../../node_modules/@mdi/font/scss/variables";
@import "../../../../node_modules/@mdi/font/scss/functions";
@import "../../../../node_modules/@mdi/font/scss/path";
// Adds support for base css class .mdi.
// @import "../../../../node_modules/@mdi/font/scss/core";
// Adds icon classes support: .mdi-name.
// @import "../../../../node_modules/@mdi/font/scss/icons";
// Adds icon sizes, dark-light modifiers and flip classes.
// @import "../../../../node_modules/@mdi/font/scss/extras";
// Adds animations for icons.
// @import "../../../../node_modules/@mdi/font/scss/animated";

@mixin mdi($name, $position: before, $margin-size: 0.4em) {
  &:#{$position} {
    content: mdi($name);
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    font-family: $mdi-font-name;
    display: inline-block;
    text-decoration: inherit;
    @if $position == before {
      margin-right: $margin-size;
    } @else {
      margin-left: $margin-size;
    }
  }
}
```

Take note that by default file is loading only minimum required dependencies for performance purposes.

Add include for this file into `assets/scss/tools/_core.scss`.

```scss
@include "mixins/material-design-icon.scss"
```

## Links

- [Material Design Icon](https://materialdesignicons.com/). Website.