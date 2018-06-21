<?php

/**
 * @file
 * Theme hooks preprocesses for blocks.
 */

use Drupal\Core\Template\Attribute;

/**
 * Implements hook_preprocess_HOOK().
 */
function glisseo_preprocess_block(&$variables) {
  $elements = $variables['elements'];
  $variables['block_id'] = $elements['#id'];

  if ($variables['base_plugin_id'] == 'block_content') {
    /** @var \Drupal\block_content\Entity\BlockContent $block_content */
    $block_content = $variables['content']['#block_content'];
    $variables['block_content_bundle'] = $block_content->bundle();
  }

  if ($variables['base_plugin_id'] == 'system_menu_block') {
    if ($variables['content_attributes'] instanceof Attribute === FALSE) {
      $variables['content_attributes'] = new Attribute($variables['content_attributes']);
    }

    $variables['content']['#attributes'] = $variables['content_attributes'];
  }
}
