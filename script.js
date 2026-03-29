let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides[current].classList.remove("active");
  current = (index + slides.length) % slides.length;
  slides[current].classList.add("active");
}

function nextSlide() {
  showSlide(current + 1);
}

function prevSlide() {
  showSlide(current - 1);
}

function toggleNotes() {
  document.body.classList.toggle("show-notes");
}

/* Keyboard */
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "n") toggleNotes();
  if (e.key === "f") document.documentElement.requestFullscreen();
});
