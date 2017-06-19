<?php

class CheckCode
{
    public function __construct()
    {

    }

    public function check_den_code($id, $java_code_benutzer, $app)
    {
        $temp = $this->init($java_code_benutzer);
        $fileName = $temp['name'];
        $cleanCode = $temp['code'];

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
        $javac = 'C:\Program Files (x86)\Java\jdk1.8.0_131\bin\javac.exe';
        $java = 'C:\Program Files (x86)\Java\jdk1.8.0_131\bin\java.exe';

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
            $erg = $sth->fetchObject();
            $compiler_code = str_replace("\n", " ", $erg->musterloesung);

            // Musterlösung kompilieren und Ausgabe abfangen
            $java_Muster = fopen("main.java", "w");
            fwrite($java_Muster, $compiler_code);
            fclose($java_Muster);
            shell_exec('"'.$javac.'" main.java 2>&1');
            exec('"' . $java . '" main 2>&1', $output_muster);

            $check = $this->compare_solution($output, $output_muster);
            unlink($fileName.".class");
            unlink("main.java");
            unlink("main.class");
            if($check == false) {
                $return['status'] = false;
                $tempy = $this->init($erg->musterloesung);
                $tempa = $tempy['code'];
                $falseValue = $this->compare_code($cleanCode, $tempa);
                $return['errorInLine'] = $this->get_errorLine($java_code_benutzer, $falseValue);
            }
        } else {
            $return["status"] = false;
            $return["result"] = "";
        }

        unlink($fileName.".java");

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

    function get_errorLine($p_rootCode, $p_falseValue){

        $temp = explode("\n", $p_rootCode );

        foreach ($temp as $i=>$value) {
            $value = trim($value);
            //echo $value."\n";
            //echo $p_falseValue."\n";
            if($value == $p_falseValue){
                return $i;
            }
        }

        return -1;
    }

    function compare_code($p_code, $p_muster){
        $return = "";
        foreach ($p_code as $index=>$value){
            if (($p_code[$index] != $p_muster[$index]) && (substr($p_code[$index],0,12) != "public class")){
                $return = $value;
                break;
            }
        }
        return $return;
    }

    function compare_solution ($p_output, $p_muster){
        $return = false;

        foreach ($p_output as $index=>$value){
            if ($p_output[$index] == $p_muster[$index]){
                $return = true;
            } else {
                $return = false;
                break;
            }
        }
        return $return;
    }

    //
    // Code vom Benutzer wird gesplittet
    // Kommentare werden gelöscht
    // Klassenname wird extrahiert
    //
    function init($p_code){
        $return = array();

        // Write the code into an array an get trim
        $temp = explode("\n", $p_code );
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
            if($this->startsWith($temp[$i], "//") || empty($temp[$i])){
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

        $returnArray = array();
        foreach ($temp as $i=>$value){
            array_push($returnArray, $value);
        }

        $return['name'] = $fileName;
        $return['code'] = $returnArray;

        return $return;
    }
}