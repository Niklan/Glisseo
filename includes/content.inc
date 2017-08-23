<?php

/**
 * @file
 * Theme preprocesses for taxonomy term.
 */

/**
 * Implements hook_theme_suggsetions_HOOK_alter().
 *
 * This hook add new theme hook suggestion for taxonomy terms:
 *  - taxonomy-term--VIEW.html.twig.
 *  - taxonomy-term--TYPE--VIEW.html.twig.
 */
function glisseo_theme_suggestions_taxonomy_term_alter(&$suggestions, $variables, $hook) {
  $taxonomy_term = $variables['elements']['#taxonomy_term'];
  $view_mode = $variables['elements']['#view_mode'];
  array_unshift($suggestions, 'taxonomy_term__' . $view_mode);
  array_unshift($suggestions, 'taxonomy_term__' . $taxonomy_term->bundle() . '__' . $view_mode);
}
