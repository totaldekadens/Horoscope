
function onLoad(){
    addContentToWebpage();
    viewHoroscope();
}


function addContentToWebpage(){

let main = document.getElementsByTagName("main")[0]
let horoscope = document.querySelector(".horoscope")

let container = document.createElement("div")
container.classList.add("container")
horoscope.appendChild(container)

let date = document.createElement("h3")
date.innerText = "24 augusti – 23 september"
container.appendChild(date)

let imageContainer = document.createElement("div")
imageContainer.classList.add("imageContainer")
container.appendChild(imageContainer)

let image = document.createElement("img")
image.src =  "./assets/virgo.png"
image.classList.add("image")
imageContainer.appendChild(image)

let containerContent = document.createElement("div")
containerContent.classList.add("containerContent")
container.appendChild(containerContent)

let starSign = document.createElement("h1")
starSign.innerText = "Jungfrun"
containerContent.appendChild(starSign)

let buttons = document.createElement("div")
buttons.classList.add("buttons")
buttons.setAttribute("id", "buttons1")
main.appendChild(buttons) 

let back = document.createElement("div")
back.classList.add("btn")
back.classList.add("btnArrow")
back.setAttribute("id", "back")
back.innerHTML = '<i class="fas fa-arrow-left"></i>'
main.appendChild(back) 
back.addEventListener("click", getBack)

let save = document.createElement("div")
save.classList.add("btn")
save.setAttribute("id", "save1")
save.innerText = "Spara mitt horoskop"
buttons.appendChild(save) 
save.addEventListener("click", addHoroscope)

let update = document.createElement("div")
update.classList.add("btn")
update.setAttribute("id", "update1")
update.innerText = "Uppdatera mitt horoskop"
buttons.appendChild(update) 
update.addEventListener("click", updateHoroscope)

let deleteBtn = document.createElement("div")
deleteBtn.classList.add("btn")
deleteBtn.setAttribute("id", "delete1")
deleteBtn.innerText = "Radera mitt horoskop"
buttons.appendChild(deleteBtn) 
deleteBtn.addEventListener("click", deleteHoroscope)

}

function getBack(){
    document.querySelector(".horoscope").classList.add("hidden") 
    document.querySelector(".birth").classList.remove("hidden")
    document.querySelector("#save1").classList.add("hidden")
    document.querySelector(".btnArrow").classList.add("hidden")
}


// VIEW
/*  Sidan ska bara gå att begära via GET, den ska kolla om ett horoskop finns sparat i $_SESSION
    och i så fall skriva ut det i output. Annars ska sidan inte skriva ut någonting. */
function viewHoroscope(){

    document.querySelector(".buttons").classList.add("hidden")

    document.querySelector("#getBtn").addEventListener("click", () => {
        // Sålänge
        document.querySelector(".horoscope").classList.remove("hidden")
        document.querySelector(".birth").classList.add("hidden")
        document.querySelector(".buttons").classList.remove("hidden")
        document.querySelector("#update1").classList.add("hidden")
        document.querySelector("#delete1").classList.add("hidden")
        document.querySelector("#save1").classList.remove("hidden")
        document.querySelector(".btnArrow").classList.remove("hidden")
    })
}



// ADD / Save
/*  Sidan ska bara gå att begära via POST, PHP: den ska kolla efter ett födelsedatum i $_POST, 
    räkna ut vilket horoskop födelsedatumet tillhör och spara det i $_SESSION.
    Om ett horoskop redan finns sparat ska det inte skrivas över. 
    Om det inte gick att räkna ut horoskopet ska ingenting sparas. */

/*  onClick: ska göra ett anrop via fetch till addHoroscope.php med innehållet i input:en.

    Efter anropet, ska innehållet i div:en uppdateras.

    Om ni vill ha stilpoäng så ska denna knapp bara synas om horoskopet 
    inte är sparat ännu, eller annars inaktiveras - detta är inget krav.
    
    När man först går ut på sidan ska även div:en uppdateras via ett anrop till viewHoroscope, 
    det är smart att spara detta anrop i en funktion och anropa det i slutet av varje knapps onClick funktion.*/
function addHoroscope(){

    console.log("Du kom in i addHoroscope")


    // Localstorage sålänge för att med knapparna. Skall bort sen.
    localStorage.setItem("saved", "sparat horoskop")
    let saved = localStorage.getItem("saved")

    if (saved){
        document.querySelector(".btnArrow").classList.add("hidden")
        document.querySelector("#save1").classList.add("hidden")
        document.querySelector("#update1").classList.remove("hidden")
        document.querySelector("#delete1").classList.remove("hidden")
    }

}

// UPDATE
/*  Sidan ska bara gå att begära via POST. PHP: den ska kolla efter ett födelsedatum i POST datan.
    Räkna ut vilket horoskop födelsedatumet tillhör och uppdaterade det sparade horoskopet som finns i $_SESSION 
    och skriva ut true. Om inget horoskop finns i $_SESSION ska sidan inte uppdatera något och skriva ut false --> */

/*  onClick: ska göra ett anrop via fetch till updateHoroscope.php med innehållet i input:en. 
    Efter anropet ska innehållet i div:en uppdateras.

    Om ni vill ha stilpoäng så ska denna knapp inte synas eller vara inaktiverat om horoskopet 
    inte är sparat ännu - detta är inget krav 
    
    När man först går ut på sidan ska även div:en uppdateras via ett anrop till viewHoroscope, 
    det är smart att spara detta anrop i en funktion och anropa det i slutet av varje knapps onClick funktion.*/    
function updateHoroscope(){

    console.log("Du kom in i updateHoroscope")
    document.querySelector(".horoscope").classList.add("hidden") 
    document.querySelector(".birth").classList.remove("hidden")
    document.querySelector("#update1").classList.add("hidden")
    document.querySelector("#delete1").classList.add("hidden")
    
}


// DELETE
/*  Sidan ska bara gå att begära via DELETE, den ska ta bort det sparade horoskopet i $_SESSION 
    och echo:a true. Om inget finns sparat ska den echo:a false. */

/*  onClick: ska göra ett anrop via fetch till deleteHoroscope.php. Efter anropet ska innehållet 
    i div:en uppdateras om horoskopet togs bort.

    Om ni vill ha stilpoäng så ska denna knapp inte synas eller vara inaktiverat om horoskopet 
    inte är sparat ännu - detta är inget krav

    När man först går ut på sidan ska även div:en uppdateras via ett anrop till viewHoroscope, 
    det är smart att spara detta anrop i en funktion och anropa det i slutet av varje knapps onClick funktion. */    
function deleteHoroscope(){
    //Sålänge
    document.querySelector(".horoscope").classList.add("hidden") 
    document.querySelector(".birth").classList.remove("hidden")
    document.querySelector("#update1").classList.add("hidden")
    document.querySelector("#delete1").classList.add("hidden")
    document.querySelector("#save1").classList.add("hidden")
    localStorage.clear();
    localStorage.getItem("saved")

}





window.addEventListener("load", onLoad)