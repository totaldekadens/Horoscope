
<?php 

session_start();

if ($_SERVER['REQUEST_METHOD']) {

        if($_SERVER["REQUEST_METHOD"] == "DELETE") {
               
                if($_SESSION) {
                        session_destroy();

                        echo json_encode(true);
                } else {
                        echo json_encode(true);
                }
               

        }
}

?>