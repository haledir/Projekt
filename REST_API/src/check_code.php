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
        $rowsToDelete = array();
        $commentLang = false;
        foreach ($temp as $i=>$value) {
            $temp[$i] = trim($temp[$i]);

            // get the classname
            if(substr($temp[$i],0,12) == "public class"){
                $tempName = explode(" ", $temp[$i]);
                $fileName = $tempName[2];
            }
            if($this->startsWith($temp[$i], "//")){
                array_push($rowsToDelete, $i);
            }elseif ($this->startsWith($temp[$i], "/*") or $commentLang == true){
                $commentLang = true;
                array_push($rowsToDelete, $i);
                if($this->endsWith($temp[$i], "*/")){
                    $commentLang = false;
                }
            }
        }

        // Clean commentary from source code
        foreach ( $rowsToDelete as $value){
            unset($temp[$value]);
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
        //
        // WICHTIG: imports können noch nicht kompiliert werden!
        //
        $return["compilerMessage"] = shell_exec('"'.$javac.'" '.$fileName.'.java 2>&1');

        // execute the compiled java-File
        if(empty($return["compilerMessage"])) {
            $return["status"] = true;
            exec('"' . $java . '" '.$fileName.' 2>&1', $output);
            $return["result"] = $output;
        } else {
            $return["status"] = false;
            $return["result"] = "";
        }

        unlink($fileName.".java");
        unlink($fileName.".class");

        // Get the solution and output
        /* TODO:
         * Musterausgabe in DB schreiben (In Init Klasse hinzufügen)
         * Musterausgabe aus der DB ziehen.
         * Musterausgabe mit aktueller Ausgabe vergleichen
         * Wenn Musterausgabe mit aktueller Ausgabe übereinstimmt, dann ein true zurückgeben
         * Wenn Musterausgabe nicht mit aktueller Ausgabe übereinstimmt, dann Musterlösung mit Code vom benutzer vergleichen und Hinweis zurückgeben (inklusive Zeilennummer)
        */
		$sth = $app->db->prepare("SELECT musterloesung FROM aufgaben WHERE id=:id");
		$sth->bindParam("id", $id);
		$sth->execute();
		$musterloesung = $sth->fetchObject();
		return $return;
    }

    function startsWith($haystack, $needle)
    {
        $length = strlen($needle);
        return (substr($haystack, 0, $length) === $needle);
    }

    function endsWith($haystack, $needle)
    {
        $length = strlen($needle);
        if ($length == 0) {
            return true;
        }

        return (substr($haystack, -$length) === $needle);
    }
}