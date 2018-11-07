<?php
/**
 * @package Adda TinyMCE Button
 * @version 1.0
 */
/*
Plugin Name: Adda TinyMCE Buttons
Plugin URI: https://github.com/GitBuddha/Wordpress-TinyMCE-Plugins/tree/master/adda-tinymce-button
Description: Example of adding custom TinyMCE button to WYSIWYG editor
Author: Illia Kuzoma
Version: 1.0
Author URI: https://www.linkedin.com/in/illia-kuzoma-04b0a8a2
*/

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

if ( ! class_exists( 'Adda_Tinymce_Button' ) ):
class Adda_Tinymce_Button {

	public function __construct() {
		add_action( 'admin_head', array( $this, 'adda_add_button' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'adda_add_scripts' ) );
	}

	public function adda_add_button() {
		global $typenow;

		if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {
			return;
		}

		if( ! in_array( $typenow, array( 'post', 'page' ) ) )
			return;

		if ( get_user_option( 'rich_editing' ) == 'true' ) {
			add_filter( 'mce_external_plugins', array( $this, 'adda_add_tinymce_plugin' ) );
			add_filter( 'mce_buttons', array( $this, 'adda_register_button' ) );
		}
	}

	public function adda_add_tinymce_plugin( $plugin_array ) {
		$plugin_array['adda_button'] = plugin_dir_url(__FILE__) . 'js/adda-popup-button.js';
		return $plugin_array;
	}

	public function adda_register_button( $buttons ) {
		array_push( $buttons, 'adda_button' );
		return $buttons;
	}

	public function adda_add_scripts() {
		wp_enqueue_style( 'adda-style', plugin_dir_url(__FILE__) . 'css/style.css' );
	}
}

new Adda_Tinymce_Button();

endif;