(function(exports) {
  "use strict";
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
  // This example adds a user-editable rectangle to the map.
  // When the user changes the bounds of the rectangle,
  // an info window pops up displaying the new bounds.

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 44.5452,
        lng: -78.5389
      },
      zoom: 9
    });
    var bounds = {
      north: 44.599,
      south: 44.49,
      east: -78.443,
      west: -78.649
    }; // Define the rectangle and set its editable property to true.

    exports.rectangle = new google.maps.Rectangle({
      bounds: bounds,
      editable: true,
      draggable: true
    });
    exports.rectangle.setMap(exports.map); // Add an event listener on the rectangle.

    exports.rectangle.addListener("bounds_changed", showNewRect); // Define an info window on the map.

    exports.infoWindow = new google.maps.InfoWindow();
  } // Show the new coordinates for the rectangle in an info window.

  /** @this {google.maps.Rectangle} */

  function showNewRect(event) {
    var ne = exports.rectangle.getBounds().getNorthEast();
    var sw = exports.rectangle.getBounds().getSouthWest();
    var contentString =
      "<b>Rectangle moved.</b><br>" +
      "New north-east corner: " +
      ne.lat() +
      ", " +
      ne.lng() +
      "<br>" +
      "New south-west corner: " +
      sw.lat() +
      ", " +
      sw.lng(); // Set the info window's content and position.

    exports.infoWindow.setContent(contentString);
    exports.infoWindow.setPosition(ne);
    exports.infoWindow.open(exports.map);
  }

  exports.initMap = initMap;
  exports.showNewRect = showNewRect;
})((this.window = this.window || {}));
