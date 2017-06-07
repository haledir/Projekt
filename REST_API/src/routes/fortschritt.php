<?php
// Routes

// Retrieve all status
$app->get('/fortschritt', function ($request, $response, $args) {
	 $sth = $this->db->prepare("SELECT * FROM fortschritt");
	$sth->execute();
	$erg = $sth->fetchObject();
	return $this->response->withJson($erg);
});

// Retrieve status with id
$app->get('/fortschritt/{id}', function ($request, $response, $args) {
	 $sth = $this->db->prepare("SELECT * FROM fortschritt where id=:id");
	$sth->bindParam("id", $args['id']);
	$sth->execute();
	$erg = $sth->fetchObject();
	return $this->response->withJson($erg);
});

// new fortschritt
$app->post('/fortschritt', function ($request, $response, $args) {
	$input = $request->getParsedBody();
	$sql = "INSERT INTO fortschritt (speicher, schritt) VALUES (:speicher, :schritt)";
	 $sth = $this->db->prepare($sql);
	$sth->bindParam("speicher", $input['speicher']);
	$sth->bindParam("schritt", $input['schritt']);
	$sth->execute();
	return $this->response->withJson($input);
});

// update fortschritt with id 
$app->put('/fortschritt/{id}', function ($request, $response, $args) {
        $input = $request->getParsedBody();
		$sql = "UPDATE fortschritt SET ";
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
		$sql = $sql . " where id=:id";
		//echo $sql;
        $sth = $this->db->prepare($sql);
        $sth->bindParam("id", $args['id']);
        $sth->execute();
        $input['id'] = $args['id'];
        return $this->response->withJson($input);
});