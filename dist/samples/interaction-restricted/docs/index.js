/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_interaction_restricted]
function initMap() {
  const center = new google.maps.LatLng({ lat: -25.363, lng: 131.044 });
  const zoom = 4;

  // [START maps_interaction_restricted_mapoptions]
  new google.maps.Map(document.getElementById("map"), {
    zoom,
    center,
    minZoom: zoom - 3,
    maxZoom: zoom + 3,
    restriction: {
      latLngBounds: {
        north: -10,
        south: -40,
        east: 160,
        west: 100,
      },
    },
  });
  // [END maps_interaction_restricted_mapoptions]
}

window.initMap = initMap;
// [END maps_interaction_restricted]
