import useBooking from "@/hooks/useBooking";
import React from "react";

const Loading = () => {
  const { fromFinal, to } = useBooking();

  return (
    <div className="absolute z-10 w-full h-full bg-black/70  justify-center items-center  flex flex-col gap-2">
      <div className="bg-white flex flex-col  p-6 rounded-md">
        <img src="/car_driving.gif" alt="" />
        <div className="text-center mb-4 -mt-7">
          <h1 className="text-3xl text-yellow-500 font-bold ">
            Finding a caber
          </h1>
          <p className="text-slate-300">Please wait...</p>
        </div>

        <div className="flex flex-col text-slate-600">
          <p>Pick-up: </p>
          <p className="text-lg font-bold uppercase">{fromFinal}</p>
        </div>
        <div className="flex flex-col text-slate-600">
          <p>Drop-off: </p>
          <p className="text-lg font-bold uppercase">{to}</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
