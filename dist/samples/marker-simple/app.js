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
  // [START maps_marker_simple]
  function initMap() {
    var myLatLng = {
      lat: -25.363,
      lng: 131.044
    };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng
    });
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Hello World!"
    });
  } // [END maps_marker_simple]

  exports.initMap = initMap;
})((this.window = this.window || {}));
