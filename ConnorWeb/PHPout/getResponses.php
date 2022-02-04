<?php

include_once('../PHP/config.php');

$sql = "SELECT ID FROM `bots` WHERE `name` = ?";
$stmt = $conn->prepare($sql);
$stmt = execute([$_POST['botName']]);

$sql = "SELECT ID, keyword FROM `commands` WHERE `bots_ID` = ?";
$stmt2 = $conn->prepare($sql);
$stmt2 = execute([$stmt]);



while($row = $stmt->fetch()){ 
    $result .= array($row['ID'], $row['keyword']);
}

echo($result);