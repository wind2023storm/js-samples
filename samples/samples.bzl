
# srcs generated with:
# bazel query "kind(fileinputs, //samples/...)" | awk '{ print "\"" $1 "\"," }' | awk '{a[i++]=$0} END {for (j=i-1; j>=0;) print a[j--] }'

OUTPUTS = [
        "//samples/add-map:outputs",
        "//samples/aerial-rotation:outputs",
        "//samples/aerial-simple:outputs",
        "//samples/circle-simple:outputs",
        "//samples/combining-data:outputs",
        "//samples/conserve-map-on-scroll:outputs",
        "//samples/control-bounds-restriction:outputs",
        "//samples/control-custom:outputs",
        "//samples/control-custom-state:outputs",
        "//samples/control-default:outputs",
        "//samples/control-disableUI:outputs",
        "//samples/control-options:outputs",
        "//samples/control-positioning:outputs",
        "//samples/control-positioning-labels:outputs",
        "//samples/control-replacement:outputs",
        "//samples/control-simple:outputs",
        "//samples/controls-basic-map:outputs",
        "//samples/custom-markers:outputs",
        # "//samples/delete-vertex-menu:outputs",
        "//samples/directions-complex:outputs",
        "//samples/directions-draggable:outputs",
        "//samples/directions-panel:outputs",
        "//samples/directions-simple:outputs",
        "//samples/directions-travel-modes:outputs",
        "//samples/directions-waypoints:outputs",
        "//samples/disable-zoom-and-pan:outputs",
        "//samples/distance-matrix:outputs",
        "//samples/drawing-tools:outputs",
        "//samples/earthquake_circles:outputs",
        "//samples/earthquake_heatmap:outputs",
        "//samples/earthquake_heatmap_weighted:outputs",
        "//samples/earthquake_markers:outputs",
        # "//samples/elevation-paths:outputs",
        "//samples/elevation-simple:outputs",
        "//samples/event-arguments:outputs",
        "//samples/event-closure:outputs",
        "//samples/event-domListener:outputs",
        "//samples/event-poi:outputs",
        "//samples/event-properties:outputs",
        "//samples/event-simple:outputs",
        # "//samples/firebase-map:outputs",
        "//samples/geocoding-component-restriction:outputs",
        "//samples/geocoding-place-id:outputs",
        "//samples/geocoding-region:outputs",
        "//samples/geocoding-reverse:outputs",
        "//samples/geocoding-simple:outputs",
        "//samples/geometry-encodings:outputs",
        "//samples/geometry-headings:outputs",
        "//samples/groundoverlay-simple:outputs",
        "//samples/hiding-features:outputs",
        "//samples/icon-complex:outputs",
        "//samples/icon-simple:outputs",
        "//samples/infowindow-simple:outputs",
        "//samples/infowindow-simple-max:outputs",
        "//samples/interaction-cooperative:outputs",
        "//samples/kml-map:outputs",
        "//samples/landing-page-add-map:outputs",
        "//samples/landing-page-marker-clustering:outputs",
        # "//samples/landing-page-visualize-data:outputs",
        "//samples/layer-bicycling:outputs",
        "//samples/layer-data-dragndrop:outputs",
        "//samples/layer-data-dynamic:outputs",
        "//samples/layer-data-event:outputs",
        "//samples/layer-data-polygon:outputs",
        "//samples/layer-data-quakes:outputs",
        "//samples/layer-data-quakes-red:outputs",
        "//samples/layer-data-quakes-simple:outputs",
        "//samples/layer-data-simple:outputs",
        "//samples/layer-data-style:outputs",
        "//samples/layer-georss:outputs",
        "//samples/layer-heatmap:outputs",
        "//samples/layer-kml:outputs",
        "//samples/layer-kml-features:outputs",
        "//samples/layer-traffic:outputs",
        "//samples/layer-transit:outputs",
        "//samples/legend:outputs",
        "//samples/map-coordinates:outputs",
        # "//samples/map-events:outputs",
        "//samples/map-geolocation:outputs",
        "//samples/map-language:outputs",
        "//samples/map-latlng-literal:outputs",
        "//samples/map-projection-simple:outputs",
        "//samples/map-puzzle:outputs",
        "//samples/map-rtl:outputs",
        "//samples/map-simple:outputs",
        "//samples/map-sync:outputs",
        "//samples/maptype-base:outputs",
        # "//samples/maptype-image:outputs",
        # "//samples/maptype-image-overlay:outputs",
        "//samples/maptype-overlay:outputs",
        "//samples/maptype-styled-simple:outputs",
        "//samples/marker-animations:outputs",
        "//samples/marker-animations-iteration:outputs",
        "//samples/marker-clustering:outputs",
        "//samples/marker-labels:outputs",
        "//samples/marker-remove:outputs",
        "//samples/marker-simple:outputs",
        "//samples/marker-symbol-custom:outputs",
        "//samples/marker-symbol-predefined:outputs",
        "//samples/maxzoom-simple:outputs",
        "//samples/mysql-to-maps:outputs",
        # "//samples/overlay-hideshow:outputs",
        "//samples/overlay-popup:outputs",
        "//samples/overlay-remove:outputs",
        # "//samples/overlay-simple:outputs",
        "//samples/overlay-symbol-animate:outputs",
        "//samples/overlay-symbol-arrow:outputs",
        "//samples/overlay-symbol-custom:outputs",
        "//samples/overlay-symbol-dashed:outputs",
        "//samples/place-details:outputs",
        # "//samples/place-id:outputs",
        "//samples/place-search:outputs",
        "//samples/place-search-pagination:outputs",
        "//samples/places-autocomplete:outputs",
        "//samples/places-autocomplete-addressform:outputs",
        "//samples/places-autocomplete-directions:outputs",
        "//samples/places-autocomplete-hotelsearch:outputs",
        "//samples/places-autocomplete-multiple-countries:outputs",
        "//samples/places-placeid-finder:outputs",
        "//samples/places-placeid-geocoder:outputs",
        "//samples/places-queryprediction:outputs",
        "//samples/places-searchbox:outputs",
        "//samples/poly-containsLocation:outputs",
        "//samples/polygon-arrays:outputs",
        "//samples/polygon-autoclose:outputs",
        "//samples/polygon-draggable:outputs",
        "//samples/polygon-hole:outputs",
        "//samples/polygon-simple:outputs",
        "//samples/polyline-complex:outputs",
        "//samples/polyline-remove:outputs",
        "//samples/polyline-simple:outputs",
        "//samples/rectangle-event:outputs",
        "//samples/rectangle-simple:outputs",
        "//samples/rectangle-zoom:outputs",
        "//samples/streetview-controls:outputs",
        "//samples/streetview-custom-simple:outputs",
        # "//samples/streetview-custom-tiles:outputs",
        "//samples/streetview-embed:outputs",
        "//samples/streetview-events:outputs",
        "//samples/streetview-overlays:outputs",
        "//samples/streetview-service:outputs",
        "//samples/streetview-simple:outputs",
        "//samples/style-array:outputs",
        "//samples/style-selector:outputs",
        "//samples/user-editable-shapes:outputs",
    ]