<?php
// $servername = "localhost";
// $username = "root";
// $password = "root";

// // Create connection
// $conn = new mysqli($servername, $username, $password);

// // Check connection
// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }
// echo "Connected successfully";


  $db_host = 'localhost';
  $db_user = 'root';
  $db_password = 'root';
  $db_db = 'MYW';
  // $db_port = 8889;

  $conn = new mysqli(
    $db_host,
    $db_user,
    $db_password,
    $db_db
    // $db_port
  );
	
  if ($conn->connect_error) {
    echo 'Errno: '.$conn->connect_errno;
    echo '<br>';
    echo 'Error: '.$conn->connect_error;
    // exit();
  }

  echo 'Success: A proper connection to MySQL was made.';
  echo '<br>';
  echo 'Host information: '.$conn->host_info;
  echo '<br>';
  echo 'Protocol version: '.$conn->protocol_version;

  // $mysqli->close();

?>