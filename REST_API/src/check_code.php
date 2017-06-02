<?php

class CheckCode
{
    public function __construct()
    {

    }

    public function check_den_code($id, $java_code_benutzer, $app)
    {
        // Array which will be send back to the client
        // status = true    --> no Error and the compiled file is correct
        // status = false   --> an Error occured
        // compilerMessage will be empty if everything worked and will throw a message if there is a syntax error
        // result contains the compiled and executed result
        // errorInLine contains the line where the code is differs from the correct solution
        $return = array("status"=>true, "compilerMessage"=>"", "result"=>"", "errorInLine"=>-1);

        // Save code in temp file
        $javaFile = fopen("tempFile.java", "w");
        fwrite($javaFile, $java_code_benutzer);
        fclose($javaFile);

        // Define needed variables
        $javac = 'C:\Program Files\Java\jdk1.8.0_112\bin\javac.exe';
        $java = 'C:\Program Files\Java\jdk1.8.0_112\bin\java.exe';

        // Compile the generated java-File
        $return["compilerMessage"] = shell_exec('"'.$javac.'" tempFile.java 2>&1');

        // execute the compiled java-File
        if(empty($return["compilerMessage"])) {
            $return["status"] = true;
            $return["result"] = exec('"' . $java . '" tempFile 2>&1');
        } else {
            $return["status"] = false;
            $return["result"] = "";
        }

		$sth = $app->db->prepare("SELECT musterloesung FROM aufgaben WHERE id=:id");
		$sth->bindParam("id", $id);
		$sth->execute();
		$musterloesung = $sth->fetchObject();
		return $return;
    }
}