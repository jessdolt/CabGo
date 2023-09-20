import React from "react";
import { PaperAirplaneIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Ratings from "./Ratings";
import useCheckout from "@/hooks/useCheckout";
import { confirmAlert } from "react-confirm-alert";
import styles from "../Checkout.module.css";

const Driver = () => {
  const { driver: driverData, resetCheckout } = useCheckout();

  const d = driverData;

  if (d === null) return null;

  const handleCancelBooking = () => {
    confirmAlert({
      title: "Confirm booking",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            resetCheckout();
          },
        },
        {
          label: "No",
        },
      ],
      overlayClassName: styles.overlay,
    });
  };

  return (
    <div className="flex flex-col  border rounded-md p-4 gap-2">
      <h2 className="text-yellow-500 !text-left mb-1">You found a caber!</h2>
      <div className="flex gap-4">
        <div className="w-[100px] h-[100px] rounded-full ">
          <img src={d.image} alt={d.name} className="rounded-full" />
        </div>
        <div className="flex flex-col justify-around">
          <p className="capitalize text-lg">{d.name}</p>
          <p className="text-slate-900 flex gap-4 items-center">
            <span>{d.plateNo}</span>●<span>{d.carModel}</span>
          </p>

          <p className="flex gap-2 items-center">
            <PhoneIcon className="w-5" />
            {d.contactNo}
          </p>
          <Ratings />
        </div>
      </div>

      <p className="text-slate-400 text-sm text-center mt-1">
        Your driver&#39;s been vaccinated against COVID-19.
      </p>

      <div className="flex w-full  mx-auto gap-2">
        <input
          className="outline-none border text-slate-900 p-2 w-full"
          placeholder="Chat with your caber"
        />
        <button className="btn-primary">
          <PaperAirplaneIcon className="w-4" />
        </button>
      </div>

      <div className="flex flex-col gap-2 mt-1">
        <button className="btn btn-primary">Call Driver</button>
        <button
          className="btn btn-secondary hover:text-red-600 duration-100"
          onClick={() => handleCancelBooking()}
        >
          Cancel Booking
        </button>
      </div>
    </div>
  );
};

export default Driver;
