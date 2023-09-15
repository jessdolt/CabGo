export enum CarType {
  SEDAN = "sedan",
  SUV = "suv",
  VAN = "van",
}

export enum CarSeater {
  FOUR = 4,
  SIX = 6,
  FOURTEEN = 14,
}

export interface Car {
  id: number;
  label: string;
  type: CarType;
  price: number;
  seater: CarSeater;
  image?: string;
}
