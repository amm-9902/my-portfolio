import Image from "next/image";
import React from "react";

const ProjectCardComponent = () => {
  return (
    <div className="p-4 bg-background_light rounded flex flex-col gap-8 hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer">
      <Image
        src={"/pics/test.jpeg"}
        alt="project"
        width={300}
        height={154}
        className="w-80 h-40 rounded object-cover"
      />

      <p className="text-xl px-2">Lorem ipsum dolor sit amet.</p>
      <p className="text-gray-400 max-w-72 pb-4 px-2">
        Lorem ipsum, dolor sit amet cons ecte tur adipi elit.
      </p>
    </div>
  );
};

export default ProjectCardComponent;
