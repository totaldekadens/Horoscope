
<?php 
session_start();

if($_SERVER['REQUEST_METHOD']) {

        if($_SERVER["REQUEST_METHOD"] == "POST") {

                if($_SESSION["horoscope"] == false){
                        
                        $inputDate =  $_POST["inputDate"]; 

                        require_once("./listHoroscope.php");
        
                        $horoscope = getOutput($_POST["inputDate"]);
                        $_SESSION["horoscope"] = $horoscope;
        
                        echo json_encode(true);
                        
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