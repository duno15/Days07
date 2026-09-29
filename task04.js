const buttons = document.querySelectorAll("footer button");
const plus = buttons[0];
const minus = buttons[1];
const select = document.querySelector("footer select");

function changeFontSize(delta) {
  const current = parseFloat(getComputedStyle(document.body).fontSize);
  const next = current + delta;

  if (next > 0)
    document.body.style.fontSize = next + "px";
}

plus.addEventListener("click", () => changeFontSize(1));
minus.addEventListener("click", () => changeFontSize(-1));

select.addEventListener("change", () => {
  document.body.style.backgroundColor = select.value;
});
