// [START maps_places_queryprediction]
// This example retrieves autocomplete predictions programmatically from the
// autocomplete service, and displays them as an HTML list.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initService() {
  const displaySuggestions = function (predictions, status) {
    if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
      alert(status);
      return;
    }
    predictions.forEach((prediction) => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(prediction.description));
      document.getElementById("results").appendChild(li);
    });
  };
  const service = new google.maps.places.AutocompleteService();
  service.getQueryPredictions({ input: "pizza near Syd" }, displaySuggestions);
}
// [END maps_places_queryprediction]
