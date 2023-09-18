import { Car, CarSeater, CarType } from "./interface";
import SuvImage from "../../public/suv.png";
import SedanImage from "../../public/sedan.png";
import VanImage from "../../public/van.png";

export const carList: Car[] = [
  {
    id: 1,
    label: "4-Seater",
    type: CarType.SEDAN,
    price: 1.06,
    image: SedanImage.src,
    seater: CarSeater.FOUR,
  },
  {
    id: 2,
    label: "6-Seater",
    type: CarType.SUV,
    price: 1.58,
    image: SuvImage.src,
    seater: CarSeater.SIX,
  },
  {
    id: 3,
    label: "14-Seater",
    type: CarType.VAN,
    price: 3.34,
    image: VanImage.src,
    seater: CarSeater.FOURTEEN,
  },
];
