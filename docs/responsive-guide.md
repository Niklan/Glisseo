# Responsive guide

To make your site responsive there is several tools, or simply mixins. By default theme uses [SUSY](http://susy.oddbird.net/) for grid system and several mixins to creates media-breakpoints. Together, this two tools is very powerful.

## Breakpoints

For creating your own breakpoints there is some variables and Bootstrap-alike mixins. So, if you familiar with Bootsrap mixins, you will just dive into it.

### Media breakpoint variables

You can modify every media variables in `THEMENAME/scss/utilities/variables/_media.scss`

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

You can find every breakpoint mixin in `THEMENAME/scss/utilities/mixins/_media-breakpoint.scss`. Here will be covered most used of them.

#### media-container()

**Use**: `@include media-container;`

This mixin adds gutter to container, set max-width for each breakpoint and center element on the page. 

##### Example

This will be center `#app` element inside `#app-wrapper` and sets breakpoints for each media query, which autmatically will adjust width for element based on screen size.

```scss
#app-wrapper {
    #app {
        @include media-container;
    }
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

@TODO


## Combine media breakpoints and Lost

@TODO

Together, this couple of mixins can help you do whatever you wants.

```html
<div class="news">
  <div class="left">
    Some left content
  </div>
  
  <div class="right">
    Some right content.
  </div>
</div>
```

```scss
.news {
  display: flex;
  
  .left {
    margin-right: gutter();
    
    @include media-breakpoint-between(md, lg) {
      flex: 0 1 span(6);
    }
    
    @include media-breakpoint-up(xl) {
      flex: 0 1 span(4);
    }
  }
  
  .left {
    @include media-breakpoint-between(md, lg) {
      flex: 0 1 span(6);
    }
    
    @include media-breakpoint-up(xl) {
      flex: 0 1 span(8);
    }
  }
}
```

* **0 - 767px** - left and right elements will fill full width.
* **768px - 1199px** - left and right will split width by 50 / 50 each.
* **1200px+** - left will get 4 columns of 12, and right 8.

For more information about SUSY, better [read documentation](http://susydocs.oddbird.net/en/latest/) or some [awesome guides](https://css-tricks.com/build-web-layouts-easily-susy/).
* 
