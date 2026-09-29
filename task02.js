const box = document.querySelector("footer div");

box.addEventListener("click", () => {
  let name = null;

  while (!name || name.trim() === "") {
    name = prompt("What's your name?");
  }
  if (confirm("Are you sure that " + name + " is your name ?")) {
    alert("Hello " + name + "!");
    box.textContent = "Hello " + name + "!";
  }
});
