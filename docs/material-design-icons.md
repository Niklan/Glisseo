# Material Design icons integration

[MDI](https://materialdesignicons.com/) is an awesome set of icons as alternative to FontAwesome icons. 2000+ icons absolutely free and easy to use.

You can integrate them in theme in several easy steps:

1. Install them using npm: `npm install mdi`
2. Navigate to `THEME/assets/scss/utilities/mixins` and create file `_material-design-icons.scss`, or whatether you want to name it.
3. Open that file and copy-paste this:

    ```scss
    /**
     * Material Design Icons
     * @see https://materialdesignicons.com
     */
    $mdi-font-path: "../../node_modules/mdi/fonts";
    @import "../../../../node_modules/mdi/scss/materialdesignicons";

    @mixin mdi-icon($name, $position: before) {
        &:#{$position} {
            content: mdi($name);
            font-family: $mdi-font-name;
            font-weight: normal;
            font-style: normal;
            display: inline-block;
            text-decoration: inherit;
            @if $position == before {
                margin-right: 0.4em;
            } @else {
                margin-left: 0.4em;
            }
        }
    }
    ```

    You can edit mixin for your needs.

4. Edit `_all.scss` in the same folder, add here `@import "material-design-icons";`
5. You're ready!

**Tip!** I highly recommend to disable font-awesome font to reduce repsonse size. Use them both only if you really need this. To disable FA icons, just remove or comment line `@import "font-awesome";` in `_all.scss`.