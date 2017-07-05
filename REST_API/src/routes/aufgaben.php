<?php
// Routes

// Retrieve task with id 
$app->get('/aufgabe/{id}', function ($request, $response, $args) {
	 $sth = $this->db->prepare("SELECT Name, Inhalt FROM aufgaben WHERE id=:id");
	$sth->bindParam("id", $args['id']);
	$sth->execute();
	$erg = $sth->fetchObject();
	//var_dump($erg);
    //$erg->Inhalt = utf8_decode($erg->Inhalt);
    //$erg->Musterloesung = utf8_decode($erg->Musterloesung);
    //var_dump($erg);
	return $this->response->withJson($erg);
});

// Retrieve all tasks
$app->get('/aufgaben', function ($request, $response, $args) {
	 $sth = $this->db->prepare("SELECT COUNT(*) as Anzahl FROM aufgaben");
	$sth->execute();
	$erg = $sth->fetchObject();
	return $this->response->withJson($erg);
});