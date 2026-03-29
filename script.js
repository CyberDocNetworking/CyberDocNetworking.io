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

/* NEXT */
function nextSlide() {
  slides[current].classList.remove("active");
  current++;

  if (current < slides.length) {
    slides[current].classList.add("active");
  } else {
    goNextPresenter();
  }
}

/* PREVIOUS */
function prevSlide() {
  slides[current].classList.remove("active");
  current = (current - 1 + slides.length) % slides.length;
  slides[current].classList.add("active");
}

/* NEXT PRESENTER */
function goNextPresenter() {
  let nextPage = presenters[pageIndex + 1];

  if (nextPage) {
    window.location.href = nextPage;
  } else {
    window.location.href = presenters[0];
  }
}

/* CLICK = NEXT */
document.addEventListener("click", nextSlide);

/* RIGHT CLICK = PREVIOUS */
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  prevSlide();
});

/* AUTO MODE */
let auto = false;
let interval;

function toggleAuto() {
  auto = !auto;

  if (auto) {
    interval = setInterval(nextSlide, 4000);
  } else {
    clearInterval(interval);
  }
}

/* KEYBOARD (hidden controls) */
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " ") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "a") toggleAuto();
  if (e.key === "f") document.documentElement.requestFullscreen();
});
