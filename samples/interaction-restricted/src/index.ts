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

// [START maps_interaction_restricted]
/**
 * This sample sets the gesture handling mode to 'cooperative',
 * which means that on a mobile device, the user must swipe with one
 * finger to scroll the page and two fingers to pan the map.
 */
function initMap(): void {
  const center = new google.maps.LatLng({ lat: -25.363, lng: 131.044 });
  const zoom = 4;

  new google.maps.Map(
    document.getElementById("map")!,
    // [START maps_interaction_restricted_mapoptions]
    {
      zoom,
      center,
      minZoom: zoom - 2,
      maxZoom: zoom + 2,
      restriction: {
        latLngBounds: {
          north: -20,
          south: -30,
          east: 140,
          west: 120,
        },
        strictBounds: true,
      },
    }
    // [END maps_interaction_restricted_mapoptions]
  );
}
// [END maps_interaction_restricted]
export { initMap };
