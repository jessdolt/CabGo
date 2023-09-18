"use client";

import Booking from "@/components/Booking";
import Cars from "@/components/Cars";
import Checkout from "@/components/Checkout";
import MapboxComponent from "@/components/MapboxMap";
import PaymentMethod from "@/components/Payment-Method";
export default function Home() {
  return (
    <main className="">
      <section className="my-4 h-[80vh]">
        <Booking />
      </section>
      <section className="flex my-4">
        <div className="w-1/2">
          <MapboxComponent />
        </div>
        <div className="w-1/2 max-w-[500px] mx-auto flex gap-5 flex-col p-4">
          <Cars />
          <PaymentMethod />
          <Checkout />
        </div>
      </section>
      <section className="h-[50vh]"></section>
    </main>
  );
}
