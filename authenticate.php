<?php

require_once('conn.php');

session_start();


if ( !isset($_POST['username'], $_POST['password']) ) {
    die ('Please fill both the username and password field!');
}

if ($stmt = $con->prepare('SELECT id, password FROM accounts WHERE username = ?')) {
	// Bind parameters (s = string, i = int, b = blob, d = décimal), username = string so "s"
	$stmt->bind_param('s', $_POST['username']);
	$stmt->execute();
	// Store the result so we can check if account exists in database.
	$stmt->store_result();
}

if ($stmt->num_rows > 0) {
	$stmt->bind_result($id, $password);
	$stmt->fetch();
	// Account exists, now we verify the password.
	// Note: remember to use password_hash in your registration file to store the hashed passwords.
	if ($_POST['password'] === $password) {
		// Verification success! User has loggedin!
		// Create sessions so we know the user is logged in, they basically act like cookies but remember the data on the server.
        session_regenerate_id();
        
		$_SESSION['loggedin'] = TRUE;
		$_SESSION['name'] = $_POST['username'];
        $_SESSION['id'] = $id;
        
		header('Location: home.php'); //Home redirection
	} else {
		echo 'Incorrect password!';
	}
} else {
	echo 'Incorrect username!';
}

$stmt->close();
