const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");

function handleNavbar() {
  if (window.scrollY <= 10) {
    navbar.classList.add("transparent");
    navbar.classList.remove("scrolled");

    // Logo blanc
    logo.src = "https://i.postimg.cc/0j9gZn7Z/MAKEM-LOGO-png-modified.png"; // version blanche
  } else {
    navbar.classList.remove("transparent");
    navbar.classList.add("scrolled");

    // Logo noir
    logo.src = "https://i.postimg.cc/Kc9sKn96/MAKEM_LOGO_png.png"; // version noire à fournir
  }
}

// Au chargement
handleNavbar();

// Sur scroll
window.addEventListener("scroll", handleNavbar);
// HERO SLIDER
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
      slide.style.transform = "scale(1)"; // reset zoom
    }
  });
}

// Démarrage
showSlide(currentSlide);

// Changement toutes les 5 secondes
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);
const readMoreBtn = document.querySelector(".read-more-btn");
const textPreview = document.querySelector(".text-preview");

const fullText = textPreview.innerHTML;
const charLimit = 200; // nombre de caractères visibles sur mobile

function checkScreen() {
  if (window.innerWidth <= 768) {
    if(fullText.length > charLimit){
      textPreview.innerHTML = fullText.slice(0, charLimit) + "...";
      readMoreBtn.style.display = "inline-block";
    } else {
      readMoreBtn.style.display = "none";
    }
  } else {
    textPreview.innerHTML = fullText;
    readMoreBtn.style.display = "none";
  }
}

checkScreen();

window.addEventListener("resize", checkScreen);

readMoreBtn.addEventListener("click", () => {
  if (textPreview.innerHTML.length > charLimit) {
    textPreview.innerHTML = fullText;
    readMoreBtn.textContent = "Réduire";
  } else {
    textPreview.innerHTML = fullText.slice(0, charLimit) + "...";
    readMoreBtn.textContent = "Lire la suite";
  }
});
const slider = document.querySelector(".filiales-wrapper");
const dots = document.querySelectorAll(".filiales-dots .dot");

if (slider && dots.length) {
  slider.addEventListener("scroll", () => {
    const cardWidth = slider.querySelector(".filiale-card").offsetWidth + 20;
    const index = Math.round(slider.scrollLeft / cardWidth);

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  });
}
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Merci pour votre message, nous vous répondrons bientôt !");
  this.reset();
});

document.getElementById("newsletterForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Merci pour votre inscription à la newsletter !");
  this.reset();
});

