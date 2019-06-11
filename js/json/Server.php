<?php
    if (isset($_POST['user'])) {
        $user = $_POST['user'];

    $dataBase = json_encode($_POST['data']);

    $archivo = $user.".json";

    if(file_exists($archivo)) {
        unlink($archivo);
    }

    $fd=fopen($archivo,"w+");

    fwrite($fd,$dataBase);

    fclose($fd);
  }
?>
