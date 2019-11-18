/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START maps_marker_remove_script_body]
// In the following example, markers appear when the user clicks on the map.
// The markers are stored in an array.
// The user can then click an option to hide, show or delete the markers.
export var map;
export var markers = [];

export function initMap() {
  var haightAshbury = { lat: 37.769, lng: -122.446 };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: haightAshbury,
    mapTypeId: "terrain"
  });

  // This event listener will call addMarker() when the map is clicked.
  map.addListener("click", function(event) {
    addMarker(event.latLng);
  });

  // Adds a marker at the center of the map.
  addMarker(haightAshbury);
}

// Adds a marker to the map and push to the array.
export function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(marker);
}

// Sets the map on all markers in the array.
export function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
export function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
export function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
export function deleteMarkers() {
  clearMarkers();
  markers = [];
}
// [END maps_marker_remove_script_body]
