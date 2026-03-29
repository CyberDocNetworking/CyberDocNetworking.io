let slides = document.querySelectorAll(".slide");
let current = 0;

/* Show first slide */
slides[current].classList.add("active");

/* Go to next slide on click */
document.addEventListener("click", () => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
});
