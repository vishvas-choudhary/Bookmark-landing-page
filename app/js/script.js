// console.log("Hello World!");

const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".hamburger-links");
const social = document.querySelector(".hamburger-social");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  social.classList.toggle("fade-in");
  overlay.classList.toggle("fade-in");
  links.classList.toggle("fade-in");
});
