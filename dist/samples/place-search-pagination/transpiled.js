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
  // This example requires the Places library. Include the libraries=places
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

  function initMap() {
    // Create the map.
    var pyrmont = {
      lat: -33.866,
      lng: 151.196
    };
    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: pyrmont,
      zoom: 17
    }); // Create the places service.

    var service = new google.maps.places.PlacesService(exports.map);
    var getNextPage = null;
    var moreButton = document.getElementById("more");

    moreButton.onclick = function() {
      moreButton.disabled = true;
      if (getNextPage) getNextPage();
    }; // Perform a nearby search.

    service.nearbySearch(
      {
        location: pyrmont,
        radius: 500,
        type: ["store"]
      },
      function(results, status, pagination) {
        if (status !== "OK") return;
        createMarkers(results);
        moreButton.disabled = !pagination.hasNextPage;

        getNextPage =
          pagination.hasNextPage &&
          function() {
            pagination.nextPage();
          };
      }
    );
  }

  function createMarkers(places) {
    var bounds = new google.maps.LatLngBounds();
    var placesList = document.getElementById("places");

    for (var i = 0, place; (place = places[i]); i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      var marker = new google.maps.Marker({
        map: exports.map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });
      var li = document.createElement("li");
      li.textContent = place.name;
      placesList.appendChild(li);
      bounds.extend(place.geometry.location);
    }

    exports.map.fitBounds(bounds);
  }

  exports.createMarkers = createMarkers;
  exports.initMap = initMap;
})((this.window = this.window || {}));
