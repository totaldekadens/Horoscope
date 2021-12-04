<!-- JS: Sidan ska bara gå att begära via GET, PHP: den ska kolla om ett horoskop finns sparat i $_SESSION 
och i så fall skriva ut det i output. Annars ska sidan inte skriva ut någonting. -->


<?php

session_start();

// Test input från FORM
/* if(isset($_GET['submit'])){

$input = htmlentities($_GET['birthday'])

$result = myFunction($birthday);
}

<?php if( isset($result) ) echo $result;
 */




// Skall denna ha en egen php-fil? 
// Test - If-sats
$valueFromClient = "2021-01-22";

$valueC = $valueFromClient;

if($valueC  >= "2021-01-21" && $valueC  <= "2021-02-18") {
    echo $output = array(
        "name" => "Vattumannen",
        "image" => "aquarius.png",
        "date" => "2021-08-24 - 2021-09-23"
    );
} else if($valueC  >= "2021-02-19" && $valueC  <= "2021-03-19"){
    echo $output = array(
        "name" => "Fiskarna",
        "image" => "pisces.png",
        "date" => "19 februari –19 mars"
    );
} else if($valueC  >= "2021-03-20" && $valueC  <= "2021-04-19"){
    echo $output = array(
        "name" => "Väduren",
        "image" => "aries.png",
        "date" => "20 mars – 19 april"
    );
} else if($valueC  >= "2021-04-20" && $valueC  <= "2021-05-20"){
    echo $output = array(
        "name" => "Oxen",
        "image" => "taurus.png",
        "date" => "20 april –20 maj"
    );
} else if($valueC  >= "2021-05-21" && $valueC  <= "2021-06-20"){
    echo $output = array(
        "name" => "Tvillingarna",
        "image" => "gemini.png",
        "date" => "21 maj –20 juni"
    );
} else if($valueC  >= "2021-06-21" && $valueC  <= "2021-07-21"){
    echo $output = array(
        "name" => "Kräftan",
        "image" => "cancer.png",
        "date" => "21 juni –21 juli"
    );
} else if($valueC  >= "2021-07-22" && $valueC  <= "2021-08-22"){
    echo $output = array(
        "name" => "Lejonet",
        "image" => "leo.png",
        "date" => "22 juli – 22 augusti"
    );
} else if($valueC  >= "2021-08-23" && $valueC  <= "2021-09-22"){
    echo $output = array(
        "name" => "Jungfrun",
        "image" => "virgo.png",
        "date" => "23 augusti – 22 september"
    );
} else if($valueC  >= "2021-09-23" && $valueC  <= "2021-10-22"){
    echo $output = array(
        "name" => "Vågen",
        "image" => "libra.png",
        "date" => "23 september – 22 oktober"
    );
} else if($valueC  >= "2021-10-23" && $valueC  <= "2021-11-21"){
    echo $output = array(
        "name" => "Skorpionen",
        "image" => "scorpio.png",
        "date" => "23 oktober – 21 november"
    );
} else if($valueC  >= "2021-11-22" && $valueC  <= "2021-12-21"){
    echo $output = array(
        "name" => "Skytten",
        "image" => "sagittarius.png",
        "date" => "22 november– 21 december"
    );
} else if($valueC  >= "2021-12-22" && $valueC  <= "2021-12-31" || $valueC  >= "2021-01-01" && $valueC  <= "2021-01-20"){
    echo $output = array(
        "name" => "Stenbocken",
        "image" => "capricornus.png",
        "date" => "22 december – 20 januari"
    );
} else {
    echo "Fel format";
}





    
?>