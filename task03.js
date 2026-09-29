const box = document.querySelector("footer div");
let typed = "";

document.addEventListener("keydown", (event) => {
  if (event.key.length !== 1)
    return;
  typed += event.key;
  typed = typed.slice(-42);
  box.textContent = typed;
});
