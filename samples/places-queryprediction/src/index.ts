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

// [START maps_places_queryprediction]
let PRESERVE_COMMENT_ABOVE; // force tsc to maintain the comment above eslint-disable-line
// This example retrieves autocomplete predictions programmatically from the
// autocomplete service, and displays them as an HTML list.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initService() {
  const displaySuggestions = function (
    predictions: google.maps.places.QueryAutocompletePrediction[] | null,
    status: google.maps.places.PlacesServiceStatus
  ) {
    if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
      alert(status);
      return;
    }

    predictions.forEach((prediction) => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(prediction.description));
      (document.getElementById("results") as HTMLUListElement).appendChild(li);
    });
  };

  const service = new google.maps.places.AutocompleteService();
  service.getQueryPredictions({ input: "pizza near Syd" }, displaySuggestions);
}
// [END maps_places_queryprediction]
export { initService };
