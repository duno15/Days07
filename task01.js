const box = document.querySelector("footer div");
let clicks = 0;

box.addEventListener("click", () => {
  clicks++;
  box.textContent = clicks;
});
