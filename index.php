<?php

$timberContext = Timber::get_context();
$menu = new Timber\Menu();
$pages = get_pages(["sort_column" => "menu_order"]);
Timber::render("index.twig", $timberContext);
