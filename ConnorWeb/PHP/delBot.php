<?php
session_start();
include_once('config.php');

if(isset($_SESSION['userID'])) {
    $sql = "DELETE FROM bots WHERE ID=?";
    $conn->prepare($sql)->execute([$_POST['botID']]);
}
else {
    echo('not logged in');
}
