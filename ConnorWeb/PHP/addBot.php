<?php
session_start();
include_once('config.php');

if(isset($_SESSION['userID'])) {
    $sql = "INSERT INTO `bots`(`name`, `main_color`, `secondary_color`, `position`, `users_ID`) VALUES (?, ?, ?, ?, ?)";
    $conn->prepare($sql)->execute([$_POST['botName'], $_POST['mainColor'], $_POST['secColor'], $_POST['position'], $_SESSION['userID']]);
}
else {
    echo('not logged in');
}