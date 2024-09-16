function initMap() {
  // Position der Karte (z.B. Berlin)
  var location = { lat: 52.52, lng: 13.405 };
  // Erstellung der Karte im #map Element
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
  });
  // Marker auf die Karte setzen
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade");

  const observerOptions = {
    threshold: 0.2,
  };

  const fadeInOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
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
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  nav.classList.add("fade-in");
});
