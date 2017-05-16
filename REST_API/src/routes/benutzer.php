<?php
// Routes

// Retrieve todo with id 
$app->get('/user/[{id}]', function ($request, $response, $args) {
	 $sth = $this->db->prepare("SELECT * FROM benutzer WHERE matnr=:id");
	$sth->bindParam("id", $args['id']);
	$sth->execute();
	$todos = $sth->fetchObject();
	return $this->response->withJson($todos);
});
	
// Hash a new password for storing in the database.
// The function automatically generates a cryptographically safe salt.
//$hashToStoreInDb = password_hash($password, PASSWORD_BCRYPT);

// Check if the hash of the entered login password, matches the stored hash.
// The salt and the cost factor will be extracted from $existingHashFromDb.
//$isPasswordCorrect = password_verify($password, $existingHashFromDb);

// Add a new user
$app->post('/user', function ($request, $response) {
	$input = $request->getParsedBody();
	$sql = "INSERT INTO benutzer (matnr, benutzername, passwort, vorname, nachname, email) VALUES (:matnr, :benutzername, :passwort, :vorname, :nachname, :email)";
	 $sth = $this->db->prepare($sql);
	$sth->bindParam("matnr", $input['matnr']);
	$sth->bindParam("benutzername", $input['benutzername']);
	$sth->bindParam("passwort", password_hash($input['passwort'], PASSWORD_BCRYPT));
	$sth->bindParam("vorname", $input['vorname']);
	$sth->bindParam("nachname", $input['nachname']);
	$sth->bindParam("email", $input['email']);
	$sth->execute();
	$input['matnr'] = $this->db->lastInsertId();
	return $this->response->withJson($input);
});
