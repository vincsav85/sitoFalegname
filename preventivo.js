// zona elementi

const form=document.querySelector(".form-preventivo")
form.addEventListener("submit", messaggio)
const finestra=document.querySelector("#finestra-messaggio")
const testo=document.querySelector("#testo")


function messaggio(evento){
    evento.preventDefault()
    testo.textContent="Questo è un sito dimostrativo: quando diventerà il TUO vero sito, riceverai una mail nella tua casella di posta."
    finestra.showModal() 
    form.reset()   
}


