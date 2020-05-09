const body = document.querySelector("body");
const overlay = document.querySelector("#overlay");
body.addEventListener("click", () => {
  overlay.classList.toggle("mooned");
  body.classList.toggle("dark");
});
