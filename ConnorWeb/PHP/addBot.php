<?php
session_start();
include_once('config.php');

if(isset($_SESSION['userID'])) {
    $hash = password_hash($_POST['botName'] . $_SESSION['userID'], PASSWORD_DEFAULT);
    $sql = "INSERT INTO `ConBots` (`Name`, `ConnectCode`, `ConUsers_ID`) VALUES (?, ?, ?)";
    $conn->prepare($sql)->execute([$_POST['botName'],$hash, $_SESSION['userID']]);
}
else {
    echo('not logged in');
}

