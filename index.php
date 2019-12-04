<?php

require_once('authenticate.php');

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Login page</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="login">
      <h1>Login</h1>
      <p class="problem"> <?php if (isset($pb)) echo $pb; ?> </p>
      <form method="POST" action="index.php">
        <input
          type="text"
          name="username"
          placeholder="Username"
          required="required"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required="required"
        />
        <button type="submit" class="btn btn-primary btn-block btn-large">
          Let me in.
        </button>
      </form>
      <br>
      <span id="noacc" onclick="document.location.href='register.php'" >No account yet ? Register here.</span> 
    </div>
  </body>
</html>
