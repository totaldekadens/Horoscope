<?php
class HoroscopeContent
{
    public $date;
    public $name;
    public $latin;
    public $element;
    public $planet;
    public $match;
    public $nomatch;
    public $future;
}
$Horoscope = array();

$Horoscope[0] = new HoroscopeContent();
$Horoscope[0]->date = '21 januari – 18 februari';
$Horoscope[0]->name = 'Vattumannen';
$Horoscope[0]->latin = 'Aquarius';
$Horoscope[0]->element = 'Luft';
$Horoscope[0]->planet = 'Saturnus';
$Horoscope[0]->match = '';
$Horoscope[0]->nomatch = '';
$Horoscope[0]->future = '';

$Horoscope[1] = new HoroscopeContent();
$Horoscope[1]->date = '19 februari –19 mars';
$Horoscope[1]->name = 'Fiskarna';
$Horoscope[1]->latin = 'Pisces';
$Horoscope[1]->element = 'Vatten';
$Horoscope[1]->planet = 'Jupiter';
$Horoscope[1]->match = '';
$Horoscope[1]->nomatch = '';
$Horoscope[1]->future = '';

$Horoscope[2] = new HoroscopeContent();
$Horoscope[2]->date = '20 mars – 19 april';
$Horoscope[2]->name = 'Väduren';
$Horoscope[2]->latin = 'Aries';
$Horoscope[2]->element = 'Eld';
$Horoscope[2]->planet = 'Mars/Pluto';
$Horoscope[2]->match = '';
$Horoscope[2]->nomatch = '';
$Horoscope[2]->future = '';

$Horoscope[3] = new HoroscopeContent();
$Horoscope[3]->date = '20 april –20 maj';
$Horoscope[3]->name = 'Oxen';
$Horoscope[3]->latin = 'Taurus';
$Horoscope[3]->element = 'Jord';
$Horoscope[3]->planet = 'Venus';
$Horoscope[3]->match = '';
$Horoscope[3]->nomatch = '';
$Horoscope[3]->future = '';

$Horoscope[4] = new HoroscopeContent();
$Horoscope[4]->date = '21 maj –20 juni';
$Horoscope[4]->name = 'Tvillingarna';
$Horoscope[4]->latin = 'Gemini';
$Horoscope[4]->element = 'Luft';
$Horoscope[4]->planet = 'Merkurius';
$Horoscope[4]->match = '';
$Horoscope[4]->nomatch = '';
$Horoscope[4]->future = '';

$Horoscope[5] = new HoroscopeContent();
$Horoscope[5]->date = '21 juni –21 juli';
$Horoscope[5]->name = 'Kräftan';
$Horoscope[5]->latin = 'Cancer';
$Horoscope[5]->element = 'Vatten';
$Horoscope[5]->planet = 'Månen';
$Horoscope[5]->match = '';
$Horoscope[5]->nomatch = '';
$Horoscope[5]->future = '';

$Horoscope[6] = new HoroscopeContent();
$Horoscope[6]->date = '22 juli – 22 augusti';
$Horoscope[6]->name = 'Lejonet';
$Horoscope[6]->latin = 'Leo';
$Horoscope[6]->element = 'Eld';
$Horoscope[6]->planet = 'Solen';
$Horoscope[6]->match = '';
$Horoscope[6]->nomatch = '';
$Horoscope[6]->future = '';

$Horoscope[7] = new HoroscopeContent();
$Horoscope[7]->date = '23 augusti – 22 september';
$Horoscope[7]->name = 'Jungfrun';
$Horoscope[7]->latin = 'Virgo';
$Horoscope[7]->element = 'Jord';
$Horoscope[7]->planet = 'Merkurius';
$Horoscope[7]->match = '';
$Horoscope[7]->nomatch = '';
$Horoscope[7]->future = '';

$Horoscope[8] = new HoroscopeContent();
$Horoscope[8]->date = '23 september – 22 oktober';
$Horoscope[8]->name = 'Vågen';
$Horoscope[8]->latin = 'Libra';
$Horoscope[8]->element = 'Alla';
$Horoscope[8]->planet = 'Venus';
$Horoscope[8]->match = '';
$Horoscope[8]->nomatch = '';
$Horoscope[8]->future = '';

$Horoscope[9] = new HoroscopeContent();
$Horoscope[9]->date = '23 oktober – 21 november';
$Horoscope[9]->name = 'Skorpionen';
$Horoscope[9]->latin = 'Scorpius';
$Horoscope[9]->element = 'Vatten';
$Horoscope[9]->planet = 'Mars';
$Horoscope[9]->match = '';
$Horoscope[9]->nomatch = '';
$Horoscope[9]->future = '';

$Horoscope[10] = new HoroscopeContent();
$Horoscope[10]->date = '22 november– 21 december';
$Horoscope[10]->name = 'Skytten';
$Horoscope[10]->latin = 'Sagittarius';
$Horoscope[10]->element = 'Eld';
$Horoscope[10]->planet = 'Jupiter';
$Horoscope[10]->match = '';
$Horoscope[10]->nomatch = '';
$Horoscope[10]->future = '';

$Horoscope[11] = new HoroscopeContent();
$Horoscope[11]->date = '22 december – 20 januari';
$Horoscope[11]->name = 'Stenbocken';
$Horoscope[11]->latin = 'Capricornus';
$Horoscope[11]->element = 'Jord';
$Horoscope[11]->planet = 'Saturnus';
$Horoscope[11]->match = '';
$Horoscope[11]->nomatch = '';
$Horoscope[11]->future = '';

?>

<pre><?php print_r($Horoscope);?> </pre>