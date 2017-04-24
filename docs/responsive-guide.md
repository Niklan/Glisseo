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

## SUSY

For grid systems this theme provided SUSY mixins. They are very powerful and flexible. They keep your HTML clean of container and grid classes, and let you to define all your grid inside styles.

In most cases it's all about using three mixins: susy-clearfix, span and gallery. But it can do much-much more.

By default theme provide basic settings for SUSY for 12 column grid system. You can edit those settings in *styles/scss/layout/_layouts.scss*.

### susy-clearfix

This mixin is like `.clearfix` class, which you apply to container element, inside which will be grid columns.

```scss
.container {
  @include susy-clearfix;
}
```

### span()

This is your weapon, this mixin is so powerful, so below covered just simple use of it. With him you creates columns, pass grid size as argument. As mentiout above, the default layout is 12 grid system, so you can pass any number from 1 to 12 included.

```scss
.container {
  @include susy-clearfix;
  
  .left {
    @include span(4);
  }
  
  .right {
    @include span(8 last);
  }
}
```

Example above is equivalent for markup like this.

```html
<div class="container">
  <div class="row">
    <div class="col-4">
      content
    </div>
    
    <div class="col-8">
      content
    </div>
  </div>
</div>
```

But you don't need this markup at all, you can use existing classes of current site markup and define all of this in SCSS.

## Combine media breakpoints and susy

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
  @include susy-clearfix;
  
  .left {
    @include media-breakpoint-between(md, lg) {
      @include span(6);
    }
    
    @include media-breakpoint-up(xl) {
      @include span(4);
    }
  }
  
  .left {
    @include media-breakpoint-between(md, lg) {
      @include span(6 last);
    }
    
    @include media-breakpoint-up(xl) {
      @include span(8 lasts);
    }
  }
}
```

* **0 - 767px** - left and right elements will fill full width.
* **768px - 1199px** - left and right will split width by 50 / 50 each.
* **1200px+** - left will get 4 columns of 12, and right 8.

For more information about SUSY, better [read documentation](http://susydocs.oddbird.net/en/latest/) or some [awesome guides](https://css-tricks.com/build-web-layouts-easily-susy/).
* 
