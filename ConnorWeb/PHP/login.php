<?php

class login_class {
    
    public $conn;
    
    public function __construct() {
        $servername = "localhost";
        $username = "root";
        $database = "connorbot";
        $password = "";

        try {
            $this->conn = new PDO("mysql:host=$servername;dbname=$database", $username);
            // set the PDO error mode to exception
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    public function login($presmerovani) {
        if(isset($_SESSION['username'])) {
            $hlaska = 'Uživatel je již přihlášen';
        }
        else {
            if(isset($_POST['login_submit'])) {
                if(isset($_POST['loginName']) and isset($_POST['loginPassword'])) {
                    $stmt = $this->conn->prepare('SELECT * FROM ConUsers WHERE Username = ?');
                    $stmt->execute([$_POST['loginName']]);
                    $user = $stmt->fetch();
                    if(password_verify($_POST['loginPassword'], $user['Password'])) {
                        $_SESSION['loginName'] = $_SESSION['Username'];
                        $_SESSION['userID'] = $user['ID'];
                        header("Location: $presmerovani");
                        exit();
                    }
                }
            }
        }
    }

    public function register() {
        if(isset($_POST['register_submit'])) {
            if(isset($_POST['registerName']) and isset($_POST['registerPassword']) and isset($_POST['registerPasswordAgain'])) {
                if($_POST['registerPassword'] == $_POST['registerPasswordAgain']) {
                    $stmt = $this->conn->prepare('INSERT INTO `ConUsers` (`Username`, `Password`) VALUES (?, ?)');
                    $hash = password_hash($_POST['registerPassword'], PASSWORD_DEFAULT);
                    $stmt->execute([$_POST['registerName'], $hash]);
                    //echo('Uživatel byl registrován!'); // prozatimní hláška
                    session_destroy();
                }
            }
        }
    }
}