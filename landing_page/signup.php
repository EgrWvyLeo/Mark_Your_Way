<?php
require_once ("connection.php");

$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["psw"];

$query_createUser = "insert into user (email, password, name) values ('$email', '$password', '$name');";

$createUser = $conn->query($query_createUser);
?>