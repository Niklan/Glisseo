# FontAwesome integration

If you want to use FontAwesome icons over Material Design Icons, follow several easy steps.

1. Install them using npm: `yarn add font-awesome` or `npm install font-awesome`.
2. Navigate to `THEME/assets/scss/utilities/mixins` and create file `_font-awesome.scss`, or whatever you want to name it.
3. Open that file and copy-paste this:

    ```scss
    /**
     * FontAwesome
     * @see http://fontawesome.io
     */
    $fa-font-path: "../../node_modules/font-awesome/fonts" !default;
    @import "../../../../node_modules/font-awesome/scss/font-awesome";
    
    @mixin fa-icon($name, $position: before, $margin-size: 0.4em) {
      &:#{$position} {
        content: $name;
        font-family: FontAwesome;
        font-weight: normal;
        font-style: normal;
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

    You can edit mixin for your needs.

4. Edit `_all.scss` in the same folder, add here `@import "font-awesome";`
5. You're ready!

**Tip!** I highly recommend to disable MDI font to reduce response size. Use them both only if you really need this. To disable MDI icons, just remove or comment line `@import "material-design-icons";` in `_all.scss`.