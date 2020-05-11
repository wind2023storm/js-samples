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
  // The following example creates a marker in Stockholm, Sweden using a DROP
  // animation. Clicking on the marker will toggle the animation between a BOUNCE
  // animation and no animation.

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: {
        lat: 59.325,
        lng: 18.07
      }
    });
    exports.marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {
        lat: 59.327,
        lng: 18.067
      }
    });
    exports.marker.addListener("click", toggleBounce);
  }

  function toggleBounce() {
    if (exports.marker.getAnimation() !== null) {
      exports.marker.setAnimation(null);
    } else {
      exports.marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  exports.initMap = initMap;
  exports.toggleBounce = toggleBounce;
})((this.window = this.window || {}));
