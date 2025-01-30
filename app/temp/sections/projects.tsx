import React from "react";
import ProjectCardComponent from "../../components/project-card";
import Image from "next/image";

const ProjectsSection = () => {
  return (
    <div
      id="projects"
      className="px-20 py-8 h-screen flex flex-col items-center gap-16 justify-center relative"
    >
      <Image
        alt="profile"
        src={"/svgs/background/wall.svg"}
        width={1920}
        height={1080}
        className="w-full h-full absolute -z-20 top-0 left-0 object-cover  shadow-fadeout "
      />
      <div className="w-full h-full absolute top-0 left-0 -z-10 fadeout-background" />
      <p className="text-3xl font-bold mb-16">Projects</p>
      <div className="flex gap-12">
        <ProjectCardComponent />
        <ProjectCardComponent />
        <ProjectCardComponent />
        <ProjectCardComponent />
      </div>
    </div>
  );
};

export default ProjectsSection;
