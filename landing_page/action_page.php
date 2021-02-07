<?php 
require_once ("connection.php");

 $name = $_POST['name'];
  $email = $_POST['email'];
  $password = sha1($_POST['psw']);
$confirm_password = $_POST['psw-repeat'];

$query = "INSERT INTO User (name, password, email) VALUES('$name', '$password', '$email')";
 ?>