/* =========================================================
   CyberDoc Presentation Navigation
   - Arrow Right / Space / Page Down = next
   - Arrow Left / Page Up = previous
   - Click anywhere on empty space = next
   - Click navigation buttons = slide with fade-out
   ========================================================= */

function goTo(url) {
  if (!url) return;
  document.body.classList.add("leaving");
  window.setTimeout(() => {
    window.location.href = url;
  }, 180);
}

function nextUrl() {
  return document.body.dataset.next || "";
}

function prevUrl() {
  return document.body.dataset.prev || "";
}

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
      e.preventDefault();
      goTo(nextUrl());
    }

    if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      goTo(prevUrl());
    }
  });

  document.addEventListener("click", (e) => {
    const interactive = e.target.closest("a, button, input, textarea, select, label, video");
    if (interactive) return;

    const next = nextUrl();
    if (next) goTo(next);
  });

  document.querySelectorAll("[data-go-next]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      goTo(nextUrl());
    });
  });

  document.querySelectorAll("[data-go-prev]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      goTo(prevUrl());
    });
  });
});
