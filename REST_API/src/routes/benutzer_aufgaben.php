<?php
// Routes

// Alle verknüpften Benutzer und Aufgaben bekommen
$app->get('/benutzeraufgaben', function ($request, $response) {
	 $sth = $this->db->prepare("SELECT * FROM benutzer_aufgaben");
	$sth->execute();
	$erg = $sth->fetchAll();
	return $this->response->withJson($erg);
});

// Neue Aufgabe mit Benutzer verknüpfen
$app->post('/benutzeraufgabe', function ($request, $response) {
	$input = $request->getParsedBody();	
	 $sql = "INSERT INTO benutzer_aufgaben (matnr, a_id, status, fortschritt, schwierigkeit) VALUES (:matnr, :a_id, :status, :fortschritt, :schwierigkeit)";
	 $sth = $this->db->prepare($sql);
	$sth->bindParam("matnr", $input['matnr']);
	$sth->bindParam("a_id", $input['a_id']);
	$sth->bindParam("status", $input['status']);
	$sth->bindParam("fortschritt", $input['fortschritt']);
	$sth->bindParam("schwierigkeit", $input['schwierigkeit']);
	$sth->execute();
	return $this->response->withJson($input);
});

// Alle Aufgaben mit dem Schwierigkeitsgrad {s_id} von Benutzer {matnr} abfragen
$app->get('/benutzeraufgabe/{matnr}/{s_id}', function ($args) {
    $sth = $this->db->prepare("SELECT * FROM benutzer_aufgaben WHERE matnr=:matnr and schwierigkeit=:s_id");
    $sth->bindParam("matnr", $args['matnr']);
    $sth->bindParam("s_id", $args['s_id']);
    $sth->execute();
    $erg = $sth->fetchAll();
    return $this->response->withJson($erg);
});

// Aufgabe {a_id} mit dem Schwierigkeitsgrad {s_id} von Benutzer {matnr} abfragen
$app->get('/benutzeraufgabe/{matnr}/{a_id}/{s_id}', function ($request, $response, $args) {
	 $sth = $this->db->prepare("SELECT * FROM benutzer_aufgaben WHERE matnr=:matnr and a_id=:a_id and schwierigkeit=:s_id");
	$sth->bindParam("matnr", $args['matnr']);
	$sth->bindParam("a_id", $args['a_id']);
	$sth->bindParam("s_id", $args['s_id']);
	$sth->execute();
	$erg = $sth->fetchObject();
	return $this->response->withJson($erg);
});

// Aufgabe {a_id} mit dem Schwierigkeitsgrad {s_id} von Benutzer {matnr} updaten
$app->put('/benutzeraufgabe/{matnr}/{a_id}/{s_id}', function ($request, $response, $args) {
	$input = $request->getParsedBody();
		$sql = "UPDATE benutzer_aufgaben SET ";
		$index = 0;
		foreach ($input as $key => $value){
			if($index == 0){
				$sql = $sql . "{$key}='{$value}'";
				$index++;
			} else {				
				$sql = $sql . ", {$key}='{$value}'";
				$index++;
			}
		}
		$sql = $sql . " WHERE matnr=:matnr and a_id=:a_id and schwierigkeit=:s_id";
		//echo $sql;
        $sth = $this->db->prepare($sql);
		$sth->bindParam("matnr", $args['matnr']);
		$sth->bindParam("a_id", $args['a_id']);
		$sth->bindParam("s_id", $args['s_id']);
        $sth->execute();
        $input['matnr'] = $args['matnr'];
        $input['a_id'] = $args['a_id'];
        $input['s_id'] = $args['s_id'];
        return $this->response->withJson($input);
});