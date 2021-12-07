<?php


function getOutput($inputDate){

    $Horoscope = array(
        array(
            "startdate" => "2021-01-21",
            "enddate" => "2021-02-18",
            "name" => "Vattumannen",
            "image" => "aquarius.png",
            "date" => "21 januari - 18 februari"
        ),
        array(
            "startdate" => "2021-02-19",
            "enddate" => "2021-03-19",
            "name" => "Fiskarna",
            "image" => "pisces.png",
            "date" => "19 februari –19 mars"
        ),
        array(
            "startdate" => "2021-03-20",
            "enddate" => "2021-04-19",
            "name" => "Väduren",
            "image" => "aries.png",
            "date" => "20 mars – 19 april"
        ),
        array(
            "startdate" => "2021-04-20",
            "enddate" => "2021-05-20",
            "name" => "Oxen",
            "image" => "taurus.png",
            "date" => "20 april –20 maj"
        ),
        array(
            "startdate" => "2021-05-21",
            "enddate" => "2021-06-20",
            "name" => "Tvillingarna",
            "image" => "gemini.png",
            "date" => "21 maj –20 juni"
        ),
        array(
            "startdate" => "2021-06-21",
            "enddate" => "2021-07-21",
            "name" => "Kräftan",
            "image" => "cancer.png",
            "date" => "21 juni –21 juli"
        ),
        array(
            "startdate" => "2021-07-22",
            "enddate" => "2021-08-22",
            "name" => "Lejonet",
            "image" => "leo.png",
            "date" => "22 juli – 22 augusti"
        ),
        array(
            "startdate" => "2021-08-23",
            "enddate" => "2021-09-22",
            "name" => "Jungfrun",
            "image" => "virgo.png",
            "date" => "23 augusti – 22 september"
        ),
        array(
            "startdate" => "2021-09-23",
            "enddate" => "2021-10-22",
            "name" => "Vågen",
            "image" => "libra.png",
            "date" => "23 september – 22 oktober"
        ),
        array(
            "startdate" => "2021-10-23",
            "enddate" => "2021-11-21",
            "name" => "Skorpionen",
            "image" => "scorpio.png",
            "date" => "23 oktober – 21 november"
        ),
        array(
            "startdate" => "2021-11-22",
            "enddate" => "2021-12-21",
            "name" => "Skytten",
            "image" => "sagittarius.png",
            "date" => "22 november– 21 december"
        ),
        array(
            "startdate" => "2021-12-22",
            "enddate" => "2021-12-31",
            "name" => "Stenbocken",
            "image" => "capricorn.png",
            "date" => "22 december – 20 januari"
        ),
        array(
            "startdate" => "2021-01-01",
            "enddate" => "2021-01-20",
            "name" => "Stenbocken",
            "image" => "capricorn.png",
            "date" => "22 december – 20 januari"
        )
    );

    $num=0;

    foreach ($Horoscope as $valfritt) {
        
        $num++; 

        foreach ($valfritt as $key=>$value) {
            
            if($valueFromClient >= $valfritt['startdate'] && $valueFromClient <= $valfritt['enddate']) {
                
                return $valfritt;

            };

        };

    };   

};

?>
