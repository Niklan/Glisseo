<?php

/**
 * @file
 * Theme and preprocess functions for fields.
 */

/**
 * Implements hook_preprocess_HOOK().
 */
function glisseo_preprocess_field(&$variables) {
  $element = $variables['element'];

  $variables['bundle'] = $element['#bundle'];
  $variables['view_mode'] = $element['#view_mode'];

  // Fix for block view mode. Block template by default has 'full' view mode,
  // but inside it field will get default, this will break BEM model and we fix
  // it.
  if ($variables['entity_type'] == 'block_content' && $variables['view_mode'] == 'default') {
    $variables['view_mode'] = 'full';
  }
}
