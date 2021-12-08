# Horoscope
Inlämningsuppgift: Målet med uppgiften är att bygga ett enkelt REST API för sitt horoskop. Ni ska minst använda följande php filer i ert projekt:

<br>
<br>

Instruktioner: Behöver öppnas via MAMP (eller liknande?) för att fungera korrekt. 

<br>
<br>

### addHoroscope.php

Sidan ska bara gå att begära via POST,  den ska kolla efter ett födelsedatum i $_POST, räkna ut vilket horoskop födelsedatumet tillhör och spara det i $_SESSION.

Om ett horoskop redan finns sparat ska det inte skrivas över. Om det inte gick att räkna ut horoskopet ska ingenting sparas.
 
Sidan ska inte använda echo eller skriva någon output förutom true eller false, beroende på om horoskopet sparades.

 
<br>

### viewHoroscope.php

Sidan ska bara gå att begära via GET, den ska kolla om ett horoskop finns sparat i $_SESSION och i så fall skriva ut det i output. Annars ska sidan inte skriva ut någonting.

 
<br>

### updateHoroscope.php

Sidan ska bara gå att begära via POST (PUT finns ej i php som standard så vi använder POST istället), den ska kolla efter ett födelsedatum i POST datan.

Räkna ut vilket horoskop födelsedatumet tillhör och uppdaterade det sparade horoskopet som finns i $_SESSION och skriva ut true.

Om inget horoskop finns i $_SESSION ska sidan inte uppdatera något och skriva ut false

 
<br>

### deleteHoroscope.php

Sidan ska bara gå att begära via DELETE,  den ska ta bort det sparade horoskopet i $_SESSION och echo:a true. Om inget finns sparat ska den echo:a false.

<br>

### getHoroscope.php - ADDERAT

Sidan skall bara gå att begära via GET. Den ska kolla efter ett födelsedatum i $_GET, räkna ut vilket horoskop födelsedatumet tillhör och skriva ut det i output.

 <br>

### index.html (alternativt index.php)

Index sidan ska innehålla ett område (en div) där ens horoskop skrivs ut när sidan laddas. Den ska dessutom innehålla en input för ens födelsenummer och tre knappar:

 

Knapparna ska ha varsin onClick som kör varsin Javascriptfunktion:

 <br>

### Knapp: "spara mitt horoskop"

onClick: ska göra ett anrop via fetch till addHoroscope.php med innehållet i input:en.

Efter anropet,  ska innehållet i div:en uppdateras.

Om ni vill ha stilpoäng så ska denna knapp bara synas om horoskopet inte är sparat ännu, eller annars inaktiveras - detta är inget krav

 <br>

### Knapp: "uppdatera mitt horoskop"

onClick: ska göra ett anrop via fetch till updateHoroscope.php med innehållet i input:en. Efter anropet ska innehållet i div:en uppdateras.

Om ni vill ha stilpoäng så ska denna knapp inte synas eller vara inaktiverat om horoskopet inte är sparat ännu - detta är inget krav

 <br>

### Knapp: "radera mitt horoskop"

onClick: ska göra ett anrop via fetch till deleteHoroscope.php. Efter anropet ska innehållet i div:en uppdateras om horoskopet togs bort.

Om ni vill ha stilpoäng så ska denna knapp inte synas eller vara inaktiverat om horoskopet inte är sparat ännu - detta är inget krav

När man först går ut på sidan ska även div:en uppdateras via ett anrop till viewHoroscope, det är smart att spara detta anrop i en funktion och anropa det i slutet av varje knapps onClick funktion.

<br>

### Knapp: "Hämta mitt horoskop" - ADDERAT

onClick: ska göra ett anrop via fetch till getHoroscope.php med innehållet i input:en.

Efter anropet ska innehållet i div:en uppdateras.

<br>

Länk till repo: https://github.com/totaldekadens/Horoscope/

