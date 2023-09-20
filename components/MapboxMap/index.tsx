import React, { useEffect, useRef, useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { MapRef } from "react-map-gl";
import useBooking from "@/hooks/useBooking";
import { retrieveDirections } from "../Booking/services";
import MapboxRoute from "./MapboxRoute";
import Image from "next/image";
import Loading from "./Loading";
import useCheckout from "@/hooks/useCheckout";
const MapboxComponent = () => {
  const mapRef = useRef<MapRef>(null);
  const { coordinates, updateBooking, directionDetail } = useBooking();
  const { loading } = useCheckout();
  const [initialViewState, setInitialViewState] = useState<{
    longitude: number;
    latitude: number;
  }>();

  useEffect(() => {
    function error() {
      alert("Sorry, no position available.");
    }

    const options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };

    function getCurrentLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            setInitialViewState({
              longitude: longitude,
              latitude: latitude,
            });
          },
          error,
          options
        );
      }
    }

    getCurrentLocation();
  }, []);

  const fetchDirections = async () => {
    const t = await retrieveDirections(coordinates);
    updateBooking({ directionDetail: t.routes[0] });
  };

  useEffect(() => {
    if (coordinates.length > 1) {
      mapRef.current?.flyTo({
        center: [coordinates[1].longitude, coordinates[1].latitude],
        duration: 2500,
      });

      fetchDirections();
    }

    if (coordinates.length === 1) {
      mapRef.current?.flyTo({
        center: [coordinates[0].longitude, coordinates[0].latitude],
        duration: 2500,
      });
    }
  }, [coordinates]);

  if (!initialViewState) return <div>Loading...</div>;

  return (
    <div className="relative">
      {loading && <Loading />}

      <Map
        mapboxAccessToken={`${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
        initialViewState={{
          longitude: initialViewState.longitude,
          latitude: initialViewState.latitude,
          zoom: 12,
        }}
        ref={mapRef}
        style={{ width: "100%", height: 650, borderRadius: 10 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker
          longitude={initialViewState.longitude}
          latitude={initialViewState.latitude}
        >
          <div className="flex justify-center flex-col items-center">
            <img src="/personpin.png" className="w-10 h-10" />
            <p>You are here</p>
          </div>
        </Marker>

        {coordinates.map((data) => {
          return (
            <Marker
              longitude={data.longitude}
              latitude={data.latitude}
              key={data.id}
            >
              <img src="/pin.png" className="w-10 h-10" alt="" />
            </Marker>
          );
        })}

        {directionDetail && <MapboxRoute coordinates={directionDetail} />}
      </Map>
    </div>
  );
};

export default MapboxComponent;
