<?php
header('Access-Control-Allow-Origin: *');
include_once('../PHP/config.php');


try {
    $sql = "SELECT * FROM `bots` WHERE `name` = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$_POST['botName']]);
    $BotInfo = $stmt->fetch();
    $result = [$BotInfo['main_color'], $BotInfo['secondary_color'], $BotInfo['position']];
    echo(json_encode($BotInfo));

}
catch(PDOException $e)
{
    echo($e);
} 
