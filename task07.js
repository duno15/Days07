const footer = document.querySelector("footer");
const message = footer.querySelector("div");
const okLink = message.querySelector("a");
let deleteBox = null;

function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split("=");
    if (key === name)
      return value;
  }
  return null;
}

function showDeleteBox() {
  message.style.display = "none";
  deleteBox = document.createElement("div");
  const button = document.createElement("button");
  button.textContent = "Delete the cookie";
  button.addEventListener("click", () => {
    document.cookie = "acceptsCookies=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    deleteBox.remove();
    deleteBox = null;
    message.style.display = "";
  });
  deleteBox.appendChild(button);
  footer.appendChild(deleteBox);
}

okLink.addEventListener("click", (event) => {
  event.preventDefault();
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  document.cookie = "acceptsCookies=true; expires=" + expires.toUTCString() + "; path=/";
  showDeleteBox();
});

if (getCookie("acceptsCookies") === "true")
  showDeleteBox();
