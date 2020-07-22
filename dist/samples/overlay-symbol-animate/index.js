// This example adds an animated symbol to a polyline.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20.291, lng: 153.027 },
    zoom: 6,
    mapTypeId: "terrain"
  });
  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  const lineSymbol = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 8,
    strokeColor: "#393"
  };
  // Create the polyline and add the symbol to it via the 'icons' property.
  const line = new google.maps.Polyline({
    path: [
      { lat: 22.291, lng: 153.027 },
      { lat: 18.291, lng: 153.027 }
    ],
    icons: [
      {
        icon: lineSymbol,
        offset: "100%"
      }
    ],
    map: map
  });
  animateCircle(line);
}

// Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals.
function animateCircle(line) {
  let count = 0;
  window.setInterval(() => {
    count = (count + 1) % 200;
    const icons = line.get("icons");
    icons[0].offset = count / 2 + "%";
    line.set("icons", icons);
  }, 20);
}
