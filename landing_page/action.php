<?php 
require_once ("connection.php");

//  $name = $_POST['name'];
//   $email = $_POST['email'];
//   $password = sha1($_POST['psw']);
// $confirm_password = $_POST['psw-repeat'];

// $query = "INSERT INTO User (name, password, email) VALUES('$name', '$password', '$email')";

// $sql = "create table landmark (
//   landmarkID int auto_increment primary key,
//   landmarkName varchar(50) not null
// );";

// sql to create table
$sql = "CREATE TABLE MyGuests (
id INT(6) AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

$sql = "select * from tableName;";

if ($conn->query($sql) === TRUE) {
  echo "Table MyGuests created successfully";
} else {
  echo "Error creating table: " . $conn->error;
}

// $conn->query($sql);
 ?>