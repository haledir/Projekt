<?php
// Routes

// Retrieve all status
$app->get('/status', function ($request, $response) {
	 $sth = $this->db->prepare("SELECT * FROM status");
	$sth->execute();
	$erg = $sth->fetchAll();
	return $this->response->withJson($erg);
});

// Retrieve status with id
$app->get('/status/{id}', function ($request, $response, $args) {
	 $sth = $this->db->prepare("SELECT * FROM status WHERE id=:id");
	$sth->bindParam("id", $args['id']);
	$sth->execute();
	$erg = $sth->fetchObject();
	return $this->response->withJson($erg);
});