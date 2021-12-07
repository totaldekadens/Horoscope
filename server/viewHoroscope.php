
<?php

session_start();

if ($_SERVER['REQUEST_METHOD']){

    if($_SERVER["REQUEST_METHOD"] == "GET"){

        if($_SESSION) {
            echo json_encode($_SESSION);
        } else {
            echo json_encode(false);
        }
    }
}
    
?>