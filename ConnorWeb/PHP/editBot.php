<?php
session_start();
include_once('config.php');

if(isset($_SESSION['userID'])) {
    $sql = "UPDATE `bots` SET `name`=?, `main_color`=?, `secondary_color`=?, `position`=? WHERE `ID`=? AND `users_ID`=?";
    $conn->prepare($sql)->execute([$_POST['botName'], $_POST['mainColor'], $_POST['secColor'], $_POST['position'],$_POST['OldBotname'], $_SESSION['userID']]);
}
else {
    echo('not logged in');
}