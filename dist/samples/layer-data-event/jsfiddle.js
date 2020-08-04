"use strict";

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: {
      lat: -28,
      lng: 137
    }
  }); // Load GeoJSON.

  map.data.loadGeoJson(
    "https://storage.googleapis.com/maps-devrel/google.json"
  ); // Add some style.

  map.data.setStyle(feature => {
    return (
      /** @type {google.maps.Data.StyleOptions} */
      ({
        fillColor: feature.getProperty("color"),
        strokeWeight: 1
      })
    );
  }); // Set mouseover event for each feature.

  map.data.addListener("mouseover", event => {
    document.getElementById("info-box").textContent = event.feature.getProperty(
      "letter"
    );
  });
}
