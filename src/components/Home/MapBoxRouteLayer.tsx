"use client";

import { useAppSelector } from "@/redux/hooks";
import { Layer, Source } from "react-map-gl/mapbox";

function MapBoxRouteLayer() {
  const { coordinateRoutes } = useAppSelector((store) => store.rideGlobalState);

  if (
    !coordinateRoutes ||
    !Array.isArray(coordinateRoutes) ||
    coordinateRoutes.length === 0
  ) {
    return null;
  }

  return (
    <Source
      type="geojson"
      data={{
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: coordinateRoutes
        }
      }}>
      <Layer
        id="line"
        type="line"
        layout={{
          "line-cap": "square",
          "line-join": "round"
        }}
        paint={{
          "line-color": "#0462d4",
          "line-width": 4
        }}
      />
    </Source>
  );
}

export default MapBoxRouteLayer;
