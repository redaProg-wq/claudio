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
const counters = document.querySelectorAll(".number");

counters.forEach(counter => {
  const target = +counter.dataset.target;
  const speed = 200;

  const updateCount = () => {
    const current = +counter.innerText;
    const increment = target / speed;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
