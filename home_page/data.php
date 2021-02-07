
   $conn = new mysqli($sn, $un, $pw, $db);
  if ($conn->connect_error) die("Fatal Error");
​
  $query  = "SELECT * FROM students";
  $result = $conn->query($query);
  if (!$result) die("Fatal Error");
​
  $rows = $result->num_rows;
​
  for ($j = 0 ; $j < $rows ; ++$j)
  {
    $result->data_seek($j);
    echo 'Name: '   . htmlspecialchars($result->fetch_assoc()['stu_name'])   . '<br>';
    $result->data_seek($j);
    echo 'Email: '    . htmlspecialchars($result->fetch_assoc()['stu_email'])    . '<br>';
    $result->data_seek($j);
    echo 'Gender: ' . htmlspecialchars($result->fetch_assoc()['stu_gender']) . '<br>';
    $result->data_seek($j);
    echo 'Local: '     . htmlspecialchars($result->fetch_assoc()['stu_local'])     . '<br>';
    $result->data_seek($j);
    echo 'Birthday: '     . htmlspecialchars($result->fetch_assoc()['stu_bdate'])     . '<br><br>';
  }
​
  $result->close();
  $conn->close();






