import useBooking from "@/hooks/useBooking";
import React from "react";

const Details = () => {
  const { fromFinal, toFinal, payment, car } = useBooking();

  return (
    <div className="p-4 pb-5 rounded-md border">
      <h2 className="mb-2 text-xl">Booking Details</h2>
      <div className="flex flex-col ">
        <p>Pick-up: </p>
        <p className="text-lg font-bold capitalize">{fromFinal}</p>
      </div>
      <div className="flex flex-col ">
        <p>Drop-off: </p>
        <p className="text-lg font-bold capitalize">{toFinal}</p>
      </div>
      <div className="flex flex-col ">
        <p>Payment Method: </p>
        <p className="text-lg font-bold capitalize">{payment?.label}</p>
      </div>
      <div className="flex flex-col ">
        <p>Rate: </p>
        <p className="text-lg font-bold capitalize">
          $ {car?.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Details;
