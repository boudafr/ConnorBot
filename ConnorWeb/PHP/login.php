<?php

class login_class {
    
    public $conn;
    
    public function __construct() {
        $servername = "lab.uzlabina.cz";
        $username = "boudafr";
        $database = "boudafr_DMP";
        $password = "1egribf7";

        try {
            $this->conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
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
                if(isset($_POST['login_name']) and isset($_POST['login_password'])) {
                    $stmt = $this->conn->prepare('SELECT * FROM users WHERE username = ?');
                    $stmt->execute([$_POST['login_name']]);
                    $user = $stmt->fetch();
                    if(password_verify($_POST['login_password'], $user['password'])) {
                        $_SESSION['login_name'] = $_SESSION['username'];
                        $_SESSION['userID'] = $user['ID'];
                        header("Location: $presmerovani");
                        exit();
                    }
                    else {
                        $this->message('Wrong password');
                    }
                }
            }
        }
    }


    public function register() {
        $errMessage = "";
        if(isset($_POST['register_submit']) and isset($_POST['register_name']) and isset($_POST['register_password']) and isset($_POST['register_password_again']) and isset($_POST['register_email'])) {

            if($_POST['register_password'] == $_POST['register_password_again']) {
                $stmt = $this->conn->prepare('SELECT username FROM users WHERE username = ?');
                $stmt->execute([$_POST['register_name']]);
                
                if ($stmt->fetch() === false) {
                    $stmt = $this->conn->prepare('SELECT username FROM users WHERE email = ?');
                    $stmt->execute([$_POST['register_email']]);
                    
                    if ($stmt->fetch() === false) {
                        $stmt = $this->conn->prepare('INSERT INTO `users` (`username`, `password`, email) VALUES (?, ?, ?)');

                        $hash = password_hash($_POST['register_password'], PASSWORD_DEFAULT);
                        $stmt->execute([$_POST['register_name'], $hash, $_POST['register_email']]);

                        echo('<div id="message_box" class="bg_green">Account created</div>');
                    }
                    else {
                        $errMessage = "Email is already taken";
                    }
                }
                else {
                    $errMessage = "Username is already taken";
                }
            }
            else {
                $errMessage = "Passwords don't match";
            }
        }
        $this->message($errMessage);
    }

    public function message($input) {
        if ($input !== "") {
        echo('<div id="message_box" class="bg_red">' . $input . '</div>');
        }
    }

}