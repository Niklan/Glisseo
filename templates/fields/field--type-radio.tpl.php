<?php
/**
 * New checkbox styles.
 */
?>
<input
  id="<?php print render($element['#id']); ?>"
  name="<?php print render($element['#name']); ?>"
  value="<?php print render($element['#default_value']); ?>"
  class="form-checkbox glisseo-radio"
  type="radio"
  <?php isset($element['#checked']) && $element['#checked'] ? print " checked" : ''; ?>
  <?php isset($element['#disabled']) && $element['#disabled'] ? print " disabled" : ''; ?>>
<label class="glisseo-radio-wrapper" for="<?php print render($element['#id']); ?>">
  <div class="glisseo-radio-mark"></div>
</label>
