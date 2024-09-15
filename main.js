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
