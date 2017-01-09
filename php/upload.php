<?php

	if($_FILES['userfile']['error'] > 0){
		echo 'Problem: ';
		switch($_FILES['userfile']['error']){
			case 1:
				header('HTTP/1.1 500 Internal Server Error');
        		header('Content-Type: application/json; charset=UTF-8');
				echo 'File exceeded upload_max_filesize';
				break;
			case 2:
				header('HTTP/1.1 500 Internal Server Error');
        		header('Content-Type: application/json; charset=UTF-8');
				echo 'File exceeded max_file_size';
				break;
			case 3:
				header('HTTP/1.1 500 Internal Server Error');
        		header('Content-Type: application/json; charset=UTF-8');
				echo 'File only partially uploaded';
				break;
			case 4:
				header('HTTP/1.1 500 Internal Server Error');
        		header('Content-Type: application/json; charset=UTF-8');
				echo 'No file uploaded';
				break;
			case 6:
				header('HTTP/1.1 500 Internal Server Error');
        		header('Content-Type: application/json; charset=UTF-8');
				echo 'Cannot upload file: No temp direcotry specified'; 
				break;
			case 7:
				header('HTTP/1.1 500 Internal Server Error');
        		header('Content-Type: application/json; charset=UTF-8');
				echo 'Upload failed: Cannot write to disk';
				break;
		}
		header('HTTP/1.1 500 Internal Server Error');
        header('Content-Type: application/json; charset=UTF-8');
		exit;
	}


	if($_FILES['userfile']['type'] != 'text/plain'){
		header('HTTP/1.1 500 Internal Server Error');
        header('Content-Type: application/json; charset=UTF-8');
		echo 'Problem: file is not correct type';
		exit;
	}

	$contents = file_get_contents($_FILES['userfile']['tmp_name']);
	$contents = strip_tags($contents);

	echo $contents;

	exit;
?>