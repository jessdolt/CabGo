"use client";
import React, { createContext, useState, ReactNode, useMemo } from "react";
import { Car } from "@/components/Cars/interface";
import { PaymentMethod } from "@/components/Payment-Method/interface";

export type Coordinates = {
  id: number;
  longitude: number;
  latitude: number;
};

export type Routes = {
  distance: number;
  duration: number;
  geometry: {
    coordinates: number[][];
    type: string;
  };
};

export interface BookingInitial {
  from: string;
  to: string;
  fromFinal?: string;
  toFinal?: string;
  car?: Car;
  payment?: PaymentMethod;
  coordinates: Coordinates[];
  directionDetail?: Routes;
  resetBooking: () => void;
  setBooking: React.Dispatch<React.SetStateAction<BookingInitial>>;
}

export const bookingInitialvalue = {
  from: "",
  to: "",
  fromFinal: "",
  toFinal: "",
  car: undefined,
  payment: undefined,
  coordinates: [],
  directionDetail: undefined,
  setBooking: () => {},
  resetBooking: () => {},
};

export const BookingContext =
  createContext<BookingInitial>(bookingInitialvalue);

interface BookingProviderProps {
  children: ReactNode;
}

const BookingProvider = ({ children }: BookingProviderProps) => {
  const [booking, setBooking] = useState<BookingInitial>(bookingInitialvalue);

  const resetBooking = () => {
    setBooking(bookingInitialvalue);
  };

  const value = useMemo(
    () => ({ ...booking, resetBooking, setBooking }),
    [booking]
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

export default BookingProvider;
