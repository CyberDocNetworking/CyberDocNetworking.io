let slides = document.querySelectorAll(".slide");
let current = 0;

/* Show first slide */
slides[current].classList.add("active");

/* NEXT SLIDE (click anywhere) */
document.addEventListener("click", () => {
  nextSlide();
});

/* PREVIOUS SLIDE (right click) */
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  prevSlide();
});

/* FUNCTIONS */
function nextSlide() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}

function prevSlide() {
  slides[current].classList.remove("active");
  current = (current - 1 + slides.length) % slides.length;
  slides[current].classList.add("active");
}

/* KEYBOARD CONTROLS */
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();

  if (e.key === "f") {
    document.documentElement.requestFullscreen();
  }

  if (e.key === "Escape") {
    document.exitFullscreen();
  }

  if (e.key === " ") {
    nextSlide(); // spacebar next
  }
});

/* AUTO SLIDE MODE */
let auto = false;
let interval;

document.addEventListener("keydown", (e) => {
  if (e.key === "a") {
    auto = !auto;

    if (auto) {
      interval = setInterval(nextSlide, 4000);
    } else {
      clearInterval(interval);
    }
  }
});
