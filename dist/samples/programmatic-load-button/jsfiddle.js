"use strict";

let map;
const center = {
  lat: 41.90476224706472,
  lng: 12.49822074385094
};
const zoom = 14;
const url = "https://maps.googleapis.com/maps/api/staticmap";
const loader = new google.maps.plugins.loader.Loader({
  apiKey: "AIzaSyCPJpjD-qcR_yIxJnS8maR5W9KB0E3EzYI",
  version: "weekly"
});
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("wrapper");
  wrapper.style.backgroundImage = `url(${url}?center=${center.lat},${center.lng}&zoom=${zoom}&scale=2&size=${wrapper.clientWidth}x${wrapper.clientHeight}&key=AIzaSyCPJpjD-qcR_yIxJnS8maR5W9KB0E3EzYI)`;
  wrapper.addEventListener("click", () => {
    wrapper.remove();
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map"), {
        center,
        zoom
      });
    });
  });
});
