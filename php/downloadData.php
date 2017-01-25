<?php
        // echo "valid json";
        $file = "formData.txt";
        $file2 = "vars.txt";
        try{
            $fh = fopen($file2, "r");
        }catch(Exception $e){
            echo "Error: ", $e->getMessage(),"\n";
            exit;
        }
        $filename = '';
        try{
                $size = filesize($file2);
                $filename = fread($fh, $size);
        }catch(Exception $e){
                //do nothing just give it a default name
        }
        if(ctype_space($filename) || $filename == ''){
                $filename = "formData.txt";
        }
        if(file_exists($file)){
                // set the headers, so that
                // the browser knows to expect a .txt file download.
                header("Content-Disposition: attachment; filename=".$filename);
                header("Content-Type: text/html");
                header("Content-Length: " . filesize($file));

                // set Cache headers, to minimize the
                // risk of the browser using old versions of the data.
                header("Pragma: no-cache");
                header("Expires: 0");
                header("Cache-Control: must-revalidate");

                // print out the file data for
                // the browser to open or save.
                try{
                        // echo $filename;
                        readfile($file);
                }catch(Exception $e){
                        echo "Error: ", $e->getMessage(),"\n";
                }
        }else{
                header('HTTP/1.1 500 Internal Server Error');
                header('Content-Type: application/json; charset=UTF-8');
                echo "Error: Failed to generate data";
                exit;
        }

        exit;
?>