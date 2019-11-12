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

var events = [
  "bounds_changed",
  "center_changed",
  "click",
  "dblclick",
  "drag",
  "dragend",
  "dragstart",
  "heading_changed",
  "idle",
  "maptypeid_changed",
  "mousemove",
  "mouseout",
  "mouseover",
  "projection_changed",
  "resize",
  "rightclick",
  "tilesloaded",
  "tilt_changed",
  "zoom_changed"
];

function setupListener(map, name) {
  var eventRow = document.getElementById(name);
  google.maps.event.addListener(map, name, function() {
    eventRow.className = "event active";
    var timeout = setTimeout(function() {
      eventRow.className = "event inactive";
    }, 1000);
  });
}

function initialize() {
  populateTable();
  var mapDiv = document.getElementById("map");
  var map = new google.maps.Map(mapDiv, {
    center: new google.maps.LatLng(37.4419, -122.1419),
    zoom: 13,
    mapTypeId: "roadmap"
  });
  for (var i = 0; i < events.length; i++) {
    setupListener(map, events[i]);
  }
}

// Dynamically create the table of events from the defined hashmap
function populateTable() {
  var eventsTable = document.getElementById("events");
  var content = "";
  for (var i = 0; i < events.length; i++) {
    content +=
      '<div class="event" id="' + events[i] + '">' + events[i] + "</div>";
  }
  eventsTable.innerHTML = content;
}

// Load the map
google.maps.event.addDomListener(window, "load", initialize);
