"use client";

import Booking from "@/components/Booking";
import Cars from "@/components/Cars";
import Checkout from "@/components/Checkout";
import Details from "@/components/Checkout/Details";
import Driver from "@/components/Checkout/Driver";
import MapboxComponent from "@/components/MapboxMap";
import PaymentMethod from "@/components/Payment-Method";
import useCheckout from "@/hooks/useCheckout";

export default function Home() {
  const { driver } = useCheckout();

  return (
    <main className="">
      <section className="my-4 h-[80vh]">
        <Booking />
      </section>
      <section
        className="flex flex-col md:flex-row gap-4 my-4 "
        id="booking-section"
      >
        <div className="w-full md:w-1/2">
          <MapboxComponent />
        </div>

        {!driver ? (
          <div className="w-full md:w-1/2 max-w-[500px] mx-auto flex gap-5 flex-col md:px-4">
            <Cars />
            <PaymentMethod />
            <Checkout />
          </div>
        ) : (
          <div className="w-full md:w-1/2 max-w-[450px] mx-auto flex gap-2 flex-col">
            <Driver />
            <Details />
          </div>
        )}
      </section>
      <section className="h-[20vh]"></section>
    </main>
  );
}
