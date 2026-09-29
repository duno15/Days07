const boxes = document.querySelectorAll("footer div");
const area = boxes[0];
const coords = boxes[1];
const square = area.querySelector("canvas");

let dragging = false;
let offsetX = 0;
let offsetY = 0;

area.style.position = "relative";
square.style.position = "absolute";
square.style.margin = "0";
square.style.left = (area.clientWidth - square.offsetWidth) / 2 + "px";
square.style.top = (area.clientHeight - square.offsetHeight) / 2 + "px";

function showCoords() {
  coords.textContent = "New coordinates => {x:" + square.offsetLeft +
    ", y:" + square.offsetTop + "}";
}

square.addEventListener("mousedown", (event) => {
  dragging = true;
  offsetX = event.clientX - square.offsetLeft;
  offsetY = event.clientY - square.offsetTop;
  event.preventDefault();
});

document.addEventListener("mousemove", (event) => {
  if (!dragging)
    return;
  let x = event.clientX - offsetX;
  let y = event.clientY - offsetY;
  const maxX = area.clientWidth - square.offsetWidth;
  const maxY = area.clientHeight - square.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));
  square.style.left = x + "px";
  square.style.top = y + "px";
  showCoords();
});

document.addEventListener("mouseup", () => {
  dragging = false;
});

showCoords();
