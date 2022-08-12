const card = document.querySelectorAll(".card")
const frente = document.querySelectorAll(".frente")

cardAleatoria()
click()

function cardAleatoria() {
    card.forEach(alazar => {
        const numero = [...Array(card.length).keys()]
        const random = Math.floor(Math.random() * card.length)

        alazar.style.order = numero[random]
    })
}

function click() {
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener("click", () => {
            frente[i].classList.add("girar")
            const rotarCard =document.querySelectorAll("girar")
            if(rotarCard.length == 2){
                
            }
        })
    }
}
