<?php

/**
 * @file
 * Custom theme hook preprocess for user.
 */

/**
 * Implements hook_preprocess_HOOK() for user.html.twig.
 */
function glisseo_preprocess_user(array &$variables) {
  if (isset($variables['elements']['#view_mode'])) {
    $variables['view_mode'] = $variables['elements']['#view_mode'];
  }
  else {
    $variables['view_mode'] = 'default';
  }
}
