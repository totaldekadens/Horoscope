
<?php 

session_start();

try {

        if ($_SERVER['REQUEST_METHOD']) {

                if($_SERVER["REQUEST_METHOD"] == "DELETE") {
                
                        if(isset($_SESSION["horoscope"])) {
                                session_destroy();

                                echo json_encode(true);
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