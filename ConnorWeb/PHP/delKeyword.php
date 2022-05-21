<?php
session_start();
include_once('config.php');

if(isset($_SESSION['userID'])) {
    $sql = "DELETE FROM commands WHERE ID=?";
    $conn->prepare($sql)->execute([$_POST['keywordID']]);
}
else {
    echo('not logged in');
}


