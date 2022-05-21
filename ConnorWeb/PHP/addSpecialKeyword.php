<?php
session_start();
include_once('config.php');


if(isset($_SESSION['userID'])) {
    $sql = "INSERT INTO `special_msg`(`type`, `response`, `bots_ID`) VALUES (?, ?, ?)";
    $conn->prepare($sql)->execute([$_POST['type'] ,$_POST['response'], $_POST['botID']]);
}
else {
    echo('not logged in');
}