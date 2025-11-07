// ========= Typewriter Effect =========
const typewriterText = document.querySelector(".typewriter");
const text = typewriterText.textContent;
typewriterText.textContent = "";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typewriterText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.addEventListener("load", typeWriter);

// ========= Navbar Scroll Glow =========
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(0, 0, 0, 0.8)";
    header.style.boxShadow = "0 0 10px rgba(0, 170, 255, 0.4)";
  } else {
    header.style.background = "rgba(0, 0, 0, 0.4)";
    header.style.boxShadow = "none";
  }
});

// ========= GSAP Animations =========

// Hero Section Animation
gsap.from(".hero-text h1", { duration: 1.2, y: 40, opacity: 0, ease: "power3.out" });
gsap.from(".hero-text h2", { duration: 1.2, y: 40, opacity: 0, delay: 0.3, ease: "power3.out" });
gsap.from(".hero-text p", { duration: 1.2, y: 30, opacity: 0, delay: 0.5, ease: "power3.out" });
gsap.from(".hero-buttons", { duration: 1.2, y: 20, opacity: 0, delay: 0.8, ease: "power3.out" });
gsap.from(".hero-image img", { duration: 1.5, scale: 0.8, opacity: 0, delay: 1, ease: "back.out(1.7)" });

// Floating Animation for Profile Image
gsap.to(".hero-image img", {
  y: 20,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// ========= ScrollTrigger Animations =========
const sections = document.querySelectorAll("section");

sections.forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
    },
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
  });
});

// ========= Background Orbs Animation =========
gsap.to(".orb:nth-child(1)", {
  x: 50,
  y: -30,
  duration: 6,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".orb:nth-child(2)", {
  x: -40,
  y: 50,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".orb:nth-child(3)", {
  x: 60,
  y: 40,
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// ========= Mobile Menu Toggle =========
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

