<?php

/**
 * @file
 * Theme preprocesses for taxonomy term.
 */

/**
 * Implements hook_theme_suggestions_HOOK_alter().
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

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 *
 * This hook add new theme hook suggestion for paragraphs:
 *  - paragraph--{ID}--{VIEW_MODE}.html.twig
 *  - paragraph--{ID}.html.twig
 */
function glisseo_theme_suggestions_paragraph_alter(&$suggestion, $variables, $hook) {
  $paragraph = $variables['elements']['#paragraph'];
  $view_mode = $variables['elements']['#view_mode'];
  $suggestion[] = 'paragraph__' . $paragraph->id();
  $suggestion[] = 'paragraph__' . $paragraph->id() . '__' . $view_mode;
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 *
 * Add new theme hook suggestion by block content type.
 *  - block--{BLOCK_TYPE}.html.twig
 */
function glisseo_theme_suggestions_block_alter(&$suggestions, $variables, $hook) {
  if (isset($variables['elements']['content']['#block_content'])) {
    $block = $variables['elements']['content']['#block_content'];
    $last_suggestion = end($suggestions);
    // Temporary remove it from suggestion, it must be at the end.
    unset($suggestions[count($suggestions) - 1]);
    $suggestions[] = 'block__' . $block->bundle();
    $suggestions[] = $last_suggestion;
  }
}
