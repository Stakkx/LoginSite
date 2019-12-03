<?php

require_once('conn.php');

session_start();


if (isset($_POST['username'], $_POST['password'])) {



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
        // Account exists, now check password.

        if ($_POST['password'] === $password) {
            // Success!
            // Create sessions so we know the user is logged in, they basically act like cookies but remember the data on the server.
            session_regenerate_id();

            $_SESSION['loggedin'] = TRUE;
            $_SESSION['name'] = $_POST['username'];
            $_SESSION['id'] = $id;

            header('Location: home.php'); //Home redirection
        } else {
            $pb = "Incorrect password!";
        }
    } else {
        $pb = "Incorrect username!";
    }

    $stmt->close();
}
