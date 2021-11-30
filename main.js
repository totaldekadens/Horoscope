
// Denna lista skall konverteras till PHP sen. 

let horoskop = [{
    date: "21 januari – 18 februari",
    name: "Vattumannen",
    latin: "Aquarius",
    element: "Luft",
    planet: "Saturnus/Uranus",
    match: "",
    nomatch: "",
    future: ""
},{
    date: "	19 februari –19 mars",
    name: "Fiskarna",
    latin: "Pisces",
    element: "Vatten",
    planet: "Neptunus/Jupiter",
    match: "",
    nomatch: "",
    future: ""
},{
    date: "20 mars – 19 april",
    name: "Väduren",
    latin: "Aries",
    element: "Eld",
    planet: "Mars/Pluto	",
    match: "",
    nomatch: "",
    future: ""
},{
    date: "20 april –20 maj",
    name: "Oxen",
    latin: "Taurus",
    element: "Jord",
    planet: "Venus",
    match: "",
    nomatch: "",
    future: ""
},{
    date: "21 maj –20 juni",
    name: "Tvillingarna",
    latin: "Gemini",
    element: "Luft",
    planet: "Merkurius",
    match: "",
    nomatch: "",
    future: ""
},{
    date: "21 juni –21 juli",
    name: "Kräftan",
    latin: "Cancer",
    element: "Vatten",
    planet: "Månen",
    match: "",
    nomatch: "",
    future: ""
},{
    date: "22 juli – 22 augusti",
    name: "Lejonet",
    latin: "Leo",
    element: "Eld",
    planet: "Solen",
    match: "",
    nomatch: "",
    future: ""
},{
    date: "23 augusti – 22 september",
    name: "Jungfrun",
    latin: "Virgo",
    element: "Jord",
    planet: "Merkurius",
    match: "",
    nomatch: "",
    future: "",
    image: "virgo.png"
},{
    date: "23 september – 22 oktober",
    name: "	Vågen",
    latin: "Libra",
    element: "Alla",
    planet: "Venus",
    match: "",
    nomatch: "",
    future: ""
},{
    date: "23 oktober – 21 november",
    name: "Skorpionen",
    latin: "Scorpius",
    element: "Vatten",
    planet: "Mars",
    match: "",
    nomatch: "",
    future: ""
},{
    date: "22 november– 21 december",
    name: "Skytten",
    latin: "Sagittarius",
    element: "Eld",
    planet: "Jupiter",
    match: "",
    nomatch: "",
    future: ""
},{
    date: "22 december – 20 januari",
    name: "Stenbocken",
    latin: "Capricornus",
    element: "Jord",
    planet: "Saturnus",
    match: "",
    nomatch: "",
    future: ""
}]

let horoscope = document.querySelector(".horoscope")

let container = document.createElement("div")
container.classList.add("container")
horoscope.appendChild(container)

let date = document.createElement("h3")
date.innerText = "22 december – 20 januari"
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
starSign.innerText = "Jungfru"
containerContent.appendChild(starSign)

let latin = document.createElement("p")
latin.innerHTML = "<strong>Latin: </strong>" + "Virgo"
containerContent.appendChild(latin)

let element = document.createElement("p")
element.innerHTML = "<strong>Element: </strong>" + "Jord"
containerContent.appendChild(element)

let planet = document.createElement("p")
planet.innerHTML = "<strong>Planet: </strong>" + "Merkurius"
containerContent.appendChild(planet)

let match = document.createElement("p")
match.innerHTML = "<strong>Du matchar med: </strong>" + "Vattumannen"
containerContent.appendChild(match)

let nomatch = document.createElement("p")
nomatch.innerHTML = "<strong>Du matchar inte med: </strong>" + "Kräftan"
containerContent.appendChild(nomatch)

let future = document.createElement("p")
future.innerHTML = "<strong>Framtid: </strong>" + "År 2022 kommer blir ditt absolut bästa år!"
containerContent.appendChild(future)

let buttons = document.createElement("div")
buttons.classList.add("buttons")
buttons.setAttribute("id", "buttons1")
horoscope.appendChild(buttons) 

let save = document.createElement("div")
save.classList.add("btn")
save.classList.add("btn2")
save.setAttribute("id", "save1")
save.innerText = "Spara mitt horoskop"
buttons.appendChild(save) 
save.addEventListener("click", () => {

    // Lägg till fetchfunktion för save

})

let update = document.createElement("div")
update.classList.add("btn")
update.classList.add("btn2")
update.setAttribute("id", "update1")
update.innerText = "Uppdatera mitt horoskop"
buttons.appendChild(update) 
update.addEventListener("click", () => {

    // Lägg till fetchfunktion för update

})

let deleteBtn = document.createElement("div")
deleteBtn.classList.add("btn")
deleteBtn.classList.add("btn2")
deleteBtn.setAttribute("id", "delete1")
deleteBtn.innerText = "Radera mitt horoskop"
buttons.appendChild(deleteBtn) 
deleteBtn.addEventListener("click", () => {

    // Lägg till fetchfunktion för delete

})