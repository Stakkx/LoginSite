<?php

require_once('conn.php');

if (isset($_POST['username'], $_POST['password'], $_POST['email'])) {


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

            $pb = "Username already exists!";
        } else {

            if ($stmt = $con->prepare('INSERT INTO accounts (username, password, email) VALUES (?, ?, ?)')) {

                $stmt->bind_param('sss', $_POST['username'], $_POST['password'], $_POST['email']);
                $stmt->execute();
                $sc = "Okay you can now log in!";
                echo "<script language=\"JavaScript\">
                setTimeout(\"window.location='index.php'\",1100);
            </script>";
            } else {
                echo 'statement error!';
            }
        }
        $stmt->close();
    } else {
        echo 'Statement error!';
    }
    $con->close();
}
