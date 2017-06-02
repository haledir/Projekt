<?php

// Retrieve login user
$app->post('/check', function ($request) {
    $input = $request->getParsedBody();
    $checky = new CheckCode();
    $erg = $checky->check_den_code($input['aufgabe'],$input['code'],$this);
    return $this->response->withJson($erg);
});