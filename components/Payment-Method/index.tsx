import React, { useEffect, useState } from "react";
import { paymentList } from "./constants";
import { PaymentMethod } from "./interface";
import useBooking from "@/hooks/useBooking";
import Image from "next/image";
import { toast } from "react-toastify";

const PaymentMethod = () => {
  const { updateBooking, payment, directionDetail } = useBooking();

  const [selected, setSelected] = useState<number | null>(null);

  const handleSelected = (payment: PaymentMethod) => {
    if (!directionDetail) {
      toast.error("Please select a destination first");
      return;
    }

    if (selected === payment.id) setSelected(null);
    else setSelected(payment.id);
  };

  useEffect(() => {
    if (selected) {
      const selectedPayment = paymentList.find(
        (payment) => payment.id === selected
      );

      if (!selectedPayment) return;

      updateBooking({
        payment: { ...selectedPayment },
      });
    }
  }, [selected]);

  return (
    <div>
      <h2 className="">Payment method</h2>
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
              key={payment.id}
              onClick={() => handleSelected(payment)}
            >
              <Image
                src={payment.image}
                alt=""
                className=" h-full object-contain"
                width={300}
                height={300}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentMethod;
