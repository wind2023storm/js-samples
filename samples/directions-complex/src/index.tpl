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
{% extends '../../../shared/layout.tpl'%} {% block html %}
<!-- [START html-body] -->
<div id="floating-panel">
  <b>Start: </b>
  <select id="start">
    <option value="penn station, new york, ny">Penn Station</option>
    <option value="grand central station, new york, ny"
      >Grand Central Station</option
    >
    <option value="625 8th Avenue, New York, NY, 10018"
      >Port Authority Bus Terminal</option
    >
    <option value="staten island ferry terminal, new york, ny"
      >Staten Island Ferry Terminal</option
    >
    <option value="101 E 125th Street, New York, NY"
      >Harlem - 125th St Station</option
    >
  </select>
  <b>End: </b>
  <select id="end">
    <option value="260 Broadway New York NY 10007">City Hall</option>
    <option value="W 49th St & 5th Ave, New York, NY 10020"
      >Rockefeller Center</option
    >
    <option value="moma, New York, NY">MOMA</option>
    <option value="350 5th Ave, New York, NY, 10118"
      >Empire State Building</option
    >
    <option value="253 West 125th Street, New York, NY">Apollo Theater</option>
    <option value="1 Wall St, New York, NY">Wall St</option>
  </select>
</div>
<div id="map"></div>
&nbsp;
<div id="warnings-panel"></div>
<!-- [END html-body] -->
{% endblock %}
