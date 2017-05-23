<?php
// Routes

// Retrieve user with matnr 
$app->get('/user/{matnr}', function ($request, $response, $args) {
	 $sth = $this->db->prepare("SELECT * FROM benutzer WHERE matnr=:matnr");
	$sth->bindParam("matnr", $args['matnr']);
	$sth->execute();
	$erg = $sth->fetchObject();
	return $this->response->withJson($erg);
});

// Retrieve login user
$app->post('/user/login', function ($request, $response, $args) {
    $input = $request->getParsedBody();
    $sth = $this->db->prepare("SELECT benutzername, passwort FROM benutzer WHERE benutzername=:benutzername");
    $sth->bindParam("benutzername", $input['benutzername']);
    $sth->execute();
    $erg = $sth->fetchObject();
    $isPasswordCorrect = password_verify($input['passwort'], $erg->passwort);
    if($isPasswordCorrect)
    {
        $return = array("login"=>true);
    } else {
        $return = array("login"=>false);
    }
    return $this->response->withJson($return);
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
	return $this->response->withJson($input);
});

// Delete user with matnr 
$app->delete('/user/{matnr}', function ($request, $response, $args) {
	 $sth = $this->db->prepare("DELETE FROM benutzer WHERE matnr=:matnr");
	$sth->bindParam("matnr", $args['matnr']);
	$sth->execute();        
	return true;
});

// update user with matnr 
$app->put('/user/{matnr}', function ($request, $response, $args) {
        $input = $request->getParsedBody();
		$sql = "UPDATE benutzer SET ";
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
		$sql = $sql . " where matnr=:matnr";
		//echo $sql;
        $sth = $this->db->prepare($sql);
        $sth->bindParam("matnr", $args['matnr']);
        $sth->execute();
        $input['matnr'] = $args['matnr'];
        return $this->response->withJson($input);
});