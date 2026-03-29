let slides = document.querySelectorAll(".slide");
let current = 0;

/* SHOW SLIDE */
function showSlide(index) {
  slides[current].classList.remove("active");
  current = (index + slides.length) % slides.length;
  slides[current].classList.add("active");
}

/* NEXT / PREV */
function nextSlide() {
  showSlide(current + 1);
}

function prevSlide() {
  showSlide(current - 1);
}

/* NOTES TOGGLE */
function toggleNotes() {
  document.body.classList.toggle("show-notes");
}

/* AUTO PLAY */
let autoPlay = false;
let interval;

function toggleAutoPlay() {
  autoPlay = !autoPlay;

  if (autoPlay) {
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
  if (e.key === "n") toggleNotes();
  if (e.key === "f") document.documentElement.requestFullscreen();
  if (e.key === "a") toggleAutoPlay();
});

/* TOUCH SWIPE (MOBILE) */
let startX = 0;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) nextSlide();
  if (endX - startX > 50) prevSlide();
});
