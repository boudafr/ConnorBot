<?php
session_start();
include_once('config.php');

$sql = "SELECT * FROM `conkeywords` WHERE `ConBots_ID` = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$_POST['BotID']]);
$result = "";

while($row = $stmt->fetch()) {
    $result .= '
    <option value="'. $row['ID'] .'">'. $row['Keyword'] .'</option>';
}

echo($result);