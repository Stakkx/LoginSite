<?php

require_once('conn.php');

if (!isset($_POST['username'], $_POST['password'], $_POST['email'])) {

    die('Please complete the registration form!');
}

if (empty($_POST['username']) || empty($_POST['password']) || empty($_POST['email'])) {

    die('Please complete the registration form');
}

if ($stmt = $con->prepare('SELECT id FROM accounts WHERE username = ?')) {
    //Pour voir si la requete est valide

    $stmt->bind_param('s', $_POST['username']);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        //On regarde si le username existe deja

        echo 'Username exists, please choose another!';
    } else {

        if ($stmt = $con->prepare('INSERT INTO accounts (username, password, email) VALUES (?, ?, ?)')) {

            $stmt->bind_param('sss', $_POST['username'], $_POST['password'], $_POST['email']);
            $stmt->execute();
            echo 'You have successfully registered, you can now login!';
        } else {
            echo 'statement error!';
        }
    }
    $stmt->close();

} else {
    echo 'Statement error!';
}
$con->close();
