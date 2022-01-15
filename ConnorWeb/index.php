<?php
session_start();

require_once('PHP/login.php');
$prihlaseni = new login_class();
$prihlaseni->login('setup.html');
$prihlaseni->register();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login/Register</title>
    <link rel="stylesheet" href="CSS/my.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
    <div id="mainGrid">
        <div id="loginDiv">
            <form method="post">
                <label for="loginName">Username</label>
                <input type="text" name="loginName" id="loginName" required>

                <label for="loginPassword">Password</label>
                <input type="text" name="loginPassword" id="loginPassword" required>

                <input type="submit" name="login_submit" value="Login">
            </form>
        </div>

        <div id="registerDiv">
            <form method="post">
                <label for="registerName">Username</label>
                <input type="text" name="registerName" id="registerName" required>

                <label for="registerPassword">Password</label>
                <input type="text" name="registerPassword" id="registerPassword" required>

                <label for="registerPasswordAgain">Password Again</label>
                <input type="text" name="registerPasswordAgain" id="registerPasswordAgain" required>

                <input type="submit" name="register_submit" value="Register">
            </form>
        </div>
    </div>
</body>
</html>