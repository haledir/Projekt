<?php

// Retrieve login user
$app->post('/check', function ($request) {
    $input = $request->getParsedBody();
    return true;
});