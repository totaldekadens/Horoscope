
<?php 

session_start();

try {

    if ($_SERVER['REQUEST_METHOD']) {

        if($_SERVER["REQUEST_METHOD"] == "GET") {

            $inputDate =  $_GET["input"]; 

            require_once("./listHoroscope.php");
            $horoscope = getOutput($_GET["input"], $getList);

            echo json_encode($horoscope); 
        }else {
            echo json_encode(false); 
        }
        
    } else {
        echo json_encode(false); 
    }

} catch(Exception $err) {
    error_log($err);
}
?>