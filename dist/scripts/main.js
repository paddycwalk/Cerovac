console.log("loaded");

// global animation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade");
  const slideLeftElement = document.querySelector(".slide-left");

  const observerOptions = {
    threshold: 0.2,
  };

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
  const slideLeftObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-left-in");
        observer.unobserve(entry.target); // Optional: Stop observing once the slide-in is applied
      }
    });
  }, observerOptions);

  slideLeftObserver.observe(slideLeftElement);
});

// nav
let lastScrollTop = 0;
const nav = document.querySelector("nav");

// Beim Laden der Seite wird die Klasse 'show' nach einer kleinen Verzögerung gesetzt
window.addEventListener("load", () => {
  setTimeout(() => {
    nav.classList.add("show"); // Navigation reinfaden
  }, 100); // Kleine Verzögerung für sanfteres Laden
});

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Runterscrollen - Navigation ausblenden
    nav.classList.add("hide");
    nav.classList.remove("show");
  } else {
    // Hochscrollen - Navigation einblenden
    nav.classList.add("show");
    nav.classList.remove("hide");
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Fix für mobiles Scrollen
});

// google btn
document.querySelector(".Kontakt_map").addEventListener("click", function () {
  const btn = document.querySelector(".Kontakt_btn");
  const background = document.querySelector(".Kontakt_bg");
  background.style.opacity = "0";
  background.style.pointerEvents = "none";
  btn.style.display = "none";
});

// counter
document.addEventListener("DOMContentLoaded", function () {
  const counter = document.querySelector(".Ueberuns_counter");
  let count = 0;
  const target = 25;
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

  const observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      updateCounter();
      observer.disconnect();
    }
  });

  observer.observe(document.querySelector(".Ueberuns_badge"));
});

// Paralax
window.addEventListener("scroll", function () {
  const leistungenSection = document.querySelector(".Leistungen");
  const scrollPosition = window.scrollY;

  // Modify the background position based on the scroll position
  leistungenSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// sticky cta
window.addEventListener("load", () => {
  const stickyIcon = document.querySelector(".sticky-icon");
  stickyIcon.style.opacity = "1"; // Setzt die Opazität auf 1
});
