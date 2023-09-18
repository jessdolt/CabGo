import { useContext } from "react";
import {
  BookingContext,
  BookingInitial,
  Coordinates,
} from "./context/BookingProvider";

const useBooking = () => {
  const { from, to, setBooking, coordinates, directionDetail, car, payment } =
    useContext(BookingContext);

  const updateBooking = (value: Partial<BookingInitial>) => {
    setBooking((prevBooking) => ({
      ...prevBooking,
      ...value,
    }));
  };

  const handleUpdateCoordinates = (value: Coordinates) => {
    const { id, longitude, latitude } = value;

    setBooking((prev) => {
      const hasCoordinates = prev.coordinates.find((item) => item.id === id);

      if (!hasCoordinates) {
        return {
          ...prev,
          coordinates: [...prev.coordinates, value],
        };
      }

      const newCoordinates = prev.coordinates.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            longitude,
            latitude,
          };
        }

        return item;
      });

      return {
        ...prev,
        coordinates: newCoordinates,
      };
    });
  };

  return {
    from,
    to,
    car,
    directionDetail,
    updateBooking,
    setBooking,
    coordinates,
    handleUpdateCoordinates,
    payment,
  };
};

export default useBooking;
