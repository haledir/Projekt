<?php
// Routes
require __DIR__ . '/routes/aufgaben.php';
require __DIR__ . '/routes/benutzer.php';
require __DIR__ . '/routes/benutzer_aufgaben.php';
require __DIR__ . '/routes/fortschritt.php';
require __DIR__ . '/routes/schritte.php';
require __DIR__ . '/routes/status.php';

// Retrieve todo with id 
$app->get('/get', function () {
	return "hello World";
});
