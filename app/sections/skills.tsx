import Image from "next/image";
import React from "react";

const skills = [
  { skill: "Lorem", pic: "/svgs/next.svg", progress: "50%" },
  { skill: "Lorem", pic: "/svgs/next.svg", progress: "50%" },
  { skill: "Lorem", pic: "/svgs/next.svg", progress: "50%" },
  { skill: "Lorem", pic: "/svgs/next.svg", progress: "50%" },
  { skill: "Lorem", pic: "/svgs/next.svg", progress: "50%" },
];

const SkillsSection = () => {
  return (
    <div
      id="skills"
      className="px-20 py-8 h-screen flex flex-col items-center justify-center gap-20"
    >
      <p className="text-3xl font-bold mb-16 -mt-20">Skills</p>
      <div className="flex items-center justify-center w-full flex-wrap gap-28">
        {skills.map((s, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 justify-center items-center"
          >
            <p>{s.skill}</p>
            <Image
              src={s.pic}
              alt="skill"
              width={200}
              height={200}
              className="w-44 h-44"
            />
            <div className="w-full h-1 bg-black rounded-full overflow-hidden">
              <div className={`w-[${s.progress}] bg-primary h-full`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
