
<?php

session_start();

if ($_SERVER['REQUEST_METHOD']){

    if($_SERVER["REQUEST_METHOD"] == "GET"){

        if($_SESSION["horoscope"]) {
            
            echo json_encode($_SESSION["horoscope"]);

        } else {
            echo json_encode(false);
        }

    } else {
        echo json_encode(false); 
    }
    
} else {
    echo json_encode(false); 
};
?>