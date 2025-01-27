import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiEnvelopeSimple, PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="px-20 py-8 h-screen flex items-center gap-16 justify-between relative overflow-hidden"
    >
      <div className="">
        <Image
          alt="profile"
          src={"/svgs/background.svg"}
          width={1920}
          height={1080}
          className="w-full h-full absolute -z-20 top-0 left-0 object-cover  shadow-fadeout "
        />
        <div className="w-full h-full absolute top-0 left-0 -z-10 fadeout-background" />
      </div>
      <div className="w-[30%] flex flex-col items-center">
        <div className="relative w-max">
          <div className="absolute w-[111%] h-[111%] bg-primary -z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full" />
          <div className="absolute w-[107%] h-[107%] bg-background -z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full" />
          <Image
            alt="profile"
            src={"/pics/test.jpeg"}
            width={300}
            height={300}
            className="w-52 h-52 rounded-full"
          />
        </div>
        <p className="text-2xl text-center mt-12">Lorem, ipsum.</p>

        <div className="mt-4 flex items-center justify-between gap-10">
          <a href={"mailto:j99k9902@gmail.com"}>
            <PiEnvelopeSimple className="text-5xl text-primary" />
          </a>
          <a href={"https://github.com/amm-9902"}>
            <PiGithubLogo className="text-5xl text-primary" />
          </a>
          <a href={""}>
            <PiLinkedinLogo className="text-5xl text-primary" />
          </a>
        </div>
      </div>
      <div className="w-[70%]">
        <p className="text-3xl font-bold mb-16">About</p>
        <div className="flex flex-col gap-10">
          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur</p>
          <p className="text-2xl text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            cum, quaerat dignissimos quod nostrum amet blanditiis quam, aut ea
            deserunt sed nisi veniam et molestias consectetur! Maxime ad, ullam
            error modi ratione autem, amet saepe dolore sunt ut sed eius!
          </p>
          <p className="text-2xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            cum, quaerat dignissimos quod nostrum amet blanditiis quam, aut ea
            deserunt sed nisi veniam et molestias consectetur! Maxime ad, ullam
            error modi ratione autem, amet saepe dolore sunt ut sed eius!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
