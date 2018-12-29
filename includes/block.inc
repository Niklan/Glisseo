<?php

/**
 * @file
 * Theme hooks preprocesses for blocks.
 */

use Drupal\Core\Template\Attribute;

/**
 * Implements hook_preprocess_HOOK() for block.html.twig.
 */
function glisseo_preprocess_block(array &$variables) {
  $elements = $variables['elements'];
  $variables['block_id'] = isset($elements['#id']) ? $elements['#id'] : $elements['#plugin_id'];
  if (!empty($elements['#id'])) {
    $variables['block_id'] = $elements['#id'];
  }
  elseif (!empty($elements['#derivative_plugin_id'])) {
    // Some block can be called programmatically and they are not have id.
    $variables['block_id'] = $elements['#derivative_plugin_id'];
  }
  else {
    // Even if derivative plugin id is not fount. Use plugin id.
    $variables['block_id'] = $elements['#base_plugin_id'];
  }

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
