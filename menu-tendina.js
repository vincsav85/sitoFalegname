const bottone=document.querySelector(".menu-a-scomparsa")
bottone.addEventListener("click", scomparsaMenu)
const menu=document.querySelector(".menu")


function scomparsaMenu(){
    const open=menu.classList.toggle("aperto");
    bottone.setAttribute("aria-expanded",open)
}

const bottoneProdotti=document.querySelector(".bottone-prodotti")
bottoneProdotti.addEventListener("click", scomparsaProdotti)
const sottomenu=document.querySelector(".sottomenu")


function scomparsaProdotti(){
    const prodottiOpen=sottomenu.classList.toggle("aperto")
    bottoneProdotti.setAttribute("aria-expanded", prodottiOpen)
}