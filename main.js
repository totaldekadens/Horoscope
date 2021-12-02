
function onLoad(){
    addContentToWebpage();
    viewHoroscope();
}


function addContentToWebpage(){

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
horoscope.appendChild(buttons) 

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




function viewHoroscope(){

document.querySelector("#getBtn").addEventListener("click", () => {
    // Sålänge
    document.querySelector(".horoscope").classList.remove("hidden")

})

}




function addHoroscope(){

    console.log("Du kom in i addHoroscope")

}



function updateHoroscope(){

    console.log("Du kom in i updateHoroscope")
    
}



function deleteHoroscope(){
    //Sålänge
    document.querySelector(".horoscope").classList.add("hidden") 
    console.log("Du kom in i deleteHoroscope")
    
}





window.addEventListener("load", onLoad)