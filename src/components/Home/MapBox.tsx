"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useRef } from "react";
import Map, { Marker, useMap } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaLocationDot } from "react-icons/fa6";
import { showCoordinateRoute } from "@/redux/rideSlice/rideSlice";
import MapBoxRouteLayer from "./MapBoxRouteLayer";

function MapBox() {
  const { startLat, startLong, endLat, endLong } = useAppSelector(
    (store) => store.rideGlobalState
  );
  const dispatch = useAppDispatch();
  const { current: map } = useMap();

  useEffect(() => {
    navigatorStart();
    const clear = setTimeout(() => {
      getCoords();
    }, 2000);

    return () => clearTimeout(clear);
  }, [startLat, startLong]);

  useEffect(() => {
    navigatorEnd();
  }, [endLat, endLong]);

  function navigatorStart() {
    map?.flyTo({
      center: [startLat, startLong],
      duration: 2500
    });
  }

  function navigatorEnd() {
    map?.flyTo({
      center: [endLat, endLong]
    });
  }

  function getCoords() {
    dispatch(showCoordinateRoute({ startLong, startLat, endLong, endLat }));
  }

  return (
    <div>
      <div className="rounded-[1%]">
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: startLong,
            latitude: startLat,
            zoom: 14
          }}
          style={{ width: 600, height: 300 }}
          mapStyle="mapbox://styles/mapbox/streets-v9">
          {/* Start Address */}
          <Marker longitude={startLong} latitude={startLat} anchor="bottom">
            <FaLocationDot className="text-green-700" />
          </Marker>

          {/* End Address */}
          <Marker longitude={endLong} latitude={endLat} anchor="bottom">
            <FaLocationDot className="text-red-700" />
          </Marker>

          <MapBoxRouteLayer />
        </Map>
      </div>
    </div>
  );
}

export default MapBox;
