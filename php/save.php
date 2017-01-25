<?php
    require './encrypt.php';
    $json = $_POST['myData'];
    $encryptedJSON = encrypt($json);
    if(json_decode($json) != null){
        // echo "valid json";
        $file = "formData.txt";
        try{
            $fh = fopen($file, "w");
        }catch(Exception $e){
            echo "Error: ", $e->getMessage(),"\n";
            exit;
        }
        // fwrite($fh, $encryptedJSON);
        fwrite($fh, $encryptedJSON);
        fclose($fh);

        //write the filename to variable for download.php to use
        $file2 = "vars.txt"; 
        try{
            $fh2 = fopen($file2, "w+");
        }catch(Exception $e){
            echo "Error: ", $e->getMessage(),"\n";
            exit;
        }
        fwrite($fh2, $_POST['currFile']); 
        fclose($fh2); 
        echo $_POST['currFile'];
        exit;
    }else{
        header('HTTP/1.1 500 Internal Server Booboo');
        header('Content-Type: application/json; charset=UTF-8');
        echo "Invalid data to save";
    }
?>
