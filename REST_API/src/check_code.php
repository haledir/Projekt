<?php

class CheckCode
{
    public function __construct()
    {

    }

    public function check_den_code($id, $java_code_benutzer, $app)
    {
        // Write the code into an array an get trim
        $temp = explode("\n", $java_code_benutzer );
        $fileName = "";
        foreach ($temp as $i=>$value) {
            $temp[$i] = trim($temp[$i]);

            // get the classname
            if(substr($temp[$i],0,12) == "public class" ){
                $tempName = explode(" ", $temp[$i]);
                $fileName = $tempName[2];
            }
        }

        // Array which will be send back to the client
        // status = true    --> no Error and the compiled file is correct
        // status = false   --> an Error occured
        // compilerMessage will be empty if everything worked and will throw a message if there is a syntax error
        // result contains the compiled and executed result
        // errorInLine contains the line where the code is differs from the correct solution
        $return = array("status"=>true, "compilerMessage"=>"", "result"=>"", "errorInLine"=>-1);

        // Save code in temp file
        $javaFile = fopen($fileName.".java", "w");
        fwrite($javaFile, $java_code_benutzer);
        fclose($javaFile);

        // Define needed variables
        $javac = 'C:\Program Files\Java\jdk1.8.0_112\bin\javac.exe';
        $java = 'C:\Program Files\Java\jdk1.8.0_112\bin\java.exe';

        // Compile the generated java-File
        $return["compilerMessage"] = shell_exec('"'.$javac.'" '.$fileName.'.java 2>&1');

        // execute the compiled java-File
        if(empty($return["compilerMessage"])) {
            $return["status"] = true;
            $return["result"] = exec('"' . $java . '" '.$fileName.' 2>&1');
        } else {
            $return["status"] = false;
            $return["result"] = "";
        }

        unlink($fileName.".java");
        unlink($fileName.".class");

		$sth = $app->db->prepare("SELECT musterloesung FROM aufgaben WHERE id=:id");
		$sth->bindParam("id", $id);
		$sth->execute();
		$musterloesung = $sth->fetchObject();
		return $return;
    }
}