"use client";

import Booking from "@/components/Booking/page";
import Cars from "@/components/Cars";
import Checkout from "@/components/Checkout";
import PaymentMethod from "@/components/Payment-Method";
import Map from "react-map-gl";
export default function Home() {
  return (
    <main className="">
      <section className="my-4 h-[80vh]">
        <Booking />
      </section>
      <section className="flex my-4">
        <div className="w-1/2">
          <Map
            mapboxAccessToken={`${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
            initialViewState={{
              longitude: 121.09,
              latitude: 14.58478,
              zoom: 14,
            }}
            style={{ width: 650, height: 620 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          />
        </div>
        <div className="w-1/2 max-w-[500px] mx-auto flex gap-5 flex-col p-4">
          <Cars />
          <PaymentMethod />
          <Checkout />
        </div>
      </section>
    </main>
  );
}
