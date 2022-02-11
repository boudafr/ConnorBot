<?php

include_once('../PHP/config.php');

$sql = "SELECT ID FROM `bots` WHERE `name` = ?";
$stmt = $conn->prepare($sql);
$stmt = execute([$_POST['botName']]);

$sql = "SELECT ID, keyword FROM `commands` WHERE `bots_ID` = ?";
$stmt2 = $conn->prepare($sql);
$stmt2 = execute([$stmt]);

$result = ['ID' => 0, 'keyword' => 'test'];

while($row = $stmt->fetch()){ 
    $tmp = [$row['ID'], $row['keyword']]
    $result = array_push($result, $tmp);
}

echo(json_encode($result));