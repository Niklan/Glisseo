# Responsive guide

To make your site responsive there is several tools and mixins. By default theme ships with [Lost Grid](http://lostgrid.org/) integration.

## Breakpoints

For creating your own breakpoints there is some variables and Bootstrap-alike mixins. So, if you familiar with Bootsrap mixins, you will just dive into it.

### Media breakpoint variables

You can modify every media variables in `THEMENAME/scss/settings/_variables.scss`

There is several variables which defines media breakpoints, gutters and width for container. Default breakpoints is:

```scss
$media-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
) !default;
```

### Media breakpoints mixins

You can find every breakpoint mixin in `THEMENAME/scss/tools/mixins/_media-breakpoint.scss`. Here will be covered most used of them.

#### make-container()

**Use**: `@include make-container;`

This mixin adds gutter to container and centering the container (by default with 100% it will fill all available space).

##### Example

```scss
.main-layout {
  @include make-container;
}
```

#### make-container-max-widths()

**Use**: `@include make-container-max-widths;`

This mixin adds max width for container according to media breakpoints settings.

##### Example

```scss
.main-layout {
  @include make-container;
  @include make-container-max-widths;
}
```

#### media-breakpoint-only()

**Use**: `@include media-breakpoint-only(md) { @content }`

This mixin let you to change styles for element, in which this mixin was called for specific media breakpoint. As keyword for breakpoint, it's uses array from variable `$media-breakpoints`.

##### Example

```scss
body {
    background: red;

    @include media-breakpoint-only(sm) {
        background: blue;
    }

    @include media-breakpoint-only(md) {
        background: green;
    }
}
```

#### media-breakpoint-between()

**Use**: `@include media-breakpoint-between(sm, lg) { @content }`

This mixins can create breakpoint between to different breakpoints. In simple words, this is range of breakpoints in which this style will apply.

##### Example

```scss
body {
    background: red;

    @include media-breakpoint-between(sm, lg) {
        background: blue;
    }

    @include media-breakpoint-only(xs) {
        background: green;
    }
}
```

#### media-breakpoint-up() and media-breakpoint-down()

**Use**: `@include media-breakpoint-up(lg) { @content }`

Those two mixins do the same thing, one to specific breakpoint and upper, other for lower. This means, they apply style starting from breakpoint and with no limit upper or lower.

##### Example

```scss
body {
    @include media-breakpoint-down(md) {
        background: red;
    }

    @include media-breakpoint-up(lg) {
        background: blue;
    }
}
```

## Lost

[Official site and documentation](http://lostgrid.org)
