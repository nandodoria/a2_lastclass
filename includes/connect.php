<?php

$user = "root";
$pw = "root"; //blank for windows users

try {
    $conn = new PDO('mysql:host=localhost;dbname=db_vue_video', $user, $pw);
    //var_dump($conn);

} catch (PDOEXception $exception) {
    echo 'connect error!' . $exception->getMessage();
}




?>