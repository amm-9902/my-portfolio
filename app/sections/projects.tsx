import React from "react";
import ProjectCardComponent from "../components/project-card";

const ProjectsSection = () => {
  return (
    <div
      id="projects"
      className="px-20 py-8 h-screen flex flex-col items-center gap-16 justify-center"
    >
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
