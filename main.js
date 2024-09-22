function initMap() {
  // Position der Karte (z.B. Berlin)
  var location = { lat: 52.52, lng: 13.405 };
  // Erstellung der Karte im #map Element
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: location,
  });
  // Marker auf die Karte setzen
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade');

  const observerOptions = {
    threshold: 0.2,
  };

  const fadeInOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // Optional: Stop observing once the fade-in is applied
      }
    });
  };

  const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// nav
// document.addEventListener('DOMContentLoaded', () => {
//   const nav = document.querySelector('nav');
//   nav.classList.add('fade-in');
// });

let lastScrollTop = 0;
const nav = document.querySelector('nav');

// Beim Laden der Seite wird die Klasse 'show' nach einer kleinen Verzögerung gesetzt
window.addEventListener('load', () => {
  setTimeout(() => {
    nav.classList.add('show'); // Navigation reinfaden
  }, 100); // Kleine Verzögerung für sanfteres Laden
});

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Runterscrollen - Navigation ausblenden
    nav.classList.add('hide');
    nav.classList.remove('show');
  } else {
    // Hochscrollen - Navigation einblenden
    nav.classList.add('show');
    nav.classList.remove('hide');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Fix für mobiles Scrollen
});

// google btn
document.querySelector('.Kontakt_btn').addEventListener('click', function () {
  const background = document.querySelector('.Kontakt_bg');
  background.style.opacity = '0'; // Setzt die Opazität des Hintergrundbildes auf 0
  background.style.pointerEvents = 'none'; // Ermöglicht Interaktionen mit der Karte
  this.style.display = 'none'; // Versteckt den Button
});
