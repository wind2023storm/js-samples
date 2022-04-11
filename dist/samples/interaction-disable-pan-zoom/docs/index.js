/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_interaction_disable_pan_zoom]
function initMap() {
  const center = { lat: -25.363, lng: 131.044 };
  const zoom = 4;

  // [START maps_interaction_disable_pan_zoom_mapoptions]
  new google.maps.Map(document.getElementById("map"), {
    zoom,
    center,
    gestureHandling: "none",
    zoomControl: false,
  });
  // [END maps_interaction_disable_pan_zoom_mapoptions]
}

window.initMap = initMap;
// [END maps_interaction_disable_pan_zoom]
