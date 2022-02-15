<?php
session_start();
include_once('config.php');

$sql = "UPDATE `commands` SET `response`=? WHERE `ID`=?";
$conn->prepare($sql)->execute([$_POST['response'], $_POST['keywordID']]);
