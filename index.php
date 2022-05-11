<?php
session_start();
session_destroy();

header("Location: ConnorWeb/login_page.php");

exit();

?>