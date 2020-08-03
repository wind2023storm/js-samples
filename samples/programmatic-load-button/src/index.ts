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

// [START maps_programmatic_load_button]
let map: google.maps.Map;

const center = { lat: 41.90476224706472, lng: 12.49822074385094 };
const zoom = 14;

// @ts-ignore google.maps.plugins
const loader = new google.maps.plugins.loader.Loader({
  apiKey: "YOUR_API_KEY",
  version: "weekly"
});

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("wrapper") as HTMLButtonElement;

  wrapper.style.backgroundImage = `url(https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=${zoom}&scale=2&size=${wrapper.clientWidth}x${wrapper.clientHeight}&key=YOUR_API_KEY)`;

  wrapper.addEventListener("click", () => {
    wrapper.remove();

    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center,
        zoom
      });
    });
  });
});

// [END maps_programmatic_load_button]
export {};
