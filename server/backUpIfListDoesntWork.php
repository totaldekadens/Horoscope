<?php


function getOutput($inputDate) {

if($inputDate  >= "2021-01-21" && $inputDate  <= "2021-02-18") {
    $output = array(
        "name" => "Vattumannen",
        "image" => "aquarius.png",
        "date" => "21 januari - 18 februari"
    );
    return $output;
} else if($inputDate  >= "2021-02-19" && $inputDate  <= "2021-03-19"){
    $output = array(
        "name" => "Fiskarna",
        "image" => "pisces.png",
        "date" => "19 februari –19 mars"
    );
    return $output;
} else if($inputDate  >= "2021-03-20" && $inputDate  <= "2021-04-19"){
    $output = array(
        "name" => "Väduren",
        "image" => "aries.png",
        "date" => "20 mars – 19 april"
    );
    return $output;
} else if($inputDate  >= "2021-04-20" && $inputDate  <= "2021-05-20"){
    $output = array(
        "name" => "Oxen",
        "image" => "taurus.png",
        "date" => "20 april –20 maj"
    );
    return $output; 
} else if($inputDate  >= "2021-05-21" && $inputDate  <= "2021-06-20"){
    $output = array(
        "name" => "Tvillingarna",
        "image" => "gemini.png",
        "date" => "21 maj –20 juni"
    );
    return $output;
} else if($inputDate  >= "2021-06-21" && $inputDate  <= "2021-07-21"){
    $output = array(
        "name" => "Kräftan",
        "image" => "cancer.png",
        "date" => "21 juni –21 juli"
    );
    return $output;
} else if($inputDate  >= "2021-07-22" && $inputDate  <= "2021-08-22"){
    $output = array(
        "name" => "Lejonet",
        "image" => "leo.png",
        "date" => "22 juli – 22 augusti"
    );
    return $output;
} else if($inputDate  >= "2021-08-23" && $inputDate  <= "2021-09-22"){
    $output = array(
        "name" => "Jungfrun",
        "image" => "virgo.png",
        "date" => "23 augusti – 22 september"
    );
    return $output;
} else if($inputDate  >= "2021-09-23" && $inputDate  <= "2021-10-22"){
    $output = array(
        "name" => "Vågen",
        "image" => "libra.png",
        "date" => "23 september – 22 oktober"
    );
    return $output;
} else if($inputDate  >= "2021-10-23" && $inputDate  <= "2021-11-21"){
    $output = array(
        "name" => "Skorpionen",
        "image" => "scorpio.png",
        "date" => "23 oktober – 21 november"
    );
    return $output;
} else if($inputDate  >= "2021-11-22" && $inputDate  <= "2021-12-21"){
    $output = array(
        "name" => "Skytten",
        "image" => "sagittarius.png",
        "date" => "22 november– 21 december"
    );
    return $output;
} else if($inputDate  >= "2021-12-22" && $inputDate  <= "2021-12-31" || $inputDate  >= "2021-01-01" && $inputDate  <= "2021-01-20"){
    $output = array(
        "name" => "Stenbocken",
        "image" => "capricorn.png",
        "date" => "22 december – 20 januari"
    );
    return $output;
} else {
    return false;
};

}

  ?>