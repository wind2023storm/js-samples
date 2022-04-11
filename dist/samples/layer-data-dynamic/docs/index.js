/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_layer_data_dynamic]
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -28, lng: 137 },
  });
  // Load GeoJSON.
  map.data.loadGeoJson(
    "https://storage.googleapis.com/mapsdevsite/json/google.json"
  );
  // [START maps_layer_data_dynamic_snippet]
  // Color each letter gray. Change the color when the isColorful property
  // is set to true.
  map.data.setStyle((feature) => {
    let color = "gray";

    if (feature.getProperty("isColorful")) {
      color = feature.getProperty("color");
    }
    return /** @type {!google.maps.Data.StyleOptions} */ {
      fillColor: color,
      strokeColor: color,
      strokeWeight: 2,
    };
  });
  // When the user clicks, set 'isColorful', changing the color of the letters.
  map.data.addListener("click", (event) => {
    event.feature.setProperty("isColorful", true);
  });
  // When the user hovers, tempt them to click by outlining the letters.
  // Call revertStyle() to remove all overrides. This will use the style rules
  // defined in the function passed to setStyle()
  map.data.addListener("mouseover", (event) => {
    map.data.revertStyle();
    map.data.overrideStyle(event.feature, { strokeWeight: 8 });
  });
  map.data.addListener("mouseout", (event) => {
    map.data.revertStyle();
  });
  // [END maps_layer_data_dynamic_snippet]
}

window.initMap = initMap;
// [END maps_layer_data_dynamic]
