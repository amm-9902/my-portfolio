import Image from "next/image";
import React from "react";
import ProgressCircleComponent from "../../components/progress-circle";

const skills = [
  { skill: "HTML", pic: "/svgs/skills/html.svg", progress: 90, delay: 0 },
  { skill: "CSS", pic: "/svgs/skills/css.svg", progress: 90, delay: 0.1 },
  {
    skill: "Tailwind",
    pic: "/svgs/skills/tailwind.svg",
    progress: 70,
    delay: 0.2,
  },
  {
    skill: "Javascript",
    pic: "/svgs/skills/javascript.svg",
    progress: 80,
    delay: 0.3,
  },
  {
    skill: "Typescript",
    pic: "/svgs/skills/typescript.svg",
    progress: 60,
    delay: 0.5,
  },
  {
    skill: "React",
    pic: "/svgs/skills/react.svg",
    progress: 70,
    delay: 0.6,
  },
  {
    skill: "Redux",
    pic: "/svgs/skills/redux.svg",
    progress: 70,
    delay: 0.7,
  },
  {
    skill: "Next Js",
    pic: "/svgs/skills/nextjs.svg",
    progress: 60,
    delay: 0.8,
  },
];

const SkillsSection = () => {
  return (
    <div
      id="skills"
      className="px-20 py-8 h-screen flex flex-col items-center justify-center gap-20 relative"
    >
      <Image
        alt="profile"
        src={"/svgs/background/rand.svg"}
        width={1920}
        height={1080}
        className="w-full h-full absolute -z-20 top-0 left-0 object-cover shadow-fadeout object-bottom opacity-20"
      />

      <div className="w-full h-full absolute top-0 left-0 -z-10 fadeout-background" />
      <p className="text-3xl font-bold mb-16 -mt-20">Skills</p>
      <div className="flex items-center justify-center w-full flex-wrap gap-28">
        {skills.map((s, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 justify-center items-center"
          >
            <p>{s.skill}</p>
            <div className="relative">
              <ProgressCircleComponent
                size={120}
                delay={s.delay}
                percentage={s.progress}
              />
              <Image
                src={s.pic}
                alt="skill"
                width={200}
                height={200}
                className="w-20 h-20 absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
