<?php 
	$file = './key';
	$fh = fopen($file, 'w');
	$encryption_key = openssl_random_pseudo_bytes(32);
	fwrite($fh, $encryption_key);
	fclose($fh);
	// Generate a 256-bit encryption key
	// This should be stored somewhere instead of recreating it each time
		
?>	