<?php 
	function encrypt($data){
		// DEFINE our cipher
		define('AES_256_CBC', 'aes-256-cbc');
		// Generate an initialization vector
		// This *MUST* be available for decryption as well
		$iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length(AES_256_CBC));
		// Encrypt $data using aes-256-cbc cipher with the given encryption key and 
		// our initialization vector. The 0 gives us the default options, but can
		// be changed to OPENSSL_RAW_DATA or OPENSSL_ZERO_PADDING
		$file = './key';
		$encryption_key = file_get_contents($file);
		$encrypted = openssl_encrypt($data, AES_256_CBC, $encryption_key, 0, $iv);
		// If we lose the $iv variable, we can't decrypt this, so append it to the 
		// encrypted data with a separator that we know won't exist in base64-encoded 
		// data
		$encrypted = $encrypted . '|||' . $iv;
		return $encrypted;
	}
?>	