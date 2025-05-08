// global variables
const burger = document.querySelector(".Burger");
const nav = document.querySelector("nav");
const kontaktMap = document.querySelector(".Kontakt_map");
const kontaktBtn = document.querySelector(".Kontakt_btn");
const kontaktBg = document.querySelector(".Kontakt_bg");
const counter = document.querySelector(".Ueberuns_counter");
const badge = document.querySelector(".Ueberuns_badge");

// Burger Navigation
if (burger && nav) {
  burger.addEventListener("click", function () {
    nav.classList.toggle("open");
    burger.classList.toggle("active");
  });
}

// Global fade-in animation
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade");
  const slideLeftElement = document.querySelector(".slide-left");

  const observerOptions = { threshold: 0.2 };

  const fadeInOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);
  sections.forEach((section) => observer.observe(section));

  // Slide-left observer
  if (slideLeftElement) {
    const slideLeftObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-left-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    slideLeftObserver.observe(slideLeftElement);
  }

  // Counter
  if (counter && badge) {
    let count = 0;
    const target = 30;
    const speed = 100;

    const updateCounter = () => {
      if (count < target) {
        count++;
        counter.textContent = count;
        setTimeout(updateCounter, speed);
      } else {
        counter.textContent = target;
      }
    };

    const counterObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCounter();
        counterObserver.disconnect();
      }
    });

    counterObserver.observe(badge);
  }
});

// nav show/hide logic
document.addEventListener("DOMContentLoaded", function () {
  const stickyIcon = document.querySelector(".sticky-icon");

  if (nav) {
    nav.classList.add("hidden"); // Startzustand direkt setzen
    setTimeout(() => {
      nav.classList.remove("hidden");
      nav.classList.add("show");
      setupScrollHandling();
    }, 100); // kleine Verzögerung für ein sanftes Einblenden
  }

  if (stickyIcon) {
    stickyIcon.style.opacity = "1";
  }
});

// Scroll handling
function setupScrollHandling() {
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (!nav) return;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      nav.classList.add("hide");
      nav.classList.remove("show");
    } else {
      nav.classList.add("show");
      nav.classList.remove("hide");
    }
    lastScrollTop = Math.max(0, scrollTop);

    // Paralax scroll
    const leistungenSection = document.querySelector(".Leistungen");
    if (leistungenSection && window.innerWidth > 1022) {
      // Überprüft, ob es sich nicht um ein mobiles Gerät handelt (z.B. Bildschirmbreite > 768px)
      window.addEventListener("scroll", function () {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        leistungenSection.style.backgroundPositionY = `${scrollTop * 0.5}px`;
      });
    }
  });
}

// google btn
document.querySelector(".Kontakt_map").addEventListener("click", function () {
  const btn = document.querySelector(".Kontakt_btn");
  const background = document.querySelector(".Kontakt_bg");
  background.style.opacity = "0";
  background.style.pointerEvents = "none";
  btn.style.display = "none";
});
