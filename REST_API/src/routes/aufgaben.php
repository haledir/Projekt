<?php
// Routes

// Retrieve task with id 
$app->get('/aufgabe/{id}', function ($request, $response, $args) {
	 $sth = $this->db->prepare("SELECT * FROM aufgaben WHERE id=:id");
	$sth->bindParam("id", $args['id']);
	$sth->execute();
	$erg = $sth->fetchObject();
	return $this->response->withJson($erg);
});

// Retrieve all tasks
$app->get('/aufgaben', function ($request, $response) {
	 $sth = $this->db->prepare("SELECT * FROM aufgaben");
	$sth->execute();
	$erg = $sth->fetchAll();
	return $this->response->withJson($erg);
});