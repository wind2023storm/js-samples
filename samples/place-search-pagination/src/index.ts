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

// [START maps_place_search_pagination]
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initMap(): void {
  // Create the map.
  const pyrmont = { lat: -33.866, lng: 151.196 };
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: pyrmont,
      zoom: 17,
    }
  );

  // Create the places service.
  const service = new google.maps.places.PlacesService(map);
  let getNextPage: () => void | false;
  const moreButton = document.getElementById("more") as HTMLButtonElement;

  moreButton.onclick = function () {
    moreButton.disabled = true;

    if (getNextPage) {
      getNextPage();
    }
  };

  // Perform a nearby search.
  service.nearbySearch(
    { location: pyrmont, radius: 500, type: "store" },
    (
      results: google.maps.places.PlaceResult[] | null,
      status: google.maps.places.PlacesServiceStatus,
      pagination: google.maps.places.PlaceSearchPagination | null
    ) => {
      if (status !== "OK" || !results) return;

      createMarkers(results, map);
      moreButton.disabled = !pagination || !pagination.hasNextPage;

      if (pagination && pagination.hasNextPage) {
        getNextPage = pagination.nextPage;
      }
    }
  );
}

function createMarkers(
  places: google.maps.places.PlaceResult[],
  map: google.maps.Map
) {
  const bounds = new google.maps.LatLngBounds();
  const placesList = document.getElementById("places") as HTMLElement;

  for (let i = 0, place; (place = places[i]); i++) {
    if (!place.geometry || !place.geometry.location) continue;

    const image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25),
    };

    new google.maps.Marker({
      map,
      icon: image,
      title: place.name,
      position: place.geometry.location,
    });

    const li = document.createElement("li");
    li.textContent = place.name;
    placesList.appendChild(li);

    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);
}
// [END maps_place_search_pagination]
export { initMap };
