import React from "react";
import { WrapperProps } from "./interface";

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="max-w-[1280px] w-full mx-auto px-4">{children}</div>;
};

export default Wrapper;
