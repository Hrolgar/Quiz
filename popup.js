const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

setTimeout(() => {
  popup.style.display = "block";
}, 5000);

popup.addEventListener("click", (e) => {
  popup.style.display = "none";
});

close.addEventListener("click", (e) => {
  popup.style.display = "none";
});
