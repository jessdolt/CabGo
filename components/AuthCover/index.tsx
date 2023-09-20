import React from "react";
import Lottie from "lottie-react";
import AnimationData from "@/public/lottie/animation_lmrdgm9i.json";

const AuthCover = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div className="my-auto flex w-full justify-around flex-col lg:flex-row">
        <div className="flex gap-2 flex-col ">
          <div className="flex flex-col justify-center items-center ">
            <div className="-mt-12">
              <img src="/logo_3.png" alt="" />
            </div>
            <p className="xl:-mt-10 lg:-mt-5 text-slate-600 text-center m-4 -mt-6">
              Seamless Rides, Innovative Vibes: CabGo Leading the Way
            </p>
          </div>
          <div className="max-w-[550px] hidden lg:block">
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
