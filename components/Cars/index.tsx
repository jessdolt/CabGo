import React, { useEffect, useState } from "react";
import { Car } from "./interface";
import { carList } from "./constants";
import useBooking from "@/hooks/useBooking";

const Cars = () => {
  const { from, to, directionDetail, updateBooking, car } = useBooking();
  const [selected, setSelected] = useState<number | null>(null);

  const ratePerkm = 0.35;
  const priceRate = directionDetail
    ? (directionDetail.distance / 1000) * ratePerkm
    : 1;

  useEffect(() => {
    if (selected) {
      const selectedCar = carList.find((car) => car.id === selected);

      if (!selectedCar) return;

      updateBooking({
        car: { ...selectedCar, price: priceRate * selectedCar.price },
      });
    }
  }, [selected]);

  const handleCarSelect = (car: Car) => {
    if (selected === car.id) setSelected(null);
    else setSelected(car.id);
  };

  const getPrice = (price: number) => {
    return `$ ${(priceRate * price).toFixed(2)}`;
  };

  return (
    <div className="">
      <h2>Choose your cab</h2>
      <div className="flex justify-center gap-4 ">
        {carList.map((car) => {
          return (
            <div
              className={`w-40 h-40 cursor-pointer p-3 outline outline-slate-200 outline-1 duration-100
               ${selected === car.id && "outline-2 outline-yellow-400"}`}
              onClick={() => handleCarSelect(car)}
              key={car.id}
            >
              <p className="text-center font-bold text-lg">{car.label}</p>
              <img src={car.image} alt={car.label} className="h-full -mt-6" />
              <p className="-mt-6 text-center font-bold">
                {from && to && directionDetail && getPrice(car.price)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cars;
