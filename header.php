<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title> <?php echo  $pageName ?> </title>
    <link href="style.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
    <script src="script.js"></script>
</head>

<body class="loggedin">
    <nav class="navtop">
        <div>
            <h1> <span id="titleClick" onclick="document.location.href='home.php'"> Website Title </span></h1>
            <a href="profile.php"><i class="fas fa-user-circle"></i>Profile</a>
            <a href="logout.php"><i class="fas fa-sign-out-alt"></i>Logout</a>
        </div>
    </nav>