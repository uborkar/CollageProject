let text = document.querySelector(".headerHeading h1"),
  header = document.querySelector("header"),
  nav = document.querySelector("nav"),
  instruction = document.getElementById("instruction");
// Intital properties for some variables assigned
nav.style.display = "none";
header.style.position = "fixed";
header.style.top = 0;
let size = 1;
let flag = 1;

document.addEventListener("scroll", () => {
  instruction.style.display = "none";
  text.style.transform = `scale(${size})`;
  size += 2;
  if (window.pageYOffset >= 250) {
    ManegingHeroAnimation();
  }
});

let aboutContent = document.getElementById("aboutBtn");
aboutContent.addEventListener("click", () => {
  ManegingHeroAnimation();
  window.scrollTo({
    top: 1200,
    left: 0,
    behavior: "smooth",
  });
});

let feedbackContent = document.getElementById("FeedbackBtn");
feedbackContent.addEventListener("click", () => {
  ManegingHeroAnimation();
  window.scrollTo({
    top: 1700,
    left: 0,
    behavior: "smooth",
  });
});

function ManegingHeroAnimation() {
  document.querySelector(".headerHeading").classList.add("heightZero");
  document.querySelector(".headerHeading").classList.add("headerHeading");
  nav.style.display = "flex";
  header.style.height = "auto";
  document.querySelector("main").classList.add("mainClass");
  if (flag == 1) {
    // we want this animation only once so the flag variable is used
    flag = 0;
    window.scrollTo(0, 0);
  }
  header.style.position = "relative";
}
