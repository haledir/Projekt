<?php
// Routes

// Retrieve task with id 
$app->get('/aufgabe/{id}', function ($args) {
	 $sth = $this->db->prepare("SELECT * FROM aufgaben WHERE id=:id");
	$sth->bindParam("id", $args['id']);
	$sth->execute();
	$erg = $sth->fetchObject();
	return $this->response->withJson($erg);
});

// Retrieve all tasks
$app->get('/aufgaben', function () {
	 $sth = $this->db->prepare("SELECT COUNT(*) FROM aufgaben");
	$sth->execute();
	$erg = $sth->fetchObject();
	return $this->response->withJson($erg);
});