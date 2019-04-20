<?php

function addThemeStylesAndScripts()
{
	$templateDirectoryUri = get_template_directory_uri();

	/* Bootstrap */
	wp_enqueue_style("bootstrap", "$templateDirectoryUri/css/bootstrap.min.css");

	wp_deregister_script("jquery");
	wp_enqueue_script("jquery", "$templateDirectoryUri/js/jquery-3.4.0.min.js");
	wp_enqueue_script("bootstrap", "$templateDirectoryUri/js/bootstrap.bundle.min.js", ["jquery"]);

	/* Main Site */
	wp_enqueue_style("main", "$templateDirectoryUri/css/main.css", ["bootstrap"]);

	wp_enqueue_script("navigation", "$templateDirectoryUri/js/navigation.js");
	wp_enqueue_script("splash-section", "$templateDirectoryUri/js/splash-section.js");
	wp_enqueue_script("main-section", "$templateDirectoryUri/js/main-section.js");
	wp_enqueue_script(
		"main",
		"$templateDirectoryUri/js/main.js",
		["jquery",
		"navigation",
		"splash-section",
		"main-section"]
	);
}
add_action('wp_enqueue_scripts', 'addThemeStylesAndScripts');
