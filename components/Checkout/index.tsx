import useBooking from "@/hooks/useBooking";
import { calculateETA } from "@/utils";
import React from "react";

const Checkout = () => {
  const { car, payment, directionDetail } = useBooking();

  const etaValue = directionDetail ? calculateETA(directionDetail.duration) : 0;
  const paymentType = payment ? payment.type.split("_").join(" ") : "N/A";

  return (
    <div className="">
      <h2 className="mb-4">Booking details</h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span>Cab Type</span>
          <span className="capitalize">{car ? car.type : "N/A"}</span>
        </div>
        <div className="flex justify-between">
          <span>Seater</span>
          <span className="capitalize">{car ? car.label : "N/A"}</span>
        </div>
        <div className="flex justify-between">
          <span>Payment</span>
          <span className="capitalize">{paymentType}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Time of Arrival (ETA)</span>
          <span className="capitalize">{etaValue}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Rate</span>
          <span className="">
            {car ? `$ ${car.price.toFixed(2)}` : "$ 0.00"}
          </span>
        </div>
      </div>
      <button className="btn-primary mt-6 w-full">Book now</button>
    </div>
  );
};

export default Checkout;
