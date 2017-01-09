<?php
    $json = $_POST['myData'];
    if(json_decode($json) != null){
        // echo "valid json";
        $file = "formData.txt";
        $fh = fopen($file, "w"); 
        fwrite($fh, $json);
        fclose($fh);

        exit;
    }else{
        header('HTTP/1.1 500 Internal Server Booboo');
        header('Content-Type: application/json; charset=UTF-8');
        echo "Invalid data to save";
    }
?>
