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
 *  - taxonomy-term--TID--VIEW.html.twig.
 */
function glisseo_theme_suggestions_taxonomy_term_alter(&$suggestions, $variables, $hook) {
  $taxonomy_term = $variables['elements']['#taxonomy_term'];
  $view_mode = $variables['elements']['#view_mode'];
  array_unshift($suggestions, 'taxonomy_term__' . $view_mode);
  // Theme suggestion taxonomy-term--TYPE--VIEW must be inserted right after
  // default suggestion taxonomy-term--TYPE.
  foreach ($suggestions as $key => $suggestion) {
    if ($suggestion == 'taxonomy_term__' . $taxonomy_term->bundle()) {
      array_splice($suggestions, $key + 1, 0, 'taxonomy_term__' . $taxonomy_term->bundle() . '__' . $view_mode);
      break;
    }
  }
  $suggestions[] = 'taxonomy_term__' . $taxonomy_term->id() . '__' . $view_mode;
}
