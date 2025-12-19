// Apparition au scroll
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// Compteurs animés
// Compteurs animés
// Compteurs animés
const counters = document.querySelectorAll(".number");
let countersAnimated = false;

function animateCounters() {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        const speed = 200;
        const updateCount = () => {
            const current = +counter.innerText;
            const increment = target / speed;
            if(current < target){
                counter.innerText = Math.ceil(current + increment);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// Vérifie si la section stats est visible dans la fenêtre
function checkCounters() {
    if(countersAnimated) return; // si déjà lancé, on sort
    const statsSection = document.querySelector(".stats");
    const rect = statsSection.getBoundingClientRect();

    if(rect.top < window.innerHeight && rect.bottom > 0) {
        animateCounters();
        countersAnimated = true; // on ne relance plus
    }
}

// Déclenche au scroll et au chargement
window.addEventListener('scroll', checkCounters);
window.addEventListener('load', checkCounters);


// Récupérer la hauteur de la div texte et l’appliquer à la div image
const texteDiv = document.getElementById('texte');
const imageDiv = document.getElementById('image');

function ajusterHauteur() {
    const hauteurTexte = texteDiv.offsetHeight; // hauteur réelle en pixels
    imageDiv.style.height = (hauteurTexte*0.7) + 'px';
}

// Appeler la fonction au chargement et si la fenêtre change de taille
window.addEventListener('load', ajusterHauteur);
window.addEventListener('resize', ajusterHauteur);
