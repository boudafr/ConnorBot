<?php
session_start();
include_once('config.php');

if(isset($_SESSION['userID'])) {
    $sql = "INSERT INTO `conkeywords` (`Keyword`, `Response`, `ConBots_ID`) VALUES (?, ?, ?)";
    $conn->prepare($sql)->execute([$_POST['ConKeyword'],$_POST['ConResponse'], $_SESSION['ConBotID']]);
}
else {
    echo('not logged in');
}

