import React, { useState } from "react";
import { Car } from "./interface";
import { carList } from "./constants";

const Cars = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleCarSelect = (car: Car) => {
    if (selected === car.id) setSelected(null);
    else setSelected(car.id);
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-6">Choose your cab</h2>
      <div className="flex justify-center gap-4 ">
        {carList.map((car) => {
          return (
            <div
              className={`w-40 h-40 cursor-pointer p-3 outline outline-slate-200 outline-1 duration-100
               ${selected === car.id && "outline-2 outline-yellow-400"}`}
              onClick={() => handleCarSelect(car)}
            >
              <p className="text-center font-bold text-lg">{car.label}</p>
              <img src={car.image} alt={car.label} className="h-full -mt-6" />
              <p className="-mt-6 text-center font-bold">
                $ {car.price.toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cars;
