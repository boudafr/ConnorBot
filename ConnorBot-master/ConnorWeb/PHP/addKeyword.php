<?php
session_start();
include_once('config.php');


if(isset($_SESSION['userID'])) {
    $sql = "INSERT INTO `commands`(`keyword`, `response`, `def_mes`, `responses`, `bots_ID`) VALUES (?, ?, ?, ?, ?)";
    $conn->prepare($sql)->execute([$_POST['keyword'],$_POST['response'], $_POST['default'], $_POST['responses'], $_POST['botID']]);
}
else {
    echo('not logged in');
}

