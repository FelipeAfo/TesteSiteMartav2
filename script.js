let pergunta1 = document.getElementById("pergunta1")
let resposta1 = document.getElementById("resposta1")
let pergunta2 = document.getElementById("pergunta2")
let resposta2 = document.getElementById("resposta2")
let pergunta3 = document.getElementById("pergunta3")
let resposta3 = document.getElementById("resposta3")
let pergunta4 = document.getElementById("pergunta4")
let resposta4 = document.getElementById("resposta4")

let textoPergunta1 = pergunta1.querySelector("p")
let textoPergunta2 = pergunta2.querySelector("p")
let textoPergunta3 = pergunta3.querySelector("p")
let textoPergunta4 = pergunta4.querySelector("p")

let iconePergunta1 = pergunta1.querySelector("span")
let iconePergunta2 = pergunta2.querySelector("span")
let iconePergunta3 = pergunta3.querySelector("span")
let iconePergunta4 = pergunta4.querySelector("span")

pergunta1.onclick = function(){
    if(resposta1.style.maxHeight === ""){
        resposta1.style.maxHeight = resposta1.scrollHeight + "px"
        iconePergunta1.innerText = "-"
        iconePergunta1.style.fontSize = "35px"
        textoPergunta1.style.color = "red"
        resposta1.style.color = "black"
    } else {
        resposta1.style.maxHeight = ""
        iconePergunta1.innerText = "+"
        textoPergunta1.style.color = "#000"
    }
}

pergunta2.onclick = function(){
    if(resposta2.style.maxHeight === ""){
        resposta2.style.maxHeight = resposta2.scrollHeight + "px"
        iconePergunta2.innerText = "-"
        iconePergunta2.style.fontSize = "35px"
        textoPergunta2.style.color = "red"
        resposta2.style.color = "black"
    } else {
        resposta2.style.maxHeight = ""
        iconePergunta2.innerText = "+"
        textoPergunta2.style.color = "#000"
    }
}

pergunta3.onclick = function(){
    if(resposta3.style.maxHeight === ""){
        resposta3.style.maxHeight = resposta3.scrollHeight + "px"
        iconePergunta3.innerText = "-"
        iconePergunta3.style.fontSize = "35px"
        textoPergunta3.style.color = "red"
        resposta3.style.color = "black"
    } else {
        resposta3.style.maxHeight = ""
        iconePergunta3.innerText = "+"
        textoPergunta3.style.color = "#000"
    }
}

pergunta4.onclick = function(){
    if(resposta4.style.maxHeight === ""){
        resposta4.style.maxHeight = resposta4.scrollHeight + "px"
        iconePergunta4.innerText = "-"
        iconePergunta4.style.fontSize = "35px"
        textoPergunta4.style.color = "red"
        resposta4.style.color = "black"
    } else {
        resposta4.style.maxHeight = ""
        iconePergunta4.innerText = "+"
        textoPergunta4.style.color = "#000"
    }
}

let hamburguer = document.getElementById("hamburguer")
let menu = document.getElementById("menu")
let iconeHamburguer = hamburguer.querySelector("i")

hamburguer.onclick = function(){

    

    if(menu.classList.contains("menu-aberto")){
        menu.classList.remove("menu-aberto")
        iconeHamburguer.classList.remove("fa-xmark")
        iconeHamburguer.classList.add("fa-bars")

    } else {
        menu.classList.add("menu-aberto")
        iconeHamburguer.classList.remove("fa-bars")
        iconeHamburguer.classList.add("fa-xmark")
    }
}

let linksMenu = menu.querySelectorAll("a")
linksMenu.forEach(function(link){

    link.onclick = function(){
        menu.classList.remove("menu-aberto")
        iconeHamburguer.classList.remove("fa-xmark")
        iconeHamburguer.classList.add("fa-bars")
    }

})

let cards = document.querySelectorAll(".animar-esquerda, .animar-direita, .animar-baixo")

let observador = new IntersectionObserver(function(elementos){

    elementos.forEach(function(elemento){
        if(elemento.isIntersecting){
    elemento.target.classList.add("aparecer")
}
    })

})

cards.forEach(function(card){
    observador.observe(card)
})