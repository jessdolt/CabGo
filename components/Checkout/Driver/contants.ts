import { Driver } from "./interface";
import JapImage from "../../../public/jap.png";
import PaoImage from "../../../public/pao.jpg";
import BasteImage from "../../../public/baste.jpg";

export const driverList: Driver[] = [
  {
    id: 1,
    name: "Francis Guadalupe",
    image: JapImage.src,
    carModel: "Ford Ranger 2023",
    contactNo: "0912 3574 4477",
    plateNo: "SPN34N",
  },
  {
    id: 2,
    name: "Paolo Gutierrez",
    image: PaoImage.src,
    carModel: "Ford Mustang GT 2023",
    contactNo: "0969 3423 7582",
    plateNo: "HIJ932",
  },
  {
    id: 3,
    name: "Sebastian Vettel",
    image: BasteImage.src,
    carModel: "Ferrari F1 Racing Car",
    contactNo: "0983 4519 3854",
    plateNo: "QZY333",
  },
];
