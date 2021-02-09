// [START maps_js_geocoding_region_es]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
  });
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: "Toledo" }, (results, status) => {
    if (status === "OK" && results) {
      map.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map,
        position: results[0].geometry.location,
      });
    } else {
      window.alert(
        "Geocode was not successful for the following reason: " + status
      );
    }
  });
}
// [END maps_js_geocoding_region_es]
