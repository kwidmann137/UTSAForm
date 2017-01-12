<?php 
	function decrypt($data){
		define('AES_256_CBC', 'aes-256-cbc');
		// To decrypt, separate the encrypted data from the initialization vector ($iv)
		$parts = explode('|||', $data);
		// $parts[0] = encrypted data
		// $parts[1] = initialization vector
		$file = './key';
		$encryption_key = file_get_contents($file);
		$decrypted = openssl_decrypt($parts[0], AES_256_CBC, $encryption_key, 0, $parts[1]);
		return $decrypted;
	}
?>	