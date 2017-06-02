<?php

// Retrieve login user
$app->post('/check', function ($request) {
    $input = $request->getParsedBody();
    $checky = new CheckCode();
    $erg = $checky->check_den_code($input['aufgabe'],$input['code']);
    if ($erg) {
        $return = array("status"=>true);
    } else {

    }
    return $this->response->withJson($return);
});