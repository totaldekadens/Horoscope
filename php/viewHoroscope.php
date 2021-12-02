<?php

// Test - If-sats
$valueFromClient = "2021-01-22";

    $valueC = $valueFromClient;

    if($valueC  >= "2021-01-21" && $valueC  <= "2021-02-18") {

    echo $vattumannen = array(
        "name" => "Vattumannen",
        "image" => "aquarius.png",
        );
    
    echo "<br>";    

    echo $vattumannen['name']. "<br>". $vattumannen['image'];    


    } else if($valueC  >= "2021-02-19" && $valueC  <= "2021-03-19"){
        echo "Fiskarna";
    } else if($valueC  >= "2021-03-20" && $valueC  <= "2021-04-19"){
        echo "Väduren";
    } else if($valueC  >= "2021-04-20" && $valueC  <= "2021-05-20"){
        echo "Oxen";
    } else if($valueC  >= "2021-05-21" && $valueC  <= "2021-06-20"){
        echo "Tvillingarna";
    } else if($valueC  >= "2021-06-21" && $valueC  <= "2021-07-21"){
        echo "Kräftan";
    } else if($valueC  >= "2021-07-22" && $valueC  <= "2021-08-22"){
        echo "Lejonet";
    } else if($valueC  >= "2021-08-23" && $valueC  <= "2021-09-22"){
        echo "Jungfrun";
    } else if($valueC  >= "2021-09-23" && $valueC  <= "2021-10-22"){
        echo "Vågen";
    } else if($valueC  >= "2021-10-23" && $valueC  <= "2021-11-21"){
        echo "Skorpionen";
    } else if($valueC  >= "2021-11-22" && $valueC  <= "2021-12-21"){
        echo "Skytten";
    } else if($valueC  >= "2021-12-22" && $valueC  <= "2021-12-31" || $valueC  >= "2021-01-01" && $valueC  <= "2021-01-20"){
        echo "Stenbocken";
    } else {
        echo "Fel format";
    }

?>