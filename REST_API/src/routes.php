<?php
// Routes
require __DIR__ . '/routes/benutzer.php';

// Retrieve todo with id 
$app->get('/get', function ($request, $response, $args) {
	return "hello World";
});
