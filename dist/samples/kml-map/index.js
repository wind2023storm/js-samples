/**
 * @fileoverview Sample showing capturing a KML file click
 *   and displaying the contents in a side panel instead of
 *   an InfoWindow
 */
let map;
const url =
  "https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml";

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(-19.257753, 146.823688),
    zoom: 2,
    mapTypeId: "terrain"
  });
  const kmlLayer = new google.maps.KmlLayer({
    suppressInfoWindows: true,
    preserveViewport: false,
    map,
    url
  });
  kmlLayer.addListener("click", event => {
    const content = event.featureData.infoWindowHtml;
    const testimonial = document.getElementById("capture");
    testimonial.innerHTML = content;
  });
}
