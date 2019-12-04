<?php

session_start();

//Si l'user n'est pas log ça renvoie sur la page de login
if (!isset($_SESSION['loggedin'])) {
    header('Location: index.php');
    exit();
}

$pageName = "Home Page";

require('header.php');

?>




<div class="content">
    <h2> <?php echo  $pageName ?> </h2>
    <p>Welcome back, <span id="userColor"><?= $_SESSION['name'] ?></span>! </p>
</div>




</body>

</html>