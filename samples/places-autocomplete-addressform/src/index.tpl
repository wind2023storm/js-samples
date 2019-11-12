<!--
Copyright 2019 Google LLC. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
{% extends '../../../shared/layout.tpl'%} {% block external %}
<link
  type="text/css"
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
/>
{% endblock %} {% block html %}
<!-- [START html-body] -->
<div id="locationField">
  <input
    id="autocomplete"
    placeholder="Enter your address"
    onFocus="geolocate()"
    type="text"
  />
</div>

<!-- Note: The address components in this sample are typical. You might need to adjust them for
               the locations relevant to your app. For more information, see
         https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
    -->

<table id="address">
  <tr>
    <td class="label">Street address</td>
    <td class="slimField">
      <input class="field" id="street_number" disabled="true" />
    </td>
    <td class="wideField" colspan="2">
      <input class="field" id="route" disabled="true" />
    </td>
  </tr>
  <tr>
    <td class="label">City</td>
    <td class="wideField" colspan="3">
      <input class="field" id="locality" disabled="true" />
    </td>
  </tr>
  <tr>
    <td class="label">State</td>
    <td class="slimField">
      <input class="field" id="administrative_area_level_1" disabled="true" />
    </td>
    <td class="label">Zip code</td>
    <td class="wideField">
      <input class="field" id="postal_code" disabled="true" />
    </td>
  </tr>
  <tr>
    <td class="label">Country</td>
    <td class="wideField" colspan="3">
      <input class="field" id="country" disabled="true" />
    </td>
  </tr>
</table>

<!-- [END html-body] -->

{% endblock %}
