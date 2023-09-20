import useBooking from "@/hooks/useBooking";
import { calculateETA } from "@/utils";
import React, { useEffect, useRef, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import styles from "./Checkout.module.css";
import useCheckout from "@/hooks/useCheckout";
import { driverList } from "./Driver/contants";
import { Driver } from "./Driver/interface";

type CancelController = {
  signal: AbortSignal;
  abort: () => void;
};

const Checkout = () => {
  const { loading, setCheckout } = useCheckout();
  const { car, payment, directionDetail } = useBooking();

  const etaValue = directionDetail ? calculateETA(directionDetail.duration) : 0;
  const paymentType = payment ? payment.type.split("_").join(" ") : "N/A";
  const isValid = car && payment && directionDetail;

  const [cancelController, setCancelController] =
    useState<CancelController | null>(null);

  const testAwait = async (signal: AbortSignal) => {
    return new Promise<Driver>((resolve, reject) => {
      const t = driverList[Math.floor(Math.random() * driverList.length)];

      const timer = setTimeout(
        () => {
          if (signal.aborted) {
            reject("Booking cancelled");
          } else {
            resolve(t);
          }
        },
        signal.aborted ? 0 : 3000
      );

      return () => clearTimeout(timer);
    });
  };

  const fetchDriver = async () => {
    setCheckout((prev) => ({ ...prev, loading: true }));
    try {
      const controller = new AbortController();
      setCancelController(controller);

      const response = await testAwait(controller.signal);

      setCheckout((prev) => ({ ...prev, driver: response as Driver }));
    } catch (e) {
      console.log(e);
    } finally {
      setCheckout((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleBooking = () => {
    confirmAlert({
      title: "Confirm booking",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            if (cancelController) {
              cancelController.abort(); // Cancel the fetch if it's in progress
              setCancelController(null);
            }
            fetchDriver();
          },
        },
        {
          label: "No",
        },
      ],
      overlayClassName: styles.overlay,
    });
  };

  const handleCancelBookingClick = () => {
    if (cancelController) {
      cancelController.abort(); // Cancel the fetch if it's in progress
      setCancelController(null);
    }
  };

  useEffect(() => {
    return () => {
      if (cancelController) {
        cancelController.abort(); // Ensure cancellation on component unmount
      }
    };
  }, [cancelController]);

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
      {!loading ? (
        <button
          className="btn-primary mt-6 w-full"
          disabled={isValid === undefined ? true : false}
          onClick={() => handleBooking()}
        >
          Book now
        </button>
      ) : (
        <button
          className="btn-primary mt-6 w-full bg-red-500"
          onClick={() => handleCancelBookingClick()}
        >
          Cancel booking
        </button>
      )}
    </div>
  );
};

export default Checkout;
