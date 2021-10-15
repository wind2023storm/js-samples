/*
 * Copyright 2021 Google LLC. All Rights Reserved.
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

// [START maps_react_map]
import * as React from "react";
import * as ReactDom from "react-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const App: React.VFC = () => {
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = React.useState(3);
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });

  const onClick = (e: google.maps.MapMouseEvent) => {
    // avoid directly mutating state
    // eslint-disable-next-line
    setClicks([...clicks, e.latLng!]);
  };

  const onIdle = (m: google.maps.Map) => {
    // eslint-disable-next-line
    setZoom(m.getZoom()!);
    // eslint-disable-next-line
    setCenter(m.getCenter()!.toJSON());
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
        <Map
          center={center}
          onClick={onClick}
          onIdle={onIdle}
          zoom={zoom}
          style={{ flexGrow: "1", height: "100%" }}
        >
          {clicks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))}
        </Map>
      </Wrapper>
      <div
        style={{
          padding: "1rem",
          flexBasis: "250px",
          height: "100%",
          overflow: "auto",
        }}
      >
        <label htmlFor="zoom">Zoom</label>
        <input
          type="number"
          id="zoom"
          name="zoom"
          value={zoom}
          onChange={(event) => setZoom(Number(event.target.value))}
        />
        <br />
        <label htmlFor="lat">Latitude</label>
        <input
          type="number"
          id="lat"
          name="lat"
          value={center.lat}
          onChange={(event) =>
            setCenter({ ...center, lat: Number(event.target.value) })
          }
        />
        <br />
        <label htmlFor="lng">Longitude</label>
        <input
          type="number"
          id="lng"
          name="lng"
          value={center.lng}
          onChange={(event) =>
            setCenter({ ...center, lng: Number(event.target.value) })
          }
        />
        <h3>
          {clicks.length === 0 ? "Click on map to add markers" : "Clicks"}
        </h3>
        {clicks.map((latLng, i) => (
          <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
        ))}
      </div>
    </div>
  );
};

// [START maps_react_map_component]
const Map: React.FC<
  google.maps.MapOptions & {
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    style: { [key: string]: string };
  }
> = ({ onClick, onIdle, children, style, ...options }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current));
    }
  }, [ref]);

  React.useEffect(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  React.useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );
    }

    if (map && onClick) {
      map.addListener("click", onClick);
    }

    if (map && onIdle) {
      map.addListener("idle", () => onIdle(map));
    }
  }, [map, onClick, onIdle]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};
// [END maps_react_map_component]

// [START maps_react_map_marker_component]
const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const marker = new google.maps.Marker();

  React.useEffect(() => {
    marker.setOptions(options);
  }, [marker, options]);

  return null;
};
// [END maps_react_map_marker_component]

window.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.getElementById("root"));
});

// [END maps_react_map]
let PRESERVE_COMMENT_ABOVE; // force tsc to maintain the comment above eslint-disable-line

export {};
