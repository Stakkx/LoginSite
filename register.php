<?php

require_once('resgister.php');

?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Register</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="formCheck.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
  </head>
  <body>


    <div class="login">

      <h1> Register</h1>
      <form method="POST" action="resgister.php" id="registerForm">
        <input
          type="text"
          name="username"
          id="nameuser"
          placeholder="Username"
          minlength="3"
          required="required"
        />

            <ul class="input-requirements">
                <li>At least 3 characters long</li>
                <li>Must only contain letters and numbers (no special characters)</li>
            </ul>


        <input
        type="email"
        name="email"
        placeholder="E-mail"
        required="required"
      />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          minlength="5"
          maxlength="50"
          required="required"
        />

                <ul class="input-requirements">
                    <li>At least 5 characters long (50 max)</li>
                    <li>Contains at least 1 number</li>
                    <li>Contains at least 1 lowercase letter</li>
                </ul>

        <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        required="required"
      />

        <button id="registerButton" type="submit" class="btn btn-primary btn-block btn-large">
            Register me !
        </button>

      </form>
      <br>
      <span id="noacc" onclick="document.location.href='index.php'" >I already have an acc lol</span>
    </div>

    <script src="script.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  </body>

</html>
