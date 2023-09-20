import React from "react";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";

const Ratings = () => {
  const rate = Array(5)
    .fill(0)
    .map((_, i) => i + 1);

  return (
    <div className="flex gap-[2px]">
      {rate.map(() => (
        <SolidStarIcon className="w-5 text-yellow-400" />
      ))}
    </div>
  );
};

export default Ratings;
