import { PaymentMethod, PaymentMethodType } from "./interface";
import VisaImage from "../../public/visa.png";
import MasterCardImage from "../../public/mastercard.png";
import PaypalImage from "../../public/paypal.png";
import ApplePayImage from "../../public/apple-pay.png";
import CashImage from "../../public/money.png";

export const paymentList: PaymentMethod[] = [
  {
    id: 1,
    label: PaymentMethodType.MASTERCARD,
    type: PaymentMethodType.MASTERCARD,
    image: MasterCardImage.src,
  },
  {
    id: 2,
    label: PaymentMethodType.VISA,
    type: PaymentMethodType.VISA,
    image: VisaImage.src,
  },
  {
    id: 3,
    label: PaymentMethodType.PAYPAL,
    type: PaymentMethodType.PAYPAL,
    image: PaypalImage.src,
  },
  {
    id: 4,
    label: PaymentMethodType.APPLE_PAY,
    type: PaymentMethodType.APPLE_PAY,
    image: ApplePayImage.src,
  },
  {
    id: 5,
    label: PaymentMethodType.CASH,
    type: PaymentMethodType.CASH,
    image: CashImage.src,
  },
];
