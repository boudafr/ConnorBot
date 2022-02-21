<?php
session_start();
include_once('config.php');

$sql = "SELECT `name` FROM `bots` WHERE `users_ID` = ? AND ID = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$_SESSION['userID'], $_POST['botID']]);

$result = $stmt->fetch();

echo($result['name']);