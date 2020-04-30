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
  // This example requires the Drawing library. Include the libraries=drawing
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=drawing">

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8
    });
    var drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ["marker", "circle", "polygon", "polyline", "rectangle"]
      },
      markerOptions: {
        icon:
          "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
      },
      circleOptions: {
        fillColor: "#ffff00",
        fillOpacity: 1,
        strokeWeight: 5,
        clickable: false,
        editable: true,
        zIndex: 1
      }
    });
    drawingManager.setMap(map);
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));
