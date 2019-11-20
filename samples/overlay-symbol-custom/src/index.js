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

// [START maps_overlay_symbol_custom]
// This example adds three custom symbols to a polyline.

export function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 20.291, lng: 153.027 },
    mapTypeId: "terrain"
  });

  // [START maps_overlay_symbol_custom_region_polyline]
  // Define the custom symbols. All symbols are defined via SVG path notation.
  // They have varying stroke color, fill color, stroke weight,
  // opacity and rotation properties.
  var symbolOne = {
    path: "M -2,0 0,-2 2,0 0,2 z",
    strokeColor: "#F00",
    fillColor: "#F00",
    fillOpacity: 1
  };

  var symbolTwo = {
    path:
      "M -1,0 A 1,1 0 0 0 -3,0 1,1 0 0 0 -1,0M 1,0 A 1,1 0 0 0 3,0 1,1 0 0 0 1,0M -3,3 Q 0,5 3,3",
    strokeColor: "#00F",
    rotation: 45
  };

  var symbolThree = {
    path: "M -2,-2 2,2 M 2,-2 -2,2",
    strokeColor: "#292",
    strokeWeight: 4
  };

  // Create the polyline and add the symbols via the 'icons' property.
  var line = new google.maps.Polyline({
    path: [{ lat: 22.291, lng: 153.027 }, { lat: 18.291, lng: 153.027 }],
    icons: [
      {
        icon: symbolOne,
        offset: "0%"
      },
      {
        icon: symbolTwo,
        offset: "50%"
      },
      {
        icon: symbolThree,
        offset: "100%"
      }
    ],
    map: map
  });
  // [END maps_overlay_symbol_custom_region_polyline]
}
// [END maps_overlay_symbol_custom]
