<?php

include_once('../PHP/config.php');

$sql = "SELECT ID FROM `bots` WHERE `name` = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$_POST['botName']]);
$BotID = $stmt->fetch();


$sql2 = "SELECT response FROM `commands` WHERE keyword = ? AND bots_ID = ?";
$stmt2 = $conn->prepare($sql2);
$stmt2->execute([$_POST['keyword'], $BotID['ID']]);


$row = $stmt2->fetch();
$result = $row['response'];


echo($result);