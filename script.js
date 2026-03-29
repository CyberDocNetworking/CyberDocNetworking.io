document.addEventListener("keydown", (e) => {
  const next = document.body.dataset.next;
  const prev = document.body.dataset.prev;

  if (e.key === "ArrowRight" && next) {
    window.location.href = next;
  }

  if (e.key === "ArrowLeft" && prev) {
    window.location.href = prev;
  }
});

// click anywhere → next
document.addEventListener("click", () => {
  const next = document.body.dataset.next;
  if (next) window.location.href = next;
});
