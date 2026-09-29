const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const audio = document.querySelector("audio");
const buttons = document.querySelectorAll("footer button");
const pause = buttons[0];
const stop = buttons[1];

canvas.width = 20;
canvas.height = 20;

ctx.beginPath();
ctx.moveTo(6, 6);
ctx.lineTo(14, 10);
ctx.lineTo(6, 14);
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = "white";
ctx.stroke();

audio.src = "https://universal-soundbank.com/sounds/13631.mp3";

canvas.addEventListener("click", () => {
  audio.play();
});

pause.addEventListener("click", () => {
  audio.pause();
});

stop.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});
