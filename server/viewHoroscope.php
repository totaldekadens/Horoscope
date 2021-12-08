
<?php

session_start();

try {

    if ($_SERVER['REQUEST_METHOD']){

        if($_SERVER["REQUEST_METHOD"] == "GET"){

            if(isset($_SESSION["horoscope"])) {
                
                echo json_encode($_SESSION["horoscope"]);

            } else {
                echo json_encode(false);
            }
        }

    } else {
        echo json_encode(false); 
    }

} catch(Exception $err) {
    error_log($err);
}
?>