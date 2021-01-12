$sn = 'localhost';
  $db = 'mark_your_way';
  $un = 'root'; 
  $pw = ''; 

  $conn = new mysqli($sn, $un, $pw, $db);
  if ($conn->connect_error) die("Fatal Error");

