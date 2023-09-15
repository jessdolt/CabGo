import React, { useState } from "react";
import { paymentList } from "./constants";
import { PaymentMethod } from "./interface";

const PaymentMethod = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelected = (payment: PaymentMethod) => {
    if (selected === payment.id) setSelected(null);
    else setSelected(payment.id);
  };

  return (
    <div>
      <h2 className="text-left text-2xl font-bold mb-6">Payment method</h2>
      <div className="flex justify-center gap-4 ">
        {paymentList.map((payment) => {
          const label = payment.label.includes("_")
            ? payment.label.replace("_", " ")
            : payment.label;

          return (
            <div
              className={`w-20 h-12 outline outline-1 outline-slate-300  flex justify-center items-center cursor-pointer py-2 ${
                selected === payment.id && "outline-2 outline-yellow-400"
              }`}
              onClick={() => handleSelected(payment)}
            >
              <img
                src={payment.image}
                alt=""
                className=" h-full object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentMethod;
