const popup = document.querySelector(".popup");
const popupWrap = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

setTimeout(() => {
  popupWrap.style.display = "block";
}, 5000);

popup.addEventListener("click", (e) => {
  popupWrap.style.display = "none";
});

close.addEventListener("click", (e) => {
  popupWrap.style.display = "none";
});
