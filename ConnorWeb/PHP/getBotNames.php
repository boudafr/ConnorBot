<?php
session_start();
include_once('config.php');

$sql = "SELECT * FROM `bots` WHERE `users_ID` = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$_SESSION['userID']]);
$result = "";

while($row = $stmt->fetch()) {
    $result .= '
    <option value="'. $row['ID'] .'">'. $row['name'] .'</option>
    ';
}

echo($result);