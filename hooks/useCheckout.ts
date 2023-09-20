import { useContext } from "react";
import {
  CheckoutContext,
  checkoutInititalValue,
} from "./context/CheckoutProvider";
import useBooking from "./useBooking";
import { bookingInitialvalue } from "./context/BookingProvider";

const useCheckout = () => {
  const { setBooking } = useBooking();

  const { loading, setCheckout, driver } = useContext(CheckoutContext);

  const resetCheckout = () => {
    setCheckout(checkoutInititalValue);
    setBooking(bookingInitialvalue);
    console.log("hit");
  };

  return { loading, setCheckout, driver, resetCheckout };
};

export default useCheckout;
