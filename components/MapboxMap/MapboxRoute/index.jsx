import * as React from "react";
import { Source, Layer } from "react-map-gl";

const MapboxRoute = ({ coordinates }) => {
  return (
    <Source
      type="geojson"
      data={{
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: coordinates.geometry.coordinates,
        },
      }}
    >
      <Layer
        type="line"
        layout={{ "line-join": "round", "line-cap": "square" }}
        paint={{ "line-color": "#0462d4", "line-width": 4 }}
      />
    </Source>
  );
};
export default MapboxRoute;

// features: [
//   {
//     type: "Feature",
//     geometry: { type: "Point", coordinates: [-122.4, 37.8] },
//     properties: {},
//   },
// ],
