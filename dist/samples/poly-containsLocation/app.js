(function(exports) {
  "use strict";

  // [START maps_poly_containsLocation]
  // This example requires the Geometry library. Include the libraries=geometry
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry">
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 24.886,
        lng: -70.269
      },
      zoom: 5
    });
    var triangleCoords = [
      {
        lat: 25.774,
        lng: -80.19
      },
      {
        lat: 18.466,
        lng: -66.118
      },
      {
        lat: 32.321,
        lng: -64.757
      }
    ];
    var bermudaTriangle = new google.maps.Polygon({
      paths: triangleCoords
    });
    google.maps.event.addListener(map, "click", function(e) {
      var resultColor = google.maps.geometry.poly.containsLocation(
        e.latLng,
        bermudaTriangle
      )
        ? "blue"
        : "red";
      var resultPath = google.maps.geometry.poly.containsLocation(
        e.latLng,
        bermudaTriangle
      ) // A triangle.
        ? "m 0 -1 l 1 2 -2 0 z"
        : google.maps.SymbolPath.CIRCLE;
      new google.maps.Marker({
        position: e.latLng,
        map: map,
        icon: {
          path: resultPath,
          fillColor: resultColor,
          fillOpacity: 0.2,
          strokeColor: "white",
          strokeWeight: 0.5,
          scale: 10
        }
      });
    });
  } // [END maps_poly_containsLocation]

  exports.initMap = initMap;
})((this.window = this.window || {}));
