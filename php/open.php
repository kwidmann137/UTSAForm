<?php
	require './decrypt.php';
	if($_FILES['userfile']['error'] > 0){
		echo 'Problem: ';
		switch($_FILES['userfile']['error']){
			case 1:
				header('HTTP/1.1 500 Internal Server Error');
        		header('Content-Type: application/json; charset=UTF-8');
				echo 'File exceeded upload_max_filesize';
				exit;
			case 2:
				header('HTTP/1.1 500 Internal Server Error');
        		header('Content-Type: application/json; charset=UTF-8');
				echo 'File exceeded max_file_size';
				exit;
			case 3:
				header('HTTP/1.1 500 Internal Server Error');
        		header('Content-Type: application/json; charset=UTF-8');
				echo 'File only partially uploaded';
				exit;
			case 4:
				header('HTTP/1.1 500 Internal Server Error');
        		header('Content-Type: application/json; charset=UTF-8');
				echo 'No file uploaded';
				exit;
			case 6:
				header('HTTP/1.1 500 Internal Server Error');
        		header('Content-Type: application/json; charset=UTF-8');
				echo 'Cannot upload file: No temp direcotry specified'; 
				exit;
			case 7:
				header('HTTP/1.1 500 Internal Server Error');
        		header('Content-Type: application/json; charset=UTF-8');
				echo 'Upload failed: Cannot write to disk';
				exit;
		}
		exit;
	}


	if($_FILES['userfile']['type'] != 'text/plain'){
		header('HTTP/1.1 500 Internal Server Error');
        header('Content-Type: application/json; charset=UTF-8');
		echo 'Problem: file is not correct type';
		exit;
	}

	$contents = file_get_contents($_FILES['userfile']['tmp_name']);
	$decrypted = decrypt($contents);
	$decrypted = strip_tags($decrypted);

	echo $decrypted;

	exit;
?>