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

        exit;
    }else{
        header('HTTP/1.1 500 Internal Server Booboo');
        header('Content-Type: application/json; charset=UTF-8');
        echo "Invalid data to save";
    }
?>
