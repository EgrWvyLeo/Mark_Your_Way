<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "mark_your_way";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>