<?php
  $name = $_POST['proName'];

    if(isset($name) && trim($name) != null)
    {
      echo $name;
    }
    else
    {
      return false;
    }
?>
