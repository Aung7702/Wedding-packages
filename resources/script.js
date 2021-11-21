const upBtn = document.querySelector(".up-btn");
const backBtn = document.querySelector(".back-btn");

const packageSection = document.getElementById("package");
const pkg1 = document.querySelector(".pkg1");
const pkg2 = document.querySelector(".pkg2");
const pkg3 = document.querySelector(".pkg3");

const package1 = document.querySelector(".package-1");
const package2 = document.querySelector(".package-2");
const package3 = document.querySelector(".package-3");

const cards = document.querySelector(".cards");

const hamburgerTag = document.querySelector(".hamburger");

const firstTag = document.querySelector(".first");
const secondTag = document.querySelector(".second");
const thirdTag = document.querySelector(".third");
const linksTag = document.querySelector(".links");

hamburgerTag.addEventListener("click", () => {
  if (hamburgerTag.classList.contains("isOpened")) {
    secondTag.classList.remove("hideSecond");
    firstTag.classList.remove("rotateFirst");
    thirdTag.classList.remove("rotateThird");
    hamburgerTag.classList.remove("isOpened");
    linksTag.classList.remove("showLinks");
  } else {
    secondTag.classList.add("hideSecond");
    firstTag.classList.add("rotateFirst");
    thirdTag.classList.add("rotateThird");
    hamburgerTag.classList.add("isOpened");
    linksTag.classList.add("showLinks");
  }
});

backBtn.addEventListener("click", () => {
  cards.classList.add("active");
  if (cards.classList.contains("active")) {
    package1.style.display = "none";
    package2.style.display = "none";
    package3.style.display = "none";
    upBtn.style.display = "none";
    backBtn.style.display = "none";
    cards.style.display = "inline-flex";
  }
});
pkg1.addEventListener("click", () => {
  packageSection.style.height = "100%";
  cards.style.display = "none";
  package2.style.display = "none";
  package3.style.display = "none";
  package1.style.display = "block";
  upBtn.style.display = "block";
  backBtn.style.display = "block";
});

pkg2.addEventListener("click", () => {
  packageSection.style.height = "100%";
  cards.style.display = "none";
  package1.style.display = "none";
  package3.style.display = "none";
  package2.style.display = "block";
  upBtn.style.display = "block";
  backBtn.style.display = "block";
});

pkg3.addEventListener("click", () => {
  packageSection.style.height = "100%";
  cards.style.display = "none";
  package1.style.display = "none";
  package2.style.display = "none";
  package3.style.display = "block";
  upBtn.style.display = "block";
  backBtn.style.display = "block";
});
