// Detta försvinner sen när jag lärt mig session/php-delen
////////////////////////////////////////////////////////////////////
let SESSION = [
    namnH = "Jungfrun",
    datum = "24 augusti - 23 september",
    image = "virgo.png"
]

let PHP = [
    namnH = "Jungfrun",
    datum = "24 augusti - 23 september",
    image = "virgo.png"
]

localStorage.setItem("PHP", JSON.stringify(PHP))
///////////////////////////////////////////////////////////////////////


// Funktioner som startar direkt när sidan laddas
function onLoad(){
    addContentToWebpage();
    viewHoroscope();
}

// Lägger till allt innehåll på sidan
function addContentToWebpage(){

console.log("Du har kommit in i addContentToWebpage")

let session = localStorage.getItem("saved")

let main = document.getElementsByTagName("main")[0]
let horoscope = document.querySelector(".horoscope")

let container = document.createElement("div")
container.classList.add("container")
horoscope.appendChild(container)

let date = document.createElement("h3")
date.classList.add("date")
container.appendChild(date)

let imageContainer = document.createElement("div")
imageContainer.classList.add("imageContainer")
container.appendChild(imageContainer)

let image = document.createElement("img")
image.classList.add("image")
imageContainer.appendChild(image)

let containerContent = document.createElement("div")
containerContent.classList.add("containerContent")
container.appendChild(containerContent)

let starSign = document.createElement("h1")
starSign.classList.add("starSign")
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
update.addEventListener("click", updateH)

let deleteBtn = document.createElement("div")
deleteBtn.classList.add("btn")
deleteBtn.setAttribute("id", "delete1")
deleteBtn.innerText = "Radera mitt horoskop"
buttons.appendChild(deleteBtn) 
deleteBtn.addEventListener("click", deleteHoroscope)

document.querySelector("#getBtn").addEventListener("click", getHoroscope)

}




// Tillbaka-länk. Vad som sker när man trycker på pilen 
function getBack(){
    document.querySelector(".birth").classList.remove("hidden")
    document.querySelector(".horoscope").classList.add("hidden") 
    document.querySelector("#save1").classList.add("hidden")
    document.querySelector(".btnArrow").classList.add("hidden")
}





// Anpassar info från SESSION / PHP-lista
function changeData(namn, datum, bild){
    console.log("Kommit in i changeData")

    let starSign = document.querySelector(".starSign")
    let date = document.querySelector(".date")
    let image = document.querySelector(".image")

    starSign.innerText = namn 
    date.innerText = datum
    image.src =  "./assets/" + bild
}



// Om något är sparat i session - printa ut. Annars inget. GET
function viewHoroscope(){

        console.log("Du har kommit viewHoroscope")

        let session = JSON.parse(localStorage.getItem("saved")) // Använder localstorage så länge för att få til funktionerna. Byts ut sedan
        
        if(session){
            document.querySelector(".horoscope").classList.remove("hidden")
            document.querySelector(".buttons").classList.remove("hidden")
            document.querySelector("#update1").classList.remove("hidden")
            document.querySelector("#delete1").classList.remove("hidden")
            document.querySelector(".birth").classList.add("hidden")
            document.querySelector("#save1").classList.add("hidden")
            document.querySelector(".btnArrow").classList.add("hidden")

            changeData(session[0], session[1], session[2]) // Exempel som skall följa med från session
        } else {
        
            document.querySelector(".btnArrow").classList.add("hidden")
            document.querySelector(".buttons").classList.add("hidden") 

        }
}





// "Hämta mitt horoskop"-knapp. Vill göra en GET- ID i php med input från klient. Hämta matchningen från listan och visa upp i klient. 
//  Vill alltså inte spara i session i detta skede. 
function getHoroscope(){
    console.log("Du kom in i getHoroscope")

    let php = JSON.parse(localStorage.getItem("PHP"))

    if(php) {
        changeData(php[0], php[1], php[2]) // Exempel som skall följa med från session
    } else {
        
        alert("Horoskåpet kunde inte hittas")
    }

    document.querySelector(".horoscope").classList.remove("hidden")
    document.querySelector("#save1").classList.remove("hidden")
    document.querySelector(".btnArrow").classList.remove("hidden")
    document.querySelector(".buttons").classList.remove("hidden")
    document.querySelector(".birth").classList.add("hidden")
    document.querySelector("#update1").classList.add("hidden")
    document.querySelector("#delete1").classList.add("hidden")

}





// PHP: Här skall det göra en fetch med "POST". Ta hjälp av input med datum.
// ska göra ett anrop via fetch till addHoroscope.php med innehållet i input:en.
// Efter anropet,  ska innehållet i div:en uppdateras.
function addHoroscope(){

    console.log("Du kom in i addHoroscope")
  
    localStorage.setItem ("saved", JSON.stringify(SESSION))     // Använder localstorage så länge för att få til funktionerna. Byts ut sedan
    let session = JSON.parse(localStorage.getItem("saved"))     // Använder localstorage så länge för att få til funktionerna. Byts ut sedan

    if(session){
        document.querySelector("#update1").classList.remove("hidden")
        document.querySelector("#delete1").classList.remove("hidden")
        document.querySelector(".btnArrow").classList.add("hidden")
        document.querySelector("#save1").classList.add("hidden")
    }

}


// Första "uppdatera mitt horoskåp"-knappen. Kommer till val av datum och sedan en ny uppdatera-knapp. Inget från PHP på denna.
function updateH(){

    let updateButton = document.querySelector("#updateBtn")
    updateButton.classList.remove("hidden")
    updateButton.addEventListener("click", updateHoroscope)
    document.querySelector(".birth").classList.remove("hidden")
    document.querySelector("#getBtn").classList.add("hidden")
    document.querySelector(".horoscope").classList.add("hidden") 
    document.querySelector("#update1").classList.add("hidden")
    document.querySelector("#delete1").classList.add("hidden")
    
}



// PHP: sidan ska bara gå att begära via POST. Ta hjälp av input med datum. 
// ska göra ett anrop via fetch till updateHoroscope.php med innehållet i input:en. Efter anropet ska innehållet i div:en uppdateras.
function updateHoroscope() {

    console.log("Du har kommit till updateHoroscope")

    document.querySelector(".horoscope").classList.remove("hidden")
    document.querySelector(".buttons").classList.remove("hidden")
    document.querySelector("#update1").classList.remove("hidden")
    document.querySelector("#delete1").classList.remove("hidden")
    document.querySelector(".birth").classList.add("hidden")
    document.querySelector("#save1").classList.add("hidden")
    document.querySelector(".btnArrow").classList.add("hidden")
}


// ska göra ett anrop via fetch till deleteHoroscope.php. 
// Efter anropet ska innehållet i div:en uppdateras om horoskopet togs bort.
function deleteHoroscope(){
    
    console.log("Du kom in i deleteHoroscope")

    let session = JSON.parse(localStorage.getItem("saved")) // Få tillbaka True or False från session - localstorage sålänge för att kolla funktion
    
    if(session){
    
    document.querySelector("#getBtn").classList.remove("hidden")
    document.querySelector(".birth").classList.remove("hidden")
    document.querySelector("#updateBtn").classList.add("hidden")
    document.querySelector(".horoscope").classList.add("hidden") 
    document.querySelector("#update1").classList.add("hidden")
    document.querySelector("#delete1").classList.add("hidden")
    document.querySelector("#save1").classList.add("hidden")
    localStorage.removeItem("saved");
    localStorage.getItem("saved")
}

}





window.addEventListener("load", onLoad)