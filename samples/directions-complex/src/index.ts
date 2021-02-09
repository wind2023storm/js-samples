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

// [START maps_directions_complex]
function initMap(): void {
  const markerArray: google.maps.Marker[] = [];

  // Instantiate a directions service.
  const directionsService = new google.maps.DirectionsService();

  // Create a map and center it on Manhattan.
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 13,
      center: { lat: 40.771, lng: -73.974 },
    }
  );

  // Create a renderer for directions and bind it to the map.
  const directionsRenderer = new google.maps.DirectionsRenderer({ map: map });

  // Instantiate an info window to hold step text.
  const stepDisplay = new google.maps.InfoWindow();

  // Display the route between the initial start and end selections.
  calculateAndDisplayRoute(
    directionsRenderer,
    directionsService,
    markerArray,
    stepDisplay,
    map
  );

  // Listen to change events from the start and end lists.
  const onChangeHandler = function () {
    calculateAndDisplayRoute(
      directionsRenderer,
      directionsService,
      markerArray,
      stepDisplay,
      map
    );
  };
  (document.getElementById("start") as HTMLElement).addEventListener(
    "change",
    onChangeHandler
  );
  (document.getElementById("end") as HTMLElement).addEventListener(
    "change",
    onChangeHandler
  );
}

function calculateAndDisplayRoute(
  directionsRenderer: google.maps.DirectionsRenderer,
  directionsService: google.maps.DirectionsService,
  markerArray: google.maps.Marker[],
  stepDisplay: google.maps.InfoWindow,
  map: google.maps.Map
) {
  // First, remove any existing markers from the map.
  for (let i = 0; i < markerArray.length; i++) {
    markerArray[i].setMap(null);
  }

  // Retrieve the start and end locations and create a DirectionsRequest using
  // WALKING directions.
  directionsService.route(
    {
      origin: (document.getElementById("start") as HTMLInputElement).value,
      destination: (document.getElementById("end") as HTMLInputElement).value,
      travelMode: google.maps.TravelMode.WALKING,
    },
    (
      result: google.maps.DirectionsResult | null,
      status: google.maps.DirectionsStatus
    ) => {
      // Route the directions and pass the response to a function to create
      // markers for each step.
      if (status === "OK" && result) {
        (document.getElementById("warnings-panel") as HTMLElement).innerHTML =
          "<b>" + result.routes[0].warnings + "</b>";
        directionsRenderer.setDirections(result);
        showSteps(result, markerArray, stepDisplay, map);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}

function showSteps(
  directionResult: google.maps.DirectionsResult | null,
  markerArray: google.maps.Marker[],
  stepDisplay: google.maps.InfoWindow,
  map: google.maps.Map
) {
  // For each step, place a marker, and add the text to the marker's infowindow.
  // Also attach the marker to an array so we can keep track of it and remove it
  // when calculating new routes.
  const myRoute = directionResult!.routes[0]!.legs[0]!;

  for (let i = 0; i < myRoute.steps.length; i++) {
    const marker = (markerArray[i] =
      markerArray[i] || new google.maps.Marker());
    marker.setMap(map);
    marker.setPosition(myRoute.steps[i].start_location);
    attachInstructionText(
      stepDisplay,
      marker,
      myRoute.steps[i].instructions,
      map
    );
  }
}

function attachInstructionText(
  stepDisplay: google.maps.InfoWindow,
  marker: google.maps.Marker,
  text: string,
  map: google.maps.Map
) {
  google.maps.event.addListener(marker, "click", () => {
    // Open an info window when the marker is clicked on, containing the text
    // of the step.
    stepDisplay.setContent(text);
    stepDisplay.open(map, marker);
  });
}
// [END maps_directions_complex]
export { initMap };
