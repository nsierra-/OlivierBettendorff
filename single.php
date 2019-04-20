<?php
$context = Timber::get_context();
$timber_post = Timber::query_post();

$context['post'] = $timber_post;

Timber::render("single.twig", $context);
