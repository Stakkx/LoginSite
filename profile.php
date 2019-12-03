<?php

require_once('conn.php');

session_start();


//Redirection vers la page de login si non logged
if (!isset($_SESSION['loggedin'])) {
    header('Location: index.html');
    exit();
}


$stmt = $con->prepare('SELECT password, email FROM accounts WHERE id = ?');
// On se sert de l'id de session pour avoir le pass et le mail
$stmt->bind_param('i', $_SESSION['id']);
$stmt->execute();
$stmt->bind_result($password, $email);
$stmt->fetch();
$stmt->close();

$pageName = "Profile Page";
require('header.php');
?>



<div class="content">
    <h2> <?php echo  $pageName ?> </h2>
    <div>
        <p>Your account details :</p>
        <table>
            <tr>
                <td>Username:</td>
                <td><?= $_SESSION['name'] ?></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input  id="showPass" type="password" value="<?php echo $password ?>" id="myInput" readonly></td>
                <td> <span  id="eye" onclick="showHidePass();"> <i class="fas fa-eye"></i> </span> </td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><?= $email ?></td>
            </tr>
        </table>
    </div>
</div>
</body>

</html>