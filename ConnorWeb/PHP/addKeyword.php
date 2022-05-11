<?php
session_start();
include_once('config.php');


if(isset($_SESSION['userID'])) {
    $sql = "INSERT INTO `commands`(`keyword`, `response`, `bots_ID`) VALUES (?, ?, ?)";
    $conn->prepare($sql)->execute([$_POST['keyword'],$_POST['response'], $_POST['botID']]);
}
else {
    echo('not logged in');
}

