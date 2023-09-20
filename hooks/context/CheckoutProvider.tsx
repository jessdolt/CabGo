"use client";
import { Driver } from "@/components/Checkout/Driver/interface";
import React, { createContext, useState, ReactNode, useMemo } from "react";

export interface CheckoutInitial {
  loading: boolean;
  setCheckout: React.Dispatch<React.SetStateAction<CheckoutInitial>>;
  driver: Driver | null;
}

export const checkoutInititalValue = {
  loading: false,
  driver: null,
  setCheckout: () => {},
};

export const CheckoutContext = createContext<CheckoutInitial>(
  checkoutInititalValue
);

const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [checkout, setCheckout] = useState<CheckoutInitial>(
    checkoutInititalValue
  );

  const resetCheckout = () => {
    setCheckout(checkoutInititalValue);
  };

  const value = useMemo(
    () => ({ ...checkout, resetCheckout, setCheckout }),
    [checkout]
  );

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
