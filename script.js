let slides = document.querySelectorAll(".slide");
let current = 0;

/* Detect page */
let page = window.location.pathname.split("/").pop();

let presenters = [
  "presenter1.html",
  "presenter2.html",
  "presenter3.html",
  "presenter4.html"
];

let pageIndex = presenters.indexOf(page);

/* Show first slide */
slides[current].classList.add("active");

/* NORMAL CLICK MODE */
document.addEventListener("click", () => {
  if (!autoMode) nextSlide();
});

/* FUNCTIONS */
function nextSlide() {
  slides[current].classList.remove("active");
  current++;

  if (current < slides.length) {
    slides[current].classList.add("active");
  } else {
    goNextPresenter();
  }
}

function prevSlide() {
  slides[current].classList.remove("active");
  current = (current - 1 + slides.length) % slides.length;
  slides[current].classList.add("active");
}

/* GO TO NEXT PRESENTER */
function goNextPresenter() {
  let nextPage = presenters[pageIndex + 1];

  if (nextPage) {
    window.location.href = nextPage;
  } else {
    window.location.href = presenters[0]; // loop
  }
}

/* AUTO MODE */
let autoMode = false;
let interval;

function toggleAuto() {
  autoMode = !autoMode;

  if (autoMode) {
    interval = setInterval(() => {
      nextSlide();
    }, 4000);
  } else {
    clearInterval(interval);
  }
}

/* KEYBOARD CONTROLS */
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();

  if (e.key === "a") toggleAuto(); // 🔥 AUTO ON/OFF

  if (e.key === "f") {
    document.documentElement.requestFullscreen();
  }
});

/* RIGHT CLICK = PREVIOUS */
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  prevSlide();
});
