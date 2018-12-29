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
function glisseo_theme_suggestions_taxonomy_term_alter(array &$suggestions, $variables, $hook) {
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
function glisseo_theme_suggestions_paragraph_alter(array &$suggestion, $variables, $hook) {
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
function glisseo_theme_suggestions_block_alter(array &$suggestions, $variables, $hook) {
  if (isset($variables['elements']['content']['#block_content'])) {
    array_splice($suggestions, 1, 0, 'block__bundle__' . $variables['elements']['content']['#block_content']->bundle());
  }
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 *
 * Add new theme hook suggestion to comment type.
 *  - comment--{BUNDLE}--{VIEW_MODE}.html.twig
 */
function glisseo_theme_suggestions_comment_alter(array &$suggestions, array $variables) {
  $elements = $variables['elements'];
  $comment = $elements['#comment'];
  $view_mode = $elements['#view_mode'];
  $bundle = $comment->bundle();
  $suggestions[] = 'comment__' . $bundle . '__' . $view_mode;
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 *
 * Adds new theme hook suggestion to user entity.
 *  - user--{VIEW_MODE}.html.twig.
 */
function glisseo_theme_suggestions_user_alter(array &$suggestions, array $variables) {
  $suggestion = [
    'user',
    $variables['elements']['#view_mode'],
  ];
  $suggestions[] = implode('__', $suggestion);
}
