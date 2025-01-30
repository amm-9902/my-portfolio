import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="px-20 py-8 h-screen flex items-center gap-16 relative">
      <Image
        alt="profile"
        src={"/svgs/background/tri.svg"}
        width={1920}
        height={1080}
        className="w-full h-full absolute -z-20 top-0 left-0 object-cover  opacity-60 shadow-fadeout "
      />
      <div className="w-full h-full absolute top-0 left-0 -z-10 fadeout-background" />
      <div className="flex flex-col gap-6 w-full">
        <p className="text-lg font-semibold text-primary">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="text-6xl font-bold">Lorem, ipsum.</p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. cumque
          obcaecati animi dolorum laborum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quibusdam, est?
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <Image
          src={"/svgs/hero.svg"}
          alt="hero svg"
          width={750}
          height={500}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
