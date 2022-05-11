<?php
header('Access-Control-Allow-Origin: *');
include_once('../PHP/config.php');

$sql = "SELECT ID FROM `bots` WHERE `name` = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$_POST['botName']]);
$BotID = $stmt->fetch();

$sql2 = "SELECT keyword FROM `commands` WHERE `bots_ID` = ?";
$stmt2 = $conn->prepare($sql2);
$stmt2->execute([$BotID['ID']]);

$result = [];

while($row = $stmt2->fetch()) {
    array_push($result, $row['keyword']);
}

echo(json_encode($result));