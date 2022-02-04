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
                <label for="login_name">Username</label>
                <input type="text" name="login_name" id="login_name" required>

                <label for="login_password">Password</label>
                <input type="password" name="login_password" id="login_password" required>

                <input type="submit" name="login_submit" value="Login">
            </form>
        </div>

        <div id="registerDiv">
            <form method="post">
                <label for="register_name">Username</label>
                <input type="text" name="register_name" id="register_name" required>

                <label for="register_name">Email</label>
                <input type="text" name="register_email" id="register_email" required>

                <label for="register_password">Password</label>
                <input type="password" name="register_password" id="register_password" required>

                <label for="register_password_again">Password Again</label>
                <input type="password" name="register_password_again" id="register_password_again" required>

                <input type="submit" name="register_submit" value="Register">
            </form>
        </div>
    </div>
</body>
</html>