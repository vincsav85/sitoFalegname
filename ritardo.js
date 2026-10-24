
const elementiDaRivelare = document.querySelectorAll(".testo, .immagine-metodo");

const osservatore = new IntersectionObserver(function (voci) {
    voci.forEach(function (voce) {
        if (voce.isIntersecting) {
            voce.target.classList.add("visibile");
        }
    });
}, { threshold: 0.15 });

elementiDaRivelare.forEach(function(elemento){
    osservatore.observe(elemento);
    
});