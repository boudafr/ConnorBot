<?php
session_start();
include_once('config.php');

$sql = "SELECT * FROM `conbots` WHERE `ConUsers_ID` = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$_SESSION['userID']]);
$result = "";

while($row = $stmt->fetch()) {
    $result .= '
    <option value="'. $row['ID'] .'" id="BotOption'. $row['ID'] .'">'. $row['Name'] .'</option>
    ';
}

echo($result);