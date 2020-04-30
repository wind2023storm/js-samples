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

  function initMap() {
    // Create a map centered in Pyrmont, Sydney (Australia).
    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: -33.8666,
        lng: 151.1958
      },
      zoom: 15
    }); // Search for Google's office in Australia.

    var request = {
      location: exports.map.getCenter(),
      radius: "500",
      query: "Google Sydney"
    };
    var service = new google.maps.places.PlacesService(exports.map);
    service.textSearch(request, callback);
  } // Checks that the PlacesServiceStatus is OK, and adds a marker
  // using the place ID and location from the PlacesService.

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        map: exports.map,
        place: {
          placeId: results[0].place_id,
          location: results[0].geometry.location
        }
      });
    }
  }

  exports.callback = callback;
  exports.initMap = initMap;
})((this.window = this.window || {}));
