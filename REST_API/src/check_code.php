<?php

class CheckCode
{
    public function __construct()
    {

    }

	
    public function check_den_code($id, $java_code_benutzer)
    {
		$sth = $this->db->prepare("SELECT musterloesung FROM aufgaben WHERE id=:id");
		$sth->bindParam("id", $id);
		$sth->execute();
		$musterloesung = $sth->fetchObject();
		return true;
    }
}