<?php
// Routes

// Retrieve step from task a_id with difficulty s_id
$app->get('/schritt/{a_id}/{s_id}', function ($request, $response, $args) {
	 $sth = $this->db->prepare("SELECT * FROM schritte WHERE a_id=:a_id and s_id=:s_id");
	$sth->bindParam("a_id", $args['a_id']);
	$sth->bindParam("s_id", $args['s_id']);
	$sth->execute();
	$erg = $sth->fetchObject();
	return $this->response->withJson($erg);
});