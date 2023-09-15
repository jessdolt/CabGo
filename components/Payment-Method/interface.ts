export enum PaymentMethodType {
  MASTERCARD = "mastercard",
  VISA = "visa",
  CASH = "cash",
  PAYPAL = "paypal",
  APPLE_PAY = "apple_pay",
}

export interface PaymentMethod {
  id: number;
  label: string;
  image: string;
  type: PaymentMethodType;
}
