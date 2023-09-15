import React from "react";

const Checkout = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Booking details</h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span>Cab Type</span>
          <span>Sedan</span>
        </div>
        <div className="flex justify-between">
          <span>Seater</span>
          <span>4-Seater</span>
        </div>
        <div className="flex justify-between">
          <span>Payment</span>
          <span>Apple Pay</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Rate</span>
          <span className="">$40.00</span>
        </div>
      </div>
      <button className="btn-primary mt-6 w-full">Book now</button>
    </div>
  );
};

export default Checkout;
