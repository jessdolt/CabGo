import React from "react";
import Lottie from "lottie-react";
import AnimationData from "@/public/lottie/animation_lmrdgm9i.json";

const AuthCover = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div className="my-auto flex w-full justify-around">
        <div className="flex gap-2">
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src="/logo_3.png" alt="" />
            </div>
            <p className="-mt-10 text-slate-600 text-right">
              Seamless Rides, Innovative Vibes: CabGo Leading the Way
            </p>
          </div>
          <div className="max-w-[550px] ">
            <Lottie animationData={AnimationData} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthCover;
