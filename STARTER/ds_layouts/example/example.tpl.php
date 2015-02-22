<?php
/**
 * @file
 * Question full layout.
 */
?>
<<?php print $layout_wrapper; ?> <?php print $layout_attributes; ?> class="<?php print $clean_classes; ?>">
  <?php print render($title_suffix['contextual_links']); ?>

  <?php if ($ds_left): ?>
    <<?php print $ds_left_wrapper; ?> class="<?php print $ds_left_classes; ?>">
      <?php print $ds_left; ?>
    </<?php print $ds_left_wrapper; ?>>
  <?php endif; ?>

  <?php if ($ds_right): ?>
    <<?php print $ds_right_wrapper; ?> class="<?php print $ds_right_classes; ?>">
      <?php print $ds_right; ?>
    </<?php print $ds_right_wrapper; ?>>
  <?php endif; ?>
</<?php print $layout_wrapper; ?>>
