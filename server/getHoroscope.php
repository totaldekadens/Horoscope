
<?php 

session_start();

if ($_SERVER['REQUEST_METHOD']) {

    if($_SERVER["REQUEST_METHOD"] == "GET") {

        $inputDate =  $_GET["input"]; 

        require_once("./listHoroscope.php");
        $horoscope = getOutput($_GET["input"]);
        $_SESSION["horoscope"] = $horoscope;

        echo json_encode($horoscope); 

    };
};

?>