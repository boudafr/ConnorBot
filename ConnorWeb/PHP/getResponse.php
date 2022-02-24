<?php
session_start();
include_once('config.php');

$sql = "SELECT `response` FROM `commands` WHERE `ID` = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$_POST['keywordID']]);
$result = "";

$row = $stmt->fetch();

if($row) {
    echo($row['response']);
}
else {
    echo('');
}
