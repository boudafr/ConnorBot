<?php
session_start();
include_once('config.php');

$sql = "SELECT * FROM `commands` WHERE `ID` = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$_POST['keywordID']]);
$result = "";

$row = $stmt->fetch();

echo($row['response']);