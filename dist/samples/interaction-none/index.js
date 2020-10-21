// [START maps_interaction_none]
function initMap() {
  const center = { lat: -25.363, lng: 131.044 };
  const zoom = 4;
  new google.maps.Map(
    document.getElementById("map"),
    // [START maps_interaction_none_mapoptions]
    {
      zoom,
      center,
      gestureHandling: "none",
    }
    // [END maps_interaction_none_mapoptions]
  );
}
// [END maps_interaction_none]
