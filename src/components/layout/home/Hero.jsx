import React from "react";
import ProcessLottie from "../../common/ProcessLottie";

const Hero = () => {
  return (
    <div className="h-screen w-full flex items-center flex-col  gap-4 sm:gap-8 2xl:gap-12 justify-center">
      <h1 className="font-semibold text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl sm:mt-16 text-center xl:mt-24">
        Process mapping software
      </h1>
      <p className="text-center w-11/12 sm:w-4/5 lg:w-3/4 xl:w-1/2 text-stone-600">
        Create a clear, easy-to-read visualization of your process using our
        process mapping software.
      </p>
      <div className="sm:-mt-16 2xl:-mt-32 relative -z-10">
        <ProcessLottie />
      </div>
    </div>
  );
};

export default Hero;
